<template>
  <NavBar />

  <router-view />
  <MediosPago />
  <FooterComponents />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MediosPago from '@/components/MediosPago.vue'
import FooterComponents from '@/components/FooterComponents.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooterComponents,
    MediosPago
  }
}
</script>
