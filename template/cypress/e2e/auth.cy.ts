describe("Authentication Routes Navigation", () => {
  const baseUrl = "http://localhost:3000"; // Replace with your application's base URL

  it("should load the login page", () => {
    cy.visit(`${baseUrl}/login`);
    cy.contains("Login"); // Adjust according to your login page content
  });

  it("should load the register page", () => {
    cy.visit(`${baseUrl}/register`);
    cy.contains("Register"); // Adjust according to your signup page content
  });

  it("should load the verify email page", () => {
    cy.visit(`${baseUrl}/verify-email`);
    cy.contains("Verify Email"); // Adjust according to your verify email page content
  });

  it("should load the forgot password page", () => {
    cy.visit(`${baseUrl}/forgot-password`);
    cy.contains("Send Reset Password Email"); // Adjust according to your forgot password page content
  });

  it("should load the reset password page", () => {
    cy.visit(`${baseUrl}/reset-password`);
    cy.contains("Change Password"); // Adjust according to your reset password page content
  });

  it("should fill out and submit the register form", () => {
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
    cy.get("@consoleLog").should("be.calledWith", "values", {
      fullName: "Test User",
      username: "testuser",
      email: "testuser@example.com",
      password: "Password123",
      confirmPassword: "Password123",
    });
  });
});
