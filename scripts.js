import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLr_MTQJUjgWz59CpHs8yW23u7L4ccPhE",
  authDomain: "contactform-e99c5.firebaseapp.com",
  databaseURL:
    "https://contactform-e99c5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contactform-e99c5",
  storageBucket: "contactform-e99c5.appspot.com",
  messagingSenderId: "584585603305",
  appId: "1:584585603305:web:a316c4d657516c80466878",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const form = document.getElementById("survey-form");



document.getElementById("survey-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const recommendationValue = document.querySelector("input[name='recommendation']:checked").value;

  const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

  const improvementsValue = Array.from(checkboxes).map((checkbox) => checkbox.value).join(", ");

  set(ref(db, "user/" + document.getElementById("name").value), {
    email: document.getElementById("email").value,
    age: document.getElementById("number").value,
    role: document.getElementById("dropdown").value,
    recommendation: recommendationValue,
    improvements: improvementsValue,
    message: document.getElementById("bio").value,
  });
  if (!alert("Sent!")) {
    form.reset();
  }
});
