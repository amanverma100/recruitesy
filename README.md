# 🧑‍💼 Recruitesy - Your Easy Job Recruitment Platform

**Recruitesy** is a modern job portal designed to simplify the recruitment process for both job seekers and recruiters. Built using the MERN stack with additional tools like Cloudinary, Multer, JWT, and Nodemailer, Recruitesy offers a seamless platform to find jobs and hire talent.

🔗 **Live Demo**: [https://frontend-recruitesy.vercel.app](https://frontend-recruitesy.vercel.app)

---

## 📌 Features

### 👨‍🎓 For Job Seekers (Students/Employees)
- Register and login securely (JWT & Bcrypt)
- Browse jobs by role, location, or keywords
- Apply for jobs with resume upload (Multer + Cloudinary)
- Track applied jobs and application status
- User profile management

### 🧑‍💼 For Recruiters
- Post new job listings with role-based details
- View and manage applications
- Search candidate profiles
- Profile editing and secure authentication

### ✉️ Notifications
- Email confirmation using Nodemailer on signup and job application

---

## 🛠 Tech Stack

| Frontend | Backend | Database | Authentication | File Upload | Email | Hosting |
|---------|---------|----------|----------------|-------------|-------|---------|
| React   | Node.js (Express.js) | MongoDB | JWT, Bcrypt | Multer, Cloudinary | Nodemailer | Vercel (Frontend), Render/Other (Backend) |

---

## 🖼 Screenshots

*![WhatsApp Image 2025-06-13 at 10 33 42_edc7d25f](https://github.com/user-attachments/assets/6c294447-8913-4570-a5a2-3c2b7fdc4a3f)
* ![WhatsApp Image 2025-06-13 at 10 34 21_e063cf49](https://github.com/user-attachments/assets/ed297b23-7fef-4453-8994-2d982e70c9f5)
* ![WhatsApp Image 2025-06-13 at 10 34 58_360e18a4](https://github.com/user-attachments/assets/a6a84e63-7d08-4274-9a34-2c915c0520f2)
* ![WhatsApp Image 2025-06-13 at 10 38 17_d8e7fef8](https://github.com/user-attachments/assets/64c0a624-6703-45e4-af76-e8e53a700a79)
* ![WhatsApp Image 2025-06-13 at 10 41 00_b57c7ce1](https://github.com/user-attachments/assets/e77b1e59-08eb-42f9-860a-fc7c763fc555)
* ![WhatsApp Image 2025-06-13 at 10 43 01_87ee609e](https://github.com/user-attachments/assets/36b87578-7e4a-4731-bdf2-5c5b8b2db1b7)







---

## ⚙️ Installation & Setup (Locally)

```bash
# Clone the repo
git clone https://github.com/amanverma100/recruitesy.git
cd recruitesy

# Install frontend
cd client
npm install
npm start

# Install backend
cd ../server
npm install
npm run dev
