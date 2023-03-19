<template>
  <v-app-bar app color="black" dark flat class="px-12" id="bar" fixed>
    <v-btn>
      <v-icon color="purple" left class="mr-2">fas fa-signature</v-icon>Daniel
    </v-btn>
    <v-spacer></v-spacer>
    <!--TODO: Make the color change depending on which section of the page user is at-->
    <!--TODO: Make the buttons and navbar scaleable according to size of screen-->
    <!--TODO: Implement a button to switch between English and Norwegian-->
    <!--TODO: Implement a button to switch betewen light and dark mode-->
    <div class="nav-menu>">
      <i class="fas fa-bars" @click="showMenu()"> </i>
      <div
        class="nav-content"
        :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
      >
        <ul class="nav-items">
          <li>
            <v-btn id="btn" text @click="scroll('home')" class="text-purple"
              >Home</v-btn
            >
          </li>
          <li><v-btn id="btn" text @click="scroll('about')">About</v-btn></li>
          <li><v-btn id="btn" text @click="scroll('resume')">Resume</v-btn></li>
          <li>
            <v-btn id="btn" text @click="scroll('portfolio')">Portfolio</v-btn>
          </li>
          <li>
            <v-btn id="btn" text @click="scroll('contact')">Contact</v-btn>
          </li>
        </ul>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
#bar {

}

.nav-menu {
  background-color: white;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    padding: 0 10px;
  }
}
i {
  display: none;
}
// Mobile version - hidden hamburger menu
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: 150px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-items {
    flex-direction: column;
  }
  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
</style>
