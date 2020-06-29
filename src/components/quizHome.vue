<template>
    <div class="homeScreen flex flex-col justify-between">
            <div class="px-5">
                <div class="pink-gradient shadow-md p-5 rounded-lg">
                    <p class="text-center text-base leading-6 font-semibold uppercase text-white tracking-wider">
                        Quiz
                    </p>
                    <h1 class="py-2 px-5 text-center text-base leading-6 font-small text-white tracking-wider">Run our Infinite Football Quiz to put your football knowledge to the test</h1>
                    <h1 class="px-5 text-center text-base leading-6 font-small text-white tracking-wider">Share your score and challenge your mates</h1>
                </div>
            </div>

            <div class="max-w-screen-xl mx-auto pt-8 px-5 sm:px-6 lg:py-16 lg:px-8">
                <div class="bg-white p-5 shadow-md rounded-lg">
                    <p class="text-center text-base leading-6 font-semibold uppercase text-black tracking-wider">
                    Lifelines
                    </p>
                    <p class="text-center text-base leading-6 font-small text-black tracking-wider">
                    Throughout your journey you will hit basepoints and get the chance to replenish your lifelines
                    </p>
                    <div class="mt-6 grid grid-cols-2 gap-0.5">
                        <!-- Lifeline 1 -->
                        <div class="col-span-1 flex justify-center py-3 bg-gray-50">
                            <img class="w-8" alt="life" src="https://img.icons8.com/color/2x/hearts.png" />
                        </div>
                        <div class="col-span-1 flex py-4 bg-gray-50">
                            <h4 class="text-base leading-6 font-bold uppercase tracking-wider">Extra Life</h4>
                        </div>
                        <!-- Lifeline 1 -->
                        <div class="col-span-1 flex justify-center py-3 bg-gray-50">
                            <img class="w-8" alt="life" src="https://img.icons8.com/color/2x/dice.png" />
                        </div>
                        <div class="col-span-1 flex py-4 bg-gray-50">
                            <h4 class="text-base leading-6 font-bold uppercase tracking-wider">Re-Roll</h4>
                        </div>
                        <!-- Lifeline 1 -->
                        <div class="col-span-1 flex justify-center py-3 px-8 bg-gray-50">
                            <img class="w-8" alt="life" src="https://img.icons8.com/flat_round/2x/fast-forward.png" />
                        </div>
                        <div class="col-span-1 flex py-4 bg-gray-50">
                            <h4 class="text-base leading-6 font-bold uppercase tracking-wider">SKIP</h4>
                        </div>
                        <!-- Lifeline 1 -->
                        <div class="col-span-1 flex justify-center py-3 bg-gray-50">
                            <img class="w-8" alt="life" src="https://img.icons8.com/color/2x/help.png" />
                        </div>
                        <div class="col-span-1 flex py-4 bg-gray-50">
                            <h4 class=" text-base leading-6 font-bold uppercase tracking-wider">HINT</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-5 py-5">
                <span class="py-2">
                    <button class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mb-3" type="button" style="transition: all .15s ease">
                    SHARE
                    </button>
                </span>
                <span class="py-2">
                    <button class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none" type="button" style="transition: all .15s ease">
                    <router-link to="/Quiz">PLAY</router-link>
                    </button>
                </span>
            </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.homeScreen {
    height: 100vh;
    background-color: #f3f4f6;
}
</style>