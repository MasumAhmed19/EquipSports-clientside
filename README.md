# 🏆 EquiSports: A Sports Equipment Store  

## 🚀 Introduction  

**EquiSports** is a responsive **sports equipment e-commerce platform** where customers can explore, review, and manage various sports accessories, gear, and apparel across multiple sports disciplines. The platform ensures a seamless shopping experience with **user authentication, product management, and dynamic product displays**.  

This project was developed as part of **Assignment 10** from **Programming Hero**.  

## 📜 Table of Contents  

- [Live Demo](#-live-demo)  
- [Features](#-features)  
- [Installation](#-installation)  
- [Configuration](#-configuration)  
- [Usage](#-usage)  
- [Technologies Used](#-technologies-used)  
- [Dependencies](#-dependencies)  
- [Contributors](#-contributors)  

---

## 🔗 Live Demo  

Check out the live version of **EquiSports**:  

🔗 [Live Demo](https://equisports-mas.netlify.app/)  

## 📂 Repositories  

- 🖥️ **Client Repository:** [GitHub Link](https://github.com/MasumAhmed19/EquipSports-clientside/)  
- 🖥️ **Server Repository:** [GitHub Link](https://github.com/MasumAhmed19/EquipSports-serverside/)  

---

## ✨ Features  

### 🔐 Authentication & Security  
- **Firebase authentication** for user registration & login via **email/password & Google OAuth**.  
- **Protected routes** for managing and adding products.  

### 🛒 Product Management  
- Users can **add, update, delete, and view** sports equipment.  
- **Equipment management restricted to logged-in users** for better control.  

### 🔍 Product Display  
- **Dynamic sports equipment listing** for easy browsing.  
- **Individual product detail pages** with complete information.  

### 🚀 Dynamic Routing & Navigation  
- **React Router DOM** ensures seamless navigation.  
- **Private routes** for managing user-specific content like "My List".  

### 🎨 User Experience & UI  
- **Fully responsive design** for **mobile, tablet, and desktop** views.  
- **Interactive UI** built with **Tailwind CSS and DaisyUI**.  
- **Toast notifications** for user interactions like login, registration, and product updates.  

---

## 🛠️ Installation  

### 🔧 Prerequisites  
Ensure you have the following installed:  
- **Node.js** (v14 or later)  
- **npm** or **yarn**  
- **Firebase account** for authentication  

### 📥 Clone the Repository  

#### Client Setup  
```sh
git clone https://github.com/MasumAhmed19/EquipSports-clientside.git  
cd EquipSports-clientside  
```

#### Server Setup  
```sh
git clone https://github.com/MasumAhmed19/EquipSports-serverside.git  
cd EquipSports-serverside  
```

### 📦 Install Dependencies  

For the **client**:  
```sh
npm install  
```

For the **server**:  
```sh
npm install  
```

### 🚀 Start the Development Server  

For the **client**:  
```sh
npm run dev  
```

For the **server**:  
```sh
npm start  
```

---

## ⚙️ Configuration  

Create a `.env` file in the **root directory** of the client and add the following environment variables:  

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_API_URL=https://your-server-url.com
# VITE_API_URL=http://localhost:5000
```

Replace the values with your **Firebase credentials** and **server API URL**.  

---

## 💻 Usage  

1. **Register/Login** using Firebase authentication.  
2. **Browse Sports Equipment** categorized for different sports.  
3. **View Product Details** including specifications, pricing, and user reviews.  
4. **Manage Your Equipment** by adding or removing items.  
5. **Use Protected Routes** for adding/removing items from "My List".  

---

## ⚙️ Technologies Used  

- **Frontend**:  
  - 🚀 **React.js** - User interface  
  - 🎨 **Tailwind CSS & DaisyUI** - Styling  
  - 🔄 **React Router DOM** - Navigation  
  - 🛠️ **React Helmet-Async** - SEO  

- **Backend & Database**:  
  - ⚡ **Express.js** - Server-side framework  
  - 🗄️ **MongoDB** - NoSQL Database  

- **Authentication**:  
  - 🔑 **Firebase Authentication** - User login & security  

---

## 📦 Dependencies  

### 🔹 Frontend Dependencies:  
```json
"dependencies": {
  "firebase": "^11.0.2",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-helmet-async": "^2.0.5",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.0.2",
  "react-slick": "^0.30.2",
  "react-toastify": "^10.0.6",
  "slick-carousel": "^1.8.1",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.14.5"
}
```

### 🔹 Development Dependencies:  
```json
"devDependencies": {
  "@eslint/js": "^9.15.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.14",
  "eslint": "^9.15.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.14",
  "globals": "^15.12.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.16",
  "vite": "^6.0.1"
}
```

---

## 🤝 Contributors  

👤 **Masum Ahmed** - [GitHub Profile](https://github.com/MasumAhmed19)  


---

### 🎉 Enjoy using EquiSports! Keep Playing! 🏆  

---
