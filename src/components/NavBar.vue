<template>
    <v-app-bar app color="black" dark flat class="px-12" id="bar" fixed>
        <v-btn >
            <v-icon color="purple" left class="mr-2">fas fa-signature</v-icon>Daniel
        </v-btn>
        <v-spacer></v-spacer>
        <!--TODO: Make the color change depending on which section of the page user is at-->
        <!--TODO: Make the buttons and navbar scaleable according to size of screen-->
        <!--TODO: Implement a button to switch between English and Norwegian-->
        <!--TODO: Implement a button to switch betewen light and dark mode-->
        <v-btn id="btn" text @click="scroll('home')" class="text-purple">Home</v-btn>
        <v-btn id="btn" text @click="scroll('about')">About</v-btn>
        <v-btn id="btn" text @click="scroll('resume')">Resume</v-btn>
        <v-btn id="btn" text @click="scroll('portfolio')">Portfolio</v-btn>
        <v-btn id="btn" text @click="scroll('contact')">Contact</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    methods: {
        scroll(refName) {
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior: "smooth"})
        }
    }
}
</script>

<style>
#bar {
    overflow:auto;
}
</style>