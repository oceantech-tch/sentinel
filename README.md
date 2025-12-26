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
