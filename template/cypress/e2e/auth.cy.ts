describe("Authentication Routes", () => {
  const baseUrl = "http://localhost:3000"; // Replace with your application's base URL

  describe("Authentication Routes Loading", () => {
    it("should load the register page", () => {
      cy.visit(`${baseUrl}/register`);
      cy.get("h1").contains("Register"); // Ensure the text is within an h1 element
    });

    it("should load the login page", () => {
      cy.visit(`${baseUrl}/login`);
      cy.get("h1").contains("Login"); // Ensure the text is within an h1 element
    });

    it("should load the verify email page", () => {
      cy.visit(`${baseUrl}/verify-email`);
      cy.get("h1").contains("Verify Email"); // Ensure the text is within an h1 element
    });

    it("should load the forgot password page", () => {
      cy.visit(`${baseUrl}/forgot-password`);
      cy.get("h1").contains("Forgot Password"); // Ensure the text is within an h1 element
    });

    it("should load the reset password page", () => {
      cy.visit(`${baseUrl}/reset-password`);
      cy.get("h1").contains("Reset Password"); // Ensure the text is within an h1 element
    });
  });

  describe("Authentication Forms Submission", () => {
    it("should fill out and submit the register form and print values filled in the console", () => {
      cy.visit(`${baseUrl}/register`);

      // Spy on console.log before interacting with the form
      cy.window().then((win) => {
        cy.spy(win.console, "log").as("consoleLog");
      });

      // Fill out the form
      cy.get('input[name="fullName"]').type("Test User");
      cy.get('input[name="username"]').type("testuser");
      cy.get('input[name="email"]').type("testuser@example.com");
      cy.get('input[name="password"]').type("Password123");
      cy.get('input[name="confirmPassword"]').type("Password123");

      // Submit the form
      cy.get('button[type="submit"]').click();

      // Optionally, check if the form fields are reset after submission
      cy.get('input[name="fullName"]').should("have.value", "");
      cy.get('input[name="username"]').should("have.value", "");
      cy.get('input[name="email"]').should("have.value", "");
      cy.get('input[name="password"]').should("have.value", "");
      cy.get('input[name="confirmPassword"]').should("have.value", "");

      // Assert that the console.log was called with the expected values
      cy.get("@consoleLog").should("be.calledWith", {
        fullName: "Test User",
        username: "testuser",
        email: "testuser@example.com",
        password: "Password123",
        // confirmPassword: "Password123",
      });
    });

    describe("different inputs type for identifier field of login page", () => {
      it("should fill out and submit the login form with identifier=usename and print values filled in the console", () => {
        cy.visit(`${baseUrl}/login`);

        // Spy on console.log before interacting with the form
        cy.window().then((win) => {
          cy.spy(win.console, "log").as("consoleLog");
        });

        // Fill out the form
        cy.get('input[name="identifier"]').type("Test User");
        cy.get('input[name="password"]').type("Password123");

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Optionally, check if the form fields are reset after submission
        cy.get('input[name="identifier"]').should("have.value", "");
        cy.get('input[name="password"]').should("have.value", "");

        // Assert that the console.log was called with the expected values
        cy.get("@consoleLog").should("be.calledWith", {
          identifier: "Test User",
          password: "Password123",
        });
      });

      it("should fill out and submit the login form with identifier=email and print values filled in the console", () => {
        cy.visit(`${baseUrl}/login`);

        // Spy on console.log before interacting with the form
        cy.window().then((win) => {
          cy.spy(win.console, "log").as("consoleLog");
        });

        // Fill out the form
        cy.get('input[name="identifier"]').type("testuser@example.com");
        cy.get('input[name="password"]').type("Password123");

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Optionally, check if the form fields are reset after submission
        cy.get('input[name="identifier"]').should("have.value", "");
        cy.get('input[name="password"]').should("have.value", "");

        // Assert that the console.log was called with the expected values
        cy.get("@consoleLog").should("be.calledWith", {
          identifier: "testuser@example.com",
          password: "Password123",
        });
      });
    });

    it("should fill out and submit the verify email form and print values filled in the console", () => {
      cy.visit(`${baseUrl}/verify-email`);

      // Spy on console.log before interacting with the form
      cy.window().then((win) => {
        cy.spy(win.console, "log").as("consoleLog");
      });

      // Fill out the form
      cy.get('input[name="otp"]').type("123456");

      // Submit the form
      cy.get('button[type="submit"]').click();

      // Optionally, check if the form fields are reset after submission
      cy.get('input[name="otp"]').should("have.value", "");

      // Assert that the console.log was called with the expected values
      cy.get("@consoleLog").should("be.calledWith", {
        otp: "123456",
      });
    });

    it("should fill out and submit the forgot password form and print values filled in the console", () => {
      cy.visit(`${baseUrl}/forgot-password`);

      // Spy on console.log before interacting with the form
      cy.window().then((win) => {
        cy.spy(win.console, "log").as("consoleLog");
      });

      // Fill out the form
      cy.get('input[name="email"]').type("testuser@example.com");

      // Submit the form
      cy.get('button[type="submit"]').click();

      // Optionally, check if the form fields are reset after submission
      cy.get('input[name="email"]').should("have.value", "");

      // Assert that the console.log was called with the expected values
      cy.get("@consoleLog").should("be.calledWith", {
        email: "testuser@example.com",
      });
    });

    describe("different urls for reset-password page", () => {
      it("should fill out and submit the reset password form and print token not found in the console", () => {
        cy.visit(`${baseUrl}/reset-password`);

        // Spy on console.log before interacting with the form
        cy.window().then((win) => {
          cy.spy(win.console, "log").as("consoleLog");
        });

        // Fill out the form
        cy.get('input[name="password"]').type("Password123");
        cy.get('input[name="confirmPassword"]').type("Password123");

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Optionally, check if the form fields are reset after submission
        cy.get('input[name="password"]').should("have.value", "");
        cy.get('input[name="confirmPassword"]').should("have.value", "");

        // Assert that the console.log was called with the expected values
        cy.get("@consoleLog").should("be.calledWith", "Token not found");
      });

      it("should fill out and submit the reset password form and print values in the console", () => {
        cy.visit(`${baseUrl}/reset-password?token=abcd123456`);

        // Spy on console.log before interacting with the form
        cy.window().then((win) => {
          cy.spy(win.console, "log").as("consoleLog");
        });

        // Fill out the form
        cy.get('input[name="password"]').type("Password123");
        cy.get('input[name="confirmPassword"]').type("Password123");

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Optionally, check if the form fields are reset after submission
        cy.get('input[name="password"]').should("have.value", "");
        cy.get('input[name="confirmPassword"]').should("have.value", "");

        // Assert that the console.log was called with the expected values
        cy.get("@consoleLog").should("be.calledWith", {
          token: "abcd123456",
          password: "Password123",
        });
      });
    });
  });

  describe.only("Authentication Pages Navigation", () => {
    it("should navigate to the login page from the register page", () => {
      // Visit the register page
      cy.visit(`${baseUrl}/register`);

      // Click the login link
      cy.get("a").contains("login").click();

      // Assert that the URL includes /login
      cy.url().should("include", "/login");
    });

    it("should navigate to the register page from the login page", () => {
      // Visit the login page
      cy.visit(`${baseUrl}/login`);

      // Click the register link
      cy.get("a").contains("register").click();

      // Assert that the URL includes /register
      cy.url().should("include", "/register");
    });

    it("should navigate to the verify email page from the register page", () => {
      // Visit the register page
      cy.visit(`${baseUrl}/register`);

      // Fill out the form
      cy.get('input[name="fullName"]').type("Test User");
      cy.get('input[name="username"]').type("testuser");
      cy.get('input[name="email"]').type("testuser@example.com");
      cy.get('input[name="password"]').type("Password123");
      cy.get('input[name="confirmPassword"]').type("Password123");

      // Submit the form
      cy.get('button[type="submit"]').click();

      // Assert that the URL includes /verify-email
      cy.url().should("include", "/verify-email");
    });

    it("should navigate to the forgot password page from the login page", () => {
      // Visit the login page
      cy.visit(`${baseUrl}/login`);

      // Click the forgot password link
      cy.get("a").contains("Forgot your password?").click();

      // Assert that the URL includes /forgot-password
      cy.url().should("include", "/forgot-password");
    });

    it("should navigate to the reset password page from the forgot password page submission", () => {
      // Visit the forgot password page
      cy.visit(`${baseUrl}/forgot-password`);

      // Fill out the form
      cy.get('input[name="email"]').type("testuser@example.com");

      // Submit the form
      cy.get('button[type="submit"]').click();

      // Assert that the URL includes /reset-password
      cy.url().should("include", "/reset-password");
    });

    it("should navigate to the login page from the reset password page", () => {
      // Visit the reset password page
      cy.visit(`${baseUrl}/reset-password?token=abcd123456`);

      // Fill out the form
      cy.get('input[name="password"]').type("newPassword123");
      cy.get('input[name="confirmPassword"]').type("newPassword123");

      // Submit the form
      cy.get('button[type="submit"]').click();

      // Assert that the URL includes /login
      cy.url().should("include", "/login");
    });
  });
});
