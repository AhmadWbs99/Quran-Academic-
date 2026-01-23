import React, { useEffect } from 'react';

// --- التعريفات البرمجية (Types) ---
interface ScheduleItem {
  id: number;
  day: string;
  course: string;
  time: string;
  teacher: string;
}

const WeeklySchedule: React.FC = () => {
  // 1. بيانات الجدول الأسبوعي
  const scheduleData: ScheduleItem[] = [
    {
      id: 1,
      day: "الأحد",
      course: "التجويد",
      time: "6:00 م",
      teacher: "أحمد علي",
    },
    {
      id: 2,
      day: "الإثنين",
      course: "التحفيظ",
      time: "8:00 م",
      teacher: "محمد حسن",
    },
    {
      id: 3,
      day: "الثلاثاء",
      course: "التجويد",
      time: "6:00 م",
      teacher: "أحمد علي",
    },
    {
      id: 4,
      day: "الأربعاء",
      course: "التحفيظ",
      time: "8:00 م",
      teacher: "محمد حسن",
    },
  ];

  // 2. إعدادات اللغة والاتجاه
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "الجدول الأسبوعي | Quran Academy";
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>الجدول الأسبوعي</h1>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>اليوم</th>
                <th style={styles.th}>الحلقة</th>
                <th style={styles.th}>الوقت</th>
                <th style={styles.th}>المعلم</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item) => (
                <tr key={item.id} style={styles.tr}>
                  <td style={styles.tdDay}>{item.day}</td>
                  <td style={styles.td}>{item.course}</td>
                  <td style={styles.tdTime}>{item.time}</td>
                  <td style={styles.td}>{item.teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {scheduleData.length === 0 && (
          <div style={styles.emptyState}>لا يوجد حصص مجدولة حالياً.</div>
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
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    padding: '20px 0',
  },
  container: {
    maxWidth: '900px',
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
    boxShadow: '0 10px 25px rgba(0,0,0,.05)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '18px 15px',
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
    padding: '15px',
    textAlign: 'center',
    color: '#4b5563',
  },
  tdDay: {
    padding: '15px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  tdTime: {
    padding: '15px',
    textAlign: 'center',
    direction: 'ltr', // لضمان ظهور "6:00 م" بشكل صحيح
  },
  emptyState: {
    textAlign: 'center',
    color: '#9ca3af',
    marginTop: '50px',
  },
};

export default WeeklySchedule;