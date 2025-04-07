import React, { useState, useEffect, useRef } from 'react';
import { FiCopy, FiCheck, FiSend, FiCode, FiChevronDown, FiEye, FiEyeOff, FiCpu, FiTerminal } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Editor, { OnChange, OnMount } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

interface Language {
  name: string;
  extension: string;
  comments: string[];
  parse: (code: string) => Record<string, string>;
}

const languages: { [key: string]: Language } = {
  python: {
    name: "Python",
    extension: "py",
    comments: [
      "# TIT Developer Community Registration",
      "# Write your details in the form of code using Python.",
      "# Declare and assign values to the following variables:",
      "# name (Full Name)",
      "# year (Year of Study)",
      "# enrollment (Enrollment Number)",
      "# course (Course Name)",
      "# college (College Name)",
      "# email (Email Address)",
      "# phone (Phone Number)",
      "# After filling in the details in the exact given order, print \"Registration complete!\" at the end.",
      ""
    ],
    parse: (code) => {
      const data: Record<string, string> = {};
      const lines = code.split('\n');
      lines.forEach(line => {
        if (line.includes('=') && !line.trim().startsWith('#')) {
          const [key, value] = line.split('=').map(s => s.trim());
          if (key && value) {
            data[key] = value.replace(/^["']|["']$/g, '');
          }
        }
      });
      return data;
    }
  },
  javascript: {
    name: "JavaScript",
    extension: "js",
    comments: [
      "// TIT Developer Community Registration",
      "// Write your details in the form of code using JavaScript.",
      "// Declare and assign values to the following variables:",
      "// name (Full Name)",
      "// year (Year of Study)",
      "// enrollment (Enrollment Number)",
      "// course (Course Name)",
      "// college (College Name)",
      "// email (Email Address)",
      "// phone (Phone Number)",
      "// After filling in the details in the exact given order, print \"Registration complete!\" at the end.",
    ],
    parse: (code) => {
      const data: Record<string, string> = {};
      const lines = code.split('\n');
      lines.forEach(line => {
        if (line.includes('=') && !line.trim().startsWith('//')) {
          const [keyPart, value] = line.split('=').map(s => s.trim());
          const key = keyPart.replace(/^(const|let|var)\s+/, '').replace(';', '');
          if (key && value) {
            data[key] = value.replace(/^["']|["'];$/g, '');
          }
        }
      });
      return data;
    }
  },
  java: {
    name: "Java",
    extension: "java",
    comments: [
      "// TIT Developer Community Registration",
      "// Write your details in the form of code using Java.",
      "// Declare and assign values to the following variables:",
      "// name (Full Name)",
      "// year (Year of Study)",
      "// enrollment (Enrollment Number)",
      "// course (Course Name)",
      "// college (College Name)",
      "// email (Email Address)",
      "// phone (Phone Number)",
      "// After filling in the details in the exact given order, print \"Registration complete!\" at the end.",
    ],
    parse: (code) => {
      const data: Record<string, string> = {};
      const lines = code.split('\n');
      lines.forEach(line => {
        if (line.includes('=') && line.trim().startsWith('String') && !line.includes('System.out.println(')) {
          const [keyPart, value] = line.split('=').map(s => s.trim());
          const key = keyPart.replace(/^String\s+/, '').replace(';', '');
          if (key && value) {
            data[key] = value.replace(/^["']|["']$/g, '');
          }
        }
      });
      return data;
    }
  },
  cpp: {
    name: "C++",
    extension: "cpp",
    comments: [
      "// TIT Developer Community Registration",
      "// Write your details in the form of code using C++.",
      "// Declare and assign values to the following variables:",
      "// name (Full Name)",
      "// year (Year of Study)",
      "// enrollment (Enrollment Number)",
      "// course (Course Name)",
      "// college (College Name)",
      "// email (Email Address)",
      "// phone (Phone Number)",
      "// After filling in the details in the exact given order , print \"Registration complete!\" at the end.",
    ],
    parse: (code) => {
      const data: Record<string, string> = {};
      const lines = code.split('\n');
      lines.forEach(line => {
        if (line.includes('=') && line.includes('std::string') && !line.includes('std::cout <<')) {
          const [keyPart, value] = line.split('=').map(s => s.trim());
          const key = keyPart.replace(/^std::string\s+/, '').replace(';', '');
          if (key && value) {
            data[key] = value.replace(/^["']|["']$/g, '');
          }
        }
      });
      return data;
    }
  }
};

interface SimpleFormProps {
  onSubmit: (formData: Record<string, string>) => void;
  onReset: () => void;
}

const SimpleForm: React.FC<SimpleFormProps> = ({ onSubmit, onReset }) => {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    enrollment: '',
    course: '',
    college: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      year: '',
      enrollment: '',
      course: '',
      college: '',
      email: '',
      phone: '',
    });
    onReset();
  };

  const collegeOptions = ["TIT MAINS", "TIT EXCELLENCE", "TIT SCIENCE", "TIT ADVANCE"];
  const yearOptions = ["IST", "2ND", "3RD", "4TH"];

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-800 rounded-lg shadow-2xl border border-gray-700">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Year of Study</label>
        <select name="year" value={formData.year} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
          <option value="" disabled>Select Year</option>
          {yearOptions.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Enrollment Number</label>
        <input type="text" name="enrollment" value={formData.enrollment} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Course Name</label>
        <input type="text" name="course" value={formData.course} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">College Name</label>
        <select name="college" value={formData.college} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
          <option value="" disabled>Select College</option>
          {collegeOptions.map(college => (
            <option key={college} value={college}>{college}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Email Address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={handleReset} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded focus:outline-none focus:ring focus:ring-red-300">
          Reset
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded focus:outline-none focus:ring focus:ring-blue-300">
          Submit
        </button>
      </div>
    </form>
  );
};

const CodeEditorRegister = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [language, setLanguage] = useState<string>('python');
  const [code, setCode] = useState<string>(languages.python.comments.join('\n'));
  const [showLanguageDropdown, setShowLanguageDropdown] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showJsonPreview, setShowJsonPreview] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('Ready');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCode(languages[language].comments.join('\n'));
    setStatusMessage('Ready');
  }, [language]);

  const handleEditorChange: OnChange = (value) => {
    if (value === undefined) return;
    setCode(value);
    const parsedData = languages[language].parse(value);
    setFormData(parsedData);
    const isFormComplete = Object.values(parsedData).length === 6 && Object.values(parsedData).every(value => !!value);
    if (isFormComplete) {
      setStatusMessage('All fields completed!');
    } else {
      setStatusMessage('Fill in all placeholders.');
    }
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setCode(languages[newLanguage].comments.join('\n'));
    setFormData({});
    setStatusMessage('Ready');
    setShowLanguageDropdown(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setStatusMessage('Code copied to clipboard');
    setTimeout(() => setStatusMessage('Ready'), 2000);
  };

  const handleSubmit = (submittedData: Record<string, string>) => {
    setIsSubmitting(true);
    setStatusMessage('Executing registration...');
    const dots = ['.', '..', '...'];
    let i = 0;
    const interval = setInterval(() => {
      setStatusMessage(`Executing registration${dots[i]}`);
      i = (i + 1) % dots.length;
    }, 500);
    setTimeout(() => {
      clearInterval(interval);
      setStatusMessage('Registration successful!');
      console.log('Submitted:', submittedData);
      setIsSubmitting(false);
      setShowSuccessPopup(true);
      setTimeout(() => setStatusMessage('Ready'), 2000);
      setTimeout(() => setShowSuccessPopup(false), 3000);
    }, 3000);
  };

  const handleReset = () => {
    setCode(languages[language].comments.join('\n'));
    setFormData({});
    setStatusMessage('Ready');
  };

  const isFormComplete = () => {
    return Object.values(formData).length === 6 && Object.values(formData).every(value => !!value);
  };

  const formatJson = (data: Record<string, string>) => {
    const jsonStr = JSON.stringify(data, null, 2);
    return jsonStr
      .replace(/"([^"]+)":/g, '<span class="text-purple-400">"$1"</span>:')
      .replace(/"([^"]+)"/g, '<span class="text-green-400">"$1"</span>')
      .replace(/: (".*")/g, ': <span class="text-green-400">$1</span>')
      .replace(/: (true|false|null|\d+)/g, ': <span class="text-blue-400">$1</span>');
  };

  const handleEditorMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    const model = editor.getModel();
    if (model) {
      model.onDidChangeContent(() => {
        const lastLine = model.getLineCount();
        const lastLineContent = model.getLineContent(lastLine);
        const finalOutput = languages[language].comments[languages[language].comments.length - 1];
        if (lastLineContent !== finalOutput) {
          model.applyEdits([{
            range: new monaco.Range(lastLine, 1, lastLine, lastLineContent.length + 1),
            text: finalOutput || null,
            forceMoveMarkers: true
          }]);
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4">
      {isMobile ? (
        <SimpleForm onSubmit={handleSubmit} onReset={handleReset} />
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700"
        >
          {/* Editor Header */}
          <div className="bg-gray-750 px-6 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-3 font-mono text-sm flex items-center">
                <FiTerminal className="mr-2 text-blue-400" />
                <span className="text-blue-400">register.{languages[language].extension}</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="font-bold">TI Developer Registration</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowJsonPreview(!showJsonPreview)}
                className="flex items-center text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
              >
                {showJsonPreview ? (
                  <>
                    <FiEyeOff className="mr-1" />
                    Hide JSON
                  </>
                ) : (
                  <>
                    <FiEye className="mr-1" />
                    View JSON
                  </>
                )}
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyCode}
                className="flex items-center text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
              >
                {copied ? (
                  <>
                    <FiCheck className="mr-1 text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <FiCopy className="mr-1" />
                    Copy
                  </>
                )}
              </motion.button>
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
                >
                  <FiCode className="mr-1" />
                  {languages[language].name}
                  <FiChevronDown className={`ml-1 transition-transform ${showLanguageDropdown ? 'rotate-180' : ''}`} />
                </motion.button>
                <AnimatePresence>
                  {showLanguageDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-1 w-40 bg-gray-750 border border-gray-600 rounded-md shadow-lg z-10"
                    >
                      {Object.entries(languages).map(([key, lang]) => (
                        <motion.button
                          key={key}
                          whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                          onClick={() => handleLanguageChange(key)}
                          className={`w-full text-left px-3 py-2 text-sm ${language === key ? 'text-blue-400' : 'text-gray-300'}`}
                        >
                          {lang.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          {/* Editor Body */}
          <div className="flex flex-col h-[550px]">
            {/* Code Editor */}
            <div className="flex-1 p-5 overflow-auto font-mono text-sm bg-gray-900 relative">
              <Editor
                height="100%"
                defaultLanguage={language}
                theme="vs-dark"
                value={code}
                onChange={handleEditorChange}
                onMount={handleEditorMount}
                options={{
                  minimap: { enabled: false },
                  scrollbar: { vertical: "visible" },
                  wordWrap: "on",
                  fontFamily: "Fira Code, monospace",
                  fontSize: 14,
                  automaticLayout: true,
                  lineNumbers: "on",
                  folding: false,
                  renderLineHighlight: "none",
                  contextmenu: false,
                  readOnly: false,
                }}
              />
            </div>
            {/* JSON Preview */}
            {showJsonPreview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="p-5 bg-gray-850 overflow-auto font-mono text-sm border-t border-gray-700"
              >
                <h4 className="text-2xl font-bold mb-4">JSON Preview</h4>
                <pre className="whitespace-pre-wrap">
                  <code dangerouslySetInnerHTML={{ __html: formatJson(formData) }} />
                </pre>
              </motion.div>
            )}
            {/* Status Bar */}
            <div className="bg-gray-750 px-4 py-2 border-t border-gray-700 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-xs">
                  <motion.div
                    animate={{ 
                      color: statusMessage.includes('successful') ? '#10B981' : 
                            statusMessage.includes('Executing') ? '#3B82F6' : 
                            statusMessage.includes('Ready') ? '#9CA3AF' : '#F59E0B'
                    }}
                    className="flex items-center"
                  >
                    <FiCpu className="mr-2" />
                    <span>{statusMessage}</span>
                  </motion.div>
                </div>
                {!isFormComplete() && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs text-yellow-400"
                  >
                    Complete all placeholders to submit
                  </motion.div>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={isFormComplete() ? { scale: 1.05, backgroundColor: '#222741', boxShadow: '0 0 10px #3B82F6, 0 0 20px #3B82F6' } : {}}
                  whileTap={isFormComplete() ? { scale: 0.95 } : {}}
                  onClick={() => handleSubmit(formData)}
                  disabled={!isFormComplete() || isSubmitting}
                  className={`px-5 py-1.5 rounded text-sm flex items-center ${
                    isFormComplete() ? 
                      'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold' : 
                      'bg-gray-700 cursor-not-allowed text-gray-400'
                  }`}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Executing...
                    </motion.span>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Execute
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 p-6 text-center z-50 w-full max-w-md"
          >
            <div className="flex items-center justify-center mb-4">
              <FiCheck className="mr-2 text-green-400 text-2xl" />
              <h3 className="text-xl font-bold text-green-400">Registration Successful!</h3>
            </div>
            <p className="text-gray-300 mb-4">Thank you for registering with the TI Developer Community.</p>
            <button
              className="px-5 py-1.5 rounded bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90"
              onClick={() => setShowSuccessPopup(false)}
            >
              Close
            </button>
            <div className="mt-4 text-xs text-gray-400">
              <pre className="whitespace-pre-wrap">
                {[
                  "Initializing...",
                  "Connecting to server...",
                  "Verifying credentials...",
                  "Registration complete!"
                ].map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.5, duration: 0.5 }}
                  >
                    {msg}
                  </motion.div>
                ))}
              </pre>
            </div>
            {/* Hacker Terminal Animation */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center text-green-400 text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiTerminal />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodeEditorRegister;