<template >
<div class="h-screen login bg-cover">
  <h1  class="text-center mt-12 fontbold text-2xl">Ingresar</h1>
  <div class="container mx-auto flex justify-center mt-12">
      <div class="w-full max-w-xs">
        <form v-on:submit.prevent="auth()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="correo">
              Correo
            </label>
            <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="contraseña">
              contraseña
            </label>
            <input v-model="password" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
            <p class="text-red-500 text-xs italic">Por favor ingresa tu contraseña.</p>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Ingresar
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. juan pablo.
          </p>
      </div>
      
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
      email: '',
      password: '',
      register: false,
    }
  },
  methods: {
    auth () {
      let params  = { 'email': this.email, 'password': this.password }
      this.postWithoutToken('auth/sign_in/', params).then((result) => {
        let data = result.headers
        localStorage.setItem('token', JSON.stringify(data))
        localStorage.setItem('id', JSON.stringify(result.data.data.id))
        this.$router.push('index')
      })
    },
  }
  }
</script>
<style scoped>
</style>