<template>
    <div class="gameOverScreen flex flex-col justify-between">

        <div class="px-5">
            <div class="pink-gradient shadow-md p-5 rounded-lg">
            <div class="text-center text-base leading-6 font-semibold uppercase text-white tracking-wider mb-2">⭐ LET'S SEE HOW YOU SCORED ⭐</div>
                <p class="text-center text-base leading-6 font-semibold text-white tracking-wider mb-2">
                    You are in the top <span class="text-red-600 font-bold">10%</span> of players
                </p>
            </div>
        </div>


        <div class="px-5 flex items-center justify-center">
            <div class="container">
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
                            <td class="border-grey-light font-bold border hover:bg-gray-100 p-3">64</td>
                            <td class="border-grey-light font-bold border hover:bg-gray-100 p-3">10</td>
                            <td class="border-grey-light font-bold border hover:bg-gray-100 p-3">34:45</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <div class="px-5 py-5 bg-gray">
            <span class="py-2">
                <button class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mb-3" type="button" style="transition: all .15s ease">
                TRY AGAIN
                </button>
            </span>
            <span class="py-2">
                <button @click="next" class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none" type="button" style="transition: all .15s ease">
                POST TO LEADERBOARD
                </button>
            </span>
        </div>
    </div>  
</template>

<script>
export default {
    name: "gameOver",
    methods: {
        next() {
            this.$emit("next");
    }
  }
};

</script>

<style>
.gameOverScreen {
    height: 65vh;
    background-color: #f3f4f6;
}
</style>