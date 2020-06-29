<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/splash">Splash</router-link> |
      <router-link to="/quizStart">Start</router-link> |
      <router-link to="/quiz">Quiz</router-link> |
      <router-link to="/fill-flow">Fill</router-link> |
      <router-link to="/">Base</router-link> |
      <router-link to="/prize">Prize</router-link> |
      <router-link to="/game-over">Game Over</router-link> 
    </div> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: small;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
