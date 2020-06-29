<template>
    <div class="p-5">
        <div class="bg-white shadow-md flex justify-center flex-col items-center">
            <h1 class="text-center font-semibold uppercase text-black tracking-wider my-5">INFINITE FOOTBALL QUIZ</h1>
            <p class="px-10">Welcome to the Infinite Football Quiz. The ultimate test of your footballing knowledge. Play and see how far you get!</p>
            <div class="flex py-4">
                <img class="w-8 m-2" alt="life" src="https://img.icons8.com/ios-filled/2x/football2.png" />
                <img class="w-8 m-2" alt="life" src="https://img.icons8.com/ios-filled/2x/football.png" />
                <img class="w-8 m-2" alt="life" src="https://img.icons8.com/ios/2x/soccer-goal.png" />
                <img class="w-8 m-2" alt="life" src="https://img.icons8.com/ios-filled/2x/foul.png" />
            </div>
            <span class="inline-flex rounded-md my-5">
                <button @click="next" class="pink-gradient text-white border border-solid shadow-md hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none" type="button" style="transition: all .15s ease">
                NEXT
                </button>
            </span>    
        </div>
    </div>
</template>

<script>
export default {
      name: "splashHello",
      methods: {
        next() {
          this.$emit("next");
    }
  }
};

</script>

<style>

</style>