"use client";
import React, { useEffect } from 'react';

// --- التعريفات البرمجية (Types) ---
interface ReportData {
  id: number;
  courseTitle: string;
  lastLesson: string;
  attendanceRate: number; // نسبة مئوية
  progressValue: number;   // نسبة مئوية للشريط
  teacherNotes: string;
}

const StudentReports: React.FC = () => {
  // 1. بيانات التقارير (يمكن جلبها من API لاحقاً)
  const reports: ReportData[] = [
    {
      id: 1,
      courseTitle: "حلقة التجويد",
      lastLesson: "أحكام النون الساكنة",
      attendanceRate: 95,
      progressValue: 80,
      teacherNotes: "أداء ممتاز وتفاعل ملحوظ"
    },
    {
      id: 2,
      courseTitle: "حلقة التحفيظ",
      lastLesson: "سورة الملك",
      attendanceRate: 90,
      progressValue: 70,
      teacherNotes: "يحتاج إلى مراجعة الورد اليومي بانتظام"
    }
  ];

  // 2. ضبط إعدادات اللغة والاتجاه
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = "التقارير | Quran Academy";
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>تقارير الطالب</h1>

        {reports.map((report) => (
          <div key={report.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{report.courseTitle}</h3>
            
            <div style={styles.infoRow}>
              <span style={styles.label}>آخر درس / محفوظ:</span>
              <span style={styles.value}>{report.lastLesson}</span>
            </div>

            <div style={styles.infoRow}>
              <span style={styles.label}>نسبة الحضور:</span>
              <span style={styles.attendanceBadge}>{report.attendanceRate}%</span>
            </div>

            <div style={styles.progressContainer}>
              <div style={styles.progressLabel}>نسبة الإنجاز في المنهج:</div>
              <div style={styles.progressBarBg}>
                <div 
                  style={{ 
                    ...styles.progressBarFill, 
                    width: `${report.progressValue}%` 
                  }} 
                />
              </div>
            </div>

            <div style={styles.notesSection}>
              <strong>ملاحظات المعلم:</strong>
              <p style={styles.noteText}>{report.teacherNotes}</p>
            </div>
          </div>
        ))}

        {reports.length === 0 && (
          <div style={styles.emptyState}>لا توجد تقارير متاحة حالياً.</div>
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
    maxWidth: '800px',
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
  cardTitle: {
    margin: '0 0 15px 0',
    color: '#1e3a8a',
    borderBottom: '2px solid #f1f5f9',
    paddingBottom: '10px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '15px',
  },
  label: {
    color: '#6b7280',
    fontWeight: 'bold',
  },
  value: {
    color: '#111827',
  },
  attendanceBadge: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    padding: '2px 10px',
    borderRadius: '12px',
    fontWeight: 'bold',
  },
  progressContainer: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  progressLabel: {
    fontSize: '14px',
    marginBottom: '8px',
    color: '#4b5563',
  },
  progressBarBg: {
    backgroundColor: '#e5e7eb',
    borderRadius: '20px',
    height: '14px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#10b981',
    transition: 'width 0.5s ease-in-out',
  },
  notesSection: {
    marginTop: '15px',
    padding: '12px',
    backgroundColor: '#f9fafb',
    borderRadius: '10px',
    borderRight: '4px solid #fbbf24',
  },
  noteText: {
    margin: '5px 0 0 0',
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.5',
  },
  emptyState: {
    textAlign: 'center',
    color: '#9ca3af',
    marginTop: '50px',
  },
};

export default StudentReports;