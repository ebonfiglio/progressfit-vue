<template>
  <div>
    <form class="form">
      <v-text-field
        ref="email"
        @blur="checkIfUserExists"
        @keyup="resetExistingUserFlag"
        v-model="$v.form.email.$model"
        label="Email"
        required
      ></v-text-field>
      <div v-if="$v.form.email.$error && !$v.form.email.required" class="error">
        email is required
      </div>
      <div v-if="$v.form.email.$error && !$v.form.email.isEmail" class="error">
        email is invalid
      </div>
      <v-text-field
        ref="confirmEmail"
        v-model="$v.form.confirmEmail.$model"
        label="Confirm Email"
        required
      ></v-text-field>
      <div
        v-if="$v.form.confirmEmail.$error && !$v.form.confirmEmail.required"
        class="error"
      >
        email is required
      </div>
      <div
        v-if="$v.form.email.$error && !$v.form.confirmEmail.isEmail"
        class="error"
      >
        email is invalid
      </div>
      <div
        v-if="$v.form.confirmEmail.$error && !$v.form.confirmEmail.match"
        class="error"
      >
        email must match
      </div>
      <v-text-field
        ref="password"
        v-model="$v.form.password.$model"
        label="Password"
        required
        type="password"
      ></v-text-field>
      <div
        v-if="$v.form.password.$error && !$v.form.password.required"
        class="error"
      >
        password is required
      </div>
      <div
        v-if="$v.form.password.$error && !$v.form.password.min"
        class="error"
      >
        password length is too short
      </div>
      <div
        v-if="$v.form.password.$error && !$v.form.password.hasUpperCase"
        class="error"
      >
        password is invalid
      </div>
      <v-text-field
        ref="confirmPassword"
        v-model="$v.form.confirmPassword.$model"
        label="Confirm Password"
        type="password"
        required
      ></v-text-field>
      <div
        v-if="$v.form.confirmPassword.$error && !$v.form.confirmPassword.match"
        class="error"
      >
        password must match
      </div>
    </form>
    <UserExistsDialog :dialog="existingUser"></UserExistsDialog>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import UserExistsDialog from "../UserExistsDialog";
const hasUpperCase = (value) => {
  if (value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)) return true;
  return false;
};
export default {
  components: {
    UserExistsDialog,
  },
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
        match: sameAs(function() {
          return this.form.email;
        }),
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
        match: sameAs(function() {
          return this.form.password;
        }),
      },
    },
  },
  methods: {
    checkIfUserExists() {
      if (!this.$v.form.email.$invalid) {
        this.existingUser = true;
        //call to api to check email. Then/catch/finally
      }
    },
    resetExistingUserFlag() {
      this.existingUser = false;
    },
    submit() {
      this.$v.$touch();
      return new Promise((resolve, reject) => {
        if (!this.$v.$invalid) {
          resolve({
            email: this.form.email,
            confirmEmail: this.form.confirmEmail,
            password: this.form.password,
            confirmPassword: this.form.confirmPassword,
          });
        } else {
          reject("invalid login info");
        }
      });
    },
  },
};
</script>

<style></style>
