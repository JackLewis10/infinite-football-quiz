<template>
    <div class="homePage">
        <topSectionLogo />
        <quizHome />
    </div>
</template>

<script>
import quizHome from "@/components/quizHome";
import topSectionLogo from "@/components/topSectionLogo";

export default {
name: "App",
  components: {
    quizHome,
    topSectionLogo,
  },
};
</script>

<style>

.gradient-bg {
    background-color: #89d8d3;
    background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
}

.homePage {
    height: 100vh;
    background-color: #f3f4f6;
}

.gray-bg {
    background-color: #f4f6f5;
}

</style>