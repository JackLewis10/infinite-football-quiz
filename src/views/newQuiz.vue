<template>
    <div class="screenSize flex flex-col content-center">
        <div class="flex content-between flex-wrap h-full">

            <!-- Quiz Header -->
            <div class="w-full">
                <div class="quiz-bg">
                    <div class="flex justify-between px-6">
                        <div class="py-5 w-1/3">
                            <p><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/></svg>
                            </p>
                        </div>
                        <div class="py-5 w-1/3">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-5 score-bg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20" height="20"><path class="heroicon-ui" d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z"/></svg><p class="pl-2">540</p>
                            </span>
                        </div>
                        <div class="py-5 w-1/3 text-right">
                            <span class="inline-flex items-right px-3 py-1 rounded-full text-sm font-medium leading-5 questionNo">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20" height="20"><path class="heroicon-ui" d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20" height="20"><path class="heroicon-ui" d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20" height="20"><path class="heroicon-ui" d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"/></svg>
                            </span>
                        </div>
                    </div>
                    <div class="px-5 pb-10">
                        <div class="bg-white p-10 rounded-lg layered">
                            <h1 class="font-bold">Which player scored the fastest hat-trick in the Premier League?</h1>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <circle fill="white" fill-opacity="0.5" cx="100" cy="100" r="100" />
                    </svg>
                </div>
            </div>

            <!-- Answer Section -->
            <div class="w-full">
                <div class="px-2 py-1">
                    <div class="text-gray-700 text-center p-2">
                        <span class="rounded-md shadow-lg">
                            <button type="button" class="answerButton w-full shadow-sm font-bold items-center px-6 py-3 border border-transparent text-base leading-6 rounded-lg bg-white focus:outline-none focus:border-green-200 active:transition ease-in-out duration-150 md:w-3/4">
                                Sadio Mane
                            </button>
                        </span>
                    </div>
                    <div class="text-gray-700 text-center p-2">
                        <span class="rounded-md shadow-lg">
                            <button type="button" class="answerButton w-full shadow-sm font-bold items-center px-6 py-3 border border-transparent text-base leading-6 rounded-lg bg-white focus:outline-none focus:border-green-200 active:transition ease-in-out duration-150 md:w-3/4">
                                David Ginola
                            </button>
                        </span>   
                    </div>
                    <div class="text-gray-700 text-center p-2">
                        <span class="rounded-md shadow-lg">
                            <button type="button" class="answerButton w-full shadow-sm font-bold items-center px-6 py-3 border border-transparent text-base leading-6 rounded-lg bg-white focus:outline-none focus:border-green-200 active:transition ease-in-out duration-150 md:w-3/4">
                                Robbie Fowler
                            </button>
                        </span>
                    </div>
                    <div class="text-gray-700 text-center p-2">
                        <span class="rounded-md shadow-lg">
                            <button type="button" class="answerButton w-full shadow-sm font-bold items-center px-6 py-3 border border-transparent text-base leading-6 rounded-lg bg-white focus:outline-none focus:border-green-200 active:transition ease-in-out duration-150 md:w-3/4">
                                Wayne Rooney
                            </button>
                        </span>
                    </div>
                </div>
            </div>

            <!-- LifeLine Section -->
            <div class="w-full">
                <div class="px-2 flex justify-between">
                    <div class="text-center p-2">
                        <span class="inline-flex rounded-md shadow-sm">
                            <button type="button" class="hintButton inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                            </button>
                        </span>
                    </div>
                    <div class="text-center p-2">
                        <span class="inline-flex rounded-md shadow-sm">
                            <button type="button" class="reRollButton inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z"/></svg>
                            </button>
                        </span>
                    </div>
                    <div class="text-center p-2">
                        <span class="inline-flex rounded-md shadow-sm">
                            <button type="button" class="skipButton inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
                            </button>
                        </span>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.screenSize {
    height: 100vh;
    background-color: rgb(245, 239, 239);
    background-image: url(../assets/seam-football-trans-50.png);
    font-family: 'Open Sans', sans-serif;
}

.quiz-bg {
    background-color: #1b8b00;
    background-image: linear-gradient(314deg, #1b8b00 0%, #4ac334 74%);
    font-size: 1.1rem;
}

.score-bg {
    background-color: #ffcb43;
    background-image: linear-gradient(319deg, #ffcb43 0%, #ff6425 37%, #ff0016 100%);
    color: white;
    font-weight: 400;
    font-size: 0.9rem;
}

.questionNo {
    background-color: darkgreen;
    color: white;
    font-weight: 400;
    font-size: 0.9rem;
}

.answerButton {
    font-size: 1.3rem;
}

.answerButton:active {
    font-size: 1.3rem;
    color: white;
    background-color: #1b8b00;
    background-image: linear-gradient(314deg, #1b8b00 0%, #4ac334 74%);
}

.answerButton:hover {
    font-size: 1.3rem;
    color: white;
    background-color: #1b8b00;
    background-image: linear-gradient(314deg, #1b8b00 0%, #4ac334 74%);
}

.hintButton {
    background-color: #6e72fc;
    background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
}

.reRollButton {
    background-color: #ff7878;
    background-image: linear-gradient(315deg, #ff7878 0%, #ff0000 74%);
}

.skipButton {
    background-color: #0abcf9;
    background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
}

.layered {
    background: #ffffff;
    box-shadow:
        0 1px 1px rgba(0,0,0,0.15), /* The top layer shadow */
        0 10px 0 -5px #eee, /* The second layer */
        0 10px 1px -4px rgba(0,0,0,0.15), /* The second layer shadow */
        0 20px 0 -10px #eee, /* The third layer */
        0 20px 1px -9px rgba(0,0,0,0.15); /* The third layer shadow */
}

</style>