"use client";
import React, { useEffect } from 'react';

// --- التعريفات البرمجية (Types) ---
interface Student {
  id: number;
  name: string;
  className: string;
  attendance: string;
  level: string;
  status: 'منتظم' | 'يحتاج متابعة' | 'غائب';
}

const TeacherStudentsList: React.FC = () => {
  // 1. بيانات الطلاب (يمكن جلبها من API)
  const students: Student[] = [
    {
      id: 1,
      name: "عبدالله محمد",
      className: "التجويد",
      attendance: "95%",
      level: "متقدم",
      status: "منتظم",
    },
    {
      id: 2,
      name: "سعيد أحمد",
      className: "التحفيظ",
      attendance: "80%",
      level: "متوسط",
      status: "يحتاج متابعة",
    },
    {
      id: 3,
      name: "عمر خالد",
      className: "التجويد",
      attendance: "70%",
      level: "مبتدئ",
      status: "يحتاج متابعة",
    }
  ];

  // 2. إعدادات الصفحة عند التحميل
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "الطلاب | لوحة تحكم المعلّم";
  }, []);

  // 3. دالة لتحديد لون الحالة برمجياً
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'منتظم':
        return { backgroundColor: '#bbf7d0', color: '#166534' };
      case 'يحتاج متابعة':
        return { backgroundColor: '#fde68a', color: '#854d0e' };
      default:
        return { backgroundColor: '#fee2e2', color: '#991b1b' };
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>قائمة الطلاب</h1>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>اسم الطالب</th>
                <th style={styles.th}>الحلقة</th>
                <th style={styles.th}>الحضور</th>
                <th style={styles.th}>المستوى</th>
                <th style={styles.th}>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} style={styles.tr}>
                  <td style={styles.tdName}>{student.name}</td>
                  <td style={styles.td}>{student.className}</td>
                  <td style={styles.td}>{student.attendance}</td>
                  <td style={styles.td}>{student.level}</td>
                  <td style={styles.td}>
                    <span style={{ 
                      ...styles.statusBadge, 
                      ...getStatusStyle(student.status) 
                    }}>
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {students.length === 0 && (
          <div style={styles.emptyState}>لا يوجد طلاب مسجلين في حلقاتك حالياً.</div>
        )}
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
    padding: '20px 0',
  },
  container: {
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '0 20px',
  },
  mainTitle: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#1f2933',
  },
  tableWrapper: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0,0,0,.08)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '16px',
    textAlign: 'center',
    background: '#1f2933',
    color: '#fff',
    fontWeight: 'bold',
  },
  tr: {
    borderBottom: '1px solid #e5e7eb',
    transition: 'background 0.2s',
  },
  td: {
    padding: '14px',
    textAlign: 'center',
    color: '#4b5563',
  },
  tdName: {
    padding: '14px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#111827',
  },
  statusBadge: {
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 'bold',
    display: 'inline-block',
  },
  emptyState: {
    textAlign: 'center',
    color: '#9ca3af',
    marginTop: '50px',
    fontSize: '18px',
  },
};

export default TeacherStudentsList;