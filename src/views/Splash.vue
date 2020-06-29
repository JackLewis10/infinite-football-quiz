<template>
    <div class="splashPage">
        <topSectionLogo />
        <splashHello v-if="state == 0" @next="splashLifeLines" />
        <splashLifeLines v-if="state == 1" @next="splashPlay" />
        <splashPlay v-if="state == 2" />
    </div>
</template>

<script>
import splashHello from "@/components/splashHello";
import splashLifeLines from "@/components/splashLifeLines";
import splashPlay from "@/components/splashPlay";
import topSectionLogo from "@/components/topSectionLogo";


export default {
  name: "App",
  components: {
    splashHello,
    splashLifeLines,
    splashPlay,
    topSectionLogo,
  },


  data() {
    return {
      state: 0
    };
  },

  methods: {
    splashHello() {
      this.state = 0;
    },

    splashLifeLines() {
      this.state = 1;
    },
    
    splashPlay() {
      this.state = 2;
    }
  }
};


</script>

<style>

.splashPage {
    height: 100vh;
    background-color: #f3f4f6;
}

.gradient-bg {
    background-color: #89d8d3;
    background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
}

.gradient-green {
    background-color: #00ff87;
    background-image: linear-gradient(315deg, #00ff87 0%, #169969 74%);
}

.pink-gradient {
    background-color: #fe7bb0;
    background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
}

.pink-button {
    color: white;
    background-color: #6617cb;
    background-image: linear-gradient(315deg, #6617cb 0%, #cb218e 74%);
    border: none;
}

h1 {
  font-size: 1.2rem;
}

p {
  font-size:1rem;
}

</style>
