<template>
  <div class="navbar">
    <nav>
      <img
        src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg?w=2000"
        alt=""
      />
      <h1><router-link :to="{ name: 'Home' }">Stotka </router-link></h1>
      <div class="links">
        <button @click="handleClick">Logout</button>

        <router-link class="btn" :to="{ name: 'signup' }">Signup</router-link>
        <router-link class="btn" :to="{ name: 'login' }">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "../composables/composables/useLogout";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { logout } = useLogout();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      console.log("user logged out");
      router.push({ name: "login" });
    };

    return { handleClick };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
  border-radius: 50%;
}
</style>
