<template>
  <div id="app">
    <header class="page-header" role="banner">
      <h1 class="page-title">{{pageTitle}}</h1>
    </header>
    <main class="page-main container">
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
