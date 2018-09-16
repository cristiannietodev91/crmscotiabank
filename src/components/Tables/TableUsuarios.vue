<template>
  <div>
    <md-table v-model="usuarios" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Identificación">{{ item.identificacion }}</md-table-cell>
        <md-table-cell md-label="Nombre(s)">{{ item.usuarioNombre }}</md-table-cell>
        <md-table-cell md-label="Apellido(s)">{{ item.usuarioApellido }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="FaceId">{{ item.faceId }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'table-usuarios',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      usuarios: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/usuarios`)
    .then(response => {
      this.usuarios = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (usuarios) {
      this.$router.push({
        name: 'ShowPromotion',
        params: { id: usuarios._id }
      })
    }
  }
}
</script>
