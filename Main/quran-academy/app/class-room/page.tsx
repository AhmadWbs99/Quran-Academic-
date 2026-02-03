"use client";

import React, { useState, useEffect, useRef } from 'react';

interface QuranClassroomProps {
  studentName?: string;
  sessionTitle?: string;
}

export default function QuranClassroom({ 
  studentName = "أحمد", 
  sessionTitle = "تصحيح تلاوة - سورة النبأ" 
}: QuranClassroomProps) {
  
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCamOn, setIsCamOn] = useState(false);
  const videoCanvasRef = useRef<HTMLCanvasElement>(null);

  const toggleMic = async () => {
    setIsMicOn(!isMicOn);
    console.log(`Microphone is now ${!isMicOn ? 'ON' : 'OFF'}`);
  };

  const toggleCam = async () => {
    setIsCamOn(!isCamOn);
    console.log(`Camera is now ${!isCamOn ? 'ON' : 'OFF'}`);
  };

  const leaveSession = () => {
    if (typeof window !== 'undefined') {
      const confirmed = window.confirm("هل أنت متأكد من مغادرة الفصل؟");
      if (confirmed) {
        window.location.href = "/dashboard";
      }
    }
  };

  useEffect(() => {
    console.log("Component mounted - Ready to initialize Zoom SDK");
  }, []);

  return (
    <div className="classroom-wrapper" dir="rtl">
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f5f5f5' }}>
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

      <div className="classroom-container" style={{ display: 'flex', height: '70vh' }}>
        <div className="video-area" style={{ flex: 1, background: '#000', color: '#fff', position: 'relative' }}>
          <div className="zoom-canvas-placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <canvas ref={videoCanvasRef} style={{ width: '100%', height: '100%', display: 'none' }} />
            <div style={{ textAlign: 'center', opacity: 0.7 }}>
              <span style={{ fontSize: '3rem' }}>👳‍♂️</span>
              <p>فيديو الشيخ يظهر هنا</p>
            </div>
          </div>
          <div className="student-pip" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '150px', height: '100px', background: '#333', border: '1px solid #fff' }}>
             {isCamOn ? "صورتك مفعلة" : "الكاميرا مغلقة"}
          </div>
        </div>

        <div className="content-area" style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <div className="content-header" style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
            📄 المصحف الإلكتروني (الصفحة ٥٨٢)
          </div>
          <div className="quran-page" style={{ fontSize: '1.5rem', lineHeight: '2.5', textAlign: 'center' }}>
            <p>عَمَّ يَتَسَآءَلُونَ (1) عَنِ ٱلنَّبَإِ ٱلۡعَظِيمِ (2) ٱلَّذِي هُمۡ فِيهِ مُخۡتَلِفُونَ (3)...</p>
          </div>
        </div>
      </div>

      <div className="controls-bar" style={{ display: 'flex', justifyContent: 'center', gap: '15px', padding: '20px' }}>
        <button onClick={toggleMic} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          {isMicOn ? '🎙️ كتم' : '🔇 تشغيل الصوت'}
        </button>
        <button onClick={toggleCam} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          {isCamOn ? '📷 إيقاف' : '🚫 تشغيل الكاميرا'}
        </button>
        <button onClick={leaveSession} style={{ padding: '10px 20px', background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
          🚪 خروج
        </button>
      </div>
    </div>
  );
}