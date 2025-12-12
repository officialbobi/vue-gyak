<script setup>
defineProps({
  data: Object
});
</script>

<template>
  <div class="card">
    <h2>Regisztráció sikeres!</h2>

    <p><strong>Név:</strong> {{ data.name }}</p>
    <p><strong>Email:</strong> {{ data.email }}</p>
    <p><strong>Születési év:</strong> {{ data.birthYear }}</p>

    <p class="ok">🎉 Üdv a rendszerben!</p>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid #aaa;
  border-radius: 8px;
}
.ok {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: green;
}
</style>
