<template>
  <v-app id="home">
    <div class="navbar-container">
      <NavBar />
    </div>
    <div class="navbar_under_construction">
      <v-app-bar app color="black" dark flat class="px-12">
        <h1 class="text-purple" style="margin-left: auto; margin-right: auto; font-size: 25px;">SITE IS UNDER CONSTRUCTION</h1>
      </v-app-bar>
    </div>
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
                z-index: 9990;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
              class="mt-16"
            >
              <v-btn 
              variant="plain" 
              @click="scroll('about')"
              id="arrow">
              <v-icon>fas fa-angle-double-down</v-icon></v-btn>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative; z-index: 9990" class="mt-16">
              <v-img src="@/assets/Portrait.png" contain max-height="300"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="">
                <v-img src="@/assets/Portrait2.jpg" max-height="300" class=""></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h3 class="mt-16">About Me</h3>
              <br>
              <h4 class="mt-n4">I Am a Computer Science Student</h4>
              <p class="text-grey" style="padding-right: 10%;">
                I am a 23 year-old student from Norway, currently undergoing
                my second year of a Bachelor in Computer Science. 
                I come from Haugesund, Norway, and am currently living in
                Trondheim Norway, while studying at the Norwegian University
                of Science and Technology.
              </p>
              <br />
              <p class="text-grey" style="padding-right: 10%;">
                I have experience in programming languages such as: Java, Python,
                HTML, CSS, Vue, JS and mySQL. I'm still learning, and growing in all 
                these languages, and have a goal of learning even more!
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="padd" id="resume">
        <div class="text-center mt-4">
          <!--TODO: Change format, and add different sections to their own JSON DB files-->
          <!--TODO: Make resume downloadable-->
          <h1>Resume</h1>
          <h2 style="margin-top: 2%;">Education</h2>
          <div class="resume" v-for="(items, index) in education.education" :key="items">
            <h3>{{ education.education[index].Degree }}</h3>
            <h4>{{ education.education[index].School }}</h4>
            <p>{{ education.education[index].Course }}</p>
            <p id="date">{{ education.education[index].Date }}</p>
          </div>
        <h2 style="margin-top: 3.5%;">Experience</h2>
        <div class="resume" v-for="(items, index) in experience.experience" :key="items">
          <h3>{{ experience.experience[index].Position }}</h3>
          <h4>{{ experience.experience[index].Company }}</h4>
          <p>{{ experience.experience[index].Description }}</p>
          <p id="date">{{ experience.experience[index].Date }}</p>
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="px-16" id="contact">
      <!--TODO: Revamp from text-areas to actual form-->
      <!--TODO: Create handleSubmit() type button, to make form sendable-->
      <!--TODO: Add contact info either above or under contact form. Email, phone-number, LinkedIn etc.-->
        <v-row>
          <v-col cols="12" sm="6" class="text-center mr-auto ml-auto">
            <div style="margin-left: auto; margin-right: auto;">
              <h1 class="mt-8">Contact me</h1>
              <v-divider></v-divider>
            
              <v-row class="mt-5">
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Name"
                    persistent-hint
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Email"
                    persistent-hint
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-textarea
                label="Message"
                persistent-hint
                variant="outlined"
              ></v-textarea>
              <v-btn color="purple" class="mt-2" @click="handleSubmit()">Submit Now</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
  </v-container>
</v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import education from "../../education.json";
import experience from "../../experience.json";

// Components
//import HelloWorld from '../components/HelloWorld.vue';

export default ({
  name: "HomeView",
  components: {
    NavBar,
  },
  data() {
    return {
      education,
      experience,
    }
  },
  methods: {
    scroll(refName){
      const element = document.getElementById(refName);
      element.scrollIntoView({behavior: "smooth"})
    }
  }

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
  margin-top: 5%;
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
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.resume {
  background: lightgray;
  border-radius: 12px;
  width: 75%;
  height: auto;
  margin-left: auto;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-right: auto;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 1%;
  padding-right: 1%;
}

#date {
  font-size: 12px;
  opacity: 0.5;
}

#arrow:hover {
  opacity: 0.6;
}

.contact-form {
  background: lightgray;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 5%;
  width: 30%;
}

#contact-me {
  justify-self: center;
}

.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}
</style>