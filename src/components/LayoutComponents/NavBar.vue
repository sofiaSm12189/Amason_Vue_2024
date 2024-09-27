<template>
  <nav>
    <div class="logo">
      <div>
        <img src="../../assets/logo.png" alt="Amason Logo">
      </div>
      <div>
        <a href="">Direccion</a>
      </div>
    </div>

    <div class="barra-busqueda">
      <input type="search" placeholder="Buscar un artículo" />
    </div>

    <div class="info-usuario">
      <a href="">
        <div class="linea-1">Hola, usuario</div>
        <div class="linea-2">Cuenta y listas</div>
      </a>
      <a href="">
        <div class="linea-1">Devoluciones</div>
        <div class="linea-2">y pedidos</div>
      </a>
      <a class="carrito" href="">Carrito</a>
     
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  width: 15vw;
  min-width: 150px;
}

.barra-busqueda {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
}

.barra-busqueda input {
  width: 95%;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
  line-height: 1em;
}

.info-usuario {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25vw;
  white-space: nowrap;
}

a {
  display: block;
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 0.9375rem;
 
}

.carrito {
  font-weight: bold;
}

img {
  width: 80%;
}

.linea-1 {
  font-weight: bold;
}

</style>