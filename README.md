# 📅 Booking App — Full Stack SPA for Online Reservations

A modern full-stack application that enables seamless appointment booking between clients and businesses. Built with **React**, **Redux Toolkit**, **Node.js**, and **MongoDB**, it features full authentication, role-based access, and booking management.

---

## 🌟 Features

### 👥 User Management

- Two distinct roles: **Client** and **Business**
- **JWT-based authentication** with secure token storage
- **User registration & login**
- **Profile management** (update, delete own account)

### 📅 Booking System

- **Clients** can:
    - View list of business users
    - Create, view, edit, and cancel their bookings
- **Business users** are displayed in the system for clients to book
- Automatic association of booking to logged-in client

### 🔒 Security & Access

- **Protected routes** with `React Router`
- **Role-based access** (e.g., only clients can create bookings)
- **Secure Express endpoints** with middleware auth checks

### 🎨 UX & UI

- **Responsive layout** (mobile-friendly)
- **Clean modern interface** using custom CSS modules
- **Real-time feedback**, loading states, and error handling

---

## 🚀 Tech Stack

| Frontend | Backend |
| --- | --- |
| React, Redux Toolkit, React Router, Axios | Node.js, Express, MongoDB, JWT |

---

## 🛠️ Getting Started

### 📦 Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas)

### 📁 Installation

Clone the frontend and backend repos:

```bash
# Frontend
git clone <https://github.com/Kryzhanivskyi89/booking-frontend>
cd booking-frontend
npm install
npm start

# Backend
git clone <https://github.com/Kryzhanivskyi89/booking-backend>
cd booking-backend
npm install
npm run dev
```

## **📱 Usage Instructions**

### **✅ Client Flow**

1. Register or login as Client
2. View list of business users
3. Book appointment (select business & date)
4. View your bookings
5. Edit or cancel your bookings

### **🧑‍💼 Business Flow**

1. Register as Business
2. Be discoverable for clients in the booking list
3. Currently no dashboard (future improvement)

## 🌐 Deployment

### Production Deployment

- **Frontend**: Deployed on GitHub Pages with automated CI/CD
- **Backend**: Hosted on Render with environment variable management
- **Database**: MongoDB Atlas for cloud database hosting

## 🧪 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login and get token |

---

### 👤 Users

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/users` | Get all users with role "business" |
| GET | /api/users/:id | Get user by ID |
| PUT | /api/users/:id | Update user info |
| DELETE | /api/users/:id | Delete user |

---

### 📅 Bookings

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/bookings` | Get bookings for user |
| POST | `/api/bookings` | Create a booking |
| DELETE | `/api/bookings/:id` | Cancel a booking by ID |
| PUT | `/api/bookings/:id` | Update client’s own booking |

---

## **💡 Project Highlights**

- Full CRUD for users and bookings
- Role-based authorization
- Separation of concerns (frontend/backend)
- Reusable logic and error handling
- Environment-based configuration
- Deployed to production with free-tier platforms

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch 
3. Commit your changes 
4. Push to the branch 
5. Open a Pull Request

## 🧠 Author's Note

This project showcases modern full-stack development practices, demonstrating the complete software development lifecycle from initial concept to production deployment. The architecture emphasizes code reusability, maintainability, and scalability while providing an excellent user experience for both clients and businesses.

Key learning outcomes include:

- Building RESTful APIs with Express.js
- Implementing JWT authentication
- State management with Redux Toolkit
- Responsive design principles
- Database design with MongoDB
- Production deployment strategies

## 📄 License

This project is licensed under the <AndrewDev/>.

---

**Built with ❤️ by [Andrew Kryzhanivskyi](https://github.com/Kryzhanivskyi89)**