# Real-Time Cricket Updates App
## Project Overview
The Real-Time Cricket Updates App is a web application that provides users with the latest cricket match details, including live scores, match status, teams, and venue information. The data is fetched from an external API and is automatically refreshed every 5 minutes, ensuring users receive up-to-date information without needing to refresh the page manually.

## Here is Demo Link
[Vercel Live](https://real-time-cricket-updates-using-react-js.vercel.app/)
## Summary
This app was developed as a part of a learning project to demonstrate skills in React.js, API integration, state management, and real-time data handling. The app is responsive and includes features like live search, dynamic updates, and an intuitive user interface.

## Tools and Technologies Used
Frontend Framework: React.js
Styling: Tailwind CSS
State Management: React Context API
HTTP Client: Fetch API
Environment Variables Management: .env file
Version Control: Git & GitHub
## Concepts Covered
React Functional Components: All UI elements are built using React functional components.
Hooks: Utilized useState, useEffect, and useContext to manage state and side effects.
Environment Variables: Managed API keys and URLs using environment variables for security.
API Integration: Connected with the Cricbuzz API to fetch live cricket updates.
Dynamic Rendering: Used conditional rendering and mapping to dynamically display match data.
Automatic Data Refresh: Implemented automatic data refresh using setInterval inside useEffect.
Responsive Design: Built with Tailwind CSS for mobile-friendly and responsive design.
## Dependencies
react: Core library for building user interfaces.
react-dom: Provides DOM-specific methods for React.
react-router-dom: Enables dynamic routing in the app.
tailwindcss: Utility-first CSS framework for styling.
dotenv: (for local development) To manage environment variables.
## Features
Live Cricket Updates: Automatically fetches and displays live cricket match details.
Search Filter: Allows users to filter matches by team name or match description.
Responsive Design: The app is fully responsive, providing a seamless experience across all devices.
Auto Refresh: The data refreshes automatically every 5 minutes.
Easy Navigation: Links to detailed match pages for in-depth information.
Environmentally Secure: Sensitive information like API keys is managed securely via environment variables.
