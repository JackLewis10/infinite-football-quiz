<template>
    <div class="gameOver">

        <div class="gradient-bg">
            <div class="px-5 py-10">
              <div class="bg-white py-5 rounded-lg shadow-md gameover-underline">
                <div v-if="state == 0">
                  <h1 class="text-center text-base leading-6 font-semibold uppercase text-black tracking-wider">GAME OVER</h1>
                  <p class="text-center text-base leading-6 font-semibold uppercase text-black tracking-wider">YOUR SCORE<span class="font-bold text-pink-500"> 400</span></p>
                </div>
                <div v-if="state == 1">
                  <h1 class="text-center text-base leading-6 font-semibold uppercase text-black tracking-wider">WELCOME TO THE LEADERBOARD</h1>
                  <p class="text-center text-base leading-6 font-semibold uppercase text-black tracking-wider">YOU'VE PLACED<span class="font-bold text-pink-500"> 10th</span></p>
                </div>
              </div>
            </div>
            <svg data-v-2cf597f2="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="96px" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" fill="#f4f6f5" class="">
            <path d="M0,0 C40,33 66,52 75,52 C83,52 92,33 100,0 L100,100 L0,100 L0,0 Z"></path>
            </svg>
        </div>
        
        <gameOver v-if="state == 0" @next="leaderboard" />
        <leaderboard v-if="state == 1" />
    </div>
</template>

<script>
import gameOver from "@/components/gameOver";
import leaderboard from "@/components/leaderboard";


export default {
  name: "App",
  components: {
    gameOver,
    leaderboard,
  },

  data() {
    return {
      state: 0
    };
  },

  methods: {
    gameOver() {
      this.state = 0;
    },

    leaderboard() {
      this.state = 1;
    }
  }

};
</script>

<style>

.gradient-bg {
    background-color: #89d8d3;
    background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
}

.pink-gradient {
    background-color: #fe7bb0;
    background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
}

.gameover-underline {
  border-bottom: 7px solid;
  border-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%) 1;
}

.gameOver {
    height: 100vh;
    background-color: #f3f4f6;
}


</style>