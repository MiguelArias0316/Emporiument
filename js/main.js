$(document).ready(function(){
    var activeCat = "";
    function filterGroup(group){
      if(activeCat != group){
        $(".static-size").filter("."+group).show();
        $(".static-size").filter(":not(."+group+")").hide();
        activeCat = group;
      }
    }
    $("#filtroTodo").click(function(){
      $(".static-size").show();
      activeCat = "all";
    });
    /* CUIDADO PERSONAL */
    $("#filtroMaquillaje").click(function(){ filterGroup("maquillaje"); });
    $("#filtroBelleza").click(function(){ filterGroup("belleza"); });
    $("#filtroProductosFaciales").click(function(){ filterGroup("productosFaciales"); });
    $("#filtroAromaTerapia").click(function(){ filterGroup("aromaTerapia"); });
    /* COMIDA */
    $("#filtroReposteriaPanaderia").click(function(){ filterGroup("reposteriaPanaderia"); });
    $("#filtroLicor").click(function(){ filterGroup("licor"); });
    $("#filtroSuplementosDeportivos").click(function(){ filterGroup("suplementosDeportivos"); });
    $("#filtroRegaloSorpresa").click(function(){ filterGroup("regaloSorpresa"); });
    $("#filtroVegetarianaVegana").click(function(){ filterGroup("vegetarianaVegana"); });
    $("#filtroSaludable").click(function(){ filterGroup("saludable"); });
     /* TURISMO */
     $("#filtroCabañas").click(function(){ filterGroup("cabañas"); });
     $("#filtroGlamping").click(function(){ filterGroup("glamping"); });
     $("#filtroCentroRecreativo").click(function(){ filterGroup("centroRecreativo"); });
     $("#filtroHotel").click(function(){ filterGroup("hotel"); });
     /* HOGAR */
     $("#filtroDecoracion").click(function(){ filterGroup("decoracion"); });
     $("#filtroArte").click(function(){ filterGroup("arte"); });
     $("#filtroHechoAmano").click(function(){ filterGroup("hechoAmano"); });
     $("#filtroPersonalizacion").click(function(){ filterGroup("personalizacion"); });
     $("#filtroMuebles").click(function(){ filterGroup("muebles"); });
     $("#filtroCuadros").click(function(){ filterGroup("cuadros"); });
     $("#filtroCocina").click(function(){ filterGroup("cocina"); });
    /* SERVICIOS */
    $("#filtroEventos").click(function(){ filterGroup("eventos"); });
    $("#filtroFotografia").click(function(){ filterGroup("fotografia"); });
    $("#filtroOptica").click(function(){ filterGroup("optica"); });
    $("#filtroSaludMental").click(function(){ filterGroup("saludMental"); });
    /* MODA */
    $("#filtroBolsos").click(function(){ filterGroup("bolsos"); });
    $("#filtroArte").click(function(){ filterGroup("arte"); });
    $("#filtroPersonalizacion").click(function(){ filterGroup("personalizacion"); });
    $("#filtroTrabajoAmano").click(function(){ filterGroup("trabajoAmano"); });
    $("#filtroRopaDeportiva").click(function(){ filterGroup("ropaDeportiva"); });
    $("#filtroAccesorios").click(function(){ filterGroup("accesorios"); });
    $("#filtroJoyeria").click(function(){ filterGroup("joyeria"); });
    $("#filtroRopaSegundaMano").click(function(){ filterGroup("ropaSegundaMano"); });
    $("#filtroRopaInterior").click(function(){ filterGroup("ropaInterior"); });
  });
  function selecionRadio(){
 
      document.getElementById("filtroBelleza").checked = true;
  
  }