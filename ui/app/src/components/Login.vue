<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="75vw">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-if="$route.name === 'Register'"></v-btn>
        <v-btn
          v-else-if="isLoggedIn"
          color="white"
          outlined
          tile
          depressed
          @click="
            logout()
            redirect()
          "
        >
          <v-icon left>mdi-logout</v-icon>
          {{ user.username }}
        </v-btn>
        <v-btn
          v-else
          color="white"
          outlined
          tile
          depressed
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>mdi-login</v-icon>
          Login
        </v-btn>
      </template>
      <v-card>
        <v-card-title primary-title>
          <h2>Login</h2>
        </v-card-title>

        <v-card-text>
          <v-form @submit.prevent="submit" ref="form">
            <v-text-field
              v-model="credentials.username"
              prepend-icon="mdi-account"
              label="username"
              :rules="[rules.blank]"
            />
            <v-text-field
              :prepend-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="credentials.password"
              label="password"
              :rules="[rules.blank]"
              :type="show_password ? 'text' : 'password'"
              @click:prepend="show_password = !show_password"
            />
          </v-form>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-alert v-if="errors" dense outlined type="warning">
            {{ errors.detail }}
          </v-alert>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            color="info"
            type="submit"
            value="submit"
            @click="submit"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from '@/router'

export default {
  name: 'Login',
  data() {
    return {
      dialog: false,
      show_password: false,
      credentials: {
        username: '',
        password: '',
      },
      errors: null,
      rules: {
        blank: (v) => v.length > 0 || 'must not be blank',
      },
    }
  },
  methods: {
    ...mapActions(['login', 'logout', 'getUser']),
    submit() {
      if (this.$refs.form.validate()) {
        this.login(this.credentials)
          .then(() => {
            this.getUser()
            this.dialog = false
          })
          .catch((error) => {
            this.errors = error.response.data
          })
      }
    },
    redirect() {
      router.push('/')
    },
  },

  computed: {
    ...mapGetters(['user', 'isLoggedIn', 'isAdmin']),
  },
}
</script>

<style scoped></style>
