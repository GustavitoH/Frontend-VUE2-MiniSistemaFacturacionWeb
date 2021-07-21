<template>
  <div id="app" class="container-fluid min-vh-100">
    <div id="nav" class="row flex-nowrap">
      <NavBar></NavBar>
      <div class="col py-3 p-4">
        <Header></Header>
        <div class="d-flex min-vh-100">
          <index-productos></index-productos>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import IndexProductos from "@/views/productos/Index";
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
    Header,
    IndexProductos
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
