# 🌱 GreenByte – E-Waste Management System

GreenByte is a **full-stack web application** developed as part of the **Social Connect and Responsibility (SCR)** project.  
The platform promotes **responsible e-waste disposal** by allowing users to request e-waste pickups and enabling administrators to manage and track those requests through a dedicated dashboard.

---

## 🔗 Live Project Links

- **Frontend (User + Admin UI):**  
  👉 https://grenbyte.netlify.app/

- **Backend API (Render):**  
  👉 https://greenbyte.onrender.com/

---

## 🎯 Problem Statement

Improper disposal of electronic waste (e-waste) leads to serious **environmental pollution** and **health hazards**.  
There is a lack of easy-to-use digital platforms that connect people with organized e-waste collection systems.

---

## 💡 Solution – GreenByte

GreenByte provides:
- A **user-friendly interface** to submit e-waste pickup requests
- An **admin dashboard** to monitor, manage, and update pickup status
- A **centralized database** to store and track all requests
- A scalable backend API connected to MongoDB

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Hosted on **Netlify**

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Hosted on **Render**

---

## 📂 Project Structure
GreenByte/
├── backend/
│ ├── server.js
│ ├── db.js
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── middleware/
│
├── frontend/
│ ├── index.html
│ ├── pickup.html
│ ├── awareness.html
│ ├── admin.html
│ ├── css/
│ ├── js/
│ └── assets/
│
└── README.md


---

## 🚀 Features

### 👤 User Features
- Submit e-waste pickup requests
- Awareness page on e-waste hazards and recycling
- Clean and responsive UI

### 🛠 Admin Features
- View all pickup requests
- Track request status
- Update pickup status (Pending → Completed)
- Real-time data fetched from backend API

---

## 🌐 Backend API Endpoints

| Method | Endpoint | Description |
|------|--------|-------------|
| GET | `/` | Health check |
| POST | `/api/pickup/request` | Submit pickup request |
| GET | `/api/pickup/all` | Fetch all requests (Admin) |
| PUT | `/api/pickup/status/:id` | Update pickup status |

---

## 🧪 Testing
- APIs tested using **Postman**
- Frontend and backend tested together using live deployment
- Database verified through **MongoDB Atlas**

---

## 🌍 Social Impact

- Encourages responsible disposal of electronic waste
- Reduces environmental pollution
- Raises awareness about recycling and sustainability
- Supports the objectives of **Social Connect and Responsibility (SCR)**

---

## 🧠 Learning Outcomes
- Full-stack application development
- REST API design and integration
- MongoDB Atlas usage
- Deployment using Render and Netlify
- Debugging real-world issues (routing, CORS, ports)

---

## 👨‍💻 Developed By

**Arnav Paniya**  
SCR Project – GreenByte  
BMS Institute of Technology and Management

---

## ✅ Conclusion

GreenByte demonstrates how technology can be used to solve real-world environmental problems.  
The project successfully integrates frontend, backend, and database systems into a complete and functional web application aligned with social responsibility goals.

---

⭐ *This project was developed, tested, and deployed successfully as part of an academic SCR submission.*

