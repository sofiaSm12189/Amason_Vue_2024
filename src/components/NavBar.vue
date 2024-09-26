<template>

    <nav>
        <div class="logo">
            <div>
                <img src="../assets/logo.png" alt="logo">
            </div>
            <div>
                <a href="">Direccion</a>
            </div>
        </div>
        
        <div class="barra-busqueda">
            <input type="search" placeholder="Buscar un artículo">
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
            <a href="">
                Carrito
            </a>
                
        </div>
        
    </nav>

</template>



<style scoped>

nav {
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 100%;
}

.logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15vw;
}

.barra-busqueda {
    display: flex;
    align-items: center;
    width: 55vw;
}

.barra-busqueda input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px none;
    font-size: 15px;
    line-height: 15px;
}

.info-usuario {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20vw;
}

a {
    text-decoration: none;
    color: black;
    font-size: 0.9375rem;
}

img {
    width: 80%;

}

</style>