import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Calculator, RotateCcw, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { findSubject } from '../data/subjects';

const GRADES = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'RA': 0,
    'SA': 0,
    'W': 0
};

export default function GPACalculator() {
    const [subjects, setSubjects] = useState([
        { id: 1, code: '', name: 'Subject 1', credit: 3, grade: 'O' },
        { id: 2, code: '', name: 'Subject 2', credit: 3, grade: 'A+' },
        { id: 3, code: '', name: 'Subject 3', credit: 4, grade: 'A' },
    ]);

    const [gpa, setGpa] = useState(0);

    useEffect(() => {
        calculateGPA();
    }, [subjects]);

    const calculateGPA = () => {
        let totalCredits = 0;
        let totalPoints = 0;

        subjects.forEach(sub => {
            const credit = parseFloat(sub.credit) || 0;
            const points = GRADES[sub.grade] || 0;

            totalCredits += credit;
            totalPoints += (credit * points);
        });

        setGpa(totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2));
    };

    const addSubject = () => {
        setSubjects([
            ...subjects,
            { id: Date.now(), code: '', name: `Subject ${subjects.length + 1}`, credit: 3, grade: 'A' }
        ]);
    };

    const removeSubject = (id) => {
        setSubjects(subjects.filter(sub => sub.id !== id));
    };

    const updateSubject = (id, field, value) => {
        setSubjects(prev => prev.map(sub => {
            if (sub.id !== id) return sub;

            const updated = { ...sub, [field]: value };

            // Auto-fill if code changes
            if (field === 'code') {
                const found = findSubject(value);
                if (found) {
                    updated.name = found.name;
                    updated.credit = found.credit;
                }
            }
            return updated;
        }));
    };

    return (
        <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Calculator className="w-32 h-32 text-white" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                            GPA Result
                        </h2>
                        <p className="text-slate-400 mt-1">Based on {subjects.length} subjects</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <div className="text-5xl font-black text-white tracking-tight">
                                {gpa}
                            </div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
                                Grade Point Average
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-white">Subjects</h3>
                    <button
                        onClick={() => setSubjects([{ id: Date.now(), code: '', name: 'Subject 1', credit: 3, grade: 'O' }])}
                        className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                        title="Reset"
                    >
                        <RotateCcw className="w-5 h-5" />
                    </button>
                </div>

                <div className="space-y-4">
                    <AnimatePresence initial={false}>
                        {subjects.map((sub, index) => (
                            <motion.div
                                key={sub.id}
                                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                className="grid grid-cols-12 gap-4 items-center bg-slate-900/50 p-4 rounded-xl border border-white/5 group hover:border-purple-500/30 transition-colors"
                            >
                                <div className="col-span-12 sm:col-span-2">
                                    <label className="text-xs text-slate-500 mb-1 block sm:hidden">Code</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={sub.code}
                                            onChange={(e) => updateSubject(sub.id, 'code', e.target.value.toUpperCase())}
                                            placeholder="Code"
                                            className="w-full bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500/50 uppercase placeholder:normal-case"
                                        />
                                        {sub.code && !findSubject(sub.code) && (
                                            <button
                                                onClick={() => window.open(`https://www.google.com/search?q=Anna+University+Regulation+2021+credit+point+for+${sub.code}`, '_blank')}
                                                className="absolute right-2 top-2 p-1 text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/10 rounded transition-colors"
                                                title="Unknown Subject: Click to search credits online"
                                            >
                                                <Search className="w-4 h-4" />
                                            </button>
                                        )}
                                        {sub.code && findSubject(sub.code) && (
                                            <span className="absolute right-2 top-2.5 w-2 h-2 rounded-full bg-green-500/50" title="Found!" />
                                        )}
                                    </div>
                                </div>

                                <div className="col-span-12 sm:col-span-5">
                                    {findSubject(sub.code) ? (
                                        <div className="flex flex-col justify-center h-full">
                                            <p className="text-sm font-medium text-white truncate">{findSubject(sub.code).name}</p>
                                            <p className="text-xs text-green-400">{findSubject(sub.code).credit} Credits</p>
                                        </div>
                                    ) : (
                                        <>
                                            <label className="text-xs text-slate-500 mb-1 block sm:hidden">Subject Name</label>
                                            <input
                                                type="text"
                                                value={sub.name}
                                                onChange={(e) => updateSubject(sub.id, 'name', e.target.value)}
                                                placeholder="Subject Name"
                                                className="w-full bg-transparent border-b border-slate-700 focus:border-purple-500 outline-none text-white px-2 py-1 transition-colors"
                                            />
                                        </>
                                    )}
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="text-xs text-slate-500 mb-1 block sm:hidden">Credits</label>
                                    {findSubject(sub.code) ? (
                                        <div className="w-full bg-slate-800/50 rounded-lg px-3 py-2 text-slate-400 border border-slate-700 cursor-not-allowed">
                                            {sub.credit} <span className="text-xs">Cr</span>
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <input
                                                type="number"
                                                min="1"
                                                max="10"
                                                value={sub.credit}
                                                onChange={(e) => updateSubject(sub.id, 'credit', e.target.value)}
                                                className="w-full bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500/50"
                                            />
                                            <span className="absolute right-3 top-2 text-xs text-slate-500 pointer-events-none">Cr</span>
                                        </div>
                                    )}
                                </div>

                                <div className="col-span-5 sm:col-span-2">
                                    <label className="text-xs text-slate-500 mb-1 block sm:hidden">Grade</label>
                                    <select
                                        value={sub.grade}
                                        onChange={(e) => updateSubject(sub.id, 'grade', e.target.value)}
                                        className="w-full bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none cursor-pointer"
                                    >
                                        {Object.keys(GRADES).map(g => (
                                            <option key={g} value={g}>{g}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-span-1 sm:col-span-1 flex justify-end">
                                    <button
                                        onClick={() => removeSubject(sub.id)}
                                        className="p-2 text-slate-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <button
                    onClick={addSubject}
                    className="mt-6 w-full py-4 rounded-xl border-2 border-dashed border-slate-600/50 text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2 font-medium"
                >
                    <Plus className="w-5 h-5" />
                    Add Subject
                </button>
            </div>
        </div>
    );
}
