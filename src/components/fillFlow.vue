<template>
        <div class="quiz-space flex flex-col justify-center content-center answer-section px-2 md:pt-20">
          <p class="p-2 pick-lead">Type the correct answer</p>
          <div class="px-10">
              <label for="email" class="sr-only">Answer
              </label>
              <div class="mb-3 pt-0">
                  <input type="text" placeholder="✏ Answer" class="px-3 py-4 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
              </div>
              <span class="inline-flex rounded-md my-3">
                  <button @click="next" class="text-pink-500 shadow-sm bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                  GIVE UP
                  </button>
              </span>
          </div>
        </div>        
</template>

<script>
export default {
    name: "fillFlow",
      methods: {
        next() {
          this.$emit("next");
    }
  }
};
</script>

<style>

</style>