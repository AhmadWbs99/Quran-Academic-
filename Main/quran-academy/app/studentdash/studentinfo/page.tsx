"use client";
import React, { useState, useEffect } from 'react';

// --- التعريفات البرمجية (Types) ---
interface StudentInfo {
  name: string;
  email: string;
  level: string;
  country: string;
  joinDate: string;
}

const StudentProfileInfo: React.FC = () => {
  // 1. حالة بيانات الطالب
  const [student, setStudent] = useState<StudentInfo>({
    name: 'جاري التحميل...',
    email: 'جاري التحميل...',
    level: 'جاري التحميل...',
    country: 'جاري التحميل...',
    joinDate: '—',
  });

  // 2. جلب البيانات من localStorage عند تشغيل المكون
  useEffect(() => {
    // إعدادات اللغة والاتجاه
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "معلومات الطالب | Quran Academy";

    const fetchStudentData = () => {
      setStudent({
        name: localStorage.getItem("studentName") || "غير محدد",
        email: localStorage.getItem("studentEmail") || "غير محدد",
        level: localStorage.getItem("studentLevel") || "غير محدد",
        country: localStorage.getItem("studentCountry") || "غير محدد",
        joinDate: localStorage.getItem("studentJoin") || "2023-10-01", // قيمة افتراضية كمثال
      });
    };

    fetchStudentData();
  }, []);

  // 3. وظائف التنقل
  const goEdit = () => {
    window.location.href = "edit-student.html";
  };

  const goBack = () => {
    window.location.href = "dashboard.html";
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>معلومات الطالب</h1>

          {/* صفوف المعلومات */}
          <div style={styles.infoRow}>
            <span style={styles.label}>الاسم الكامل</span>
            <div style={styles.value}>{student.name}</div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>البريد الإلكتروني</span>
            <div style={styles.value}>{student.email}</div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>المستوى</span>
            <div style={styles.value}>{student.level}</div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>الدولة</span>
            <div style={styles.value}>{student.country}</div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>تاريخ الانضمام</span>
            <div style={styles.value}>{student.joinDate}</div>
          </div>

          {/* الأزرار */}
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
  },
  container: {
    maxWidth: '700px',
    width: '100%',
    margin: '50px auto',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '24px',
    color: '#1f2933',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #e5e7eb',
    fontSize: '16px',
  },
  label: {
    fontWeight: 'bold',
    color: '#4b5563',
  },
  value: {
    color: '#111827',
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
    transition: 'opacity 0.2s',
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
    transition: 'opacity 0.2s',
  },
};

export default StudentProfileInfo;