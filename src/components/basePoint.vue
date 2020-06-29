<template>
    <div class="flex flex-col justify-between">
        
        <div class="pb-5 px-5">
            <div class="pink-gradient shadow-md p-5 rounded-lg">
                <div class="text-center text-base leading-6 font-semibold uppercase text-white tracking-wider mb-2">🎁 SPIN THE BOOST WHEEL 🎁</div>
                <p class="text-center text-base leading-6 font-semibold text-white tracking-wider mb-2">
                Get the chance to add some lifelines
                </p>
            </div>
        </div>

        <div class="px-5 flex items-center justify-center">
            <div class="container">
                <h1 class="uppercase font-semibold">YOUR STORY SO FAR</h1>
                <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden my-5">
                    <thead class="text-white">
                        <tr class="gradient-bg flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th class="p-3 text-left md:text-center">Questions</th>
                            <th class="p-3 text-left md:text-center">Lifelines</th>
                            <th class="p-3 text-left md:text-center">Time</th>
                        </tr>
                    </thead>
                    <tbody class="flex-1 sm:flex-none">
                        <tr class="bg-white flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light font-bold border hover:bg-gray-100 p-3">30</td>
                            <td class="border-grey-light font-bold border hover:bg-gray-100 p-3">5</td>
                            <td class="border-grey-light font-bold border hover:bg-gray-100 p-3">14:45</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <div class="px-5 py-5 gray-bg">
            <span class="py-2">
                <button @click="backToQuiz" class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mb-3" type="button" style="transition: all .15s ease">
                SKIP TO NEXT QUESTION
                </button>
            </span>
            <span class="py-2">
                <button @click="spin" class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none" type="button" style="transition: all .15s ease">
                SPIN FOR A BOOST 🎁
                </button>
            </span>
        </div>

    </div>
</template>

<script>
export default {
    name: "basePoint",
      methods: {
        spin() {
          this.$emit("spin");
    },
        backToQuiz() {
          this.$emit("backtoQuiz");   
        }
    }
};
</script>

<style>

  html,
  body {
    height: 100%;
  }

  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
</style>