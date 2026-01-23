import React, { useEffect } from 'react';

// --- تعريف هيكل بيانات الحلقة (Types) ---
interface TeacherClass {
  id: number;
  title: string;
  type: string;
  studentCount: number;
  days: string;
  time: string;
  status: string;
}

const TeacherClasses: React.FC = () => {
  // 1. بيانات الحلقات (يمكن استبدالها بطلب من الخادم)
  const classes: TeacherClass[] = [
    {
      id: 1,
      title: "حلقة التجويد",
      type: "جماعية كبرى",
      studentCount: 12,
      days: "الأحد - الثلاثاء",
      time: "6:00 م",
      status: "نشطة",
    },
    {
      id: 2,
      title: "حلقة التحفيظ",
      type: "فردية",
      studentCount: 5,
      days: "الإثنين - الأربعاء",
      time: "8:00 م",
      status: "نشطة",
    },
  ];

  // 2. ضبط إعدادات الصفحة واللغة
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "حلقاتي | لوحة تحكم المعلّم";
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>حلقاتي</h1>

        {classes.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.row}>
              <div style={styles.infoSide}>
                <h3 style={styles.classTitle}>{item.title}</h3>
                <div style={styles.detailsGrid}>
                  <p style={styles.p}><strong>النوع:</strong> {item.type}</p>
                  <p style={styles.p}><strong>عدد الطلاب:</strong> {item.studentCount}</p>
                  <p style={styles.p}><strong>الأيام:</strong> {item.days}</p>
                  <p style={styles.p}><strong>الوقت:</strong> {item.time}</p>
                </div>
              </div>
              <div>
                <span style={styles.badge}>{item.status}</span>
              </div>
            </div>
            
            {/* أزرار إضافية مقترحة للمعلم */}
            <div style={styles.actions}>
              <button style={styles.btnSecondary}>عرض سجل الحضور</button>
              <button style={styles.btnPrimary}>بدء الحلقة الآن</button>
            </div>
          </div>
        ))}

        {classes.length === 0 && (
          <div style={styles.emptyState}>لا توجد حلقات مسندة إليك حالياً.</div>
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
  card: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(0,0,0,.08)',
    marginBottom: '20px',
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
  classTitle: {
    margin: '0 0 15px 0',
    color: '#1e3a8a',
    fontSize: '20px',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
  },
  p: {
    margin: '4px 0',
    color: '#4b5563',
    fontSize: '15px',
  },
  badge: {
    backgroundColor: '#bfdbfe',
    color: '#1e40af',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  actions: {
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid #f1f5f9',
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
  },
  btnPrimary: {
    backgroundColor: '#10b981',
    color: '#fff',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  btnSecondary: {
    backgroundColor: '#f3f4f6',
    color: '#1f2933',
    border: '1px solid #d1d5db',
    padding: '8px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  emptyState: {
    textAlign: 'center',
    color: '#9ca3af',
    marginTop: '50px',
    fontSize: '18px',
  },
};

export default TeacherClasses;