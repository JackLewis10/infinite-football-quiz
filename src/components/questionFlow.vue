<template>
        <div class="flex flex-col justify-center content-center px-2">
            <p class="p-2 pick-lead">Select the correct answer</p>
            <span class="p-2">
                <button @click="next" class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                MANCHESTER UNITED
                </button>
            </span>
            <span class="p-2">
                <button class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                BLACKBURN ROVERS
                </button>
            </span>
            <span class="p-2">
                <button class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                LIVERPOOL
                </button>
            </span>
            <span class="p-2">
                <button class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                CHELSEA
                </button>
            </span>
        </div>    
</template>

<script>
export default {
    name: "questionFlow",
      methods: {
        next() {
          this.$emit("next");
    }
  }
};
</script>

<style>

</style>