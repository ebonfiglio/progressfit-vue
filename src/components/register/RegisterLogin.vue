<template>
  <div>
    <form @input="submit" class="form">
      <v-text-field
        ref="email"
        @blur="checkIfUserExists"
        v-model="form.email"
        label="Email"
        required
      ></v-text-field>
      <v-text-field
        ref="confirmEmail"
        v-model="form.confirmEmail"
        label="Confirm Email"
        required
      ></v-text-field>
      <v-text-field
        ref="password"
        v-model="form.password"
        label="Password"
        required
        password
      ></v-text-field>
      <v-text-field
        ref="confirmPassword"
        v-model="form.confirmPassword"
        label="Confirm Password"
        required
      ></v-text-field>
    </form>
    <UserExistsDialog :dialog="existingUser"></UserExistsDialog>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

const hasUpperCase = (value) => {
  return value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/);
};
export default {
  data() {
    return {
      form: {
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
      },
      existingUser: false,
    };
  },
  validations: {
    form: {
      email: {
        required: required,
        isEmail: email,
      },
      confirmEmail: {
        required: required,
        isEmail: email,
        match: sameAs("form.email"),
      },
      password: {
        required: required,
        min: minLength(8),
        hasUpperCase,
      },
      confirmPassword: {
        required: required,
        min: minLength(8),
        hasUpperCase,
        match: sameAs("form.password"),
      },
    },
  },
  methods: {
    checkIfUserExists() {
      if (!this.$v.form.email.$invalid) {
        this.existingUser = true;
        return true; //call to api to check email. Then/catch/finally
      }
    },
    submit() {
      if (!this.$v.$invalid) {
        this.$emit("update", {
          data: {
            email: this.form.email,
            confirmEmail: this.form.confirmEmail,
            password: this.form.password,
            confirmPassword: this.form.confirmPassword,
          },
          valid: !this.$v.$invalid,
        });
      }
    },
  },
};
</script>

<style></style>
