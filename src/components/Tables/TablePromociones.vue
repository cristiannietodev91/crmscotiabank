<template>
  <div>
    <md-table v-model="promotions" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.promotionId }}</md-table-cell>
        <md-table-cell md-label="Nombre">{{ item.promotionName }}</md-table-cell>
        <md-table-cell md-label="Descripción">{{ item.promotionDesc }}</md-table-cell>
        <md-table-cell md-label="Inicio">{{ item.DateIni }}</md-table-cell>
        <md-table-cell md-label="Fin">{{ item.DateFin }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'table-promociones',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      promotions: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://95db2389.ngrok.io/promotions`)
    .then(response => {
      this.promotions = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (promotion) {
      this.$router.push({
        name: 'ShowPromotion',
        params: { id: promotion._id }
      })
    }
  }
}
</script>
