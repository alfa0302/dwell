# Dwell
  
<img width="1896" height="861" alt="image" src="https://github.com/user-attachments/assets/f09291bb-0722-4bf9-ba95-7ea7912d4935" />  

Dwell is a full-stack real estate platform built using the MERN stack. It allows users to buy, sell, and rent properties, create and manage listings, and communicate with other users through an integrated messaging system.

## Features

* User authentication using JWT and cookies
* Authorization with protected routes
* Create, edit, and delete property listings
* Upload images for property listings
* Browse listings for buying, selling, and renting
* Search and filter properties
* Save favorite listings
* User profile system
* Real-time messaging between users using Socket.IO

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JSON Web Tokens (JWT)
* HTTP-only cookies

### Real-time Communication

* Socket.IO

## Overview

Dwell is designed to simplify real estate interactions by providing a single platform for property discovery and communication between users. Buyers and renters can explore listings, while property owners can publish and manage their listings efficiently.

The platform also includes direct messaging to enable communication between interested users.

## Getting Started

### Prerequisites

* Node.js
* npm
* MongoDB (local or Atlas)

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/dwell.git
cd dwell
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file and configure the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

## Running the Project

Start the development server:

```bash
npm run dev
```

## Project Structure

```
dwell/
├── api/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
├── client/
│   ├── src/
│   ├── pages/
│   ├── components/
└── package.json
```

## Future Improvements

* Advanced filtering and sorting
* Google Maps integration for property locations
* Notification system
* Recommendation system
* Mobile application

