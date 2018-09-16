<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card >
          <md-card-header data-background-color="red">
            <h4 class="title">Lista Promociones</h4>
             <md-card-actions md-alignment="left">
                <md-button class="md-layout" href="#/crear-promocion">Crear Promoción</md-button>
              </md-card-actions>
          </md-card-header>
          <md-card-content>
            <table-promociones table-header-color="red"></table-promociones>
          </md-card-content>
          
          
        </md-card>
       
      </div>      
    </div>
  </div>
</template>

<script>
import {
  TablePromociones,
  OrderedTable
} from '@/components'

export default{
  components: {
    OrderedTable,
    TablePromociones
  }
}
</script>
