<template>
  <v-container>
    <v-btn @click="goToMyTest">Go to My Test</v-btn>
  </v-container>
</template>

<script setup>
const goToMyTest = () => {
  navigateTo('/Dindex')
}
</script>