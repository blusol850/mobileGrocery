<template>
  <q-page  class="q-pa-md">
    <!-- here:
    <div v-for="category in categories.SubCategories" v-bind:key="category.Id">
      {{ category.name }}
    </div>:there -->

    {{this.$route.params.categoryId}}

    <q-list dense bordered padding class="rounded-borders">
      <q-item clickable v-ripple v-for="item in categories" v-bind:key="item.Id" to="/category">
        <q-item-section>
          {{ item.Name }}
        </q-item-section>
      </q-item>
    </q-list>
    <pre>{{subCategories}}</pre>
    <pre>{{categories}}</pre>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Category',
  computed: {

    categories: {
      get () {
        return this.$store.getters[ 'grocerystores/categories' ]
      }
    },
    subCategories () {
      return this.$store.getters[ 'grocerystores/categories' ].filter(category => {
        return ['Id']
          .map(key => category[key] === this.$route.params.categoryId)
          .includes(true)
      })
    }
  }
}
</script>
