# Sentinel - Task Management API

A backend-only REST API for managing user-owned tasks, built with Node.js, Express, and MongoDB.

This project focuses on **authentication correctness**, **clear authorization boundaries**, and **clean backend architecture**, rather than frontend concerns.

---

## Features

- User registration and login with JWT authentication  
- Email verification as part of the signup lifecycle  
- Protected routes using authentication middleware  
- Full CRUD operations on user-owned tasks  
- Input validation and centralized error handling  
- Modular, scalable project structure  

---

## Authentication & Verification Flow

1. A user registers with an email and password  
2. A verification email is generated and sent via SMTP  
3. The user must verify their email before logging in  
4. Only verified users can obtain a JWT and access protected routes  

This ensures:
- Fake or unverified accounts cannot access the system  
- Authentication logic reflects real-world backend requirements  

---

## Authorization Model

- All task routes are protected using JWT middleware  
- Tasks are strictly scoped to their owner  
- Attempts to access another user’s task return **404**, not **403**, to avoid data leakage  

Authorization checks are enforced **at the database query level**, not after data retrieval.

---

## Email Handling

Email verification is implemented using SMTP and tested with **Mailtrap** during development.

Mailtrap captures emails in a testing inbox instead of delivering them to real email addresses.  
This keeps the email layer realistic while avoiding external delivery issues.

The email logic is **provider-agnostic** and can be swapped with services like Brevo, SMTP2GO, or SendGrid in production without code changes.

---

## Validation & Error Handling

- Request payloads are validated using **Joi**  
- Invalid input is rejected before reaching business logic  
- Errors are handled centrally with consistent response shapes  

This keeps controllers clean and prevents silent failures.

---

## Project Structure

`src/` <br><br>
`  ├── config/`         # Database configuration <br><br>
`  ├── middlewares/`    # Auth, validation, error handling <br><br>
`  ├── models/`         # Mongoose models <br><br>
`  ├── modules/`        # Feature-based modules (auth, tasks) <br><br>
`  ├── utils/`          # Shared utilities (email, errors) <br><br>
`  ├── index.js`        # Application entry point <br>

Each module encapsulates its own routes, controller, service, and validation logic.

---

## Future Improvements

If extended further, this project could include:
- Refresh tokens for long-lived sessions  
- Rate limiting and request throttling  
- Pagination for task lists  
- Background job processing for emails  

These were intentionally left out to keep the project focused and maintainable.

---

## Why This Project Exists

This project was built to demonstrate:
- A clean backend architecture  
- Intentional authentication and authorization design  
- Real-world trade-offs in API development  

It prioritizes **correctness and clarity** over unnecessary complexity.
