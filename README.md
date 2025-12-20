# 🛠️ UniFix - University Problem Reporting System

UniFix is a professional web-based platform designed for university students and faculty to report infrastructure and academic issues. The system features an automated **Round-Robin assignment logic** that routes reports to specialized staff (Solvers) and provides a real-time tracking dashboard for administrators.

**Live Demo:** [https://unifix-dbu.netlify.app/]  (https://unifix-dbu.netlify.app/)

---

## ✨ Features

### 👨‍🎓 For Students & Teachers
- **Easy Reporting:** Category-specific forms (Dormitory, Academic, Technology, etc.) with dynamic input fields.
- **ID Verification:** Built-in barcode scanning logic to verify student/staff identity.
- **Personal History:** Track the real-time status of reported issues (Pending, In Progress, Finished).
- **Dual Language Support:** Full support for **English** and **Amharic**.

### 🛡️ For Administrators
- **Centralized Dashboard:** View all university-wide pending reports.
- **Automated Routing:** Intelligent "Round-Robin" system automatically assigns tasks to the next available specialist.
- **User Management:** Ban/Unban users, issue warnings, and manage staff database.

### 🔧 For Staff (Solvers)
- **Personal Task List:** View only tasks assigned to your specific job title.
- **Job Lifecycle:** Start and finish tasks with a single click.
- **Mobile Optimized:** High-quality "Flex-Card" UI for clear viewing on smartphones.

---

## 🚀 Tech Stack

- **Frontend:** HTML5, CSS3 (Custom Glassmorphism UI), Bootstrap 5.3
- **Backend/Database:** Firebase Firestore
- **Authentication:** Custom Session Logic via Firebase
- **Barcode Scanning:** QuaggaJS
- **Hosting:** Netlify
- **Icons:** Bootstrap Icons

---

## 📂 Project Structure

```text
/
├── index.html              # Landing & Login Page
├── register_student.html   # Student account creation
├── register_teacher.html   # Teacher account creation
├── admin_dashboard.html    # Admin management portal
├── solver_dashboard.html   # Staff task management
├── student_dashboard.html  # Student reporting portal
├── teacher_dashboard.html  # Teacher reporting portal
├── css/
│   └── style.css           # Global styles & Mobile UI fixes
├── js/
│   └── main.js             # Core System & Firebase Config
└── Img/                    # Assets and Favicons
