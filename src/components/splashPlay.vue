<template>
    <div class="p-5">
        <div class="bg-white shadow-md flex justify-center flex-col items-center">
            <h1 class="text-center text-xl text-base leading-6 font-semibold uppercase text-black tracking-wider my-5">LET'S PLAY</h1>
            <p class="px-10">You are ready to jump in and play! Let's see if your footballing knowledge can get you on the leaderboard</p>
            <div class="flex py-4">
                <p class="m-2">🏆</p>
                <p class="m-2">⭐</p>
                <p class="m-2">🏆</p>
                <p class="m-2">⭐</p>
                <p class="m-2">🏆</p>
            </div>
            <span class="inline-flex rounded-md shadow-sm my-5">
                <button @click="next" class="pink-gradient text-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none" type="button" style="transition: all .15s ease">
                <router-link to="/quizStart">NEXT</router-link>
                </button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
      name: "splashPlay",
      methods: {
        next() {
          this.$emit("next");
    }
  }
};

</script>

<style>

</style>