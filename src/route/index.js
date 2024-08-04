import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProjectsPage from "../views/ProjectsPage.vue";
import ProfileSection from "../components/ProfileSection.vue";
import EducationSection from "../components/EducationSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";

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
    path: "/profile",
    name: "Profile",
    component: HomePage,
    alias: ["/profile", "/education", "/experience"],
    children: [
      {
        path: "#profile",
        component: ProfileSection,
      },
      {
        path: "#education",
        component: EducationSection,
      },
      {
        path: "#experience",
        component: ExperienceSection,
      },
    ],
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
