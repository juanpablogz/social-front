<template >
<div class="h-screen login bg-cover">
  <div class="flex justify-center mt-64">
    <router-link to="/signIn"><button type="submit" class="cursor-pointer bg-orange-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-orange-100 hover:text-white rounded">Iniciar sesion</button></router-link>
  </div>
  <div class="flex justify-center mt-4">
    <router-link to="/LogIn"><button type="submit" class="cursor-pointer bg-orange-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-orange-100 hover:text-white rounded">Registrar</button></router-link>
  </div>
</div>
</template>
<script>
import api from './../mixins/api.js'
export default {
  name: 'home',
  mixins: [api],
  data () {
    return {
    }
  },
  methods: {
  }
  }
</script>
<style scoped>
.login {
  overflow: hidden;
  background: url('https://res.cloudinary.com/dutj1bbos/image/upload/v1605638954/helena-lopes-e3OUQGT9bWU-unsplash_qmfgcc.jpg');
  background-repeat: no-repeat;
  background-size: cover;

}
</style>