<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button @click="VolverAlInicio" class="btn btn-primary">Ir a Inicio</button>
  </div>
</template>
<script>
export default {
  methods: {
    VolverAlInicio() {
      this.$router.push({ name: 'inicio' })
    }
  }
}
</script>
