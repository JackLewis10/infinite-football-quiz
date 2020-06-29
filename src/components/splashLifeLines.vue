<template>
    <div class="p-5">
        <div class="bg-white shadow-md flex justify-center flex-col items-center">
            <h1 class="text-center text-xl text-base leading-6 font-semibold uppercase text-black tracking-wider my-5">LIFELINES ARE KEY</h1>
            <p class="px-10">Reach base points and get a chance to earn lifelines. These are important for quizzers who really want to lay down a big score</p>
            <div class="flex py-4">
                <img class="w-8 m-2" alt="life" src="https://img.icons8.com/color/2x/hearts.png" />
                <img class="w-8 m-2" alt="life" src="https://img.icons8.com/color/2x/dice.png" />
                <img class="w-8 m-2" alt="life" src="https://img.icons8.com/flat_round/2x/fast-forward.png" />
                <img class="w-8 m-2" alt="life" src="https://img.icons8.com/color/2x/help.png" />
            </div>
            <span class="inline-flex rounded-md shadow-sm my-5">
                <button @click="next" class="pink-gradient text-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none" type="button" style="transition: all .15s ease">
                NEXT
                </button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
      name: "splashLifeLines",
      methods: {
        next() {
          this.$emit("next");
    }
  }
};

</script>

<style>

</style>