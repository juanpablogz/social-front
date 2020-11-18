<template>
  <div>

    <input class="w-full appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500" type="text" 
      @input="handleChange"
      id="channel"
      :class="state"
      :placeholder="placeholder"> 
    <div class="validate-msg">
      {{ errorMsg }}
    </div>
  </div>
</template>

<script>
import Validator from "@/utils/Validator";
export default {
  data() {
    return {
      state: "",
      errorMsg: "",
    };
  },

  props: ["placeholder"],

  methods: {
    validate(val) {
      this.state = "";
      this.errorMsg = "";
      if (Validator.isNonEmpty(val.trim())) {
        (this.errorMsg = "Cannot be empty!"), (this.state = "is-danger");
        return false;
      } else if (Validator.minLength(val.trim(), 1)) {
        (this.errorMsg = "No shorter than 1!"), (this.state = "is-danger");
        return false;
      } else if (Validator.maxLength(val.trim(), 16)) {
        (this.errorMsg = "No longer than 16!"), (this.state = "is-danger");
        return false;
      } else if (Validator.validChar(val.trim())) {
        (this.errorMsg =
          'Only capital or lower-case letter, number and "_" are permitted!'),
          (this.state = "is-danger");
        return false;
      } else {
        this.state = "is-success";
        return true;
      }
    },

    handleChange(e) {
      let state = this.validate(e.target.value);
      this.$emit("change", e.target.value, state);
    },
  },
};
</script>

<style scoped>

</style>
