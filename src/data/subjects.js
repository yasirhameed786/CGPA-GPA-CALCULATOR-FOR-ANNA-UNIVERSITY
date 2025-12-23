// Comprehensive list of Anna University R2021 subjects
// Focusing on major branches: CSE, IT, ECE, EEE, AIDS, MECH, CIVIL
// Data reflects Official Anna University Regulation 2021 Curriculum

export const SUBJECTS = [
    // ==========================================
    // SEMESTER 1 (COMMON TO ALL BRANCHES)
    // ==========================================
    { code: 'HS3151', name: 'Professional English - I', credit: 3 },
    { code: 'MA3151', name: 'Matrices and Calculus', credit: 4 },
    { code: 'PH3151', name: 'Engineering Physics', credit: 3 },
    { code: 'CY3151', name: 'Engineering Chemistry', credit: 3 },
    { code: 'GE3151', name: 'Problem Solving and Python Programming', credit: 3 },
    { code: 'GE3171', name: 'Problem Solving and Python Programming Laboratory', credit: 2 },
    { code: 'BS3171', name: 'Physics and Chemistry Laboratory', credit: 2 },
    { code: 'GE3172', name: 'English Laboratory', credit: 1 },

    // ==========================================
    // SEMESTER 2 (CIRCUIT BRANCHES: CSE, IT, ECE, EEE, AIDS)
    // ==========================================
    { code: 'HS3251', name: 'Professional English - II', credit: 2 },
    { code: 'MA3251', name: 'Statistics and Numerical Methods', credit: 4 },
    { code: 'PH3256', name: 'Physics for Information Science', credit: 3 },
    { code: 'BE3251', name: 'Basic Electrical and Electronics Engineering', credit: 3 },
    { code: 'GE3251', name: 'Engineering Graphics', credit: 4 },
    { code: 'CS3251', name: 'Programming in C', credit: 3 },
    { code: 'GE3252', name: 'Tamils and Technology', credit: 1 },
    { code: 'GE3271', name: 'Engineering Practices Laboratory', credit: 2 },
    { code: 'CS3271', name: 'Programming in C Laboratory', credit: 2 },
    { code: 'GE3272', name: 'Communication Laboratory', credit: 2 },

    // Non-Circuit Sem 2 (Mech, Civil, etc - simplified)
    { code: 'PH3251', name: 'Materials Science', credit: 3 },

    // ==========================================
    // COMPUTER SCIENCE AND ENGINEERING (CSE)
    // ==========================================
    // Semester 3
    { code: 'MA3354', name: 'Discrete Mathematics', credit: 4 },
    { code: 'CS3351', name: 'Digital Principles and Computer Organization', credit: 4 },
    { code: 'CS3352', name: 'Foundations of Data Science', credit: 3 },
    { code: 'CS3301', name: 'Data Structures', credit: 3 },
    { code: 'CS3391', name: 'Object Oriented Programming', credit: 3 },
    { code: 'CS3311', name: 'Data Structures Laboratory', credit: 1.5 },
    { code: 'CS3381', name: 'Object Oriented Programming Laboratory', credit: 1.5 },
    { code: 'CS3361', name: 'Data Science Laboratory', credit: 2 },
    { code: 'GE3361', name: 'Professional Development', credit: 1 },

    // Semester 4
    { code: 'CS3451', name: 'Introduction to Operating Systems', credit: 3 },
    { code: 'CS3491', name: 'Artificial Intelligence and Machine Learning', credit: 4 },
    { code: 'CS3492', name: 'Database Management Systems', credit: 3 },
    { code: 'CS3401', name: 'Algorithms', credit: 4 },
    { code: 'CS3452', name: 'Theory of Computation', credit: 3 },
    { code: 'GE3451', name: 'Environmental Sciences and Sustainability', credit: 3 },
    { code: 'CS3461', name: 'Operating Systems Laboratory', credit: 1.5 },
    { code: 'CS3481', name: 'Database Management Systems Laboratory', credit: 1.5 },

    // Semester 5
    { code: 'CS3591', name: 'Computer Networks', credit: 4 },
    { code: 'CS3501', name: 'Compiler Design', credit: 4 },
    { code: 'CB3491', name: 'Cryptography and Cyber Security', credit: 3 },
    { code: 'CS3551', name: 'Distributed Computing', credit: 3 },
    // Professional Electives I (Common selections)
    { code: 'CCS334', name: 'Big Data Analytics', credit: 3 },
    { code: 'CCS375', name: 'Web Technology', credit: 3 },

    // Semester 6
    { code: 'CCS356', name: 'Object Oriented Software Engineering', credit: 3 },
    { code: 'CS3691', name: 'Embedded Systems and IoT', credit: 4 },
    { code: 'CS3611', name: 'Mini Project', credit: 2 },
    // Professional Electives II, III
    { code: 'CCS336', name: 'Cloud Computing', credit: 3 },
    { code: 'CCS332', name: 'App Development', credit: 3 },

    // Semester 7
    { code: 'GE3791', name: 'Human Rights', credit: 3 },
    { code: 'CS3711', name: 'Mechatronics', credit: 3 }, // Common Mgmt
    // Professional Electives IV, V, VI
    { code: 'CCS341', name: 'Data Warehousing and Data Mining', credit: 3 },
    { code: 'CCS349', name: 'Image Processing', credit: 3 },

    // Semester 8
    { code: 'CS3811', name: 'Project Work', credit: 10 },

    // ==========================================
    // INFORMATION TECHNOLOGY (IT)
    // ==========================================
    // Semester 3 (Specifics diff from CSE)
    { code: 'IT3301', name: 'Data Structures', credit: 3 },
    // Semester 4
    { code: 'IT3401', name: 'Web Essentials', credit: 4 },
    // Semester 5
    { code: 'IT3501', name: 'Full Stack Development', credit: 4 },

    // ==========================================
    // ELECTRONICS AND COMMUNICATION (ECE)
    // ==========================================
    // Semester 3
    { code: 'MA3355', name: 'Random Processes and Linear Algebra', credit: 4 },
    { code: 'EC3354', name: 'Signals and Systems', credit: 4 },
    { code: 'EC3353', name: 'Electronic Devices and Circuits', credit: 3 },
    { code: 'EC3351', name: 'Control Systems', credit: 3 },
    { code: 'EC3352', name: 'Digital Electronics', credit: 3 },
    { code: 'EC3361', name: 'Electronic Devices and Circuits Laboratory', credit: 1.5 },

    // Semester 4
    { code: 'EC3452', name: 'Electromagnetic Fields', credit: 3 },
    { code: 'EC3401', name: 'Networks and Security', credit: 4 },
    { code: 'EC3451', name: 'Linear Integrated Circuits', credit: 3 },
    { code: 'EC3492', name: 'Digital Signal Processing', credit: 4 },
    { code: 'EC3491', name: 'Communication Systems', credit: 3 },
    { code: 'EC3461', name: 'Communication Systems Laboratory', credit: 1.5 },
    { code: 'EC3462', name: 'Linear Integrated Circuits Laboratory', credit: 1.5 },

    // Semester 5
    { code: 'EC3501', name: 'Wireless Communication', credit: 4 },
    { code: 'EC3552', name: 'VLSI and Chip Design', credit: 3 },
    { code: 'EC3551', name: 'Transmission Lines and RF Systems', credit: 3 },

    // ==========================================
    // ELECTRICAL AND ELECTRONICS (EEE)
    // ==========================================
    // Semester 3
    { code: 'MA3303', name: 'Probability and Complex Functions', credit: 4 },
    { code: 'EE3301', name: 'Electromagnetic Fields', credit: 4 },
    { code: 'EE3302', name: 'Digital Logic Circuits', credit: 3 },
    { code: 'EC3301', name: 'Electron Devices and Circuits', credit: 3 },
    { code: 'EE3303', name: 'Electrical Machines - I', credit: 3 },

    // Semester 4
    { code: 'EE3401', name: 'Transmission and Distribution', credit: 3 },
    { code: 'EE3402', name: 'Linear Integrated Circuits', credit: 3 },
    { code: 'EE3403', name: 'Measurements and Instrumentation', credit: 3 },
    { code: 'EE3404', name: 'Microprocessor and Microcontroller', credit: 3 },
    { code: 'EE3405', name: 'Electrical Machines - II', credit: 3 },

    // ==========================================
    // ARTIFICIAL INTELLIGENCE & DATA SCIENCE (AIDS)
    // ==========================================
    // Semester 3
    { code: 'AD3391', name: 'Artificial Intelligence', credit: 3 },
    { code: 'AD3351', name: 'Design and Analysis of Algorithms', credit: 4 },
    { code: 'AD3301', name: 'Data Exploration and Visualization', credit: 4 },

    // Semester 4
    { code: 'AD3491', name: 'Fundamentals of Data Science and Analytics', credit: 4 },
    { code: 'AD3451', name: 'Deep Learning', credit: 3 },

    // ==========================================
    // OPEN ELECTIVES / OTHERS
    // ==========================================
    { code: 'MX3084', name: 'Disaster Risk Reduction and Management', credit: 3 },
    { code: 'MX3089', name: 'Industrial Safety', credit: 3 },
];

export const findSubject = (code) => {
    if (!code) return null;
    return SUBJECTS.find(s => s.code.toLowerCase() === code.toLowerCase());
};
