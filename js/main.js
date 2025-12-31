import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { 
    getFirestore, collection, addDoc, getDocs, 
    query, where, updateDoc, doc, deleteDoc, writeBatch 
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyALng4FIYYCN3x51nQQoKzRJv81l8VNTXA",
    authDomain: "unifix-9269b.firebaseapp.com",
    projectId: "unifix-9269b",
    storageBucket: "unifix-9269b.firebasestorage.app",
    messagingSenderId: "913576551192",
    appId: "1:913576551192:web:f00198c2f59ffb7a5cf46d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const TRANSLATIONS = {
    en: {
        loginTitle: "UniFix Login", loginSubtitle: "University Problem Reporting System", 
        loginBtn: "Login", noAccount: "Don't have an account?",
        lblUsername: "Username", lblPassword: "Password",
        phUsername: "Enter Username", phPassword: "Enter Password", 
        welcome: "Welcome", logout: "Logout", dashboard: "Dashboard",
        darkMode: "Dark Mode", lightMode: "Light Mode", langName: "Amharic",
        
        registerStudent: "Register as Student", registerTeacher: "Register as Teacher", registerAccount: "Register Account",
        regTitleStud: "Student Registration", regSubtitleStud: "Fill all fields and verify your ID card.",
        regTitleTeach: "Teacher Registration", regSubtitleTeach: "Faculty & Staff Account Creation",
        fullName: "Full Name", studentId: "Student ID", staffId: "Staff ID",
        username: "Username", password: "Password", dept: "Department", year: "Year of Study", 
        block: "Block Number", dorm: "Dorm Number",
        uploadFront: "Upload Front ID", uploadBack: "Upload Back ID (Barcode)", 
        idVerifyTitle: "ID Card Verification", idVerifyDesc: "1. Upload Back ID image. 2. Click Scan to verify.",
        scanBtn: "Scan & Verify ID",
        backToLogin: "Back to Login", scanning: "Scanning... Please wait.", idMatch: "Identity Confirmed!", 
        idMismatch: "ID Mismatch! Barcode does not match input.", 
        noBarcode: "No readable barcode found. Try a clearer image.",
        verifyFirst: "Verify ID First",
        
        phFullName: "Enter Full Name", phStudentId: "DBU...", phStaffId: "DBU...",
        phUsernameStud: "stud12345", phUsernameTech: "tech1234",
        phDept: "e.g. Software Eng", phYear: "e.g. 3", phBlock: "Block No", phDorm: "Dorm No",

        successMsg: "Operation Successful", errorMsg: "An error occurred",
        fillAllFields: "Please fill all mandatory fields correctly",
        enterIdFirst: "Please enter your ID first",
        uploadBackIdReq: "Please upload the Back ID image",
        initScan: "Initializing Scan...",
        userDuplicate: "Username already exists.",
        idDuplicate: "This ID is already registered.",
        usernameStudReq: "Username must be 'stud' followed by 5 digits",
        usernameTechReq: "Username must be 'tech' followed by 4 digits",
        successRedirect: "Account Created! Redirecting...",
        
        reportIssue: "Report Issue", myHistory: "My History", submit: "Submit Report",
        category: "Category", phone: "Phone Number", urgency: "Urgency", description: "Description",
        status: "Status", actions: "Actions", date: "Date",
        low: "Low", medium: "Medium", high: "High", urgent: "Urgent",
        editReportTitle: "Edit Report", viewDetailsTitle: "View Details", saveChanges: "Save Changes", deleteConfirmMsg: "Delete this report?",
        reasonDecline: "Reason", reportRemoved: "Report removed from view.",
        totalReports: "Total Reports", incomingPending: "Incoming Pending Reports", taskProgress: "Task Progress Tracking",
        manageReports: "Manage Reports", userDb: "User Database", 
        noPendingMsg: "No reports assigned to you currently.",
        filterStatus: "Filter by Status", myTasks: "My Handled Tasks", allTasks: "All University Tasks",
        finished: "Finished", declined: "Declined",
        reporter: "Reporter", assignedTo: "Assigned To",
        allUsers: "All", students: "Students", teachers: "Teachers", solvers: "Solvers",
        role: "Role", warnings: "Warnings", id: "ID",
        reportDetails: "Report Details", userProfile: "User Profile",
        sendWarning: "Send Warning ⚠️", removeUser: "Remove User 🗑️",
        assignBtn: "Assign", declineBtn: "Decline", viewBtn: "View", manageBtn: "Manage",
        banned: "BANNED", active: "Active",
        userDeletedCascade: "User and all their reports have been deleted permanently.",
        addStaff: "Add Staff", staffRole: "Role", jobTitle: "Job Title", createAcc: "Create Account",
        warningReason: "Reason for Warning",
        activeTasks: "Active Tasks", jobHistory: "Job History",
        startJob: "Start Job", finishJob: "Finish Job",
        locationDetails: "Location & Details", reporterInfo: "Reporter Info",
        jobFinishedMsg: "Mark this job as finished?",
        bannedMsg: "Account Banned.",
        mandatoryMsg: "Please fill in all mandatory fields (Category, Phone, and Description).",
        confirmTitle: "Are you sure?", confirmBtn: "Yes, Proceed", cancelBtn: "Cancel", closeBtn: "Close"
    },
    am: {
        loginTitle: "UniFix መግቢያ", loginSubtitle: "የዩኒቨርሲቲ ችግር ሪፖርት ማድረጊያ",
        loginBtn: "ግባ", noAccount: "መለያ የለዎትም?",
        lblUsername: "የተጠቃሚ ስም", lblPassword: "የይለፍ ቃል", 
        phUsername: "የተጠቃሚ ስም ያስገቡ", phPassword: "የይለፍ ቃል ያስገቡ",
        welcome: "እንኳን ደህና መጡ", logout: "ውጣ", dashboard: "ዳሽቦርድ",
        darkMode: "ጨለማ", lightMode: "ብርሃን", langName: "English",
        
        registerStudent: "እንደ ተማሪ ይመዝገቡ", registerTeacher: "እንደ መምህር ይመዝገቡ", registerAccount: "መለያ ይፍጠሩ",
        regTitleStud: "የተማሪ ምዝገባ", regSubtitleStud: "እባክዎ ሁሉንም መረጃዎች ይሙሉ እና መታወቂያዎን ያረጋግጡ።",
        regTitleTeach: "የመምህራን ምዝገባ", regSubtitleTeach: "የመምህራን እና ሰራተኞች መለያ መፍጠሪያ",
        fullName: "ሙሉ ስም", studentId: "የተማሪ መታወቂያ", staffId: "የመለያ ቁጥር",
        username: "የተጠቃሚ ስም", password: "የይለፍ ቃል", dept: "የትምህርት ክፍል", year: "የትምህርት ዘመን", 
        block: "ብሎክ ቁጥር", dorm: "ዶርም ቁጥር",
        uploadFront: "የፊት መታወቂያ ጫን", uploadBack: "የኋላ መታወቂያ ጫን",
        idVerifyTitle: "መታወቂያ ማረጋገጫ", idVerifyDesc: "1. የኋላ መታወቂያ ፎቶ ይጫኑ። 2. 'ስካን' የሚለውን ይጫኑ።",
        scanBtn: "የኋላ መታወቂያ ስካን",
        backToLogin: "ወደ መግቢያ ተመለስ", scanning: "በመፈለግ ላይ...", idMatch: "መታወቂያው ተረጋግጧል!", 
        idMismatch: "መታወቂያው አይዛመድም! ባርኮዱ እና የገባው ቁጥር አንድ አይደሉም።", 
        noBarcode: "ባርኮድ አልተገኘም። እባክዎ ግልጽ ምስል ይሞክሩ።",
        verifyFirst: "መጀመሪያ መታወቂያዎን ያረጋግጡ",

        phFullName: "ሙሉ ስም ያስገቡ", phStudentId: "DBU...", phStaffId: "DBU...",
        phUsernameStud: "stud12345", phUsernameTech: "tech1234",
        phDept: "ምሳሌ፡ Software Eng", phYear: "ምሳሌ፡ 3", phBlock: "ብሎክ ቁጥር", phDorm: "ዶርም ቁጥር",

        successMsg: "ተሳክቷል", errorMsg: "ስህተት ተፈጥሯል",
        fillAllFields: "እባክዎ ሁሉንም አስፈላጊ መረጃዎች በትክክል ይሙሉ",
        enterIdFirst: "እባክዎ መጀመሪያ መታወቂያ ቁጥር ያስገቡ",
        uploadBackIdReq: "እባክዎ የኋላ መታወቂያ ምስል ይጫኑ",
        initScan: "ስካን በማድረግ ላይ...",
        userDuplicate: "ይህ የተጠቃሚ ስም ተይዟል",
        idDuplicate: "ይህ መለያ ቁጥር በሌላ ተጠቃሚ ተመዝግቧል",
        usernameStudReq: "የተጠቃሚ ስም 'stud' እና 5 ቁጥሮች መሆን አለበት",
        usernameTechReq: "የተጠቃሚ ስም 'tech' እና 4 ቁጥሮች መሆን አለበት",
        successRedirect: "መለያ ተፈጥሯል! ወደ መግቢያ...",

        // --- Reporting ---
        reportIssue: "ችግር ሪፖርት አድርግ", myHistory: "የኔ ታሪክ", submit: "ላክ",
        category: "ምድብ", phone: "ስልክ ቁጥር", urgency: "አስቸኳይነት", description: "ዝርዝር",
        status: "ሁኔታ", actions: "ተግባራት", date: "ቀን",
        low: "ዝቅተኛ", medium: "መካከለኛ", high: "ከፍተኛ", urgent: "አስቸኳይ",
        manageReports: "ሪፖርቶችን ያስተዳድሩ", userDb: "የተጠቃሚዎች መረጃ",
        noPendingMsg: "በአሁኑ ጊዜ ለእርስዎ የተመደበ ሪፖርት የለም።",
        filterStatus: "በሁኔታ አጣራ", myTasks: "በእኔ የተሰሩ ስራዎች", allTasks: "የዩኒቨርሲቲው አጠቃላይ ስራዎች",
        finished: "ተጠናቀዋል", declined: "ውድቅ ተደርገዋል",
        reporter: "ሪፖርት አቅራቢ", assignedTo: "የተመደበለት",
        allUsers: "ሁሉም", students: "ተማሪዎች", teachers: "መምህራን", solvers: "ባለሙያዎች",
        role: "ሚና", warnings: "ማስጠንቀቂያ", id: "መለያ",
        reportDetails: "የሪፖርት ዝርዝር", userProfile: "የተጠቃሚ መረጃ",
        sendWarning: "ማስጠንቀቂያ ላክ ⚠️", removeUser: "ተጠቃሚውን አስወግድ 🗑️",
        assignBtn: "መድብ", declineBtn: "ሰርዝ", viewBtn: "ይመልከቱ", manageBtn: "አስተዳድር",
        banned: "ታግዷል", active: "ንቁ",
        userDeletedCascade: "ተጠቃሚው እና ያቀረባቸው ሪፖርቶች በሙሉ ተሰርዘዋል።",
        addStaff: "ሰራተኛ ጨምር", staffRole: "ሚና", jobTitle: "የሥራ መደብ", createAcc: "መለያ ፍጠር",
        warningReason: "የማስጠንቀቂያ ምክንያት",
        activeTasks: "ንቁ ስራዎች", jobHistory: "የስራ ታሪክ",
        startJob: "ስራ ጀምር", finishJob: "ስራ ጨርስ",
        locationDetails: "የቦታ እና ዝርዝር መረጃ", reporterInfo: "የሪፖርት አቅራቢ መረጃ",
        jobFinishedMsg: "ይህንን ስራ እንደተጠናቀቀ ምልክት ማድረግ ይፈልጋሉ?",
        bannedMsg: "መለያዎ ታግዷል",
        mandatoryMsg: "እባክዎ ሁሉንም አስፈላጊ መስኮች ይሙሉ (ምድብ፣ ስልክ እና መግለጫ)።",
        confirmTitle: "እርግጠኛ ነዎት?", confirmBtn: "አዎ", cancelBtn: "ይቅር", closeBtn: "ዝጋ"
    }
};

