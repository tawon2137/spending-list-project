<template>
  <div id="app">
    <header class="page-header" role="banner">
      <h1 class="page-title">{{pageTitle}}</h1>
    </header>
    <main class="page-main container">
      <!--<h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        <li><router-link to="/login" >asd</router-link></li>
      </ul>-->
      <a class="login-button">Login width Google</a>
      <router-view></router-view>
    </main>
    <footer class="page-footer" role="">
      <nav>
        <ul class="family-site-list">
          <li></li>
        </ul>
      </nav>
      <a href="https://github.com/tawon2137" target="_blank" title="view on github">Produced By Tae-woong</a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      pageTitle: 'Spending List',
    }
  }
}
</script>

<style lang="scss">
$default-font-size: 1.5rem;
.page {
  &-title {
    padding: 7rem 0 5rem;
    font-weight: normal;
    text-align: center;
    font-size: 3rem;
    margin: 0;
  }
  &-main {
    text-align: center;
  }
  &-footer {
    text-align: center;
    font-size: $default-font-size;
  }
}

h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
