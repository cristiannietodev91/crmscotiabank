<template>
  <form  @submit.prevent="createPromotion">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <md-card-header-text>
          <div class="md-title">Crear Promocion</div>
        </md-card-header-text>
         <md-card-media>
           <md-button class="md-icon-button md-raised md-primary" href="#/listapromociones">
            <md-icon>menu</md-icon>
           </md-button>
         </md-card-media>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Nombre Promoción</label>
              <md-input v-model="promotion.promotionName" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Fecha Inicio </label>
              <md-datepicker v-model="promotion.DateIni" md-immediately required></md-datepicker>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Fecha Fin </label>
              <md-datepicker v-model="promotion.DateFin" md-immediately required> </md-datepicker>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Descripcion Promoción</label>
              <md-textarea v-model="promotion.promotionDesc" required></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Cantidad Disponible</label>
              <md-input v-model="promotion.CantidadDisponible" type="number" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Categorias</label>
              <md-select v-model="categorias" name="categorias" id="categorias" placeholder="Categorias">
                  <md-option v-for="(categorias,index) in categorias" :key="index" :value="categorias._id">{{ categorias.categoriaName }}</md-option>
              </md-select> 
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Imagen</label>
              <md-file v-model="promotion.Images" accept="image/*" required/>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Precio</label>
              <md-input v-model="promotion.PrecioPromotion" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" type="submit" >Crear Promoción</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from 'axios'

export default {
  name: 'create-promocion-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      promotion: {},
      categorias: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/categorias`)
    .then(response => {
      this.categorias = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    createPromotion () {    
      axios.post(`http://localhost:3000/promotions`, this.promotion)
      .then(response => {
        this.$router.push({
          name: 'Lista Promociones',
          params: { id: response.data._id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    
    }
  }
}

</script>
<style>

</style>
