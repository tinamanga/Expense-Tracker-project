# Expense Tracker
This project is a fully functional **Expense Tracker** built with **React** as part of the **SA.01 Week 1 Code Challenge** (Phase 2). It showcases core React skills such as:

- Components and props
- State management
- Event handling
- Conditional rendering
- Component structure
- Code efficiency and UI/UX design

The goal is to create :
---
A simple React application that allows users to:

- ✅ View a table of their expenses  
- ✅ Add new expenses using a form  
- ✅ Filter expenses using a search bar  
- ✅ Sort expenses by category or description  
- ✅ Delete individual expenses  


## Project Structure

```bash
expense-tracker/
│
├── public/                      # Static files served directly
│
├── src/                         # Main source code folder
│   ├── components/              # Reusable UI components
│   │   ├── ExpenseTable.jsx     # Displays the table of expenses
│   │   ├── ExpenseForm.jsx      # Form to add new expenses
│   │   └── SearchBar.jsx        # Input field to filter expenses
│   ├── App.jsx                  # Main app component (manages state)
│   └── index.jsx                # Entry point, renders App to the DOM
│
├── package.json                 # Project metadata and dependencies
├── vite.config.js               # Vite configuration
├── README.md                    # Project documentation (you’re here)
└── .gitignore                   # Files/folders Git should ignore

---

## Features

| Feature                       | Status | Description |
|------------------------------|--------|-------------|
| Add new expenses             | ✅     | Users can add new entries with name, description, amount, and category. |
| Display expenses in a table  | ✅     | Table shows all expenses with clear column headers. |
| Search functionality         | ✅     | Filter by expense name or description (case-insensitive). |
| Sort by description/category | ✅     | Click the buttons on the table headers to sort alphabetically (after data is available). |
| Delete an expense            | ✅     | Each expense row has a delete button to remove it from the table. |

---

##  Technologies Used

-  **React** – For building the user interface
-  **Vite** – For fast dev builds and hot reloading
-  **JavaScript** – Logic and dynamic behavior
-  **HTML/CSS** – Structure and styling

---

##  Getting Started

To run the project locally on your machine:

```bash
git clone https://github.com/tinamanga/Expense-Tracker-project.git
cd expense-tracker
npm install
npm run dev

###Then open your browser and go to:
  -http://localhost:5173

   ## Deployment link:
   -https://tinamanga.github.io/Expense-Tracker-project/

##License
  -This project is open source and available under the MIT License.


