<template>
    <section class="relative text-textDark">
      <!-- Hero background -->
      <div class="absolute inset-0 -z-10">
        <img src="/bg-travel.jpg" class="w-full h-full object-cover" alt="Hero Background" />
        <div class="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>
  
      <!-- Hero content -->
      <div class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <!-- Left text -->
        <div class="max-w-xl space-y-6 text-center md:text-left">
          <p class="font-serif text-sm uppercase tracking-widest text-sky font-semibold">Find the trip of your dreams!</p>
          <h1 class="font-serif text-5xl font-bold leading-tight">
            Unforgettable Trips <br />
            <span class="italic text-4xl font-light text-textLight">To The Most Amazing Places</span>
          </h1>
        
        </div>
  
        <!-- Right: Search Form ou Cards -->
        <div class="w-full md:w-auto">
          <SearchForm @search="handleSearch" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import SearchForm from '../components/SearchForm.vue'
  
  function handleSearch(data) {
    console.log('Buscar com:', data)
  }
  </script>
  