const System = {
    currentUser: null,
    cachedReports: [], 
    cachedUsers: [],

    init: async function() {
        const storedUser = JSON.parse(localStorage.getItem('unifix_user'));
        if (storedUser) this.currentUser = storedUser;

        await this.refreshData();

        if (storedUser) {
            const validUser = this.cachedUsers.find(u => u.username === storedUser.username);
            if (!validUser || validUser.isBanned) {
                this.logout();
            } else {
                this.currentUser = validUser;
                localStorage.setItem('unifix_user', JSON.stringify(validUser));
            }
        } else {
            await this.seedData();
        }
        
        this.applyTheme();
        this.applyLanguage();
        this.initDOMManipulation();
    },

    seedData: async function() {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", "admin1001"));
        const snap = await getDocs(q);

        if (snap.empty) {
            console.log("Seeding Database...");
            await addDoc(usersRef, { username: `admin1001`, password: 'password123', role: 'Admin', fullName: `System Admin 1`, id: `DBU-ADM-1001`, warnings: 0, isBanned: false });
            await addDoc(usersRef, { username: `solver2001`, password: 'password123', role: 'Solver', fullName: `Staff General Technician`, jobTitle: "Staff General Technician", id: `DBU-SLV-2001`, warnings: 0, isBanned: false });
            await this.refreshData();
        }
    },

    refreshData: async function() {
        try {
            const uSnap = await getDocs(collection(db, "users"));
            this.cachedUsers = uSnap.docs.map(doc => ({ firebaseId: doc.id, ...doc.data() }));

            const rSnap = await getDocs(collection(db, "reports"));
            this.cachedReports = rSnap.docs.map(doc => ({ firebaseId: doc.id, ...doc.data() }));
            return true;
        } catch (e) {
            console.error("Sync Error:", e);
            return false;
        }
    },

    getData: function() {
        return { users: this.cachedUsers, reports: this.cachedReports, currentUser: this.currentUser };
    },

    login: async function(username, password) {
        await this.refreshData(); 
        const user = this.cachedUsers.find(u => u.username === username);
        
        if (!user) return { success: false, message: "User does not exist." };
        if (user.password.toString().trim() !== password.toString().trim()) return { success: false, message: "Invalid Password." };
        if (user.role !== this.detectRole(username)) return { success: false, message: "Role mismatch." };
        
        if (user.isBanned) {
            const lang = localStorage.getItem('unifix_lang') || 'en';
            return { success: false, message: TRANSLATIONS[lang].bannedMsg };
        }

        this.currentUser = user;
        localStorage.setItem('unifix_user', JSON.stringify(user));
        return { success: true, role: user.role };
    },

    detectRole: function(username) {
        if (username.startsWith('admin')) return 'Admin';
        if (username.startsWith('stud') && username.length >= 9) return 'Student'; 
        if (username.startsWith('tech') && username.length >= 8) return 'Teacher'; 
        if (username.startsWith('solver')) return 'Solver';
        return null;
    },

    logout: function() {
        this.currentUser = null;
        localStorage.removeItem('unifix_user');
        window.location.href = 'index.html';
    },

    checkAuth: function(requiredRole) {
        const user = JSON.parse(localStorage.getItem('unifix_user'));
        if (!user) { window.location.href = 'index.html'; return null; }
        if (requiredRole && requiredRole !== 'Any' && user.role !== requiredRole) {
            window.location.href = 'index.html'; return null;
        }
        
        this.currentUser = user;
        const els = document.querySelectorAll('.user-display-name');
        els.forEach(el => el.innerText = user.fullName);
        
        const warnBanner = document.getElementById('warningBanner');
        if(warnBanner) {
            if(user.warnings > 0) {
                warnBanner.classList.remove('d-none');
                document.getElementById('warnCount').innerText = user.warnings;
                const reasonDiv = document.getElementById('warnReason');
                if(reasonDiv && user.lastWarningReason) {
                    reasonDiv.innerText = user.lastWarningReason;
                    reasonDiv.classList.remove('d-none');
                }
            } else {
                warnBanner.classList.add('d-none');
            }
        }
        
        this.refreshData().then(() => {
            if(typeof window.loadReports === 'function') window.loadReports();
            if(typeof window.loadTasks === 'function') window.loadTasks();
            if(typeof window.loadUsers === 'function') window.loadUsers();
            if(typeof window.loadHistory === 'function') window.loadHistory();
        });

        return user;
    },

    register: async function(newUser) {
        await this.refreshData();
        const lang = localStorage.getItem('unifix_lang') || 'en';

        if (this.cachedUsers.find(u => u.username === newUser.username)) {
            return { success: false, message: TRANSLATIONS[lang].userDuplicate };
        }
        if (this.cachedUsers.find(u => u.id === newUser.id)) {
            return { success: false, message: TRANSLATIONS[lang].idDuplicate };
        }

        newUser.warnings = 0;
        newUser.isBanned = false;
        
        try {
            await addDoc(collection(db, "users"), newUser);
            await this.refreshData();
            return { success: true, message: TRANSLATIONS[lang].successMsg };
        } catch(e) {
            return { success: false, message: e.message };
        }
    },

    addStaff: async function(staffData) {
        await this.refreshData();
        const sameRoleUsers = this.cachedUsers.filter(u => u.role === staffData.role);
        const nextNum = 1000 + sameRoleUsers.length + 1;
        
        let prefix = staffData.role === 'Admin' ? "DBU-ADM-" : "DBU-SLV-";
        staffData.id = `${prefix}${nextNum}`;
        staffData.warnings = 0;
        staffData.isBanned = false;

        try {
            if (this.cachedUsers.find(u => u.username === staffData.username)) {
                return { success: false, message: "Username exists." };
            }
            await addDoc(collection(db, "users"), staffData);
            await this.refreshData();
            return { success: true };
        } catch (e) {
            return { success: false, message: e.message };
        }
    },

    submitReport: async function(newReport) {
        try {
            await this.refreshData();
            const admins = this.cachedUsers.filter(u => u.role === 'Admin');
            admins.sort((a, b) => a.username.localeCompare(b.username));

            if (admins.length > 0) {
                const totalReportsEver = this.cachedReports.length;
                const adminIndex = totalReportsEver % admins.length;
                newReport.assignedPendingAdmin = admins[adminIndex].username;
            } else {
                newReport.assignedPendingAdmin = "admin1001";
            }

            newReport.hiddenFromAdmin = false;
            newReport.hiddenFromSolver = false;
            newReport.hiddenFromReporter = false;

            const docRef = await addDoc(collection(db, "reports"), newReport);
            newReport.firebaseId = docRef.id; 
            this.cachedReports.push(newReport);
            return { success: true };
        } catch(e) {
            console.error(e);
            return { success: false };
        }
    },

    updateReportStatus: async function(id, status, assignedToJobTitle = null, declineReason = null, actingAdmin = null) {
        await this.refreshData();
        
        const report = this.cachedReports.find(r => r.id === id);
        if(!report) return false;

        const reportRef = doc(db, "reports", report.firebaseId);
        const updateData = { status: status };

        if (status === 'Assigned' && assignedToJobTitle) {
            updateData.assignedTo = assignedToJobTitle;
            updateData.assignedAdminUsername = actingAdmin;

            const eligibleSolvers = this.cachedUsers.filter(u => 
                u.role === 'Solver' && u.jobTitle === assignedToJobTitle && !u.isBanned
            );
            
            if (eligibleSolvers.length > 0) {
                eligibleSolvers.sort((a, b) => a.username.localeCompare(b.username));
                const totalInRole = this.cachedReports.filter(r => r.assignedTo === assignedToJobTitle).length;
                const solverIndex = totalInRole % eligibleSolvers.length;
                const selectedSolver = eligibleSolvers[solverIndex];

                updateData.assignedSolverUsername = selectedSolver.username;
                updateData.assignedSolverName = selectedSolver.fullName;
            } else {
                this.showToast("No specialist found for: " + assignedToJobTitle + ". searching General Tech...", "info");
                const fallbackPool = this.cachedUsers.filter(u => u.jobTitle === "Staff General Technician" && !u.isBanned);
                if(fallbackPool.length > 0) {
                    const selected = fallbackPool[0];
                    updateData.assignedSolverUsername = selected.username;
                    updateData.assignedSolverName = selected.fullName;
                    updateData.assignedTo = "Staff General Technician";
                }
            }
        }

        if(declineReason) updateData.declineReason = declineReason;

        try {
            await updateDoc(reportRef, updateData);
            await this.refreshData(); 
            return true;
        } catch (e) {
            console.error("Update Failed:", e);
            return false;
        }
    },

    getTrans: function(key) {
        const lang = localStorage.getItem('unifix_lang') || 'en';
        return TRANSLATIONS[lang][key] || key;
    },

    applyLanguage: function() {
        const lang = localStorage.getItem('unifix_lang') || 'en';
        const texts = TRANSLATIONS[lang];
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (texts[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = texts[key];
                } else {
                    el.innerText = texts[key];
                }
            }
        });

        const userIn = document.getElementById('username');
        const passIn = document.getElementById('password');
        if (userIn && texts.phUsername) userIn.placeholder = texts.phUsername;
        if (passIn && texts.phPassword) passIn.placeholder = texts.phPassword;

        const langBtnText = document.getElementById('langBtnText');
        if (langBtnText) langBtnText.innerText = texts.langName;
    },

    updateReportContent: async function(id, newData) {
        const report = this.cachedReports.find(r => r.id === id);
        if(!report) return false;
        const reportRef = doc(db, "reports", report.firebaseId);
        await updateDoc(reportRef, newData);
        await this.refreshData();
        return true;
    },

    warnUser: async function(username, reason) {
        const user = this.cachedUsers.find(u => u.username === username);
        if(user) {
            const newWarnings = (user.warnings || 0) + 1;
            const userRef = doc(db, "users", user.firebaseId);
            await updateDoc(userRef, { 
                warnings: newWarnings, 
                isBanned: newWarnings >= 3,
                lastWarningReason: reason
            });
            await this.refreshData();
            return `Warning sent. Total: ${newWarnings}/3`;
        }
        return "User not found.";
    },

    deleteUser: async function(username) {
        const user = this.cachedUsers.find(u => u.username === username);
        if(user) {
            try {
                const batch = writeBatch(db);
                batch.delete(doc(db, "users", user.firebaseId));
                const userReports = this.cachedReports.filter(r => r.reporterUsername === username);
                userReports.forEach(r => batch.delete(doc(db, "reports", r.firebaseId)));
                await batch.commit();
                await this.refreshData();
                return true;
            } catch (e) {
                console.error(e);
                return false;
            }
        }
        return false;
    },

    softDeleteReport: async function(id) {
        const report = this.cachedReports.find(r => r.id === id);
        if(report) {
            await updateDoc(doc(db, "reports", report.firebaseId), { hiddenFromReporter: true });
            await this.refreshData();
            return true;
        }
        return false;
    },

    hideReportFromAdmin: async function(id) {
        const report = this.cachedReports.find(r => r.id === id);
        if(report) {
            await updateDoc(doc(db, "reports", report.firebaseId), { hiddenFromAdmin: true });
            await this.refreshData();
            return true;
        }
        return false;
    },

    hideReportFromSolver: async function(id) {
        const report = this.cachedReports.find(r => r.id === id);
        if(report) {
            await updateDoc(doc(db, "reports", report.firebaseId), { hiddenFromSolver: true });
            await this.refreshData();
            return true;
        }
        return false;
    },

    hardDeleteReport: async function(id) {
        const report = this.cachedReports.find(r => r.id === id);
        if(report) {
            await deleteDoc(doc(db, "reports", report.firebaseId));
            await this.refreshData();
            return true;
        }
        return false;
    },

    showToast: function(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if(!container) return;
        const bgClass = type === 'success' ? 'text-bg-success' : type === 'danger' ? 'text-bg-danger' : type === 'warning' ? 'text-bg-warning' : 'text-bg-primary';
        const toastHTML = `<div class="toast align-items-center ${bgClass} border-0" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">${message}</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div></div>`;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = toastHTML;
        container.appendChild(tempDiv.firstElementChild);
        const toast = new bootstrap.Toast(container.lastElementChild);
        toast.show();
    },

    confirmAction: function(message, callback) {
        const modalEl = document.getElementById('globalConfirmModal');
        if(modalEl) {
            document.getElementById('globalConfirmBody').innerText = message;
            const confirmBtn = document.getElementById('globalConfirmBtn');
            const newBtn = confirmBtn.cloneNode(true);
            confirmBtn.parentNode.replaceChild(newBtn, confirmBtn);
            newBtn.addEventListener('click', () => {
                bootstrap.Modal.getInstance(modalEl).hide();
                callback();
            });
            new bootstrap.Modal(modalEl).show();
        } else {
            if(confirm(message)) callback();
        }
    },

    initDOMManipulation: function() {
        setInterval(() => {
            const clockEl = document.getElementById('liveClock');
            if(clockEl) {
                clockEl.innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }
        }, 1000);
    },

    toggleTheme: function() {
        let current = localStorage.getItem('unifix_theme') || 'light';
        localStorage.setItem('unifix_theme', current === 'light' ? 'dark' : 'light');
        this.applyTheme();
    },

    applyTheme: function() {
        const theme = localStorage.getItem('unifix_theme') || 'light';
        document.documentElement.setAttribute('data-bs-theme', theme);
        const icon = document.getElementById('themeIcon');
        if(icon) icon.className = theme === 'light' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
    },

    toggleLanguage: function() {
        let current = localStorage.getItem('unifix_lang') || 'en';
        localStorage.setItem('unifix_lang', current === 'en' ? 'am' : 'en');
        location.reload();
    }
};

window.System = System;
System.init();