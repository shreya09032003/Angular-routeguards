# Authentication and Navigation Guards in Angular

**Description:**

This Angular project demonstrates how to implement both **Authentication Guards** (`CanActivate`) and **Deactivation Guards** (`CanDeactivate`) to protect routes and ensure that users are either authenticated or confirm navigation actions.

## About

This project demonstrates how to create **route guards** in Angular:
- **`CanActivate` Guard**: Ensures that the user is logged in by checking the session storage (`isLoggedIn`). If not logged in, the user is redirected to the login page.
- **`CanDeactivate` Guard**: Prevents users from navigating away from a page (such as a form with unsaved changes) without prompting them first.



