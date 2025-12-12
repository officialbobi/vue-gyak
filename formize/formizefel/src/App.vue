<script setup>
import { ref } from "vue";
import RegistrationForm from "./components/RegistrationForm.vue";
import RegistrationSuccess from "./components/RegistrationSuccess.vue";

const submitted = ref(null);
</script>

<template>
  <div class="container">
    <h1>Regisztrációs űrlap</h1>

    <RegistrationForm
      v-if="!submitted"
      @success="(values) => { 
          const { password, password_confirm, ...safeData } = values;
          submitted = safeData; 
      }"
    />

    <RegistrationSuccess
      v-else
      :data="submitted"
    />
  </div>
</template>
