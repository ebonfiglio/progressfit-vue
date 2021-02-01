<template>
  <div>
    <v-textarea
      value="blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "
    ></v-textarea>
    <form class="form">
      <v-checkbox
        ref="tos"
        v-model="$v.form.tos.$model"
        label="Accept TOS"
        color="indigo"
      ></v-checkbox>
      <div v-if="$v.form.tos.$error && !$v.form.tos.checked" class="error">
        Accepting TOS is required
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tos: null,
      },
    };
  },
  validations: {
    form: {
      tos: {
        checked: (value) => value === true,
      },
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      return new Promise((resolve, reject) => {
        if (!this.$v.$invalid) {
          resolve({
            tos: this.form.tos,
          });
        } else {
          reject("Error accepting TOS");
        }
      });
    },
  },
};
</script>

<style></style>
