<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"> 

<div class="footer">

<div class="row">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><a href="#">Inicio</a></li>
<li><a href="#">Amason Business</a></li>
<li><a href="#">Contáctanos</a></li>
<div class="footer_carrito"></div>
</ul>
</div>

<div class="row">
    ©2024 Amason Company || All rights reserved
</div>

</div>

</template>

<script>
export default {
  name: 'IoniconsLoader',
  mounted() {
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.nomodule = true;
    script2.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    document.body.appendChild(script2);
  },
}
</script>

<style>

.footer{
background:#000;
position: relative;
padding: 5px 0px;
font-family: 'Play', sans-serif;
text-align: center;
overflow: hidden;
}

.footer .row{
width:100%;
margin:1% 0%;
padding:0.3% 0%;
color:gray;
font-size:1.0em;
}

.footer .row a{
text-decoration:none;
color:gray;
transition:0.5s;
}

.footer .row a:hover{
color:#fff;
}

.footer .row ul{
width:100%;
}

.footer .row ul li{
display:inline-block;
margin:0px 30px;
}

.footer .row a i{
font-size:2em;
margin:0% 1%;
}

.footer .footer_carrito {
    background: url('@/assets/carrito3.png') no-repeat center center;
    width: 85px;
    height: 56px;
    background-size: 100%;
    z-index: 10; 
    position: absolute;
    bottom: 0;
    left: 38%; 
    -webkit-animation: moverCamion 15s linear infinite;
    animation: moverCamion 15s linear infinite;
}

  @-webkit-keyframes moverCamion {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@keyframes moverCamion {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}


@media (max-width:720px){
.footer{
text-align:left;
padding:5%;
}
.footer .row ul li{
display:block;
margin:10px 0px;
text-align:left;
}
.footer .row a i{
margin:0% 7%;
}
.footer .footer_carrito {
        width: 80px;
        height: 54px;
        left: 10%; 
        -webkit-animation: moverCamion 7s linear infinite;
        animation: moverCamion 7s linear infinite;
    }
}
</style>

