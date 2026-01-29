"use client";
import React, { useState, useEffect } from 'react';

// --- تعريف هيكل البيانات (Types) ---
interface TeacherData {
  name: string;
  email: string;
  specialization: string;
  experience: string;
  program: string;
  availability: string;
  bio: string;
}

const EditTeacherProfile: React.FC = () => {
  // 1. حالة البيانات (Form State)
  const [formData, setFormData] = useState<TeacherData>({
    name: '',
    email: '',
    specialization: 'قرآن وتجويد',
    experience: '',
    program: 'الحلقات الجماعية الكبرى',
    availability: '',
    bio: '',
  });

  // 2. تحميل البيانات من localStorage عند بدء التشغيل
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';

    const savedData: TeacherData = {
      name: localStorage.getItem("teacherName") || "",
      email: localStorage.getItem("teacherEmail") || "",
      specialization: localStorage.getItem("teacherSpec") || "قرآن وتجويد",
      experience: localStorage.getItem("teacherExp") || "",
      program: localStorage.getItem("teacherProgram") || "الحلقات الجماعية الكبرى",
      availability: localStorage.getItem("teacherAvail") || "",
      bio: localStorage.getItem("teacherBio") || "",
    };
    setFormData(savedData);
  }, []);

  // 3. معالج تغيير المدخلات (Generic Change Handler)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // 4. دالة الحفظ
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("teacherName", formData.name);
    localStorage.setItem("teacherEmail", formData.email);
    localStorage.setItem("teacherSpec", formData.specialization);
    localStorage.setItem("teacherExp", formData.experience);
    localStorage.setItem("teacherProgram", formData.program);
    localStorage.setItem("teacherAvail", formData.availability);
    localStorage.setItem("teacherBio", formData.bio);

    alert("تم حفظ بيانات المعلّم بنجاح");
    window.location.href = "profile.html";
  };

  const goBack = () => {
    window.location.href = "profile.html";
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>تعديل بيانات المعلّم</h1>

          <form onSubmit={handleSave}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>الاسم الكامل</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                style={styles.input} 
                required 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>البريد الإلكتروني</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                style={styles.input} 
                required 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>التخصص</label>
              <select 
                id="specialization" 
                value={formData.specialization} 
                onChange={handleChange} 
                style={styles.input}
              >
                <option>قرآن وتجويد</option>
                <option>تحفيظ القرآن</option>
                <option>قراءات</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>سنوات الخبرة</label>
              <input 
                type="text" 
                id="experience" 
                value={formData.experience} 
                onChange={handleChange} 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>البرامج التي تدرّسها</label>
              <select 
                id="program" 
                value={formData.program} 
                onChange={handleChange} 
                style={styles.input}
              >
                <option>الحلقات الجماعية الكبرى</option>
                <option>الحلقات الجماعية الصغرى</option>
                <option>الحلقات الفردية</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>أوقات التفرغ</label>
              <input 
                type="text" 
                id="availability" 
                value={formData.availability} 
                onChange={handleChange} 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>نبذة مختصرة</label>
              <textarea 
                id="bio" 
                value={formData.bio} 
                onChange={handleChange} 
                style={styles.textarea} 
              />
            </div>

            <div style={styles.actions}>
              <button type="submit" style={styles.saveBtn}>حفظ التغييرات</button>
              <button type="button" onClick={goBack} style={styles.backBtn}>رجوع</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- التنسيقات (Styles) ---
const styles: Record<string, React.CSSProperties> = {
  pageWrapper: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '700px',
    width: '100%',
    margin: '50px auto',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#fff',
    padding: '35px',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#1f2933',
  },
  inputGroup: {
    marginBottom: '18px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '15px',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '15px',
    boxSizing: 'border-box',
    resize: 'vertical',
    minHeight: '80px',
    fontFamily: 'inherit',
  },
  actions: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
  },
  saveBtn: {
    flex: 1,
    padding: '14px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '15px',
    cursor: 'pointer',
    backgroundColor: '#16a34a',
    color: '#fff',
    fontWeight: 'bold',
  },
  backBtn: {
    flex: 1,
    padding: '14px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '15px',
    cursor: 'pointer',
    backgroundColor: '#9ca3af',
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default EditTeacherProfile;