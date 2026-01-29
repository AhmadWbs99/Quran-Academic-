"use client";
import React, { useEffect } from 'react';

// --- التعريفات والأنواع (Types) ---
interface Session {
  id: number;
  className: string;
  studentCount: number;
  time: string;
  status: 'نشطة' | 'مجدولة' | 'منتهية';
}

const TeacherHome: React.FC = () => {
  // 1. بيانات الحصص اليومية (يمكن جلبها من API)
  const todaySessions: Session[] = [
    {
      id: 1,
      className: "الحلقة الجماعية الكبرى",
      studentCount: 10,
      time: "6:00 م",
      status: "نشطة",
    },
    {
      id: 2,
      className: "حلقة فردية",
      studentCount: 1,
      time: "8:00 م",
      status: "مجدولة",
    },
  ];

  // 2. إعدادات الصفحة عند التحميل
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "الرئيسية | المعلم";
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.welcomeTitle}>مرحبًا بك 👋</h2>
        <p style={styles.welcomeSub}>نسأل الله أن يبارك في تعليمك لكتابه.</p>

        {/* ملخص البيانات - Cards */}
        <div style={styles.cardsGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>عدد الحلقات</h3>
            <p style={styles.cardValue}>3 حلقات</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>عدد الطلاب</h3>
            <p style={styles.cardValue}>18 طالب</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>حصص اليوم</h3>
            <p style={styles.cardValue}>4 حصص</p>
          </div>
        </div>

        {/* جدول حصص اليوم */}
        <div style={styles.tableWrapper}>
          <h3 style={{ padding: '20px 20px 0', margin: 0 }}>جدول حصص اليوم</h3>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeadRow}>
                <th style={styles.th}>الحلقة</th>
                <th style={styles.th}>عدد الطلاب</th>
                <th style={styles.th}>الوقت</th>
                <th style={styles.th}>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {todaySessions.map((session) => (
                <tr key={session.id} style={styles.tr}>
                  <td style={styles.td}>{session.className}</td>
                  <td style={styles.td}>{session.studentCount}</td>
                  <td style={styles.tdTime}>{session.time}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.statusBadge,
                      backgroundColor: session.status === 'نشطة' ? '#dcfce7' : '#fef9c3',
                      color: session.status === 'نشطة' ? '#166534' : '#854d0e'
                    }}>
                      {session.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* قسم التنبيهات */}
        <div style={styles.noticeBox}>
          <h3 style={styles.noticeTitle}>تنبيهات الإدارة</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>طالب جديد بانتظار المراجعة.</li>
            <li style={styles.li}>تذكير: رفع تقرير الأسبوع.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- التنسيقات (Styles) ---
const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
    color: '#1f2933',
    minHeight: '100vh',
  },
  container: {
    padding: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  welcomeTitle: { margin: 0 },
  welcomeSub: { color: '#6b7280', marginBottom: '30px' },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  },
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,.05)',
  },
  cardHeader: { margin: '0 0 10px 0', fontSize: '16px', color: '#1e3a8a' },
  cardValue: { margin: 0, fontSize: '20px', fontWeight: 'bold' },
  tableWrapper: {
    marginTop: '30px',
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,.05)',
  },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: '15px' },
  tableHeadRow: { background: '#1f2933', color: '#fff' },
  th: { padding: '15px', textAlign: 'center' },
  tr: { borderBottom: '1px solid #f1f5f9' },
  td: { padding: '15px', textAlign: 'center' },
  tdTime: { padding: '15px', textAlign: 'center', direction: 'ltr' },
  statusBadge: {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 'bold',
  },
  noticeBox: {
    background: '#fff',
    padding: '20px',
    borderRadius: '16px',
    marginTop: '30px',
    boxShadow: '0 10px 25px rgba(0,0,0,.05)',
    borderRight: '5px solid #fbbf24',
  },
  noticeTitle: { marginTop: 0, color: '#b45309' },
  ul: { paddingRight: '20px', margin: '10px 0 0 0' },
  li: { marginBottom: '8px', color: '#374151' },
};

export default TeacherHome;