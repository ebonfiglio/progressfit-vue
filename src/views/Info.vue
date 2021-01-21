<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        Info
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tabs-slider color="indigo"></v-tabs-slider>
      <v-tab v-for="component in components" :key="component.title">
        {{ component.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="component in components" :key="component.title">
        <v-card color="basil" flat>
          <v-card-text><component :is="component.name"/></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import ContactUs from "../components/ContactUs";
export default {
  name: "Info",
  components: {
    about: About,
    howItWorks: HowItWorks,
    contactUs: ContactUs,
  },
  data() {
    return {
      tab: null,
      components: [
        { title: "About", name: "about" },
        { title: "How it Works", name: "howItWorks" },
        { title: "Contact Us", name: "contactUs" },
      ],
    };
  },
};
</script>

<style></style>
