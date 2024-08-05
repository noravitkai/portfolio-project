import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProjectsPage from "../views/ProjectsPage.vue";
import ProjectDetails from "../components/ProjectDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsPage,
  },
  {
    path: "/projects/:projectId",
    name: "ProjectDetails",
    component: ProjectDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
