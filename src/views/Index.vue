<template>
 <div class="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
            <a href="#" class="flex flex-grow items-center justify-center p-2 text-indigo-500 hover:text-indigo-500">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-newspaper-variant-outline"></i>
                    </span>
                    <span class="block text-xs leading-none">Inicio</span>
                </div>
            </a>
            <a class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
              <router-link to="/chat">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-apps"></i>
                    </span>
                    <span class="block text-xs leading-none">Chat</span>
                </div>
                </router-link>
            </a>
            <a href="#" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
            <router-link to="/meeting">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-video"></i>
                    </span>
                    <span class="block text-xs leading-none">Reunión</span>
                </div>
            </router-link>
            </a>
            <!-- <a href="#" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-magnify"></i>
                    </span>
                    <span class="block text-xs leading-none">Filtrar</span>
                </div>
            </a> -->
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
.rounded-xl {
    border-radius: 1rem
}
</style>