'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react'; // لاستخدام مكتبة Auth

export default function LoginPage() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // هنا نستخدم Auth.js للتحقق من البيانات في MongoDB
    const res = await signIn('credentials', {
      email,
      password,
      role, // نرسل الدور (طالب أو معلم)
      redirect: true,
      callbackUrl: role === 'student' ? '/student/dashboard' : '/teacher/dashboard'
    });
  };

  return (
    <div className="card">
      <div className="roles">
        <button 
          className={role === 'student' ? 'active' : ''} 
          onClick={() => setRole('student')}
        >
          Student
        </button>
        <button 
          className={role === 'teacher' ? 'active' : ''} 
          onClick={() => setRole('teacher')}
        >
          Teacher
        </button>
      </div>

      <input 
        type="email" 
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button className="login-btn" onClick={handleLogin}>Login</button>
    </div>
  );
}