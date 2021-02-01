<template>
  <form class="form">
    <v-text-field
      ref="gender"
      v-model="$v.form.gender.$model"
      label="Gender"
      required
    ></v-text-field>
    <div v-if="$v.form.gender.$error && !$v.form.gender.required" class="error">
      gender is required
    </div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="$v.form.birthday.$model"
          label="Birthday"
          ref="birthday"
          prepend-icon="mdi-calendar"
          readonly
          required
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        ref="picker"
        v-model="$v.form.birthday.$model"
        :max="new Date().toISOString().substr(0, 10)"
        min="1950-01-01"
      ></v-date-picker>
    </v-menu>
    <div
      v-if="$v.form.birthday.$error && !$v.form.birthday.required"
      class="error"
    >
      Birthday is required
    </div>
    <v-text-field
      ref="activityLevel"
      v-model="$v.form.activityLevel.$model"
      label="Activity Level"
      required
    ></v-text-field>
    <div
      v-if="$v.form.activityLevel.$error && !$v.form.activityLevel.required"
      class="error"
    >
      Activity Level is required
    </div>
    <v-text-field
      ref="height"
      v-model="$v.form.height.$model"
      label="Height"
      suffix="inches"
      type="number"
      required
    ></v-text-field>
    <div v-if="$v.form.height.$error && !$v.form.height.required" class="error">
      Height is required
    </div>
    <v-text-field
      ref="weight"
      v-model="$v.form.weight.$model"
      label="Weight"
      suffix="lbs"
      type="number"
      required
    ></v-text-field>
    <div v-if="$v.form.weight.$error && !$v.form.weight.required" class="error">
      Weight is required
    </div>
    <v-text-field
      ref="bodyFat"
      v-model="$v.form.bodyFat.$model"
      label="Body Fat"
      suffix="%"
      type="number"
      required
    ></v-text-field>
    <div
      v-if="$v.form.bodyFat.$error && !$v.form.bodyFat.required"
      class="error"
    >
      Body Fat is required
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        gender: "",
        birthday: "",
        activityLevel: "",
        height: "",
        weight: "",
        bodyFat: "",
      },
    };
  },
  validations: {
    form: {
      gender: {
        required: required,
      },
      birthday: {
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
      this.$v.$touch();
      return new Promise((resolve, reject) => {
        if (!this.$v.$invalid) {
          resolve({
            gender: this.form.gender,
            birthday: this.form.birthday,
            activityLevel: this.form.activityLevel,
            height: this.form.height,
            weight: this.form.weight,
            bodyFat: this.form.bodyFat,
          });
        } else {
          reject("Error validating diet info");
        }
      });
    },
  },
};
</script>

<style></style>
