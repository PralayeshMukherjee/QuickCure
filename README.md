# 🚑 QuickCure – Smart Hospital Management System

**QuickCure** is a modern hospital management system that aims to simplify the patient journey — from booking appointments to reaching the doctor’s chamber and getting prescribed medicines. With planned integration of **voice commands** and **AI-driven suggestions**, QuickCure brings smart healthcare to your fingertips.

---

## 📌 Features

- 🩺 Book doctor appointments online (Web & Mobile)
- 🗺 Integrated map system to navigate to hospitals/clinics
- 💊 Nearby pharmacy locator
- 📜 View appointment history *(Upcoming)*
- 🎙 Voice command support for hands-free access *(Planned)*
- 🤖 AI-based symptom checker *(Future Scope)*

---

## 🧑‍💻 Tech Stack

| Layer         | Technology                      |
|---------------|----------------------------------|
| Frontend      | ReactJS                         |
| Backend       | Spring Boot                     |
| Database      | MySQL                           |
| Mapping       | Mapbox / Leaflet / Google Maps API |
| Voice Command | Web Speech API / JS SpeechRecognition |
| AI Integration| Third-party AI APIs via API Key |

---

## 🎯 Problem Statement

In the current healthcare system, patients often struggle to find the right doctors, book appointments, navigate to unfamiliar clinics, and locate pharmacies — especially in emergencies. There's a clear lack of a unified, intelligent platform that can simplify this journey for users.

---

## 💡 Solution

QuickCure offers:

- A unified platform to **book appointments**, **navigate** to doctors, and **find nearby pharmacies**.
- A responsive web interface that works on both mobile and desktop.
- Future enhancements including **AI-based doctor suggestions** and **voice-enabled booking**.

---

## 📂 Folder Structure


---

## 🚀 Getting Started

### 🔧 Prerequisites
- Java JDK 17+
- Maven 3.6+
- Node.js & npm (for frontend)
- MySQL Database

### 💻 Installation

#### 🔹 Backend (Spring Boot)
```bash
# Clone the repository
git clone https://github.com/PralayeshMukherjee/MyLibrary.git
cd MyLibrary

# Navigate to backend folder
cd backend

# Install dependencies & build
mvn clean install

# Configure Database in `application.properties`
spring.datasource.url=jdbc:mysql://localhost:3306/bookie
spring.datasource.username=root
spring.datasource.password=your_password

# Run the backend server
mvn spring-boot:run
```

#### 🔹 Frontend (React + Vite)
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

📌 The frontend runs on `http://localhost:5173` and backend on `http://localhost:8080`.

---

## 🏆 Contributing

Contributions are welcome! 🎉 Feel free to fork the repository, create a new branch, and submit a pull request.

1. Fork the project
2. Create a feature branch (`git checkout -b feature-newFeature`)
3. Commit changes (`git commit -m 'Added a new feature'`)
4. Push to branch (`git push origin feature-newFeature`)
5. Open a pull request

---

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📩 Contact
🔗 **GitHub**: [PralayeshMukherjee](https://github.com/PralayeshMukherjee)  
🔗 **LinkedIn**: [Connect with me](https://www.linkedin.com/in/pralayesh-mukherjee-756a8b276/)  
💡 Have suggestions? Let's innovate together! 🚀📚

