import React, { useEffect } from 'react';

// --- التعريفات البرمجية (Types) ---
interface Session {
  id: number;
  className: string;
  teacher: string;
  time: string;
  status: string;
}

const StudentHome: React.FC = () => {
  // 1. بيانات الجدول (يمكن جلبها من API)
  const upcomingSessions: Session[] = [
    {
      id: 1,
      className: "الحلقة الجماعية الصغرى",
      teacher: "الشيخ أحمد",
      time: "6:00 م",
      status: "قريبة",
    },
  ];

  // 2. إعدادات الصفحة عند التحميل
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "الرئيسية | الطالب";
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.welcomeTitle}>مرحبًا بك 👋</h2>
        <p style={styles.welcomeSub}>نسعد بمتابعتك رحلتك في تعلم كتاب الله.</p>

        {/* Cards Section */}
        <div style={styles.cardsGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>الحلقات المسجّل بها</h3>
            <p style={styles.cardValue}>2 حلقات</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>الحصة القادمة</h3>
            <p style={styles.cardValue}>اليوم 6:00 م</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardHeader}>مستوى الطالب</h3>
            <p style={styles.cardValue}>متوسط</p>
          </div>
        </div>

        {/* Schedule Table */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeadRow}>
                <th style={styles.th}>الحلقة</th>
                <th style={styles.th}>المعلم</th>
                <th style={styles.th}>الوقت</th>
                <th style={styles.th}>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {upcomingSessions.map((session) => (
                <tr key={session.id} style={styles.tr}>
                  <td style={styles.td}>{session.className}</td>
                  <td style={styles.td}>{session.teacher}</td>
                  <td style={styles.td}>{session.time}</td>
                  <td style={styles.td}>
                    <span style={styles.statusLabel}>{session.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notices Section */}
        <div style={styles.noticeBox}>
          <h3 style={styles.noticeTitle}>تنبيهات</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>تم تحديث جدول الأسبوع القادم.</li>
            <li style={styles.li}>لديك ملاحظة من المعلم.</li>
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
  welcomeTitle: {
    marginBottom: '5px',
  },
  welcomeSub: {
    color: '#666',
    marginBottom: '30px',
  },
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
  cardHeader: {
    margin: '0 0 10px 0',
    fontSize: '16px',
    color: '#1e3a8a',
  },
  cardValue: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold',
  },
  tableWrapper: {
    marginTop: '30px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,.05)',
    backgroundColor: '#fff',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeadRow: {
    background: '#1f2933',
    color: '#fff',
  },
  th: {
    padding: '14px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tr: {
    borderBottom: '1px solid #f1f5f9',
  },
  td: {
    padding: '14px',
    textAlign: 'center',
  },
  statusLabel: {
    background: '#fde68a',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  noticeBox: {
    background: '#fff',
    padding: '20px',
    borderRadius: '16px',
    marginTop: '30px',
    boxShadow: '0 10px 25px rgba(0,0,0,.05)',
  },
  noticeTitle: {
    marginTop: 0,
    color: '#dc2626', // لون تنبيهي
  },
  ul: {
    paddingRight: '20px',
    margin: '10px 0 0 0',
  },
  li: {
    marginBottom: '10px',
    lineHeight: 1.6,
  },
};

export default StudentHome;