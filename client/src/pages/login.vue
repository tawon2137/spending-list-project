<template>
  <form class="login-form" onsubmit="return false">
    <a class="login-button">Login with Google</a>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: '',
        password: ''
      }
    }
  }
}
</script>

<style></style>
