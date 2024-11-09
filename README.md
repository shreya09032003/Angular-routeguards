# Authentication and Navigation Guards in Angular

**Description:**

This Angular project demonstrates how to implement both **Authentication Guards** (`CanActivate`) and **Deactivation Guards** (`CanDeactivate`) to protect routes and ensure that users are either authenticated or confirm navigation actions. This project includes two key guards:
1. `CanActivate`: Protects routes based on the login status stored in session storage.
2. `CanDeactivate`: Prevents navigation away from pages where the user has unsaved changes, by prompting a confirmation message before navigating.

## About

This project demonstrates how to create **route guards** in Angular:
- **`CanActivate` Guard**: Ensures that the user is logged in by checking the session storage (`isLoggedIn`). If not logged in, the user is redirected to the login page.
- **`CanDeactivate` Guard**: Prevents users from navigating away from a page (such as a form with unsaved changes) without prompting them first.

These guards are useful for improving security and preventing data loss during navigation.

---

## Features

- **Route Protection with `CanActivate`**: Ensures that users can only access specific routes if they are authenticated.
- **Navigation Confirmation with `CanDeactivate`**: Prompts users to confirm if they wish to leave a page with unsaved changes.
- **Session Storage**: Login status is stored in session storage (`isLoggedIn`).
- **Redirection and Alerts**: Unauthorized users are redirected to the login page with an alert message.

