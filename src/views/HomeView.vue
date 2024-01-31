<template>
  <v-app id="home">
    <div class="navbar-container">
      <NavBar />
    </div>
    <div class="navbar_under_construction">
      <v-app-bar app color="black" dark flat class="px-12">
        <h1
          class="text-purple"
          style="margin-left: auto; margin-right: auto; font-size: 25px"
        >
          PLANNING ON REWORKING THE WEBSITE USING REACT, STAY TUNED
        </h1>
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

              <v-btn class="mt-8" id="contactbtn">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Contact me
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
              <v-btn variant="plain" @click="scroll('about')" id="arrow">
                <v-icon>fas fa-angle-double-down</v-icon></v-btn
              >
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative; z-index: 9990" class="mt-16">
              <v-img
                src="@/assets/Portrait.png"
                contain
                max-height="300"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="">
                <v-img
                  src="@/assets/Portrait2.jpg"
                  max-height="300"
                  class=""
                ></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h3 class="mt-16">About Me</h3>
              <br />
              <h4 class="mt-n4">I Am a Computer Science Student</h4>
              <p class="text-grey" style="padding-right: 10%">
                I am a 23 year-old student from Norway, currently undergoing my
                second year of a Bachelor in Computer Science. I come from
                Haugesund, Norway, and am currently living in Trondheim Norway,
                while studying at the Norwegian University of Science and
                Technology.
              </p>
              <br />
              <p class="text-grey" style="padding-right: 10%">
                I have experience in programming languages such as: Java,
                Python, HTML, CSS, Vue, JS and mySQL. I'm still learning, and
                growing in all these languages, and have a goal of learning even
                more!
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="padd" id="resume">
        <div class="text-center mt-4 resume_container">
          <!--TODO: Make resume downloadable-->
          <h1>Resume</h1>
          <h2 style="margin-top: 2%">Education</h2>
          <div
            class="resume"
            v-for="(items, index) in education.education"
            :key="items"
          >
            <h3>{{ education.education[index].Degree }}</h3>
            <h4>{{ education.education[index].School }}</h4>
            <p>{{ education.education[index].Course }}</p>
            <p id="date">{{ education.education[index].Date }}</p>
          </div>
          <h2 style="margin-top: 3.5%">Experience</h2>
          <div
            class="resume"
            v-for="(items, index) in experience.experience"
            :key="items"
          >
            <h3>{{ experience.experience[index].Position }}</h3>
            <h4>{{ experience.experience[index].Company }}</h4>
            <p>{{ experience.experience[index].Description }}</p>
            <p id="date">{{ experience.experience[index].Date }}</p>
          </div>
          <h2 style="margin-top: 3.5%">Extracurricular Activities</h2>
          <div
            class="resume"
            v-for="(items, index) in extracurricular.extracurricular"
            :key="items"
          >
            <h3>{{ extracurricular.extracurricular[index].Title }}</h3>
            <p v-for="(item, index1) in extracurricular.extracurricular[index].Description" :key="item">
              {{ extracurricular.extracurricular[index].Description[index1]}}
            </p>
            <br />
            <p>{{ extracurricular.extracurricular[index].Description2 }}</p>
            <p id="date">{{ extracurricular.extracurricular[index].Date }}</p>
          </div>
        </div>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="padd" id="portfolio">
        <div class="text-center mt-4">
          <!--TODO: Make resume downloadable-->
          <h1>Projects I've worked on</h1>
          
        </div>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="px-16" id="contact">
        <!--TODO: Revamp from text-areas to actual form-->
        <!--TODO: Create handleSubmit() type button, to make form sendable-->
        <!--TODO: Add contact info either above or under contact form. Email, phone-number, LinkedIn etc.-->
        <v-row>
          <v-col cols="12" sm="6" class="text-center mr-auto ml-auto">
            <div style="margin-left: auto; margin-right: auto">
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
              <div style="color: red; font-size: 18px;">
                <span v-if="submitted"> This function is not yet availabe, but will be available soon! </span>
              </div>
              <v-btn class="mt-2" id="submitbtn" @click="handleSubmit()"
                >Submit Now</v-btn
              >
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
import extracurricular from "../../extracurricular.json";

// Components
//import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
  data() {
    return {
      education,
      experience,
      extracurricular,
      submitted: false,
    };
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },

    handleSubmit() {
      setTimeout(() => {
        this.submitted = true;
      }, 100);
    },
  },
};
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
  margin-top: 4%;
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
  transition: opacity 0.3s ease-in-out scale 0.3s ease-in-out;
}

.resume:hover {
  transform: scale(1.05);
  opacity: 1;
  z-index: 1;
}

.resume:not(:hover) {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

#date {
  font-size: 12px;
  opacity: 0.5;
}

#arrow:hover {
  /*opacity: 0.6;*/
  transform: scale(2) translateY(2px);
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
/* contactbtn css inspired by https://uiverse.io/menezes11/afraid-lizard-67 */
#contactbtn {
  position: relative;
  padding: 1em 1.8em 1 1;
  outline: none;
  border: 1px solid #303030;
  background: #212121;
  color: #ae00ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}

#contactbtn:hover {
  box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
  transition-delay: 0.6s;
}

#contactbtn span {
  position: absolute;
}

#contactbtn span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ae00ff);
}

#contactbtn:hover span:nth-child(1) {
  left: 100%;
  transition: 0.7s;
}

#contactbtn span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #001eff);
}

#contactbtn:hover span:nth-child(3) {
  right: 100%;
  transition: 0.7s;
  transition-delay: 0.35s;
}

#contactbtn span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #ae00ff);
}

#contactbtn:hover span:nth-child(2) {
  top: 100%;
  transition: 0.7s;
  transition-delay: 0.17s;
}

#contactbtn span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #001eff);
}

#contactbtn:hover span:nth-child(4) {
  bottom: 100%;
  transition: 0.7s;
  transition-delay: 0.52s;
}

#contactbtn:active {
  background: #ae00af;
  background: linear-gradient(to top right, #ae00af, #001eff);
  color: #bfbfbf;
  box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
  transition: 0.1s;
}

#contactbtn:active
  span:nth-child(1)
  span:nth-child(2)
  span:nth-child(2)
  span:nth-child(2) {
  transition: none;
  transition-delay: none;
}

#submitbtn {
 --color: #560bad;
 font-family: inherit;
 display: inline-block;
 width: 8em;
 height: 2.6em;
 line-height: 2.5em;
 margin: 20px;
 position: relative;
 overflow: hidden;
 border: 2px solid var(--color);
 transition: color .5s;
 z-index: 1;
 font-size: 17px;
 border-radius: 6px;
 font-weight: 500;
 color: var(--color);
}

#submitbtn:before {
 content: "";
 position: absolute;
 z-index: -1;
 background: var(--color);
 height: 150px;
 width: 200px;
 border-radius: 50%;
}

#submitbtn:hover {
 color: #fff;
}

#submitbtn:before {
 top: 100%;
 left: 100%;
 transition: all .7s;
}

#submitbtn:hover:before {
 top: -30px;
 left: -30px;
}

#submitbtn:active:before {
 background: #3a0ca3;
 transition: background 0s;
}
</style>
