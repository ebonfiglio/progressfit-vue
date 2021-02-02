<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-text>
            <div v-if="wizardInProgress" v-show="asyncState !== 'pending'">
              <keep-alive
                ><component ref="currentStep" :is="currentStep"></component
              ></keep-alive>
            </div>
            <div v-else>
              Thank You. Your account has been successfully created.
            </div>
            <div v-if="asyncState === 'pending'">
              Loading...
            </div>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text>
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="nextButtonClick">
              {{ isLastStep ? "Create Account" : "Next" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-progress-linear :value="progress"></v-progress-linear>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import RegisterLogin from "./RegisterLogin";
import RegisterDiet from "./RegisterDiet";
import RegisterTos from "./RegisterTos";
export default {
  name: "RegisterWizard",
  components: {
    RegisterLogin,
    RegisterTos,
    RegisterDiet,
  },
  data() {
    return {
      currentStepNumber: 1,
      canGoNext: false,
      asyncState: null,
      steps: ["RegisterLogin", "RegisterTos", "RegisterDiet"],
      form: {
        email: null,
        confirmEmail: null,
        password: null,
        confirmPassword: null,
        tos: null,
        gender: null,
        birthday: null,
        activityLevel: null,
        height: null,
        weight: null,
        bodyFat: null,
      },
    };
  },
  computed: {
    isLastStep() {
      return this.currentStepNumber === this.length;
    },
    wizardInProgress() {
      return this.currentStepNumber <= this.length;
    },
    currentStep() {
      return this.steps[this.currentStepNumber - 1];
    },
    length() {
      return this.steps.length;
    },
    progress() {
      return (this.currentStepNumber / this.length) * 100;
    },
  },
  methods: {
    ...mapActions(["addUserAction"]),
    async createAccount() {
      this.asyncState = "pending";
      //pass this.form to API
      var newUserRequest = {
        AppUser: {
          email: this.form.email,
          confirmEmail: this.form.confirmEmail,
          password: this.form.password,
          confirmPassword: this.form.confirmPassword,
        },
        Tos: this.form.tos,
        AppUserSettings: {
          gender: this.form.gender,
          birthday: this.form.birthday,
          activityLevel: this.form.activityLevel,
          weight: this.form.weight,
          height: this.form.height,
          bodyFat: this.form.bodyFat,
        },
      };
      await this.addUserAction(newUserRequest)
        .then(() => {
          this.currentStepNumber++;
        })
        .finally(() => {
          this.asyncState = "success";
        });
      //in the then/finally set this.currentStepNumber++
      //Show succes or failure message in v-else div
      //finally method set this.asyncState to success
    },

    nextButtonClick() {
      this.$refs.currentStep
        .submit()
        .then((stepData) => {
          Object.assign(this.form, stepData);
          if (this.isLastStep) {
            this.createAccount();
          } else {
            this.goNext();
          }
        })
        .catch((error) => console.log(error));
    },
    goBack() {
      this.currentStepNumber--;
    },
    goNext() {
      this.currentStepNumber++;
    },
  },
};
</script>

<style></style>
