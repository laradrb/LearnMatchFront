## Index 📑  
- [Project Description](#description-)  
- [Features](#features-)  
- [Technologies and Libraries Used](#technologies-and-libraries-used-)  
- [Installation](#installation-)  

## Description 📖 

Full-stack web application called LearnMatch which aims to connect students with tutors based on their specific needs and expertise. The system allows students to manage their profiles, specify their learning needs, get matched with suitable tutors and schedule online tutoring sessions. In addition, it will provide a chat functionality to continue communication after the session and clarify queries or reschedule classes or even interact with other students.

## Features 📋

- **Registration and Login:** Students can create an account or log in to access to their personalized features.
- **Courses:** Students can search for courses of their degree.
- **Level:** Students can select which level they want acording to their needs and knowlegde.
- **Time:** Students can select which hour suits them most. 
- **Calendar:** Students can select day and time of their online tutoring session.


## Technologies and Libraries Used 🛠️

- **React:** Main library for building the user interface.
- **Axios:** To make HTTP requests to the Django backend.
- **React Router:** To handle navigation within the application.
- **Styled Components:** For design and styling.

## Installation ⚙️

Follow these steps to set up the frontend development environment:

1. **Clone the repository:**

   Open your terminal 
   git clone https://github.com/laradrb/LearnMatchFront

2. **Install the dependencies:**


    `npm install`

    `npm install react-router-dom@6`


3. **Start the application:**


    `npm run dev`

   The application will be available at http://localhost:5173/


## Test Configuration 🧪

To set up the development environment with Vite and Vitest, follow the steps below:

**run tests with Vitest:**

  `npm run test`


## Backend Connection (Django)

The React frontend communicates with a backend developed in **Django**. Django handles user authentication, the logic for the destination search form, and manages data related to destinations and itineraries. The connection is made through an API exposed by Django and consumed by the frontend using Axios. **Axios**.