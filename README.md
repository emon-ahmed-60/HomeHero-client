## HomeHero – Local Household Service Finder
A modern platform to find and book fast and reliable household services in your local area. Built with a user-friendly design and effective search functionality.

## Project Overview

HomeHero is a platform where users can find and book various household services (e.g. electrician, plumber, cleaner, etc.) according to their needs.It allows service providers to list their services and connect with users. It is an ideal project to showcase full-stack web development skills.


## ✨ Key Features

* **User Authentication (JWT):**  
  Secure registration and login system using JSON Web Tokens (JWT) to protect user data and manage sessions.

* **User Profile Management:**  
  Registered users can easily update their personal details, such as name and profile picture — ensuring a personalized experience across the platform.

* **Service Management System:**  
  Service providers can add, update, or delete their listings, including service images, descriptions, and pricing details.

* **Booking & Appointment System:**  
  Users can book services, select their preferred date and time, and view booking history directly from their dashboard.

* **Rating & Review System:**
Users can rate and write reviews for booked services. Each review is stored under the specific service as an array of review objects, and the top-rated services are dynamically displayed on the homepage.

## Tech Stack

- **Frontend** : React.js, Next.js
- **Backend** : Node.js, Express.js
- **Database** : MongoDB
- **Authentication** : Firebase
- **Deployment** : Vercel 

## Dependencies

* `axios`
* `react-router`
* `react-toastify`
* `swiper`
* `tailwindcss`
* `react-icons`
* `firebase`

## Installation

Clone the repo and install dependencies

```bash
  git clone https://github.com/emon-ahmed-60/HomeHero-client.git
  cd HomeHero-client
  npm install
```

Set up environment variables by creating a .env file in the root directory:

```bash
  DATABASE_URL=your_database_url
  Firebase_SECRET=your_firebase_secret
```

Run the application:

```bash
  npm run dev
```

## 🌐 Live URL
https://vocal-griffin-f90b6c.netlify.app    

