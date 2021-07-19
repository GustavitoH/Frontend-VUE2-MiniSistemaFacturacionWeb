<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
      <index-productos></index-productos>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
import IndexProductos from "@/views/productos/Index";

export default {
  name: "App",
  components: {
    Header,
    IndexProductos,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
