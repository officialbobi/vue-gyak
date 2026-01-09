<template>
  <div class="card">
    <img :src="flower.imageUrl" :alt="flower.name" />
    <h2>{{ flower.name }}</h2>
    <p>{{ flower.description }}</p>
    <p class="price">{{ flower.price }} Ft</p>
  </div>
</template>

<script>
export default {
  props: {
    flower: Object
  }
}
</script>
