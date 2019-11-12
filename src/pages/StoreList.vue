<template>
  <q-page  class="q-pa-md">
    <!-- here:
    <div v-for="category in categories.SubCategories" v-bind:key="category.Id">
      {{ category.name }}
    </div>:there -->

    <q-list dense bordered padding class="rounded-borders">
      <q-item clickable v-ripple v-for="item in categories" v-bind:key="item.Id" to="/category">
        <q-item-section>
          {{ item.Name }}
        </q-item-section>
      </q-item>
    </q-list>

  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Referee Signup',
  computed: {

    categories: {
      get () {
        return this.$store.getters[ 'grocerystores/stores' ]
      }
    }
  }
}
</script>
