//CALCULADORA DE CUOTAS

//DAR BIENVENIDA 
//sOLICITAR INGRESO DE MONTO A FINANCIAR
//sOLICITAR INTRODUCIR PLAN DE CUOTAS
//INFORMAR TASA DE INTERES
//INFORMAR VALOR DE LA CUOTA


//Declaración de Variables y Constantes

function calculoCuota (monto, int, cuotas){
    let valorCuota= monto * (1+int) / cuotas;
    return valorCuota;
}

let montoTotal
let cantidadDeCuotas
let intereses
let montoCuota
let repetir
let calcularCuotas

alert("Bienvenidos al sistema de cálculo de cuotas")


do{

    montoTotal = Number (prompt ("Ingrese el monto a financiar"));  
    repetir=true;
    do 
    {
        cantidadDeCuotas = Number (prompt ("Ingrese la cantidad de cuotas (3, 6, 9 y 12 cuotas)"));  
        switch (cantidadDeCuotas){
            case 3:
                intereses=0.15;
                repetir=false;
                alert("Para 3 cuotas la tasa de interés es del 15%")
                break;
    
            case 6:
                intereses=0.25;
                repetir=false;
                alert("Para 6 cuotas la tasa de interés es del 25%")
                break;
                            
            case 9:
                intereses=0.45;
                repetir=false;
                alert("Para 9 cuotas la tasa de interés es del 45%")
                break;
                            
            case 12:
                intereses=0.75;
                repetir=false;
                alert("Para 12 cuotas la tasa de interés es del 75%")
                break;
                
            default:
                alert ("ingrese cantidad de cuotas válidas");
        }
    }while (repetir)
    
    montoCuota = calculoCuota (montoTotal, intereses, cantidadDeCuotas);

    alert("El monto de la cuota a pagar es $" + montoCuota)


    calcularCuotas = prompt ("Desea calcular otra cuota?");

    if (calcularCuotas=="si" || calcularCuotas=="sI" || calcularCuotas=="Si" || calcularCuotas=="SI" ){
        repetir=true;
    }
    else{
        repetir=false;
    }

}while (repetir);

alert("MUCHAS GRACIAS POR UTILIZAR EL CALCULADOR DE CUOTAS");




