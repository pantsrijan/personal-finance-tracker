# Personal Finance Tracker

A web application for tracking personal income and expenses, organizing
transactions by category, and viewing monthly spending summaries.

Built for CS 3311: Secure Client-Server Web Development.

## Features
- User signup and login (each user sees only their own data)
- Add, edit, and delete income and expense transactions
- Categories and date/category filters
- Monthly summary and spending chart (Chart.js)

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: PHP
- Database: MySQL
- Chart library: Chart.js

## Status
Client-side pages complete (login, signup, dashboard, transactions).
PHP/MySQL backend in progress.

## Planned Security Measures
- Password hashing with `password_hash()`
- Secure session handling
- Prepared SQL statements
- CSRF tokens on all forms
- Server-side checks so users can only access their own records

## Author
Srijan Pant