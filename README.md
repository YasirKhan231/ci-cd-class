
# Fillflow Backend – SleepyOwl

Backend service for the SleepyOwl Fillflow project. Handles **authentication, order processing, inventory management, B2B orders, and API integrations** with external services.  
Built with **Node.js, Express, and MongoDB**, this backend powers the frontend dashboard for SleepyOwl operations.

---

## Features

- **User Authentication** – JWT-based authentication system
- **Amazon Order Upload & Management** – Upload and process Amazon orders via CSV
- **Inventory Management APIs** – CRUD APIs for stock, SKUs, and products
- **Procurement, Production, Storage APIs** – End-to-end business workflows
- **External Integrations** – EasyEcom and Whitebooks API integrations
- **PDF & CSV Generation** – Invoices, reports, and data exports
- **Role Management** – Admin & Super Admin role support
- **B2B Order Management** – Complete B2B order processing

---

## Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **MongoDB** – Database
- **Mongoose** – ODM for MongoDB
- **JWT** – Authentication
- **Multer** – File uploads
- **Axios** – HTTP requests
- **PDFKit** – PDF generation
- **bcryptjs** – Password hashing
- **CORS** – Cross-origin resource sharing

## Project Structure

```
fillflow-backend-sleepyowl/
│── config/ # Configuration files
│── controllers/ # Express route controllers
│── middlewares/ # Auth, error handling middlewares
│── models/ # Mongoose models
│── routes/ # API route definitions
│── services/ # External API services, helper services
│── AddPriceToInvoice.js
│── bin.js
│── CreateProductsFromExcel.js
│── CreateSuppliersFromCSV.js
│── index.js # App entry point
│── package.json
│── UpdateDelLocationMapping.js
│── UpdateProductFromExcel.js
│── UpdateProductsFromCsv.js
│── .env # Environment variables
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or cloud)
- npm or yarn
- Git

### Clone the repository

```bash
git clone https://github.com/fillfow/fillflow-backend-sleepyowl.git
cd fillflow-backend-sleepyowl
npm install
npm run start
```

## Open in browser

Visit: http://localhost:5000

## Environment Setup

Create a .env file in the root directory with the following variables:

## Database

MONGO_URL=your_mongodb_connection_string

## JWT

JWT_SECRET_KEY=your_jwt_secret

## EasyEcom Integration

EASYECOM_BASE_URL=your_easycom_base_url
EASYECOM_EMAIL=your_easycom_email
EASYECOM_PASSWORD=your_easycom_password
EASYECOM_LOCATION_KEY=your_easycom_location_key

## Whitebooks Integration

WHITEBOOKS_BASE_URL=your_whitebooks_base_url
WHITEBOOKS_CLIENT_ID=your_whitebooks_client_id
WHITEBOOKS_CLIENT_SECRET=your_whitebooks_client_secret
WHITEBOOKS_USERNAME=your_whitebooks_username
WHITEBOOKS_PASSWORD=your_whitebooks_password

## Seller Information

SELLER_NAME=your_seller_name
SELLER_ADDRESS=your_seller_address
SELLER_CITY=your_seller_city
SELLER_PINCODE=your_seller_pincode
SELLER_STATECODE=your_seller_statecode
