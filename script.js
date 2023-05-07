alert ("¡Hola! necesitamos tu ayuda")

let nombreUsuario = prompt("¿Como te llamas?")

//en el caso de que el usuario no ingrese ningún nombre 
while (nombreUsuario == ""){
alert ("Error: no se ingresó ningun nombre.");
nombreUsuario = prompt("¿Como te llamas?")
}

let conocimientoPrevio = prompt(nombreUsuario + ", en aduana nos pidieron presentar documentos que justifiquen la carga que llegó. \n ¿Tenés conocimientos de pagos al exterior? \n- Si  \n- No").toLowerCase()


while ((conocimientoPrevio != "si")&&(conocimientoPrevio != "no")){
    alert ("Error: no entendimos tu respuesta.")
    conocimientoPrevio = prompt(nombreUsuario + ", en aduana nos pidieron presentar documentos que justifiquen la carga que llegó. \n¿Tenés conocimientos de pagos al exterior? \n- Si  \n- No")
}

if (conocimientoPrevio == "no"){
    alert ("No hay ningun problema, te explicamos.\nLos productos que llegan del exterior están tasados en moneda exrtanjera (USD) y llegan al país con una guia aerea de la empresa de transporte. El banco nos pide estas guias para poder girar el pago a la empresa en el exterior.\n¡Sabiendo esto ya podes ayudarnos! ")
} else{
    alert ("¡Perfecto! Podemos empezar.")
}


alert ("El banco nos pide un valor total de USD$1825 para poder cerrar la cuenta y disponemos de 05 guias con los siguientes valores para poder enviar: \n01 - Guia AAA  $725\n02 - Guia ABA  $1000\n03 - Guia ABB  $400\n04 - Guia ABS  $700\n05 - Guia ANB  $100\n¿Qué guias podemos enviar para que los valores coincidan?")

let agregarGuia = prompt("Agregá de uno en uno los nombres de las guias hasta llegar al valor que corresponde:\n01 - Guia AAA  $725\n02 - Guia ABA  $1000\n03 - Guia ABB  $400\n04 - Guia ABS  $700\n05 - Guia ANB  $100\nTerminar FIN ").toLowerCase()

let cantidadGuias ="\n01 - Guia AAA  $725\n02 - Guia ABA  $1000\n03 - Guia ABB  $400\n04 - Guia ABS  $700\n05 - Guia ANB  $100\nTerminar FIN ";
let totalSumaGuias = "";
let totalValorGuias = 0;


function guiaAgregada (guia, valor){
    alert ("Agregaste la guia " + guia )

    totalSumaGuias += guia + " \n";
    totalValorGuias += valor
}


while (agregarGuia != "fin"){ 
    switch (agregarGuia){
        case "aaa":
            guiaAgregada("AAA", 725)
        break;
        case "aba":
            guiaAgregada("ABA", 1000)
        break;
        case "abb":
            guiaAgregada("ABB", 400)
        break;
        case "abs":
            guiaAgregada("ABS", 700)
        break;
        case "anb":
            guiaAgregada("ANB", 100)
        break;
        default:
        alert ("El nombre no corresponde a una de las guias que tenemos")
        break;
    }
    agregarGuia = prompt("Podes agregar otra guia:\n01 - Guia AAA  $725\n02 - Guia ABA  $1000\n03 - Guia ABB  $400\n04 - Guia ABS  $700\n05 - Guia ANB  $100\nTerminar FIN \nPor el momento llevamos USD$"+totalValorGuias).toLowerCase()
    
}
let envioFinal = prompt ("Sumamos: \n" +totalSumaGuias+ "Por un total de USD$ "+totalValorGuias+ "\n\nSi los datos son correctos coloca -Si- para enviar; sino se cancelará el envio y se perderan los datos:").toLowerCase()


if (envioFinal == "si"){
    alert ("¡Perfecto! Se enviaron los documentos al banco y van a procesar los datos para el pago.")
} else { 
    alert ("Cancelaste el envio de los documentos. Por favor volve a cargar la pagina para iniciar nuevamente la selección.")
}