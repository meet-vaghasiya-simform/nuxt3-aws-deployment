<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-4xl font-bold text-blue-500">Welcome to Nuxt 3</h1>
    <p class="mt-4 text-lg text-gray-700">
      This is the home page of your Nuxt 3 application. Navigate to the To-Do
      List page to manage your tasks.
    </p>
    <div class="mt-6">
      <nuxt-link to="/todo" class="text-blue-600 underline hover:text-blue-800">
        Go to To-Do List
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
// Add any script logic here if needed
</script>
