import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, CheckCircle, X, FileText, ChevronRight, ChevronLeft, AlertCircle, Heart } from 'lucide-react';
import { generateId, generateStudentNumber, getApplications, setApplications } from '../lib/store';

type UploadField = { key: string; label: string; required?: boolean };
const uploadFields: UploadField[] = [
  { key: 'learnerId', label: 'Birth Certificate / ID', required: true },
  { key: 'reportCard', label: 'Progress Report', required: true },
  { key: 'guardianId', label: 'Parent/Guardian ID', required: true },
  { key: 'residence', label: 'Proof of Residence', required: true },
];

export const Admissions = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [disclaimer, setDisclaimer] = useState(false);
  const [files, setFiles] = useState({});
  const [learner, setL] = useState({ surname: '', firstName: '', dob: '', gender: '', grade: '', year: '2027' });
  const [parent1, setParent1] = useState({ firstName: '', surname: '', id: '' });
  const [otherContact, setOtherContact] = useState({ cell: '', email: '' });
  const [prevSchool, setPrevSchool] = useState({ name: '' });
  const [prevSchoolData, setPrevSchoolData] = useState({ name: '', grade: '' });

  const inp = 'border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-[#1A3A8F]/40 outline-none bg-white';

  const validateStep = () => {
    if (step === 1) {
      if (!learner.firstName || !learner.surname || !learner.grade) { setError('Please fill required fields.'); return false; }
    }
    if (step === 2) {
      if (!parent1.firstName || !parent1.id) { setError('Please fill parent details.'); return false; }
    }
    if (step === 3 && !disclaimer) { setError('Please accept declaration.'); return false; }
    setError(''); return true;
  };

  const goNext = () => { if (validateStep()) setStep(s => s < 3 ? s + 1 : 3); };
  const goBack = () => { setError(''); if (step > 1) setStep(s => s - 1); };

  const handleFileChange = async (key, file) => {
    if (file) setFiles(prev => ({ ...prev, [key]: file.name }));
    else setFiles(prev => { const n = {...prev}; delete n[key]; return n; });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    setSubmitting(true);
    setTimeout(() => {
      const app = {
        id: generateId(), firstName: learner.firstName, lastName: learner.surname, dob: learner.dob, gender: learner.gender,
        grade: learner.grade, year: learner.year, studentNumber: generateStudentNumber(learner.year),
        guardianName: parent1.firstName + ' ' + parent1.surname, status: 'Pending', submittedDate: new Date().toISOString().slice(0, 10), uploads: [],
      };
      setApplications([...getApplications(), app]);
      setSubmitted(true);
      setSubmitting(false);
    }, 1500);
  };

  if (submitted) return (
    <div className="min-h-screen py-16 px-4 bg-white flex items-center justify-center">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#1A3A8F]"><CheckCircle size={32} className="text-white" /></div>
        <h1 className="text-2xl font-bold mb-2" style={{color:'#1A3A8F'}}>Application Submitted!</h1>
        <p className="text-gray-600">Thank you for applying to Mary Ralake High School.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 px-4" style={{background:'#E8EDFB'}}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2" style={{color:'#1A3A8F'}}>Admissions 2027</h1>
        <p className="text-center text-gray-600 mb-8">Mary Ralake High School - No-Fee Public School</p>
        <div className="flex justify-between mb-8 px-4">
          {[1,2,3].map(n => <div key={n} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === n ? 'bg-[#1A3A8F] text-white' : step > n ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>{n}</div>)}
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-lg space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-bold" style={{color:'#1A3A8F'}}>Learner Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-xs text-gray-600">Surname *</label><input className={inp} value={learner.surname} onChange={e => setL(p => ({...p, surname:e.target.value}))} /></div>
                <div><label className="text-xs text-gray-600">First Name *</label><input className={inp} value={learner.firstName} onChange={e => setL(p => ({...p, firstName:e.target.value}))} /></div>
                <div><label className="text-xs text-gray-600">Date of Birth</label><input type="date" className={inp} value={learner.dob} onChange={e => setL(p => ({...p, dob:e.target.value}))} /></div>
                <div><label className="text-xs text-gray-600">Gender</label>
                  <select className={inp} value={learner.gender} onChange={e => setL(p => ({...p, gender:e.target.value}))}>
                    <option value="">Select</option><option value="Male">Male</option><option value="Female">Female</option>
                  </select>
                </div>
                <div><label className="text-xs text-gray-600">Grade *</label>
                  <select className={inp} value={learner.grade} onChange={e => setL(p => ({...p, grade:e.target.value}))}>
                    <option value="">Select Grade</option>
                    <option value="8">Grade 8</option><option value="9">Grade 9</option><option value="10">Grade 10</option>
                    <option value="11">Grade 11</option><option value="12">Grade 12</option>
                  </select>
                </div>
                <div><label className="text-xs text-gray-600">Year</label><input className={inp} value={learner.year} readOnly /></div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-bold" style={{color:'#1A3A8F'}}>Parent/Guardian Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-xs text-gray-600">First Name *</label><input className={inp} value={parent1.firstName} onChange={e => setParent1(p => ({...p, firstName:e.target.value}))} /></div>
                <div><label className="text-xs text-gray-600">Surname *</label><input className={inp} value={parent1.surname} onChange={e => setParent1(p => ({...p, surname:e.target.value}))} /></div>
                <div><label className="text-xs text-gray-600">ID Number *</label><input className={inp} value={parent1.id} onChange={e => setParent1(p => ({...p, id:e.target.value}))} /></div>
                <div><label className="text-xs text-gray-600">Cell Number</label><input className={inp} value={otherContact.cell} onChange={e => setOtherContact(p => ({...p, cell:e.target.value}))} /></div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="font-bold" style={{color:'#1A3A8F'}}>Documents</h2>
              <p className="text-sm text-gray-500">Upload documents when available.</p>
              {uploadFields.map(f => (
                <div key={f.key} className="flex items-center gap-3 p-3 border rounded-lg">
                  <FileText size={20} style={{color:'#1A3A8F'}} />
                  <span className="flex-1 text-sm">{f.label}{f.required && ' *'}</span>
                  <label className="text-xs font-bold cursor-pointer" style={{color:'#1A3A8F'}}>
                    {files[f.key] ? 'Change' : 'Upload'}
                    <input type="file" className="hidden" onChange={e => handleFileChange(f.key, e.target.files?.[0])} />
                  </label>
                </div>
              ))}
              <div className="p-4 bg-gray-50 rounded-lg">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={disclaimer} onChange={e => setDisclaimer(e.target.checked)} />
                  <span className="text-sm">I confirm the information is accurate.</span>
                </label>
              </div>
            </div>
          )}
          {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}
          <div className="flex justify-between pt-4 border-t">
            <button type="button" onClick={goBack} disabled={step === 1} className="px-4 py-2 rounded-lg border disabled:opacity-50">Back</button>
            {step < 3 ? <button type="button" onClick={goNext} className="px-6 py-2 rounded-lg text-white" style={{background:'#1A3A8F'}}>Next</button> : <button type="submit" disabled={submitting} className="px-6 py-2 rounded-lg text-white" style={{background:'#1A3A8F'}}>{submitting ? 'Submitting...' : 'Submit Application'}</button>}
          </div>
        </form>
      </div>
    </div>
  );
};
