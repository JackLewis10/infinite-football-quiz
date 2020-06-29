<template>
    <div class="leaderboard flex flex-col justify-between">
        <div class="p-5 flex justify-center">
            <table class="table-auto shadow-md">
                <thead class="gradient-bg text-white">
                    <tr>
                    <th class="px-4 py-2">Position</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">Adam</td>
                    <td class="border px-4 py-2 font-bold">790</td>
                    </tr>
                    <tr class="bg-gray-200">
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Tom</td>
                    <td class="border px-4 py-2 font-bold">700</td>
                    </tr>
                    <tr class="bg-white">
                    <td class="border px-4 py-2">3</td>
                    <td class="border px-4 py-2">Chris</td>
                    <td class="border px-4 py-2 font-bold">550</td>
                    </tr>
                    <tr class="bg-gray-200">
                    <td class="border px-4 py-2">4</td>
                    <td class="border px-4 py-2">Tam</td>
                    <td class="border px-4 py-2 font-bold">450</td>
                    </tr>
                    <tr class="bg-white">
                    <td class="border px-4 py-2">5</td>
                    <td class="border px-4 py-2">Alexander</td>
                    <td class="border px-4 py-2 font-bold">440</td>
                    </tr>
                    <tr class="bg-gray-200">
                    <td class="border px-4 py-2">6</td>
                    <td class="border px-4 py-2">Jeff</td>
                    <td class="border px-4 py-2 font-bold">400</td>
                    </tr>
                    <tr class="bg-white">
                    <td class="border px-4 py-2">7</td>
                    <td class="border px-4 py-2">Kyle</td>
                    <td class="border px-4 py-2 font-bold">390</td>
                    </tr>
                    <tr class="bg-gray-200">
                    <td class="border px-4 py-2">8</td>
                    <td class="border px-4 py-2">Steve</td>
                    <td class="border px-4 py-2 font-bold">380</td>
                    </tr>
                    <tr class="bg-white">
                    <td class="border px-4 py-2">9</td>
                    <td class="border px-4 py-2">Phillip</td>
                    <td class="border px-4 py-2 font-bold">350</td>
                    </tr>
                    <tr class="pink-gradient text-white">
                    <td class="border px-4 py-2">10</td>
                    <td class="border px-4 py-2">You</td>
                    <td class="border px-4 py-2 font-bold">330</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="px-5 py-5">
            <span class="py-2">
                <button class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mb-3" type="button" style="transition: all .15s ease">
                TRY AGAIN
                </button>
            </span>
            <span class="py-2">
                <button @click="next" class="w-full text-pink-500 bg-white border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none" type="button" style="transition: all .15s ease">
                QUIT
                </button>
            </span>
        </div>

    </div>
</template>

<script>
export default {
    name: "leaderboard"
};
</script>

<style>
.leaderboard {
    background-color: #f3f4f6;
}
</style>