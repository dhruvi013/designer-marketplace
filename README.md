# 🎨 Designer Marketplace

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DBFB?logo=react)]()
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)]()
[![Express](https://img.shields.io/badge/Framework-Express.js-black?logo=express)]()
[![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A full-stack **marketplace platform** where designers can showcase their work and clients can hire them. Built with **React (Frontend)**, **Node.js + Express (Backend)**, and **MySQL** for reliable storage.

---

## 🚀 Features

### 👩‍🎨 For Designers
- Create a profile & portfolio
- Upload designs or services offered
- Manage client requests

### 🛒 For Clients
- Browse designer portfolios
- Filter & search by category
- Send project requests & hire designers

### 🔧 For Admin
- Manage users & listings
- Approve or remove content

---

## 🗂 Tech Stack

| Layer      | Technology |
|------------|------------|
| **Frontend** | React.js, CSS/Tailwind |
| **Backend**  | Node.js, Express.js |
| **Database** | MySQL |
| **Tools**    | npm, Postman, VS Code |

---

## 📦 Project Structure

```plaintext
designer-marketplace/
├── backend/            # Node.js + Express API
│   ├── routes/         # API route definitions
│   ├── controllers/    # Business logic
│   ├── models/         # MySQL models
│   └── server.js       # Entry point
├── frontend/           # React UI
│   ├── src/components/ # Reusable UI components
│   ├── src/pages/      # Pages
│   └── App.js          # Root component
└── README.md
