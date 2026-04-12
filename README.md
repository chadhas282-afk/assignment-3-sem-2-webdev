
---

# 🚀 Student Score Tracker

A modern, responsive React application for managing student names and scores with real-time status updates (Pass/Fail) and an interactive UI.

## ✨ Features

* **Dynamic Data Management**: Add new students and update existing scores on the fly.
* **Automatic Status Calculation**: Visual indicators automatically switch between `PASS` (Green) and `FAIL` (Red) based on a threshold of 40.
* **Modern UI/UX**: Built with a dark-mode aesthetic featuring:
    * Neon cyan accents and emerald/rose status glows.
    * Glassmorphism-inspired components.
    * Fully responsive table layouts.
* **Input Validation**: Built-in HTML5 validation for names and score ranges (0–100).

---

## 🛠️ Components

### 1. `Header.jsx`
Displays the application title with a high-contrast, uppercase typography style and a subtle text-shadow glow effect.

### 2. `AddStudentForm.jsx`
A horizontal form that allows users to input a student's name and score. It utilizes React's `useState` to manage local input before lifting the state up to the main application.

### 3. `StudentTable.jsx`
The structural container for the data grid. It handles the mapping of the student list and defines the table headers (`Name`, `Score`, `Status`, and `Update`).

### 4. `StudentRow.jsx`
The functional heart of the table. 
* **Logic**: Determines `isPass` via `student.score >= 40`.
* **Interactivity**: Includes a controlled number input that triggers the `onUpdate` callback to modify scores in the global state.

---

## 💻 Tech Stack

* **Framework**: [React.js](https://reactjs.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons/Theme**: Custom CSS-in-JS and Tailwind utility classes.

---

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone [your-repo-link]
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Ensure Tailwind is configured**: 
    Ensure your `tailwind.config.js` includes the standard color palette, as the components rely on `gray`, `cyan`, `emerald`, and `rose`.
4.  **Run the app**:
    ```bash
    npm start
    ```

---

## 📊 Data Structure

The application expects an array of student objects structured as follows:

```javascript
{
  id: 1,
  name: "xyz",
  score: 85
}
```

---

## 🎨 Theme Details

* **Background**: `bg-gray-900`
* **Primary Accent**: `text-cyan-400` / `border-cyan-500`
* **Success State**: `text-emerald-400` / `bg-emerald-950`
* **Error State**: `text-rose-400` / `bg-rose-950`