import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "";

export const connectToDatabase = async () => {
  // إذا كان متصل فعلياً، لا تفتح اتصال جديد
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ تم الاتصال بقاعدة البيانات بنجاح");
  } catch (error) {
    console.error("❌ فشل الاتصال بقاعدة البيانات:", error);
  }
};