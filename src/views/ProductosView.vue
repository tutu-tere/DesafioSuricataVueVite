<template>
  <section class="container" id="productos">
    <h1 class="text-center">Productos</h1>
    <div class="row">
      <div class="col-sm-4 col-12 px-5 mb-4">
        <div class="card">
          <img src="../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ nombre }}</h5>
            <p class="card-text">
              {{ descripcion }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: {{ precio }}</li>
            <li class="list-group-item">Cantidad: {{ cantidad }}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <button @click="VolverAlInicio" class="btn btn-primary">Ir a Inicio</button>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    VolverAlInicio() {
      this.$router.push({ name: 'inicio' })
    }
  },
  props: {
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    precio: {
      type: Number,
      required: true
    },
    cantidad: {
      type: String,
      required: true
    }
  }
}
</script>
