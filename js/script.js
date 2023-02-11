

function creador_productos(producto, precio, stock) {
//crea un producto en base a los datos que se piden por popup
if (stock >= 1){
//el bucle while lo aplique porque no me convencia con el bucle for
        while( stock >= 1){
            console.log("se creo el producto:" + producto +", Precio $"+ precio +", Stock "+ stock)
            break
        }
    }
//si no tiene stock devuelve que no hay stock
else {
            console.log("no hay stock disponible en el sistema")
        }
    }

//Separe los datos que pide el usuario por sus respectivas variables aplicandoles un parseInt a los datos que manejan enteros
let Producto = prompt("como se llama el producto");
let Precio = parseInt(prompt("cual es su precio"));
let Stock = parseInt(prompt("cual es su stock"));

//Y por ultimo hice el llamado a la funcion aplicandole las variables dentro para que quede mas ordenado 
creador_productos(Producto,Precio,Stock);
