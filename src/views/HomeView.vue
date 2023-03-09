<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-white">I'm Daniel Evensen</h1>
              <span class="text-grey">Computer Science Student</span><br />

              <v-btn tile dark class="text-purple mt-8" variant="outlined">
                Contact me
              </v-btn>
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="
                position: absolute;
                z-index: 9999;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
              class="mt-16"
            >
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative; z-index: 9999" class="mt-16">
              <v-img src="@/assets/portrait.png" contain max-height="300"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="">
                <v-img src="@/assets/portrait.png" max-height="300" class=""></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="mt-16">About Me</h5>
              <br>
              <h4 class="mt-n4">I Am a Computer Science Student</h4>
              <p class="text-grey">
                I am a 23 year-old student from Norway, currently undergoing
                my second year of a Bachelor in Computer Science. 
                I come from Haugesund, Norway, and am currently living in
                Trondheim Norway, while studying at the Norwegian University
                of Science and Technology.
              </p>
              <br />
              <p class="text-grey">
                I have experience in programming languages such as: Java, Python,
                HTML, CSS, Vue, JS and mySQL. I'm still learning, and growing in all 
                these languages, and have a goal of learning even more!
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <div class="text-center mt-4">
        <!--TODO: Change format, and add different sections to their own JSON DB files-->
        <!--TODO: Make resume downloadable-->
        <h1>Resume</h1>
        <h2>Education</h2>
        <div style="
          background: lightgray;
          border-radius: 12px;
          width: 75%;
          height: auto;
          margin-left: auto;
          margin-top: 1%;
          margin-bottom: 1%;
          margin-right: auto;
          padding-top: 1%;
          padding-bottom: 1%;">
          <h3 style="padding:1px;">Bachelor Degree</h3>
          <h4>Norwegian University of Science and Technology</h4>
          <p>Bachelor Degree in Computer Science</p>
          <p style="
          font-size:12px;
          opacity: 0.5">
          August 2021 - Today's Date
        </p>
      </div>
      <div style="
        background: lightgray;
        border-radius: 12px;
        width: 75%;
        height: auto;
        margin-left: auto;
        margin-top: 1%;
        margin-bottom: 1%;
        margin-right: auto;
        padding-top: 1%;
        padding-bottom: 1%;">
        <h3 style="padding:1px;">One-Year Programme</h3>
        <h4>University of Agder</h4>
        <p>Bachelor Degree in Computer Science</p>
        <p style="
        font-size:12px;
        opacity: 0.5">
        August 2021 - Today's Date
      </p>
      
    </div>
  </div>
</v-container>
</v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";

// Components
//import HelloWorld from '../components/HelloWorld.vue';

export default ({
  name: "HomeView",
  components: {
    NavBar,
},
});
</script>
<style scoped>
.v-container {
  padding: 16px 0 16px 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}
.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}
</style>