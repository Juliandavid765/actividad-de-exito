let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click" , escuchar)
function escuchar(){
    event.preventDefault()
    console.log("hizo click")
    let producto=document.getElementById("producto").value
    console.log(producto)
    let edad=document.getElementById("Edad").value
    console.log (edad)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    if (edad>=18){
        alert("usted puede comprar")
        alert("el precio es " + (producto*cantidad))
    }else{
        alert("usted no puede comprar")
    }
}