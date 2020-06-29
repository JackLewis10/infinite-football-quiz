<template>
    <div class="prizeWon flex flex-col justify-between">
        
        <div class="">
            <h1 class="uppercase font-semibold pb-2">Questions Answered</h1>
            <h1><span class="font-bold text-pink-500 text-2xl bg-white shadow-md p-2 rounded-lg">30</span></h1>
        </div>


        <div class="px-5 py-5">
            <div class="grid grid-rows-3 grid-flow-col gap-2 pink-gradient text-white shadow-md rounded-lg p-1">
                <div class="flex justify-center row-span-3"><img src="https://img.icons8.com/fluent/150/000000/hearts.png"/></div>
                <div class="row-span-1 col-span-2 font-bold uppercase mt-1 md:mt-5">Extra Life</div>
                <div class="row-span-2 col-span-2 px-1 md:mt-4">This life will automatically add to your total.</div>
            </div>
        </div>

        <div>
            <div class="flex px-5">
                <div class="w-1/2 pr-2 h-12">
                    <button class="w-full text-white gradient-bg border border-solid border-teal-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mb-3" type="button" style="transition: all .15s ease">
                        SPIN
                    </button>
                </div>
                <div class="w-1/2 pl-2 h-12">
                    <button class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mb-3" type="button" style="transition: all .15s ease">
                        <router-link to="/game-over">QUIT</router-link>
                    </button>
                </div>
            </div>

            <div class="px-5 py-5">
                <span class="py-2">
                    <button @click="backToQuiz" class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none" type="button" style="transition: all .15s ease">
                    CONTINUE
                    </button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "prizeWon",
      methods: {
        backToQuiz() {
          this.$emit("backToQuiz");
    }
  }
};
</script>

<style>
.prizeWon {
    height: 60vh;
    background-color: #f3f4f6;
}
</style>