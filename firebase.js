// استيراد الدوال التي تحتاجها من مكتبات Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, runTransaction } from "firebase/database";

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyA9imSpIo7ikyNtelFvLSURDMsWrRY81Gs",
  authDomain: "kku-7e36f.firebaseapp.com",
  databaseURL: "https://kku-7e36f-default-rtdb.firebaseio.com",
  projectId: "kku-7e36f",
  storageBucket: "kku-7e36f.firebasestorage.app",
  messagingSenderId: "624667021078",
  appId: "1:624667021078:web:6f73696c19f83e13a50a37"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// المرجع إلى بيانات عدد المستفيدين
const userCountRef = ref(database, 'userCount');

// دالة لزيادة عدد المستفيدين
function incrementUserCount() {
  console.log("زيادة عدد المستفيدين...");
  runTransaction(userCountRef, (currentValue) => {
    return (currentValue || 0) + 1;
  }).then(() => {
    console.log("تمت الزيادة بنجاح!");
  }).catch((error) => {
    console.error("حدث خطأ في زيادة العدد:", error);
  });
}

// دالة لعرض عدد المستفيدين في الصفحة
onValue(userCountRef, (snapshot) => {
  const count = snapshot.val();
  console.log("عدد المستفيدين المسترجع: ", count);
  document.getElementById('userCount').innerText = `عدد المستفيدين: ${count}`;
});
