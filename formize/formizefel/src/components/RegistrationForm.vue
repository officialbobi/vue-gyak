<script setup>
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const emit = defineEmits(["success"]);

// Yup schema
const schema = yup.object({
  name: yup.string().required("A név megadása kötelező"),
  email: yup
    .string()
    .required("Email kötelező")
    .email("Érvénytelen email cím"),
  password: yup
    .string()
    .required("Jelszó kötelező")
    .min(6, "Legalább 6 karakter legyen"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password")], "A jelszavak nem egyeznek")
    .required("Ismételd meg a jelszót"),
  birthYear: yup.string().required("Válassz születési évet"),
  terms: yup.boolean().oneOf([true], "El kell fogadnod az ÁSZF-et"),
});

const years = Array.from({ length: 60 }, (_, i) => 2006 - i);
</script>

<template>
  <Form
    :validation-schema="schema"
    v-slot="{ meta }"
    @submit="(values) => emit('success', values)"
    class="form"
  >
    <div>
      <label>Név:</label>
      <Field name="name" />
      <ErrorMessage name="name" class="error" />
    </div>

    <div>
      <label>Email:</label>
      <Field name="email" type="email" />
      <ErrorMessage name="email" class="error" />
    </div>

    <div>
      <label>Jelszó:</label>
      <Field name="password" type="password" />
      <ErrorMessage name="password" class="error" />
    </div>

    <div>
      <label>Jelszó ismét:</label>
      <Field name="password_confirm" type="password" />
      <ErrorMessage name="password_confirm" class="error" />
    </div>

    <div>
      <label>Születési év:</label>
      <Field name="birthYear" as="select">
        <option value="">-- válassz --</option>
        <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
      </Field>
      <ErrorMessage name="birthYear" class="error" />
    </div>

    <div>
      <label>
        <Field name="terms" type="checkbox" />
        Elfogadom az ÁSZF-et
      </label>
      <ErrorMessage name="terms" class="error" />
    </div>

    <!-- EXTRA: gomb csak akkor aktív, ha valid + dirty -->
    <button type="submit" :disabled="!meta.valid || !meta.dirty">
      Regisztráció
    </button>
  </Form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.error {
  color: red;
  font-size: 0.9rem;
}
button:disabled {
  background: #ccc;
}
</style>
