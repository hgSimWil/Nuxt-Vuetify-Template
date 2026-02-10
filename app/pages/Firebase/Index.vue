<template>


</template>
<script setup>

import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "I54YOHMkZ9NRqnpa6hmmxOzlcbRzdJRxeaKBcjkQ",
  authDomain: "temp-projekt-220s.firebaseapp.com",
  projectId: "temp-projekt-220s",
  storageBucket: "temp-projekt-220s.appspot.com",
  messagingSenderId: "401787728103",
  appId: "1:401787728103:web:3f9f7614f1dae5d1c13242",
  databaseURL:
    "https://tempratur-projektsimon-default-rtdb.europe-west1.firebasedatabase.app/",
};


// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')




</script>