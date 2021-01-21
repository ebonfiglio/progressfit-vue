<template>
  <form @input="submit" class="form">
    <v-text-field
      ref="gender"
      v-model="form.gender"
      label="Gender"
      required
    ></v-text-field>
    <v-text-field
      ref="age"
      v-model="form.age"
      label="age"
      required
    ></v-text-field>
    <v-text-field
      ref="activityLevel"
      v-model="form.activityLevel"
      label="Activity Level"
      required
      password
    ></v-text-field>
    <v-text-field
      ref="height"
      v-model="form.height"
      label="Height"
      required
    ></v-text-field>
    <v-text-field
      ref="weight"
      v-model="form.weight"
      label="Weight"
      required
    ></v-text-field>
    <v-text-field
      ref="bodyFat"
      v-model="form.BodyFat"
      label="BodyFat"
      required
    ></v-text-field>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        gender: null,
        age: null,
        activityLevel: null,
        height: null,
        weight: null,
        bodyFat: null,
      },
    };
  },
  validations: {
    form: {
      gender: {
        required: required,
      },
      age: {
        required: required,
      },
      activityLevel: {
        required: required,
      },
      height: {
        required: required,
      },
      weight: {
        required: required,
      },
      bodyFat: {
        required: required,
      },
    },
  },
  methods: {
    submit() {
      if (!this.$v.$invalid) {
        this.$emit("update", {
          data: {
            gender: this.form.gender,
            age: this.form.age,
            activityLevel: this.form.activityLevel,
            height: this.form.height,
            weight: this.form.weight,
            bodyFat: this.form.bodyFat,
          },
          valid: !this.$v.invalid,
        });
      }
    },
  },
};
</script>

<style></style>
