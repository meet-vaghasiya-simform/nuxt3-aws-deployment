<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <header class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold text-blue-600">To-Do List</h1>
      <nuxt-link to="/" class="text-blue-500 underline hover:text-blue-700"
        >Back to Home</nuxt-link
      >
    </header>

    <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div class="flex items-center mb-4">
        <input
          v-model="newTask"
          type="text"
          placeholder="Add a new task..."
          class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <button
          class="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          @click="addTask"
        >
          Add
        </button>
      </div>

      <ul>
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="flex justify-between items-center border-b border-gray-200 py-2"
        >
          <span
            :class="{ 'line-through text-gray-500': task.completed }"
            class="text-lg"
          >
            {{ task.text }}
          </span>
          <div class="flex items-center space-x-2">
            <button
              class="text-sm text-green-500 hover:underline"
              @click="toggleTask(index)"
            >
              {{ task.completed ? "Undo" : "Complete" }}
            </button>
            <button
              class="text-sm text-red-500 hover:underline"
              @click="deleteTask(index)"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tasks = ref([]);
const newTask = ref("");

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push({ text: newTask.value, completed: false });
    newTask.value = "";
  }
};

const toggleTask = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>
