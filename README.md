# Car2Drvr 🚗

### Live Demo

The app is deployed and available at: [https://car2drvr.web.app](https://car2drvr.web.app)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Description

This app was built for the Finhacks hackathon at Northeastern in February 2025. It is designed to help users find the perfect car with the right pricing for them. Car2Drvr provides a seamless experience for searching, comparing, and discovering cars tailored to individual needs and budgets.

## Features

- Search and filter cars by make, model, price, and more
- Personalized recommendations based on user preferences
- User authentication and profile management
- Responsive UI for desktop and mobile
- Firebase integration for real-time data and hosting

## Tech Stack

- React (Vite)
- Firebase (Firestore, Hosting, Auth)
- SCSS/CSS Modules
- PrimeReact UI library
- JavaScript/TypeScript

## Installation

1. Clone the repository:

```sh
git clone https://github.com/somshrivastava/car2drvr.git
cd car2drvr
```

2. Install dependencies for frontend:

```sh
cd frontend
npm install
```

3. Install dependencies for backend functions:

```sh
cd ../backend/functions
npm install
```

4. Set up Firebase:

- Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
- Add your Firebase config to `frontend/src/firebase.js`

5. Run the app locally:

```sh
cd ../../frontend
npm run dev
```

## Usage

- Search for cars and filter results
- Get personalized recommendations
- Manage your profile and preferences

**Example:**

```sh
npm run dev
# Open http://localhost:5173 in your browser
```

## License

This project is licensed under the MIT License.
