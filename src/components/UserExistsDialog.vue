<template>
  <v-row justify="center">
    <v-dialog v-model="showDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline"
          >Use Google's location service?</v-card-title
        >
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="hideDialog()"
            >Cancel</v-btn
          >
          <v-btn color="green darken-1" text @click="goToLogin()">Log In</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import router from "../router";
export default {
  name: "UserExistsDialog",
  props: {
    dialog: Boolean,
  },
  data() {
    return {
      showDialog: this.dialog,
    };
  },
  watch: {
    dialog: {
      handler() {
        this.showDialog = this.dialog;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    hideDialog() {
      this.showDialog = false;
    },
    goToLogin(){
      router.push('login');
    }
  },
};
</script>

<style></style>
