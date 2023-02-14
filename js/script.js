class Producto{
    constructor( nombre , precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("------------");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }
}
    let elegir = prompt("Ingresa 1 podra crear un producto, y 2 para la compra");
    let lista_productos =[];
    const creador = function() {

//crea hasta 3 productos en base a los datos que se piden por varios popup
    if (elegir == 1){
//aplique el bucle for en reemplazo del bucle while porque el while me generaba errores
        for( let i = 0; i <3; i = i + 1){
            let nombre = prompt("como se llama el producto");
            let precio = parseInt(prompt("cual es su precio"));
            let stock = parseInt(prompt("cual es su stock"));
            
            let productos = new Producto(nombre, precio, stock);
            
            lista_productos.push(productos);
            
        }
        console.log(lista_productos);
    }
//si elijo la 2da opcion nos mandaria a una pagina que no existe por el momento
    else if(elegir == 2){
        console.log("pagina en mantenimiento")
    }

}
//Y por ultimo hice el llamado a la funcion anonima para poder ejecutar el if, ya que no encontraba la manera de poder ejecutarla sin parametros 
creador();
// INICIO DEL RENDER DE MIS PRODUCTOS
console.log("lista de productos");
    for( let producto of lista_productos){
        producto.get_datos();
    }