# 🛠️ UniFix - University Problem Reporting System

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-id/deploy-status)](https://unifix-dbu.netlify.app/)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![Firebase](https://img.shields.io/badge/Backend-Firebase-orange)

UniFix is a professional web-based platform designed for university students and faculty to report infrastructure and academic issues. The system features an automated **Round-Robin assignment logic** that routes reports to specialized staff (Solvers) and provides a real-time tracking dashboard for administrators.

**🔗 Live Demo:** [https://unifix-dbu.netlify.app/](https://unifix-dbu.netlify.app/)

---

## 📸 Screenshots

| Login Interface | Student Dashboard | Admin Portal |
| :---: | :---: | :---: |
| ![Login](https://via.placeholder.com/200x400?text=Login+UI) | ![Student](https://via.placeholder.com/200x400?text=Student+UI) | ![Admin](https://via.placeholder.com/200x400?text=Admin+UI) |

*(Note: Replace placeholder links with your actual image paths from your `Img` folder)*

---

## ✨ Features

### 👨‍🎓 For Students & Teachers
- **Dynamic Reporting:** Forms adjust automatically based on category (Dormitory, Academic, etc.).
- **ID Verification:** Real-time barcode scanning using **QuaggaJS** to verify university identity.
- **Personal History:** Real-time status tracking (Pending 🟡, In Progress 🔵, Finished 🟢, Declined 🔴).
- **Localization:** Full support for **English** and **Amharic** languages.

### 🛡️ For Administrators
- **Task Routing:** Automated "Round-Robin" algorithm ensures equal task distribution among staff.
- **User Governance:** Advanced management tools to issue warnings, ban users, and manage the staff database.
- **Cascade Deletion:** Professional "Safe-Delete" logic that cleans up user reports when an account is removed.

### 🔧 For Staff (Solvers)
- **Specialized Access:** Staff see tasks specific to their job title (e.g., ICT Manager sees Tech issues).
- **Mobile Optimized:** High-performance "Flex-Card" UI designed for field work on smartphones.

---

## 🧠 System Logic: Round-Robin Assignment
The core of UniFix is its automated assignment engine. When an administrator approves a report:
1. The system identifies the required specialist role.
2. It calculates the workload across all active specialists in that role.
3. It assigns the task to the person next in rotation, ensuring no single staff member is overwhelmed.



---

## 🚀 Tech Stack

- **Frontend:** HTML5, CSS3 (Custom Glassmorphism UI), Bootstrap 5.3
- **Backend/Database:** Firebase Firestore (NoSQL)
- **Authentication:** Custom Session Security via Firestore
- **Barcode Scanning:** QuaggaJS Library
- **Hosting:** Netlify (Continuous Deployment)
- **Icons:** Bootstrap Icons

---

## 📂 Project Structure

```text
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
│   ├── main.js             # Core Engine & Firebase Config
│   ├── login.js            # Authentication logic
│   └── dashboards.js       # UI rendering logic
└── Img/                    # Assets and Favicons
🛠️ Installation & Setup
Clone the repository:

Bash

git clone [https://github.com/your-username/UniFix-System.git](https://github.com/your-username/UniFix-System.git)
Configure Firebase:

Create a project on Firebase Console.

Copy your credentials into the firebaseConfig object in js/main.js.

Deploy:

Connect your GitHub repo to Netlify for automated builds.

📜 License
This project was developed for Debre Berhan University. For educational use only.

Developed with ❤️ by [Your Name]


### Pro-Tips for your GitHub profile:
1.  **Replace placeholders**: In the `Screenshots` section, replace the placeholder links with actual screenshots you take of your site. Upload them to a folder in your repo called `screenshots` and link them like `![alt text](screenshots/login.png)`.
2.  **Netlify Badge**: To get your actual Netlify badge, go to **Netlify Dashboard > Site Settings > Deployments > Status Badges** and copy the Markdown code provided there.

**Would you like me to help you write a "Documentation" file to explain how the Firebase logic works for other developers?**
