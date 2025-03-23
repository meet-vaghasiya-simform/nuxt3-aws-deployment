<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold text-blue-500">Welcome to Nuxt 3</h1>
    <p class="mt-4 text-lg text-gray-700">
      This is the home page of your Nuxt 3 application. Navigate to the About or Contact pages to learn more.
    </p>
    <div class="mt-6">
      <nuxt-link to="/about" class="text-blue-600 underline hover:text-blue-800">About Us</nuxt-link>
      <span class="mx-2">|</span>
      <nuxt-link to="/contact" class="text-blue-600 underline hover:text-blue-800">Contact Us</nuxt-link>
    </div>
  </div>
</template>

<script setup>
// Add any script logic here if needed
</script>