import React, { useEffect } from 'react';

// --- التعريفات البرمجية (Types) ---
interface ClassData {
  id: number;
  title: string;
  teacher: string;
  days: string;
  time: string;
  status: string;
}

const MyClasses: React.FC = () => {
  // 1. بيانات الحلقات (يمكن استبدالها ببيانات من API لاحقاً)
  const myClasses: ClassData[] = [
    {
      id: 1,
      title: "حلقة التجويد",
      teacher: "أحمد علي",
      days: "الأحد - الثلاثاء",
      time: "6:00 م",
      status: "نشطة",
    },
    {
      id: 2,
      title: "حلقة التحفيظ",
      teacher: "محمد حسن",
      days: "الإثنين - الأربعاء",
      time: "8:00 م",
      status: "نشطة",
    },
  ];

  // 2. ضبط إعدادات الصفحة عند التحميل
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "حلقاتي | Quran Academy";
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>حلقاتي</h1>

        {myClasses.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.row}>
              <div style={styles.infoSide}>
                <h3 style={styles.h3}>{item.title}</h3>
                <p style={styles.p}><strong>المعلم:</strong> {item.teacher}</p>
                <p style={styles.p}><strong>الأيام:</strong> {item.days}</p>
                <p style={styles.p}><strong>الوقت:</strong> {item.time}</p>
              </div>
              <div>
                <span style={styles.badge}>{item.status}</span>
              </div>
            </div>
          </div>
        ))}

        {myClasses.length === 0 && (
          <div style={styles.noData}>لا توجد حلقات مسجلة حالياً.</div>
        )}
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
    minHeight: '100vh',
    paddingTop: '20px',
  },
  container: {
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '0 20px',
  },
  h1: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#1f2933',
  },
  card: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(0,0,0,.08)',
    marginBottom: '20px',
    transition: 'transform 0.2s',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '15px',
  },
  infoSide: {
    flex: 1,
  },
  h3: {
    margin: '0 0 10px 0',
    color: '#1e3a8a',
  },
  p: {
    margin: '5px 0',
    color: '#4b5563',
    fontSize: '15px',
  },
  badge: {
    backgroundColor: '#fde68a',
    color: '#92400e',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  noData: {
    textAlign: 'center',
    color: '#6b7280',
    marginTop: '50px',
    fontSize: '18px',
  },
};

export default MyClasses;