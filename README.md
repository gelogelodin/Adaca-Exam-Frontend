# Mini Task Tracker (Frontend)

## A simple task tracker frontend built with React, TypeScript, MobX, and Semantic UI. This app consumes a backend API to manage a list of tasks (add, update, and delete).

### Before running this app, you need to clone and run the backend server:

```bash
git clone https://github.com/gelogelodin/Adaca-Exam-Backend.git  
cd Adaca-Exam-Backend  
npm install  
npm run dev
```

### The backend will run by default on http://localhost:3001.

## To set up and run this frontend project:

```bash
npm install  
npm run start
```

### The frontend will run on http://localhost:5173.

This project uses the following tech stack: React with TypeScript, MobX for state management, Semantic UI React for UI components, Axios for API calls, Express for backend, and Jest with Supertest for testing.

It supports the following features: fetch and display tasks, add new tasks, toggle task completion, delete tasks, and filter tasks (all, completed, incomplete).

Folder structure:

src/  
├── api/            API helper functions  
├── components/     React components (e.g., TaskList)  
├── stores/         MobX stores  
└── App.tsx         Main application
