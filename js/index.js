
let PrecioCer = 215;
let PrecioCoca = 220;
let PrecioFer = 1250;
let PrecioPep = 220;
let QCOCA = 0;
let QCER = 0;
let QFER = 0;
let QPEP = 0;
let Cantidad = 0;
let SumarCarrito = 0;
let TTotal = 0;

let Bebida = prompt(`Ingrese Bebida elegida:  COCA, 
                                        PEPSI, 
                                        FERNET, 
                                        CERVEZA 
                                        o SALIR`)



Carrito(Bebida)
function Carrito(bebida) {
switch (bebida) {
    case "COCA":
        let QCOCA = prompt("Ingrese Cantidad")  
        TQCOC(QCOCA, PrecioCoca)
        break;             
    case "PEPSI":
        let QPEP = prompt("Ingrese Cantidad")  
        TQCOC(QPEP, PrecioPep)
        break;             
    case "FERNET":
        let QFER = prompt("Ingrese Cantidad")  
        TQCOC(QFER, PrecioFer)
        break;             
    case "CERVEZA":
        let QCER = prompt("Ingrese Cantidad")  
        TQCOC(QCER, PrecioCer)
        break;
    case "SALIR":
        alert("Gracias por su visita")
        break;                 
    default:
        alert("Ingrese una bebida disponible")
        break;
    }   
}

function TQCOC(x,y)
{
    let SumarCarrito = x*y;
    TTotal+= SumarCarrito
    TotalCarrito(SumarCarrito)
}

function TotalCarrito(TTotal)
{
    alert("El total es: "+TTotal)
}

let CarritoCheckOut = prompt("Desea finalizar la compra SI/NO") 
while (CarritoCheckOut==="NO") {
    let Bebida = prompt("Ingrese OTRA Bebida: COCA, PEPSI, FERNET, CERVEZA o escriba SALIR")
    Carrito(Bebida)
    CarritoCheckOut = prompt("Desea finalizar la compra SI/NO") 
}
let Confirmacion = prompt("Confirma la compra SI/NO")
if (Confirmacion==="SI") {
    alert(`Su total es ${TTotal}`)    
}
else (alert("Gracias por su visita"))

