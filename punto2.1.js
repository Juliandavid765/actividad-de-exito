let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click" , escuchar)
function escuchar(){
    event.preventDefault()
    console.log("hizo click")
    let producto=document.getElementById("producto").value
    console.log(producto)
    let edad=document.getElementById("Edad").value
    console.log (edad)
    let cantidad=document.getElementById("Cantidad").value
    console.log(cantidad)
    alert("el precio es " + (producto*cantidad))
}
if (edad>=18){
    alert("usted puede comprar")

}else{
    alert("usted no puede comprar")
}