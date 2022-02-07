<template>
  <div>
    <div class="background"></div>
    <v-container>
      <v-col lg="6" cols="12" class="mx-auto">
        <v-card id="carta">
          <v-row>
            <v-col  c lg="4" class="pa-0 d-none d-lg-flex">
              <v-img id="imagen"
                height="100%"
                
                
                src="https://yt3.ggpht.com/ytc/AKedOLTQqZ1DvXbs2_SvDPKuImcTloNt4v-V07ZWI7GwTg=s900-c-k-c0x00ffffff-no-rj"
              >
              </v-img>
            </v-col>
            <v-col cols="12" lg="8" class="pa-4">
              <div class="text-center">
                <v-avatar size="100" color="indigo lighten-4">
                  <v-icon size="40">mdi-account-multiple</v-icon>
                </v-avatar>
                <h2>
                  Iniciar Sesion <br />
                  Direccion de Personal D-1
                </h2>
              </div>

              <!-- inicio de form -->

              
              <v-form>
                <v-card-text>
                  <v-text-field
                    v-model="email"
                    :rules="nameRules"
                    :counter="10"
                    label="Usuario"
                    prepend-inner-icon="mdi-account"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :type="verContraseña ? 'text' : 'password'"
                    :rules="ReglasContraseña"
                    :counter="10"
                    label="Contraseña"
                    prepend-inner-icon="mdi-key"
                    :append-icon="verContraseña ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="verContraseña = !verContraseña"
                    required
                  ></v-text-field>
                </v-card-text>

                <v-card-actions class="justify-center">
                  <v-btn color="primary"  block @click="signin()" ><span>Ingresar</span> </v-btn>
                </v-card-actions>
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>

<script>
// import axios from "axios"
export default {
  data() {
    return {
      verContraseña: false,
      token: null,
      msg: null,
      password: "",
      email: "",
      nameRules: [
        (v) => !!v || "Ingresar Usuario",
        //(v) => v.length <= 10 || "El usuario debe contener minimo 10",
        // (v) =>  /(\d)/.test(v) || "debe tener un numero"
      ],
      ReglasContraseña: [
        (v) => !!v || "Ingresar contraseña",
        (v) => v.length <= 10 || "El usuario debe contener minimo 10",
        // (v) => /([A-Z])/.test(v)  || "Debe contener una mayuscula",
      ],
    };
  },
  methods:{
    signin() {
      const auth = {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      };
      const form = new FormData();

   form.append("username", this.email);
      form.append("password", this.password);
      form.append("grant_type", "password");

      this.$guest
        .post("/login", form, { auth })
        .then(res => {
          this.msg = "You have been successfully logged in!";
          this.classAlert = "success";
          this.email = "";
          this.password = "";

          this.token = res.data.access_token;
          this.expires_in = res.data.expires_in;
          const expiresMs = this.expires_in * 1000;
          const now = new Date();
          const expireDate = new Date(now.getTime() + expiresMs);
          localStorage.setItem("token", this.token);
          localStorage.setItem("expires", expireDate);
          console.log("aca estoy logiin")
          this.$store.dispatch("login",expiresMs);
        })
        .catch(err => {
          console.log(err);
            console.log("estoy en el error");
          this.msg = err.response.data.error_description;
          this.classAlert = "danger";
        });
    }
  }
  
}
</script>

<style scoped>
.background {
  background-image: url("https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") !important;
  height: 400px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-size: cover;
}
#carta {
  margin-top: 15%;
}
#imagen{
  position: relative;
  margin-left:12px ;
}
</style>
