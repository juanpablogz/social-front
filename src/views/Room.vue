<template>
  <div>
    <div class="mx-4 card bg-white max-w-md p-10 md:rounded-lg my-8 mx-auto">
        <div class="title">
            <h1 class="font-bold text-center">Crear sala | ingresar</h1>
        </div>

        <div class=" options md:flex md:space-x-6 text-sm items-center text-gray-700 mt-4">
            <div class="">
              <AdvancedOptions
                :onRadioChange="handleTranscode"
                :onSelectChange="handleVideoProfile"
              >
              </AdvancedOptions>
            </div>
        </div>    

            <div class="form mt-4">
            <InputChannel
                @change="handleChannel"
                placeholder="Ingresa el nombre de la sala">
            </InputChannel>

               <div class="text-sm flex flex-col">
                <label for="description" class="font-bold mt-4 mb-2">Descripcion</label>
                    <BaseOptions @change="handleBaseMode"> </BaseOptions>
               </div>
            </div>

            <div class="submit">
                <button type="submit" class=" w-full bg-blue-600 shadow-lg text-white px-4 py-2 hover:bg-blue-700 mt-8 text-center font-semibold focus:outline-none "
                id="joinBtn"
                @click="handleJoin"
                :disabled="!joinBtn"
                >Entrar</button>
            </div>
    </div>
    
<!-- asasa -->

  </div>
</template>

<script>
import * as Cookies from "js-cookie";
export default {
  components: {
    BaseOptions: () => import("@/components/BaseOptions"),
    AdvancedOptions: () => import("@/components/AdvancedOptions"),
    InputChannel: () => import("@/components/InputChannel"),
  },

  data() {
    return {
      joinBtn: false,
      channel: "",
      baseMode: "avc",
      transcode: "interop",
      attendeeMode: "video",
      videoProfile: "480p_4",
      pablo: false
    };
  },

  methods: {
    logout() {
      window.localStorage.clear();
      this.$router.push("/");
    },
    handleChannel(val, state) {
      this.channel = val;
      this.joinBtn = state;
    },

    handleBaseMode(val) {
      this.baseMode = val;
    },

    handleTranscode(val) {
      this.transcode = val;
    },

    handleVideoProfile(val) {
      this.videoProfile = val;
    },

    handleAttendeeMode(e) {
      this.attendeeMode = e.currentTarget.value;
    },

    handleJoin() {
      if (!this.joinBtn) {
        return;
      }
      Cookies.set("channel", this.channel);
      Cookies.set("baseMode", this.baseMode);
      Cookies.set("transcode", this.transcode);
      Cookies.set("attendeeMode", this.attendeeMode);
      Cookies.set("videoProfile", this.videoProfile);
      this.$router.push("/meeting");
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("keypress", (e) => {
        e.keyCode === 13 && this.handleJoin();
      });
    });
  },
};
</script>

<style>
</style>
