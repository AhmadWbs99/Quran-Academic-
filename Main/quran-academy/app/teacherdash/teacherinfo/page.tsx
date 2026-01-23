import React, { useState, useEffect } from 'react';

// --- تعريف هيكل بيانات المعلم (Types) ---
interface TeacherInfo {
  name: string;
  email: string;
  specialization: string;
  experience: string;
  program: string;
  availability: string;
  bio: string;
}

const TeacherProfileDisplay: React.FC = () => {
  // 1. حالة تخزين البيانات
  const [teacher, setTeacher] = useState<TeacherInfo>({
    name: 'جاري التحميل...',
    email: 'جاري التحميل...',
    specialization: 'جاري التحميل...',
    experience: 'جاري التحميل...',
    program: 'جاري التحميل...',
    availability: 'جاري التحميل...',
    bio: '—',
  });

  // 2. جلب البيانات من التخزين المحلي عند تحميل المكون
  useEffect(() => {
    // إعدادات اللغة والاتجاه
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "معلومات المعلّم | Quran Academy";

    const loadData = () => {
      setTeacher({
        name: localStorage.getItem("teacherName") || "غير محدد",
        email: localStorage.getItem("teacherEmail") || "غير محدد",
        specialization: localStorage.getItem("teacherSpec") || "غير محدد",
        experience: localStorage.getItem("teacherExp") || "غير محدد",
        program: localStorage.getItem("teacherProgram") || "غير محدد",
        availability: localStorage.getItem("teacherAvail") || "غير محدد",
        bio: localStorage.getItem("teacherBio") || "—",
      });
    };

    loadData();
  }, []);

  // 3. وظائف التنقل
  const goEdit = () => {
    window.location.href = "edit-teacher.html";
  };

  const goBack = () => {
    window.location.href = "dashboard.html";
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>معلومات المعلّم</h1>

          {/* عرض صفوف المعلومات */}
          <div style={styles.infoRow}>
            <span style={styles.label}>الاسم الكامل</span>
            <div style={styles.value}>{teacher.name}</div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>البريد الإلكتروني</span>
            <div style={styles.value}>{teacher.email}</div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>التخصص</span>
            <div style={styles.value}>{teacher.specialization}</div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>سنوات الخبرة</span>
            <div style={styles.value}>{teacher.experience}</div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>البرامج التي يدرّسها</span>
            <div style={styles.value}>{teacher.program}</div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>أوقات التفرغ</span>
            <div style={styles.value}>{teacher.availability}</div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>نبذة</span>
            <div style={styles.value}>{teacher.bio}</div>
          </div>

          {/* أزرار التحكم */}
          <div style={styles.actions}>
            <button style={styles.editBtn} onClick={goEdit}>
              تعديل البيانات
            </button>
            <button style={styles.backBtn} onClick={goBack}>
              رجوع
            </button>
          </div>
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
    padding: '20px 0',
  },
  container: {
    maxWidth: '750px',
    width: '100%',
    margin: '0 auto',
    padding: '0 20px',
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
    marginBottom: '30px',
    color: '#1f2933',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '14px 0',
    borderBottom: '1px solid #e5e7eb',
    fontSize: '16px',
    flexWrap: 'wrap', // يضمن عدم تداخل النصوص الطويلة
    gap: '10px'
  },
  label: {
    fontWeight: 'bold',
    color: '#4b5563',
  },
  value: {
    color: '#111827',
    maxWidth: '70%',
    textAlign: 'left'
  },
  actions: {
    marginTop: '25px',
    display: 'flex',
    gap: '10px',
  },
  editBtn: {
    flex: 1,
    padding: '14px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '15px',
    cursor: 'pointer',
    backgroundColor: '#2563eb',
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

export default TeacherProfileDisplay;