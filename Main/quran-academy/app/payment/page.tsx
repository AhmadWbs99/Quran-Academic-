"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const PaymentPageContent: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // جلب البيانات من الرابط (Query Params)
  const program = searchParams.get("program");
  const price = searchParams.get("price");

  useEffect(() => {
    setIsMounted(true);
    // إعداد اللغة والاتجاه
    document.documentElement.lang = 'ar';
    document.body.dir = 'rtl';
  }, []);

  const handlePayNow = () => {
    if (!program || !price) return;

    alert(
      `سيتم دفع مبلغ ${price} دولار\nللاشتراك في: ${program}`
    );

    // هنا يمكنك إضافة منطق الربط مع بوابات الدفع مثل Stripe أو PayPal
  };

  // حماية ضد أخطاء الـ Hydration
  if (!isMounted) return null;

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <h2 style={styles.programTitle}>
          {program ? program : "لم يتم اختيار حلقة"}
        </h2>

        <div style={styles.priceContainer}>
          السعر: <span style={styles.priceValue}>{price ? price : "--"}</span> دولار
        </div>

        <button 
          style={{
            ...styles.payBtn,
            opacity: (!program || !price) ? 0.6 : 1,
            cursor: (!program || !price) ? 'not-allowed' : 'pointer'
          }} 
          onClick={handlePayNow}
          disabled={!program || !price}
        >
          ادفع الآن
        </button>

        <button 
          style={styles.backBtn} 
          onClick={() => router.back()}
        >
          العودة
        </button>
      </div>
    </div>
  );
};

// Next.js يتطلب استخدام Suspense عند التعامل مع useSearchParams في Client Components
const PaymentPage: React.FC = () => {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>جاري التحميل...</div>}>
      <PaymentPageContent />
    </Suspense>
  );
};

// --- التنسيقات ---
const styles: Record<string, React.CSSProperties> = {
  pageWrapper: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  container: {
    maxWidth: '420px',
    width: '100%',
    backgroundColor: '#fff',
    padding: '35px',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,.1)',
    textAlign: 'center',
  },
  programTitle: {
    marginBottom: '15px',
    color: '#1f2933',
    fontSize: '24px',
  },
  priceContainer: {
    fontSize: '22px',
    margin: '20px 0',
    color: '#16a34a',
    fontWeight: 'bold',
  },
  priceValue: {
    color: '#16a34a',
  },
  payBtn: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#fbbf24',
    border: 'none',
    borderRadius: '30px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
  backBtn: {
    marginTop: '15px',
    background: 'none',
    border: 'none',
    color: '#2563eb',
    cursor: 'pointer',
    fontSize: '14px',
    textDecoration: 'underline',
  },
};

export default PaymentPage;