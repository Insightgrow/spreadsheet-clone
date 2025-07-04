# Spreadsheet Clone Prototype

A simple static React prototype that mimics a spreadsheet-style user interface. Built as part of a front-end internship assignment using **React 18**, **TypeScript**, and **Tailwind CSS**.

## Features

- Responsive layout with Tailwind CSS
- Toolbar with interactive buttons:
  - Filters
  - Export
  - New Customer
- Tab-based customer view:
  - All Customers
  - My Customers
  - Archived
- Data table showcasing customer records

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
  Setup

1. Clone the repo:
   - git clone https://github.com/Insightgrow/spreadsheet-clone.git
   - cd spreadsheet-clone
2. Install dependencies:
   - npm install
3. Run the app:
   - npm run dev
4. Open browser at: http://localhost:5173

## Trade-offs
  - react-table was not used due to version conflicts with React 19.
  - Data is hardcoded and static (no dynamic editing or CSV upload).
  - Focused only on layout and basic UI functionality.
  - Styling is done with Tailwind CSS directly, no reusable components yet.





