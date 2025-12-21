# 🛠️ UniFix - University Problem Reporting System

![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![Firebase](https://img.shields.io/badge/Backend-Firebase-orange)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap%205-blue)

UniFix is a professional web-based platform designed for university students and faculty to report infrastructure and academic issues. The system features an automated **Round-Robin assignment logic** that routes reports to specialized staff (Solvers) and provides a real-time tracking dashboard for administrators.

**🔗 Live Demo:** [https://unifix-dbu.netlify.app/](https://unifix-dbu.netlify.app/)

---

## 📸 Screenshots

### 🔑 Authentication
| Login Interface |
| :---: |
| <img src="https://github.com/yonasleykun27/UniFix-System/blob/main/Img/Login%20Page.png?raw=true" width="600"> |

### 👨‍🎓 Student Dashboard
| Report Submission | Dynamic Categories | Issue Tracking |
| :---: | :---: | :---: |
| <img src="https://github.com/yonasleykun27/UniFix-System/blob/main/Img/Student%20Page%201.png?raw=true" width="250"> | <img src="https://github.com/yonasleykun27/UniFix-System/blob/main/Img/Student%20Page%202.png?raw=true" width="250"> | <img src="https://github.com/yonasleykun27/UniFix-System/blob/main/Img/Student%20Page%203.png?raw=true" width="250"> |

### 🛡️ Admin Portal
| System Management | User Database |
| :---: | :---: |
| <img src="https://github.com/yonasleykun27/UniFix-System/blob/main/Img/Admin%20Page%201.png?raw=true" width="400"> | <img src="https://github.com/yonasleykun27/UniFix-System/blob/main/Img/Admin%20Page%202.png?raw=true" width="400"> |

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
1. The system identifies the required specialist role based on the report category.
2. It calculates the workload across all active specialists in that specific role.
3. It assigns the task to the person next in rotation, ensuring an even distribution of work.

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
│   └── main.js             # Core Engine & Firebase Config
└── Img/                    # Assets and Favicons
