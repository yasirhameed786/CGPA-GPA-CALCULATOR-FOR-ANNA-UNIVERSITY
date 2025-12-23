import React, { useState } from 'react';
import Layout from './components/Layout';
// Components to be created
import GPACalculator from './components/GPACalculator';
import CGPACalculator from './components/CGPACalculator';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('gpa');

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Tab Switcher */}
        <div className="flex justify-center">
          <div className="bg-slate-800/50 p-1 rounded-xl backdrop-blur-md border border-white/10 flex gap-1">
            {['gpa', 'cgpa'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === tab
                    ? 'text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 uppercase tracking-wide">
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'gpa' ? <GPACalculator /> : <CGPACalculator />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}

export default App;
