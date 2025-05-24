<template>
    <form @submit.prevent="onSubmit"
      class="bg-white bg-opacity-90 backdrop-blur-sm shadow-xl rounded-xl p-8 w-full max-w-3xl space-y-6 mx-auto">
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Origin -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Origin</label>
          <input
            v-model="form.from"
            type="text"
            placeholder="Ex: YUL"
            required
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
  
        <!-- Departure date -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Departure date</label>
          <input
            v-model="form.start"
            type="date"
            required
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
  
        <!-- Return date -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Return date</label>
          <input
            v-model="form.end"
            type="date"
            required
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>
  
      <div class="text-center">
        <button
  type="submit"
  class="bg-primary hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition"
>
        Search Destinations 
</button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  const emit = defineEmits(['search'])
  
  const form = reactive({
    from: '',
    start: '',
    end: '',
  })
  
  function onSubmit() {
    emit('search', { ...form })
  }
  </script>
  