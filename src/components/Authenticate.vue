<template>
  <div class="bg-black h-screen w-screen p-[50px] med">
    <div class="flex flex-row space-x-2">
      <div class="text-orange-500 text-4xl style">
        <img src="@/assets/images/logo.jpeg" alt="" class="h-[100px]" />
      </div>
      <div class="text-white text-4xl font-black font-mono"></div>
    </div>
    <div>
      <div class="flex flex-row justify-center mt-[40px]">
        <img src="@/assets/images/logo.webp" alt="" class="h-[150px]" />
      </div>
    </div>
    <div class="mt-[100px] text-white flex flex-row justify-between wod">
      <div>
        <p class="text-2xl text-white mt-10 w-[500px] leading-10">
          A web based facial recognition app that authenticates a registered
          user
        </p>
      </div>
      <div>
        <img src="@/assets/images/undraw.svg" alt="" class="h-[200px]" />
      </div>
    </div>
    <div class="flex flex-row justify-center mt-[100px] space-x-[50px]">
      <button
        @click="registerUser"
        id="register"
        class="border-slate rounded outline-0 px-2 py-2 w-[200px] text-gray-800 bg-indigo-500 hover:bg-indigo-700"
      >
        Register
      </button>
      <button
        @click="authenticateUser"
        id="authenticate"
        class="border-slate rounded outline-0 px-2 py-2 w-[200px] text-gray-800 bg-indigo-500 hover:bg-indigo-700"
      >
        Authenticate
      </button>
    </div>
  </div>
</template>
<style>
@media (max-width: 760px) {
  .med {
    /* @apply flex flex-wrap justify-center h-screen */
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100vw;
    padding: 10px;
    overflow-x: hidden;
  }
  .wod {
    display: none;
  }
}
</style>

<script>
import router from "../router";
export default {
  name: "Test",
  created() {},
  data() {
    return {
      user: "",
    };
  },
  props: {},
  methods: {
    registerUser() {
      window.faceio
        .enroll({
          // specific region or language preferences of my operating system or browser
          Locale: "auto",
          userConsent: true,
          payload: {
            /* The payload associated with me
             * which is forwarded back to faceio on each of my future authentication */
            whoami: 123456, // the dummy ID linked to my account on faceio
            email: "john.doe@example.com",
          },
        })
        .then((result) => {
          // User Successfully Enrolled!
          window.location.reload();
          console.log(result);
        })
        .catch((errCode) => {
          console.log(err);
        });
    },
    authenticateUser() {
      window.faceio
        .authenticate({
          locale: "auto", // Default user locale
        })
        .then((result) => {
          console.log(result);
          window.location.reload();
          if (window.location.href.includes("localhost")) {
            window.location.href = "http://localhost:5173/Dashboard";
          } else {
            window.location.href = "/Dashboard";
          }
          //router.push({ name: "Dashboard" });
         
        })
        .catch((errCode) => {
          console.log(errCode);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
