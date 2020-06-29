import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/splash",
    name: "Splash",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Splash.vue");
    }
  },
  {
    path: "/quizStart",
    name: "quizStart",
    component: function() {
      return import(/* webpackChunkName: "quiz" */ "../views/quizStart.vue");
    }
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: function() {
      return import(/* webpackChunkName: "quiz" */ "../views/Quiz.vue");
    }
  },
  {
    path: "/game-over",
    name: "gameOver",
    component: function() {
      return import(/* webpackChunkName: "game-over" */ "../views/gameOver.vue");
    }
  },
  {
    path: "/newQuiz",
    name: "newQuiz",
    component: function() {
      return import(/* webpackChunkName: "game-over" */ "../views/newQuiz.vue");
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
