import React, { useState, useEffect, useRef } from 'react';
// تأكد من استيراد ملف CSS هنا
import './QuranClassroom.css'; 

// تعريف أنواع الخصائص (Props) إذا أردت تمرير بيانات للمكون
interface QuranClassroomProps {
  studentName?: string;
  sessionTitle?: string;
}

const QuranClassroom: React.FC<QuranClassroomProps> = ({ 
  studentName = "أحمد", 
  sessionTitle = "تصحيح تلاوة - سورة النبأ" 
}) => {
  
  // إدارة حالة الصوت والكاميرا
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCamOn, setIsCamOn] = useState(false);

  // مرجع للكانفاس لربطه بـ Zoom Video SDK لاحقاً
  const videoCanvasRef = useRef<HTMLCanvasElement>(null);

  // دالة التعامل مع الميكروفون
  const toggleMic = async () => {
    // Zoom SDK Logic Here:
    // if (isMicOn) await mediaStream.muteAudio();
    // else await mediaStream.unmuteAudio();
    
    setIsMicOn(!isMicOn);
    console.log(`Microphone is now ${!isMicOn ? 'ON' : 'OFF'}`);
  };

  // دالة التعامل مع الكاميرا
  const toggleCam = async () => {
    // Zoom SDK Logic Here:
    // if (isCamOn) await mediaStream.stopVideo();
    // else await mediaStream.startVideo();

    setIsCamOn(!isCamOn);
    console.log(`Camera is now ${!isCamOn ? 'ON' : 'OFF'}`);
  };

  // دالة الخروج
  const leaveSession = async () => {
    const confirmed = window.confirm("هل أنت متأكد من مغادرة الفصل؟");
    if (confirmed) {
      // await client.leave();
      console.log("Leaving session...");
      // router.push('/dashboard'); // في حال استخدام Next.js
      window.location.href = "/dashboard";
    }
  };

  // محاكاة الانضمام عند فتح الصفحة
  useEffect(() => {
    console.log("Component mounted - Ready to initialize Zoom SDK");
    // const client = ZoomVideo.createClient();
    // client.init(...)
  }, []);

  return (
    <div className="classroom-wrapper" dir="rtl">
      {/* 1. الشريط العلوي (Header) */}
      <header>
        <div className="logo">
          <span style={{ fontSize: '1.5rem' }}>📖</span> أكاديمية القرآن
        </div>
        <div className="session-info">
          الفصل الحالي: <strong>{sessionTitle}</strong>
        </div>
        <div>
          مرحباً، <strong>{studentName}</strong>
        </div>
      </header>

      {/* 2. منطقة العمل الرئيسية */}
      <div className="classroom-container">
        
        {/* الجانب الأيمن: فيديو الزووم */}
        <div className="video-area" id="video-container">
          <div className="zoom-canvas-placeholder">
            {/* هذا الكانفاس هو الأهم لـ Zoom Video SDK */}
            <canvas 
              ref={videoCanvasRef} 
              id="main-video-canvas" 
              style={{ width: '100%', height: '100%', display: 'none' }} 
            />
            
            <div style={{ opacity: 0.7 }}>
              <span style={{ fontSize: '3rem' }}>👳‍♂️</span>
              <p>فيديو الشيخ يظهر هنا</p>
              <small style={{ color: '#aaa' }}>(يتم البث عبر Zoom Video SDK)</small>
            </div>
          </div>

          {/* فيديو الطالب (PIP) */}
          <div className="student-pip">
             {isCamOn ? "صورتك (مفعلة)" : "كاميرتك مغلقة"}
          </div>
        </div>

        {/* الجانب الأيسر: المصحف */}
        <div className="content-area">
          <div className="content-header">
            📄 المصحف الإلكتروني (الصفحة ٥٨٢)
          </div>
          <div className="quran-page">
            <p>
              عَمَّ يَتَسَآءَلُونَ (1) عَنِ ٱلنَّبَإِ ٱلۡعَظِيمِ (2) ٱلَّذِي هُمۡ فِيهِ مُخۡتَلِفُونَ (3)...
            </p>
          </div>
        </div>
      </div>

      {/* 3. شريط التحكم السفلي */}
      <div className="controls-bar">
        <button 
          className={`btn-control ${isMicOn ? 'btn-active' : ''}`} 
          onClick={toggleMic} 
          title="كتم/تشغيل الصوت"
        >
          {isMicOn ? '🎙️' : '🔇'}
        </button>

        <button 
          className={`btn-control ${isCamOn ? 'btn-active' : ''}`} 
          onClick={toggleCam} 
          title="تشغيل/إيقاف الكاميرا"
        >
          {isCamOn ? '📷' : '🚫'}
        </button>

        <button className="btn-control" title="مشاركة الشاشة">🖥️</button>
        <button className="btn-control" title="رفع اليد">✋</button>
        
        <button 
          className="btn-control btn-leave" 
          onClick={leaveSession} 
          title="خروج"
        >
          🚪
        </button>
      </div>
    </div>
  );
};

export default QuranClassroom;