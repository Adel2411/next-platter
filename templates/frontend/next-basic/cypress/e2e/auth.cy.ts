describe("Authentication Routes", () => {
  const baseUrl = "http://localhost:3000";

  context("Loading Pages", () => {
    const pages = [
      { path: "/register", heading: "Register" },
      { path: "/login", heading: "Login" },
      { path: "/verify-email", heading: "Verify Email" },
      { path: "/forgot-password", heading: "Forgot Password" },
      { path: "/reset-password", heading: "Reset Password" },
    ];

    pages.forEach(({ path, heading }) => {
      it(`should load the ${heading.toLowerCase()} page`, () => {
        cy.visit(`${baseUrl}${path}`);
        cy.get("h1").contains(heading);
      });
    });
  });

  context("Form Submissions", () => {
    const forms = [
      {
        path: "/register",
        fields: [
          { name: "fullName", value: "Test User" },
          { name: "username", value: "testuser" },
          { name: "email", value: "testuser@example.com" },
          { name: "password", value: "Password123" },
          { name: "confirmPassword", value: "Password123" },
        ],
        consoleLog: {
          fullName: "Test User",
          username: "testuser",
          email: "testuser@example.com",
          password: "Password123",
        },
      },
      {
        path: "/login",
        fields: [
          { name: "identifier", value: "Test User" },
          { name: "password", value: "Password123" },
        ],
        consoleLog: {
          identifier: "Test User",
          password: "Password123",
        },
      },
      {
        path: "/login",
        fields: [
          { name: "identifier", value: "testuser@example.com" },
          { name: "password", value: "Password123" },
        ],
        consoleLog: {
          identifier: "testuser@example.com",
          password: "Password123",
        },
      },
      {
        path: "/verify-email",
        fields: [{ name: "otp", value: "123456" }],
        consoleLog: { otp: "123456" },
      },
      {
        path: "/forgot-password",
        fields: [{ name: "email", value: "testuser@example.com" }],
        consoleLog: { email: "testuser@example.com" },
      },
      {
        path: "/reset-password",
        fields: [
          { name: "newPassword", value: "newPassword123" },
          { name: "confirmPassword", value: "newPassword123" },
        ],
        consoleLog: "Token not found",
      },
      {
        path: "/reset-password?token=abcd123456",
        fields: [
          { name: "newPassword", value: "newPassword123" },
          { name: "confirmPassword", value: "newPassword123" },
        ],
        consoleLog: {
          token: "abcd123456",
          newPassword: "newPassword123",
        },
      },
    ];

    forms.forEach(({ path, fields, consoleLog }) => {
      it(`should fill out and submit the form at ${path}`, () => {
        cy.visit(`${baseUrl}${path}`);

        cy.window().then((win) => {
          cy.spy(win.console, "log").as("consoleLog");
        });

        fields.forEach(({ name, value }) => {
          cy.get(`input[name="${name}"]`).type(value);
        });

        cy.get('button[type="submit"]').click();

        fields.forEach(({ name }) => {
          cy.get(`input[name="${name}"]`).should("have.value", "");
        });

        cy.get("@consoleLog").should("be.calledWith", consoleLog);
      });
    });
  });

  context("Navigation", () => {
    const navigationTests = [
      {
        from: "/register",
        to: "/login",
        linkText: "login",
      },
      {
        from: "/login",
        to: "/register",
        linkText: "register",
      },
      {
        from: "/register",
        to: "/verify-email",
        formFields: [
          { name: "fullName", value: "Test User" },
          { name: "username", value: "testuser" },
          { name: "email", value: "testuser@example.com" },
          { name: "password", value: "Password123" },
          { name: "confirmPassword", value: "Password123" },
        ],
      },
      {
        from: "/login",
        to: "/forgot-password",
        linkText: "Forgot your password?",
      },
      {
        from: "/forgot-password",
        to: "/reset-password",
        formFields: [{ name: "email", value: "testuser@example.com" }],
      },
      {
        from: "/reset-password?token=abcd123456",
        to: "/login",
        formFields: [
          { name: "newPassword", value: "newPassword123" },
          { name: "confirmPassword", value: "newPassword123" },
        ],
      },
    ];

    navigationTests.forEach(({ from, to, linkText, formFields }) => {
      it(`should navigate from ${from} to ${to}`, () => {
        cy.visit(`${baseUrl}${from}`);

        if (formFields) {
          formFields.forEach(({ name, value }) => {
            cy.get(`input[name="${name}"]`).type(value);
          });
          cy.get('button[type="submit"]').click();
        } else {
          cy.get("a").contains(linkText).click();
        }

        cy.url().should("include", to);
      });
    });
  });

  context("Middleware Redirection", () => {
    it("should redirect to the protected page when visiting the login page with token in the cookies", () => {
      cy.setCookie("token", "abcd123456");
      cy.visit(`${baseUrl}/login`);
      cy.url().should("include", "/protected");
    });

    it("should redirect to the home page when visiting the protected route without token in the cookies", () => {
      cy.clearCookie("token");
      cy.visit(`${baseUrl}/protected`);
      cy.url().should("include", "/");
    });
  });
});
