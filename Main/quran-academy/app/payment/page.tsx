"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

// 1. تعريف الترجمة الخاصة بصفحة الدفع
const paymentTranslations = {
  ar: {
    logo: "أكاديمية القرآن",
    title: "إتمام عملية الاشتراك",
    noProgram: "لم يتم اختيار حلقة",
    priceLabel: "إجمالي السعر:",
    currency: "دولار",
    payBtn: "ادفع الآن",
    backBtn: "العودة للخلف",
    loading: "جاري التحميل...",
    alertMsg: "سيتم توجيهك الآن لبوابة الدفع لمبلغ "
  },
  en: {
    logo: "Quran Academy",
    title: "Complete Subscription",
    noProgram: "No program selected",
    priceLabel: "Total Price:",
    currency: "USD",
    payBtn: "Pay Now",
    backBtn: "Go Back",
    loading: "Loading...",
    alertMsg: "You will be redirected to the payment gateway for "
  }
};

const PaymentPageContent: React.FC = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [isLoaded, setIsLoaded] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // جلب البيانات من الرابط
  const program = searchParams.get("program");
  const price = searchParams.get("price");

  useEffect(() => {
    // جلب اللغة المحفوظة من المتصفح
    const savedLang = localStorage.getItem("lang") as 'ar' | 'en';
    if (savedLang) setLang(savedLang);
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.lang = lang;
      document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang, isLoaded]);

  const t = paymentTranslations[lang];

  const handlePayNow = () => {
    if (!program || !price) return;
    alert(`${t.alertMsg} ${price} ${t.currency}`);
    // هنا يتم الربط مع Stripe أو PayPal لاحقاً
  };

  if (!isLoaded) return <div style={styles.loading}>{t?.loading || "..."}</div>;

  return (
    <div style={styles.pageWrapper}>
      {/* Header بسيط لصفحة الدفع */}
      <header style={styles.header}>
        <div style={styles.logo}>{t.logo}</div>
      </header>

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>{t.title}</h2>
          
          <div style={styles.detailsBox}>
            <h3 style={styles.programName}>{program || t.noProgram}</h3>
            <div style={styles.priceRow}>
              <span>{t.priceLabel}</span>
              <span style={styles.priceValue}>{price || "--"} {t.currency}</span>
            </div>
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
            {t.payBtn}
          </button>

          <button style={styles.backBtn} onClick={() => router.back()}>
            {t.backBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentPage: React.FC = () => (
  <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>}>
    <PaymentPageContent />
  </Suspense>
);

// --- التنسيقات ---
const styles: Record<string, React.CSSProperties> = {
  pageWrapper: { fontFamily: 'Cairo, sans-serif', backgroundColor: '#f1f5f9', minHeight: '100vh' },
  header: { background: '#fff', padding: '15px 25px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center' },
  logo: { fontSize: '20px', fontWeight: 700, color: '#1e3a8a' },
  container: { display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' },
  card: { background: '#fff', maxWidth: '450px', width: '100%', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', textAlign: 'center' },
  title: { fontSize: '24px', color: '#1e3a8a', marginBottom: '30px', fontWeight: 700 },
  detailsBox: { background: '#f8fafc', padding: '25px', borderRadius: '15px', marginBottom: '30px', border: '1px solid #e2e8f0' },
  programName: { fontSize: '18px', color: '#334155', marginBottom: '15px' },
  priceRow: { fontSize: '20px', fontWeight: 700, color: '#16a34a', display: 'flex', justifyContent: 'center', gap: '10px' },
  priceValue: { color: '#16a34a' },
  payBtn: { width: '100%', padding: '16px', backgroundColor: '#fbbf24', border: 'none', borderRadius: '40px', fontSize: '18px', fontWeight: 700, color: '#000', transition: 'all 0.3s' },
  backBtn: { marginTop: '20px', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '15px', textDecoration: 'underline' },
  loading: { textAlign: 'center', padding: '100px', fontSize: '20px', color: '#1e3a8a' }
};

export default PaymentPage;