# Anna University GPA & CGPA Calculator

A modern, interactive GPA and CGPA calculator tailored for Anna University (R2021 Regulations). Built with React, Vite, Tailwind CSS, and Framer Motion.

## Features
-   **GPA Calculator**: Calculate Semester GPA with dynamic subject inputs.
-   **CGPA Calculator**: Calculate Cumulative GPA across semesters.
-   **Subject Code Lookup**: Auto-fill credits and names using R2021 subject codes (e.g., `HS3151`).
-   **Credit Calculator**: Helper to sum credits for CGPA calculation if unknown.
-   **Premium UI**: Glassmorphism design with dark mode and smooth animations.

## Installation

First, clone the repository:

```bash
git clone https://github.com/yasirhameed786/CGPA-GPA-CALCULATOR-FOR-ANNA-UNIVERSITY.git
cd CGPA-GPA-CALCULATOR-FOR-ANNA-UNIVERSITY
```

### Option 1: Without Docker (Local Development)

Ensure you have Node.js installed.

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Access the app at [http://localhost:5173](http://localhost:5173).

3.  **Build for Production**:
    ```bash
    npm run build
    ```

### Option 2: With Docker

You can run the application in a lightweight container using Docker.

1.  **Build the Docker Image**:
    ```bash
    docker build -t gpa-calculator .
    ```

2.  **Run the Container**:
    ```bash
    docker run -p 8080:80 gpa-calculator
    ```
    Access the app at [http://localhost:8080](http://localhost:8080).

## Tech Stack
-   **Frontend**: React 19, Vite
-   **Styling**: Tailwind CSS v3, Framer Motion
-   **Icons**: Lucide React
-   **Deployment**: Vercel / Docker
