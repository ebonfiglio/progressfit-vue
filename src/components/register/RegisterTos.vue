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
        @click="submit"
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
      this.$emit("update", {
        data: {
          tos: this.form.tos,
        },
        valid: !this.$v.invalid,
      });
    },
  },
};
</script>

<style></style>
