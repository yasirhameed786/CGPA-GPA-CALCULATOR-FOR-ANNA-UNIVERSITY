// Comprehensive list of common Anna University R2021 subjects
// Focusing on First Year (Common) and CSE/IT/ECE Semesters 2 & 3

export const SUBJECTS = [
    // Semester 1 (Common)
    { code: 'HS3151', name: 'Professional English - I', credit: 3 },
    { code: 'MA3151', name: 'Matrices and Calculus', credit: 4 },
    { code: 'PH3151', name: 'Engineering Physics', credit: 3 },
    { code: 'CY3151', name: 'Engineering Chemistry', credit: 3 },
    { code: 'GE3151', name: 'Problem Solving and Python Programming', credit: 3 },
    { code: 'GE3171', name: 'Problem Solving and Python Programming Laboratory', credit: 2 },
    { code: 'BS3171', name: 'Physics and Chemistry Laboratory', credit: 2 },
    { code: 'GE3172', name: 'English Laboratory', credit: 1 },

    // Semester 2 (CSE/IT)
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

    // Semester 3 (CSE)
    { code: 'MA3354', name: 'Discrete Mathematics', credit: 4 },
    { code: 'CS3351', name: 'Digital Principles and Computer Organization', credit: 4 },
    { code: 'CS3352', name: 'Foundations of Data Science', credit: 3 },
    { code: 'CS3301', name: 'Data Structures', credit: 3 },
    { code: 'CS3391', name: 'Object Oriented Programming', credit: 3 },
    { code: 'CS3311', name: 'Data Structures Laboratory', credit: 1.5 },
    { code: 'CS3381', name: 'Object Oriented Programming Laboratory', credit: 1.5 },
    { code: 'CS3361', name: 'Data Science Laboratory', credit: 2 },
    { code: 'GE3361', name: 'Professional Development', credit: 1 },

    // Semester 3 (IT - overlapping with CSE mostly, adding specific diffs if any)
    { code: 'IT3301', name: 'Data Structures', credit: 3 }, // Often same code/name but just in case

    // Semester 3 (ECE)
    { code: 'EC3354', name: 'Signals and Systems', credit: 4 },
    { code: 'EC3353', name: 'Electronic Devices and Circuits', credit: 3 },
    { code: 'EC3351', name: 'Control Systems', credit: 3 },
    { code: 'EC3352', name: 'Digital Electronics', credit: 3 },
];

export const findSubject = (code) => {
    if (!code) return null;
    return SUBJECTS.find(s => s.code.toLowerCase() === code.toLowerCase());
};
