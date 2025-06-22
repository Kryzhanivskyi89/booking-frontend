# 📅 Booking App — Full Stack SPA for Online Reservations

A modern full-stack application that enables seamless appointment booking between clients and businesses. Built with React and Node.js, featuring comprehensive authentication, booking management, and role-based access control.

## 🌟 Features

### 👥 User Management

- **Two distinct user roles**: Client and Business
- **JWT-based authentication** with secure token management
- **User registration and login** with form validation
- **Profile management** and account settings

### 📅 Booking System

- **Create appointments** with date/time selection
- **View all bookings** with status tracking
- **Cancel reservations** with confirmation flow
- **Real-time availability** checking
- **Booking history** and management dashboard

### 🔒 Security & Navigation

- **Protected routes** with React Router
- **Role-based access control** for different user types
- **Secure API endpoints** with authentication middleware

### 🎨 User Experience

- **Responsive design** that works on all devices
- **Intuitive interface** with modern UI components
- **Real-time feedback** and loading states
- **Error handling** with user-friendly messages

## 🚀 Tech Stack

- **React** - UI library for building interactive interfaces
- **Redux Toolkit** - State management with modern Redux patterns
- **React Router DOM** - Client-side routing and navigation
- **Axios** - HTTP client for API communication

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

 **Clone the repository**

```bash
git clone https://github.com/Kryzhanivskyi89/booking-frontend
cd booking-frontend
```

## 📱 Usage

### For Clients

1. **Register/Login** to create an account
2. **Browse available services** and time slots
3. **Book appointments** with your preferred businesses
4. **Manage your bookings** from the dashboard
5. **Cancel or reschedule** appointments as needed

### For Businesses

1. **Register as a business** user
2. **Set up your services** and availability
3. **Manage incoming bookings** and client requests
4. **View booking analytics** and history
5. **Update business information** and settings

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

---

### 📅 Bookings

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/bookings` | Get bookings for user |
| POST | `/api/bookings` | Create a booking |
| DELETE | `/api/bookings/:id` | Cancel a booking by ID |

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

**Built with ❤️ for seamless booking experiences**