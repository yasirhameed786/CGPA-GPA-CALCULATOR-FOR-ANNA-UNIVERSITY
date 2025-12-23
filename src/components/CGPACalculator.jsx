import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Trophy, RotateCcw, Calculator, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { findSubject } from '../data/subjects';

export default function CGPACalculator() {
    const [semesters, setSemesters] = useState([
        { id: 1, name: 'Semester 1', gpa: '', credits: '' },
        { id: 2, name: 'Semester 2', gpa: '', credits: '' },
    ]);

    const [cgpa, setCgpa] = useState(0);
    const [showCreditCalc, setShowCreditCalc] = useState(null); // ID of semester being edited

    useEffect(() => {
        calculateCGPA();
    }, [semesters]);

    const calculateCGPA = () => {
        let totalCredits = 0;
        let totalPoints = 0;

        semesters.forEach(sem => {
            const gpa = parseFloat(sem.gpa);
            const credits = parseFloat(sem.credits);

            if (!isNaN(gpa) && !isNaN(credits) && credits > 0) {
                totalCredits += credits;
                totalPoints += (gpa * credits);
            }
        });

        setCgpa(totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2));
    };

    const addSemester = () => {
        setSemesters([
            ...semesters,
            { id: Date.now(), name: `Semester ${semesters.length + 1}`, gpa: '', credits: '' }
        ]);
    };

    const removeSemester = (id) => {
        setSemesters(semesters.filter(sem => sem.id !== id));
    };

    const updateSemester = (id, field, value) => {
        setSemesters(semesters.map(sem =>
            sem.id === id ? { ...sem, [field]: value } : sem
        ));
    };

    const getClass = (val) => {
        const num = parseFloat(val);
        if (num >= 8.5) return "First Class with Distinction";
        if (num >= 6.5) return "First Class";
        if (num >= 5.0) return "Second Class";
        return "-";
    };

    // Credit Calculator Logic
    const CreditCalculatorModal = ({ semId, onClose }) => {
        const [codes, setCodes] = useState(['']);

        const totalCalcCredits = codes.reduce((acc, code) => {
            const sub = findSubject(code);
            return acc + (sub ? sub.credit : 0);
        }, 0);

        const applyCredits = () => {
            updateSemester(semId, 'credits', totalCalcCredits);
            onClose();
        };

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-slate-900 border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">Calculate Credits</h3>
                        <button onClick={onClose}><X className="w-5 h-5 text-slate-400 hover:text-white" /></button>
                    </div>

                    <p className="text-sm text-slate-400 mb-4">
                        Enter subject codes (e.g., HS3151) to tally total credits.
                    </p>

                    <div className="space-y-3 max-h-[300px] overflow-y-auto mb-4 custom-scrollbar">
                        {codes.map((code, idx) => {
                            const sub = findSubject(code);
                            return (
                                <div key={idx} className="flex gap-2">
                                    <div className="relative flex-1">
                                        <input
                                            value={code}
                                            onChange={(e) => {
                                                const newCodes = [...codes];
                                                newCodes[idx] = e.target.value.toUpperCase();
                                                setCodes(newCodes);
                                            }}
                                            placeholder="Subject Code"
                                            className="w-full bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500/50 uppercase"
                                            autoFocus={idx === codes.length - 1}
                                        />
                                        {code && sub && (
                                            <span className="absolute right-3 top-2.5 text-xs text-green-400 font-bold">
                                                {sub.credit} Cr
                                            </span>
                                        )}
                                    </div>
                                    {codes.length > 1 && (
                                        <button
                                            onClick={() => setCodes(codes.filter((_, i) => i !== idx))}
                                            className="text-slate-500 hover:text-red-400"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => setCodes([...codes, ''])}
                        className="text-sm text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 mb-6"
                    >
                        <Plus className="w-4 h-4" /> Add another code
                    </button>

                    <div className="flex justify-between items-center border-t border-white/10 pt-4">
                        <div className="text-sm">
                            Total: <span className="font-bold text-xl text-white">{totalCalcCredits}</span> Credits
                        </div>
                        <button
                            onClick={applyCredits}
                            className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                            Apply Credits
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Trophy className="w-32 h-32 text-yellow-500" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
                            CGPA Result
                        </h2>
                        <p className="text-slate-400 mt-1">
                            Class: <span className="text-white font-medium">{getClass(cgpa)}</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <div className="text-5xl font-black text-white tracking-tight">
                                {cgpa}
                            </div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
                                Cumulative GPA
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-white">Semesters</h3>
                    <button
                        onClick={() => setSemesters([{ id: Date.now(), name: 'Semester 1', gpa: '', credits: '' }])}
                        className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                        title="Reset"
                    >
                        <RotateCcw className="w-5 h-5" />
                    </button>
                </div>

                <div className="space-y-4">
                    <AnimatePresence initial={false}>
                        {semesters.map((sem, index) => (
                            <motion.div
                                key={sem.id}
                                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                className="grid grid-cols-12 gap-4 items-center bg-slate-900/50 p-4 rounded-xl border border-white/5 group hover:border-yellow-500/30 transition-colors"
                            >
                                <div className="col-span-12 sm:col-span-5">
                                    <label className="text-xs text-slate-500 mb-1 block sm:hidden">Semester</label>
                                    <input
                                        type="text"
                                        value={sem.name}
                                        onChange={(e) => updateSemester(sem.id, 'name', e.target.value)}
                                        className="w-full bg-transparent border-b border-slate-700 focus:border-yellow-500 outline-none text-white px-2 py-1 transition-colors"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-xs text-slate-500 mb-1 block sm:hidden">GPA</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            max="10"
                                            value={sem.gpa}
                                            onChange={(e) => updateSemester(sem.id, 'gpa', e.target.value)}
                                            placeholder="obtained GPA"
                                            className="w-full bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-yellow-500/50"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-5 sm:col-span-3">
                                    <label className="text-xs text-slate-500 mb-1 block sm:hidden">Credits</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="number"
                                            min="1"
                                            value={sem.credits}
                                            onChange={(e) => updateSemester(sem.id, 'credits', e.target.value)}
                                            placeholder="Total Credits"
                                            className="w-full bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-yellow-500/50"
                                        />
                                        <button
                                            onClick={() => setShowCreditCalc(sem.id)}
                                            className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors"
                                            title="Calculate Credits from Subject Codes"
                                        >
                                            <Calculator className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-1 sm:col-span-1 flex justify-end">
                                    <button
                                        onClick={() => removeSemester(sem.id)}
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
                    onClick={addSemester}
                    className="mt-6 w-full py-4 rounded-xl border-2 border-dashed border-slate-600/50 text-slate-400 hover:text-white hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-2 font-medium"
                >
                    <Plus className="w-5 h-5" />
                    Add Semester
                </button>
            </div>

            {showCreditCalc && (
                <CreditCalculatorModal
                    semId={showCreditCalc}
                    onClose={() => setShowCreditCalc(null)}
                />
            )}
        </div>
    );
}
