<template>
  <div>
    <section id="hero">
      <HeroSection />
    </section>
    <section id="profile">
      <ProfileSection />
    </section>
    <section id="education">
      <EducationSection />
    </section>
    <section id="experience">
      <ExperienceSection />
    </section>
  </div>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import ProfileSection from "@/components/ProfileSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
</script>
