// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, runTransaction } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9imSpIo7ikyNtelFvLSURDMsWrRY81Gs",
  authDomain: "kku-7e36f.firebaseapp.com",
  databaseURL: "https://kku-7e36f-default-rtdb.firebaseio.com",
  projectId: "kku-7e36f",
  storageBucket: "kku-7e36f.firebasestorage.app",
  messagingSenderId: "624667021078",
  appId: "1:624667021078:web:6f73696c19f83e13a50a37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const database = getDatabase(app);
const userCountRef = ref(database, 'userCount');

// جلب عدد المستفيدين من قاعدة البيانات وعرضه
onValue(userCountRef, (snapshot) => {
  const count = snapshot.val();
  document.getElementById('userCount').innerText = `عدد المستفيدين: ${count}`;
});

// دالة لزيادة عدد المستفيدين
function incrementUserCount() {
  runTransaction(userCountRef, (currentValue) => {
    return (currentValue || 0) + 1;
  });
}

// استدعاء دالة زيادة عدد المستفيدين عند تحميل الصفحة
incrementUserCount();
