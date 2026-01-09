import { createRouter, createWebHistory } from "vue-router";
import FlowerList from "@/views/FlowerList.vue";
import FlowerDetails from "@/views/FlowerDetails.vue";

const routes = [
  {
    path: "/",
    name: "flowers",
    component: FlowerList,
  },
  {
    path: "/flower/:id",
    name: "flower-details",
    component: FlowerDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
