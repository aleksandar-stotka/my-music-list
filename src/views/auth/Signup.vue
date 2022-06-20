<template>
  <form @submit.prevent="handleSubmit">
    <label>Sing up</label>
    <input type="text" placeholder="display name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />

    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">log in</button>
    <button v-if="isPending" disabled>loading</button>
  </form>
</template>
<script>
import useSignup from "../../composables/composables/useSignup";
import { ref } from "vue";
export default {
  setup() {
    const { error, signup, isPending } = useSignup();

    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("login");
      }
    };

    return { email, password, handleSubmit, isPending, displayName, error };
  },
};
</script>

<style></style>
