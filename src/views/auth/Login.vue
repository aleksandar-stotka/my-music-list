<template>
  <form @submit.prevent="handleSubmit">
    <label>login</label>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">log in</button>
    <button v-if="isPending" disabled>loading</button>
  </form>
</template>

<script>
import useLogin from "../../composables/composables/useLogin";
import { ref } from "vue";
export default {
  setup() {
    const { error, login, isPending } = useLogin();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("login");
      }
    };

    return { email, password, handleSubmit, isPending };
  },
};
</script>

<style></style>
