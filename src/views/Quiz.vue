<template>
    <div class="quizPage">
        <div class="gradient-bg">
            <div class="">
                <div class="flex justify-between pt-3">
                    <div class="flex pl-5">
                        <div class="pink-gradient rounded-lg shadow-md mx-1">
                          <img class="w-8 mx-1 py-1 pink-gradient rounded-lg shadow-md" alt="life" src="https://img.icons8.com/color/2x/hearts.png" />
                        </div>
                        <div class="pink-gradient rounded-lg shadow-md mx-1">
                          <img class="w-8 mx-1 py-1 pink-gradient rounded-lg shadow-md" alt="life" src="https://img.icons8.com/color/2x/dice.png" />
                        </div>
                        <div class="pink-gradient rounded-lg shadow-md mx-1">
                          <img class="w-8 mx-1 py-1" alt="life" src="https://img.icons8.com/color/2x/fire-element.png" />
                        </div>
                    </div>
                    <div class="pr-5">
                        <span class="inline-flex items-center mx-2 px-4 rounded-full text-sm font-medium font-bold leading-5 pink-gradient text-white shadow-md">
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

        <questionFlow v-if="state == 0" @next="fillFlow" />
        <fillFlow v-if="state == 1" @next="basePoint" />
        <basePoint v-if="state == 2" @spin="prizeWon" @backToQuiz="questionFlow" />
        <prizeWon v-if="state == 3" @backToQuiz="questionFlow" />    
    </div>    
</template>

<script>
import questionFlow from "@/components/questionFlow";
import fillFlow from "@/components/fillFlow";
import basePoint from "@/components/basePoint";
import prizeWon from "@/components/prizeWon";

export default {
  name: "App",
  components: {
    questionFlow,
    fillFlow,
    basePoint,
    prizeWon,
  },
  
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

.quizPage {
    height: 100vh;
    background-color: #f3f4f6;
}

.gradient-bg {
    background-color: #89d8d3;
    background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
}

.questionFlow {
    height: 100vh;
    background-color: #f4f6f5;
}

.pink-gradient {
    background-color: #fe7bb0;
    background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
}

.white-button {
    color: linear-gradient(315deg, #6617cb 0%, #cb218e 74%);
    background-color: white;
    border: solid 1px linear-gradient(315deg, #6617cb 0%, #cb218e 74%);
}

.pick-lead {
    font-style: italic;
    color: gray;
    
}

.quiz-underline {
  border-bottom: 7px solid;
  border-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%) 1;
}

.base-underline {
  border-bottom: 7px solid;
  border-image: linear-gradient(315deg, #6617cb 0%, #cb218e 74%) 1;
}

.lifeline-underline {
  border-bottom: 7px solid;
  border-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%) 1;
}

</style>