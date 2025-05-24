<template>
    <div class="min-h-screen flex flex-col bg-cover bg-no-repeat bg-top bg-fixed"
         style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.4)), url('/bg-travel.jpg')">
      
      <Header />
  
      <!-- Centralized content -->
      <main class="flex-grow flex items-center justify-center">
        <Home />
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Home from './pages/Home.vue'
  </script>
  