<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          mobileGrocery
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >

    <q-select v-model="model" :options="stores" label="Store" />
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item clickable tag="a" target="_blank" @click.native="$router.push('/StoreList')">
          <q-item-section avatar>
            <q-icon name="schedule" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Store List</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple v-for="item in categories" v-bind:key="item.Id" @click.native="$router.push({ path: `/Category/${item.Id}` })">
          <q-item-section>
            {{ item.Name }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      model: null,
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  },
  computed: {
    stores: {
      get () {
        return this.$store.getters[ 'grocerystores/stores' ]
      }
    },
    categories: {
      get () {
        return this.$store.getters[ 'grocerystores/categories' ]
      }
    }
  }
}
</script>

<style>
</style>
