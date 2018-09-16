<template>
  <form  @submit.prevent="createUsuario" enctype="multipart/form-data" method="GET">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <md-card-header-text>
          <div class="md-title">Usuario</div>
        </md-card-header-text>
         <md-card-media>
           <md-button class="md-icon-button md-raised md-primary" href="#/listausuarios">
            <md-icon>menu</md-icon>
           </md-button>
         </md-card-media>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Identificacion</label>
              <md-input v-model="usuario.identificacion" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Nombre(s)</label>
              <md-input v-model="usuario.usuarioNombre" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Apellido(s)</label>
              <md-input v-model="usuario.usuarioApellido" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Email</label>
              <md-input v-model="usuario.email" type="email" autocomplete="email" name="email" id="email"></md-input>
            </md-field>
            <span class="md-error" v-if="!$v.form.email.email">Invalid email</span>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Puntos</label>
              <md-input v-model="usuario.Puntos" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Imagen</label>
              <input type="file" id="photo" name="photo" value="Upload Photo" required v-on:change="onFileChanged"/>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" type="submit" >Crear Usuario</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

export default {
  name: 'create-usuario-form',
  mixins: [validationMixin],
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      usuario: {},
      selectedFile: null,
      errors : ''
    }
  },
  validations: {
      form: {
        foto:{
          required
        },
        email: {
          required,
          email
        }
      }
  },
  methods: {
    onFileChanged () {
        console.log('Change Imagen')
        this.selectedFile =  this.$refs.file.files[0];
    },
    createUsuario () {    
      const formData = new FormData()
      formData.append('imagen', this.selectedFile)
      

      this.$v.$touch()
      axios.post(`http://localhost:3000/usuarios/upload`, this.usuario,formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        this.$router.push({
          name: 'Lista Usuarios'
        })
      })
      .catch(e => {
          this.errors.push(e)
        });
      }
    }
}

</script>
<style>

</style>
