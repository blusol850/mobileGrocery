<template>
  <q-page  class="q-pa-md">

    <q-card class="my-card">
      <q-card-section>
        <q-field
            label="Email"
            :error="usernameHasError"
            error-label="We need a valid Email"
          >
            <q-input v-model="username" @keyup.enter="login"/>
          </q-field>
          <q-field
            label="Password"
            :error="passwordHasError"
            error-label="Please enter a password"
          >
            <q-input v-model="password" type="password" @keyup.enter="login"/>
          </q-field>
          <div class="q-pa-md">
            <q-btn label="Login" type="submit" color="primary" style="width:100%"/>
          </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
