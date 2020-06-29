<template>
        <div class="gradient-bg">
            <div class="">
                <div class="flex justify-between pt-3">
                    <div class="flex">
                        <img class="w-8 ml-3 mr-2 py-1" alt="life" src="https://img.icons8.com/color/2x/hearts.png" />
                        <img class="w-8 mx-2 py-1" alt="life" src="https://img.icons8.com/color/2x/dice.png" />
                        <img class="w-8 mx-2 py-1" alt="life" src="https://img.icons8.com/color/2x/fire-element.png" />
                    </div>
                    <div class="px-2">
                        <span class="inline-flex items-center mx-2 px-3 rounded-full text-sm font-medium font-bold leading-5 pink-gradient text-white">
                            ⭐ 100 <img class="w-8 ml-3 mr-2 py-1" alt="life" src="https://img.icons8.com/color/2x/hearts.png" /> 2
                        </span>
                    </div>
                </div>
                <div class="px-5 py-10">
                    <h1 v-if="state == 0" class="quiz-underline text-center text-base leading-6 font-semibold uppercase text-black tracking-wider px-5 py-10 bg-white rounded-lg shadow-md">Who won the first Premier League title?</h1>
                    <h1 v-if="state == 1" class="quiz-underline text-center text-base leading-6 font-semibold uppercase text-black tracking-wider px-5 py-10 bg-white rounded-lg shadow-md">Who won the first Premier League title?</h1>
                    <h1 v-if="state == 2" class="base-underline text-center text-base leading-6 font-semibold uppercase text-black tracking-wider px-5 py-10 bg-white rounded-lg shadow-md">You made it to a <span class="text-pink-500">Base Point</span></h1>
                    <h1 v-if="state == 3" class="lifeline-underline text-center text-base leading-6 font-semibold uppercase text-black tracking-wider px-5 py-10 bg-white rounded-lg shadow-md">You have earned a new <span class="text-pink-500">lifeline</span></h1>
                </div>
            </div>
            
            <svg data-v-2cf597f2="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="96px" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" fill="#f3f4f6" class="">
            <path d="M0,0 C40,33 66,52 75,52 C83,52 92,33 100,0 L100,100 L0,100 L0,0 Z"></path>
            </svg>
        </div>
</template>

<script>
export default {
    name: "topSectionContent",

    data() {
    return {
      state: 0
    };
  },

    methods: {
    questionFlow() {
      this.state = 0;
    },

    fillFlow() {
      this.state = 1;
    },

    basePoint() {
      this.state = 2;
    },

    prizeWon() {
      this.state = 3;
    },
  }
};
</script>

<style>

</style>