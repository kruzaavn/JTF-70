<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right color="#f000000" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-img contain max-width="130px" src="@/assets/logo.png"> </v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn
        v-if="isAdmin"
        color="white"
        outlined
        tile
        depressed
        href="https://www.jtf191.com/admin/"
      >
        ADMIN
      </v-btn>
      <Login />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav dense>
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>Photos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-content>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/joinus">
          <v-list-item-content>
            <v-list-item-title>Join Us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div v-if="isLoggedIn">
          <v-list-item to="/qualification/list">
            <v-list-item-content>
              <v-list-item-title>Training Qualifications</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!--        11/1/2020 Removing webgci -->
          <!--        <v-list-item to="/gci">-->
          <!--          <v-list-item-content>-->
          <!--            <v-list-item-title>Web GCI</v-list-item-title>-->
          <!--          </v-list-item-content>-->
          <!--        </v-list-item>-->
          <v-list-item to="/schedule">
            <v-list-item-content>
              <v-list-item-title>JTF Schedule</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-list-item to="/squadron">
          <v-list-item-content>
            <v-list-item-title>Squadrons</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <Footer></Footer>
    </v-navigation-drawer>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row justify="center" align="center">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Login from './components/Login'
import Footer from '@/components/Footer'

export default {
  name: 'Title',
  components: { Footer, Login },
  props: {
    source: String,
  },
  data: () => ({
    drawer: true,
  }),
  computed: {
    ...mapGetters([
      'squadrons',
      'hqs',
      'isLoggedIn',
      'tokenExpiration',
      'isAdmin',
    ]),
  },
  methods: {
    ...mapActions(['getRoster', 'getHQs', 'getSquadrons']),
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || 'JTF-191'
    },
  },
  mounted() {
    this.getRoster()
    this.getSquadrons()
    this.getHQs()
  },
}
</script>

<style lang="scss">
@import 'src/assets/css/app.scss';
</style>
