<template>
  <div class="container">
    <h1>Virágok</h1>

    <div class="cards">
      <div class="card" v-for="f in flowers" :key="f.id">
        <img :src="f.imageUrl" alt="" />
        <h2>{{ f.name }}</h2>
        <p>{{ f.description }}</p>
        <button class="flower-btn">Részletek</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      flowers: [
        {
          id: 1,
          name: "Piros rózsa",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Rose_rouge_2.jpg",
          description: "Klasszikus piros rózsa ajándékozásra."
        },
        {
          id: 2,
          name: "Sárga napraforgó",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
          description: "Vidám napraforgó csokor nyári hangulathoz."
        },
        {
          id: 3,
          name: "Fehér liliom",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/Lilium_candidum_%28flower%29.jpg",
          description: "Elegáns fehér liliom ünnepi alkalmakra."
        },
        {
          id: 4,
          name: "Rózsaszín tulipán",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/Tulip_-_floriade_canberra.jpg",
          description: "Tavaszi rózsaszín tulipán csokor."
        },
        {
          id: 5,
          name: "Kék ibolya",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/Viola_reichenbachiana_2005.03.27_10.49.08.jpg",
          description: "Finom illatú ibolya kis csokorban."
        },
        {
          id: 6,
          name: "Rózsaszín hortenzia",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Hydrangea_macrophylla_03.jpg",
          description: "Dús virágzatú hortenzia dekorációhoz."
        },
        {
          id: 7,
          name: "Levendula",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Lavandula_angustifolia_%27Munstead%27_Flower_2000px.jpg",
          description: "Illatos levendula csokor természetes hangulathoz."
        },
        {
          id: 8,
          name: "Mezei virágcsokor",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Wildflower_bouquet.jpg",
          description: "Színes mezei virágok vegyes csokra."
        }
      ]
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  gap: 24px;
}

.card {
  border: 1px solid #ccc;
  padding: 10px;
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.flower-btn {
  background: linear-gradient(135deg, #ff4d6d, #ff85a2);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 18px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  box-shadow: 0 6px 14px rgba(255, 77, 109, 0.35);
  transition: all 0.25s ease;
}

.flower-btn:hover {
  box-shadow: 0 10px 22px rgba(255, 77, 109, 0.45);
  filter: brightness(1.05);
}

.flower-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(255, 77, 109, 0.3);
}

</style>
