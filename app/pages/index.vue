<template>
  <v-container>
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-6" elevation="2">
          <v-card-title class="text-h4 text-center">
            Nuxt Vuetify Template
          </v-card-title>
          <v-card-text class="text-body-1 text-center mt-4">
            This is a starter template with Nuxt 4 and Vuetify 3.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="bg-blue" @click="goToContactUsGoddamit">Kontakta Oss</v-btn>
    <nuxt-link to="/kontakta-oss">Kontakta Oss</nuxt-link>
    <example-comp />
  </v-container>
</template>

<script setup>
import { ref as dbRef } from 'firebase/database'
import { useDatabaseList, useDatabaseObject, useDatabase } from 'vuefire'

const db = useDatabase()
const todos = useDatabaseList(dbRef(db, 'todos'))
const settings = useDatabaseObject(dbRef(db, 'settings'))
function goToContactUsGoddamit() {
  // This is a placeholder function. You can implement navigation logic here if needed.
  console.log("Navigating to Kontakta Oss page...");

  navigateTo('/kontakta-oss');
}
</script>