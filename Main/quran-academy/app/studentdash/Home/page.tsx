"use client";

"use client";
import React, { useEffect } from 'react';

interface Session {
  id: number;
  className: string;
  teacher: string;
  time: string;
  status: string;
}

const StudentHome: React.FC = () => {
  const upcomingSessions: Session[] = [
    {
      id: 1,
      className: "الحلقة الجماعية الصغرى",
      teacher: "الشيخ أحمد",
      time: "6:00 م",
      status: "قريبة",
    },
    {
      id: 2,
      className: "مراجعة جزء عم",
      teacher: "الشيخ محمد",
      time: "8:30 م",
      status: "مؤكدة",
    },
  ];

  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Header Section */}
        <header style={styles.hero}>
           <h2 style={styles.welcomeTitle}>مرحبًا بك 👋</h2>
           <p style={styles.welcomeSub}>نسعد بمتابعتك رحلتك في تعلم كتاب الله.</p>
        </header>

        {/* Cards Section */}
        <div style={styles.cardsGrid}>
          <div style={styles.card}>
            <div style={{fontSize: '30px', marginBottom: '10px'}}>📚</div>
            <h3 style={styles.cardHeader}>الحلقات المسجّل بها</h3>
            <p style={styles.cardValue}>2 حلقات</p>
          </div>
          <div style={styles.card}>
            <div style={{fontSize: '30px', marginBottom: '10px'}}>⏰</div>
            <h3 style={styles.cardHeader}>الحصة القادمة</h3>
            <p style={styles.cardValue}>اليوم 6:00 م</p>
          </div>
          <div style={styles.card}>
            <div style={{fontSize: '30px', marginBottom: '10px'}}>🌟</div>
            <h3 style={styles.cardHeader}>مستوى الطالب</h3>
            <p style={styles.cardValue}>متوسط</p>
          </div>
        </div>

        {/* Schedule Table */}
        <div style={styles.sectionHeader}>
            <h3 style={{margin: 0}}>جدول حصص اليوم</h3>
        </div>
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
                    <span style={{
                        ...styles.statusLabel,
                        backgroundColor: session.status === 'قريبة' ? '#fef3c7' : '#dcfce7',
                        color: session.status === 'قريبة' ? '#92400e' : '#166534'
                    }}>
                        {session.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notices Section */}
        <div style={styles.noticeBox}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px'}}>
             <span style={{fontSize: '20px'}}>🔔</span>
             <h3 style={styles.noticeTitle}>آخر التنبيهات</h3>
          </div>
          <ul style={styles.ul}>
            <li style={styles.li}>تم تحديث جدول الأسبوع القادم، يرجى المراجعة.</li>
            <li style={styles.li}>لديك ملاحظة جديدة من الشيخ أحمد حول مخارج الحروف.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  body: { margin: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#f8fafc', color: '#1e293b', minHeight: '100vh' },
  container: { padding: '20px', maxWidth: '1100px', margin: '0 auto' },
  hero: { marginBottom: '30px' },
  welcomeTitle: { marginBottom: '8px', fontSize: '28px', color: '#0f172a' },
  welcomeSub: { color: '#64748b', fontSize: '16px' },
  cardsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' },
  card: { background: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', border: '1px solid #f1f5f9' },
  cardHeader: { margin: '0 0 8px 0', fontSize: '14px', color: '#64748b', fontWeight: 500 },
  cardValue: { margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a' },
  sectionHeader: { marginBottom: '15px', paddingRight: '5px' },
  tableWrapper: { borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: '#fff', border: '1px solid #f1f5f9' },
  table: { width: '100%', borderCollapse: 'collapse' },
  tableHeadRow: { background: '#f1f5f9', color: '#475569' },
  th: { padding: '16px', textAlign: 'center', fontSize: '14px' },
  tr: { borderBottom: '1px solid #f1f5f9' },
  td: { padding: '16px', textAlign: 'center', fontSize: '15px' },
  statusLabel: { padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 },
  noticeBox: { background: '#fff', padding: '25px', borderRadius: '20px', marginTop: '40px', borderRight: '4px solid #3b82f6', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  noticeTitle: { margin: 0, color: '#1e293b', fontSize: '18px' },
  ul: { paddingRight: '25px', margin: 0 },
  li: { marginBottom: '12px', fontSize: '15px', color: '#475569' },
};

export default StudentHome;