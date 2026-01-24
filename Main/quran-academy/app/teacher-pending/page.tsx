"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PendingApproval: React.FC = () => {
  // 1. حالة التأكد من تحميل المكون في المتصفح
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    // إعدادات اللغة والاتجاه
    document.documentElement.lang = 'ar';
    document.body.dir = 'rtl';
  }, []);

  // 2. معالجة العودة للرئيسية باستخدام راوتر Next.js
  const handleGoHome = () => {
    router.push('/');
  };

  // حماية من تضارب رندرة السيرفر والعميل
  if (!isMounted) return null;

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.box}>
        <div style={styles.iconWrapper}>⏳</div>
        <h2 style={styles.title}>تم استلام طلبك</h2>
        <p style={styles.message}>
          شكرًا لتسجيلك معنا.<br />
          سيتم مراجعة بياناتك من قبل الإدارة قبل تفعيل الحساب.
        </p>
        <button 
          onClick={handleGoHome}
          style={styles.button}
        >
          العودة للصفحة الرئيسية
        </button>
      </div>
    </div>
  );
};

// --- التنسيقات (Styles) ---
const styles: Record<string, React.CSSProperties> = {
  pageWrapper: {
    fontFamily: 'Cairo, Arial, sans-serif',
    backgroundColor: '#f1f5f9',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  box: {
    maxWidth: '420px',
    width: '100%',
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0,0,0,.08)',
  },
  iconWrapper: {
    fontSize: '50px',
    marginBottom: '20px',
  },
  title: {
    color: '#1e3a8a',
    marginBottom: '15px',
    fontSize: '24px',
  },
  message: {
    color: '#475569',
    lineHeight: '1.6',
    fontSize: '16px',
  },
  button: {
    marginTop: '30px',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '30px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default PendingApproval;