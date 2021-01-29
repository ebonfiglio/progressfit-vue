<template>
    <div>
        <v-textarea value="blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "></v-textarea>
        <form @input="submit" class="form">
      <v-checkbox
      ref="tos"
              v-model="$v.form.tos.$model"
              label="Accept TOS"
              color="indigo"
              required
            ></v-checkbox>
              <div v-if="$v.form.tos.$error && !$v.form.tos.required" class="error">
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
        required: required,
      },
    },
  },
   methods: {
    submit() {
      if (!this.$v.$invalid) {
        this.$emit("update", {
          data: {
            gender: this.form.tos
          },
          valid: !this.$v.invalid,
        });
      }
    },
  },
}
</script>

<style>

</style>