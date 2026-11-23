# International Education Group (IEG)

> Connecting people. Expanding possibilities. From finding the right program to opening a new academic pathway, our brands bring every part of the education journey closer together.

---

## Overview

**International Education Group (IEG)** is a multi-brand educational ecosystem designed to streamline the student journey from initial exploration to university enrollment. Through five specialized brands, IEG bridges prospective students, academic institutions, and educational partners worldwide.

### The Five Brands
- **IAIC (Student Guidance):** Personalized counseling and end-to-end guidance for students pursuing global education opportunities.
- **UniSeek (Education Discovery):** Intelligent search and exploration platform helping students discover programs and universities tailored to their goals.
- **StudyPick (Education Marketplace):** Dynamic marketplace connecting educational institutions, recruiters, and learners.
- **AdmissionPortal (Application Technology):** Streamlined digital application workflows that reduce friction from interest to enrollment.
- **University Road (Academic Pathways):** Direct academic foundation and articulation pathways into accredited international institutions.

---

## Core Capabilities & Features

### 1. Public Portal
- Responsive showcase highlighting IEG's mission, portfolio brands, methodologies, and student journey.
- High-contrast, accessible typography and styling based on custom design tokens.

### 2. Connect Inquiry Form
- Interactive multi-field submission form for prospective partners, institutions, and students.
- Client-side validation via Zod schemas and React Hook Form.
- Direct transition to WhatsApp for continued communications.
- Reliable submission pipeline logging inquiries into MongoDB.

### 3. Administrative Portal (`/admin`)
- Secure, unindexed management dashboard (`<meta name="robots" content="noindex" />`).
- Header-based key authentication (`x-admin-key`) validated using timing-safe cryptographic comparisons.
- Searchable inquiry records across applicant name, email, organization, and interest categories with ReDoS-safe regex escaping.
- Full pagination support (page size, total counts, previous/next controls).
- Expandable inquiry details with preserved formatting for applicant goals.
- Responsive design featuring desktop data tables and mobile-friendly stacked cards.

---

## Technology Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4, React Router, React Hook Form, Zod, React Icons.
- **Backend:** Node.js, Express, MongoDB with Mongoose, Zod validation, CORS, Node Crypto.
- **Deployment Ready:** Configured for local development as well as serverless cloud environments (such as Vercel) with connection caching and auto-reconnect.

---

## Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- pnpm (or npm / yarn)
- A running MongoDB instance or MongoDB Atlas cluster

---

### Backend Setup

1. Navigate to the backend directory and configure environment variables in a `.env` file:
   - `PORT`: Server port (e.g., `5000`)
   - `MONGODB_URI`: Your MongoDB connection string
   - `CLIENT_URL`: Allowed frontend origin (e.g., `http://localhost:5173`)
   - `ADMIN_API_KEY`: Secret key used to access administrative endpoints

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the backend development server:
   ```bash
   pnpm start
   ```

---

### Frontend Setup

1. Navigate to the frontend directory and configure environment variables in a `.env` file:
   - `VITE_API_URL`: Backend API base URL (e.g., `http://localhost:5000`)

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Build for production:
   ```bash
   pnpm build
   ```

---

## API Reference

### Public Inquiry Submission
- **Method:** `POST`
- **Endpoint:** `/api/v1/inquiry`
- **Body:**
  - `name`: String (Required, max 100 chars)
  - `email`: Valid email string (Required)
  - `organization`: String (Optional, max 150 chars)
  - `interestedIn`: String (Required, e.g., "Student guidance (IAIC)")
  - `goals`: String (Required, max 2000 chars)
- **Response:** `201 Created` with inquiry ID.

### Admin Inquiries List
- **Method:** `GET`
- **Endpoint:** `/api/v1/inquiry`
- **Headers:** `x-admin-key: <ADMIN_API_KEY>`
- **Query Parameters:**
  - `page`: Page number (Default: `1`)
  - `limit`: Records per page (Default: `20`, Max: `100`)
  - `search`: Filter string matching name, email, organization, or topic
- **Response:** `200 OK` with data array and pagination metadata (`page`, `limit`, `total`, `totalPages`).

---

## Security & Best Practices

- **Constant-Time Key Comparison:** Uses `crypto.timingSafeEqual` to protect admin endpoints against timing attacks.
- **ReDoS Protection:** Sanitizes all regex search inputs to prevent Regular Expression Denial of Service vulnerabilities.
- **Serverless Database Caching:** Uses cached connection pools to prevent connection exhaustion and buffering timeouts in serverless execution environments.
- **Input Sanitization & Plain Text Rendering:** Renders user-supplied inquiries as sanitized text avoiding arbitrary HTML injection.

