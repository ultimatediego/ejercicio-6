
let base = [{nombre:"Juana", Aqua:0, Emocion:0, Alegria:0, Frescura: 0}, {nombre:"Pedro", Aqua:0, Emocion:0, Alegria:0, Frescura: 0}]

function mostrarCantidad(){
    document.getElementById("mostrar").innerHTML = "Juana ah vendido " +base[0].Aqua
    document.getElementById("mostrar1").innerHTML = "Pedro ah vendido " +base[1].Aqua
}




function operar(){
    let a1 = Number(document.getElementById("a1").value);
    let a2 = Number(document.getElementById("a2").value);
    let a3 = Number(document.getElementById("a3").value);
    let a4 = Number(document.getElementById("a4").value);
    let b1 = Number(document.getElementById("b1").value);
    let b2 = Number(document.getElementById("b2").value);
    let b3 = Number(document.getElementById("b3").value);
    let b4 = Number(document.getElementById("b4").value);
    if(a1<0 | a2<0 | a3<0 | a4<0 | b1<0 | b2<0 | b3<0 | b4 < 0 ){
        document.getElementById("mensaje").innerHTML = "no puede ingresar un cifra negativa"
    }
    else{
        let total_vendedor_1 = a1+a2+a3+a4;
        let total_vendedor_2 = b1+b2+b3+b4;
        let total_aqua = a1+b1;
        let total_emocion = a2+b2;
        let total_alegria = a3+b3;
        let total_frescura = a4+b4;

        let ventas1 = a1*200 + a2*180 + a3*160 + a4*150
        let ventas2 = b1*200 + b2*180 + b3*160 + b4*150

        document.getElementById("total_vendedor_1").innerHTML = total_vendedor_1
        document.getElementById("total_vendedor_2").innerHTML = total_vendedor_2
        document.getElementById("total_aqua").innerHTML = total_aqua
        document.getElementById("total_emocion").innerHTML = total_emocion
        document.getElementById("total_alegria").innerHTML = total_alegria
        document.getElementById("total_frescura").innerHTML = total_frescura
        document.getElementById("total_vv_1").innerHTML = "$"+ ventas1
        document.getElementById("total_vv_2").innerHTML = "$"+ ventas2
    }
}

function ganador(){

    let a1 = Number(document.getElementById("a1").value);
    let a2 = Number(document.getElementById("a2").value);
    let a3 = Number(document.getElementById("a3").value);
    let a4 = Number(document.getElementById("a4").value);
    let b1 = Number(document.getElementById("b1").value);
    let b2 = Number(document.getElementById("b2").value);
    let b3 = Number(document.getElementById("b3").value);
    let b4 = Number(document.getElementById("b4").value);

    if(a1<0 | a2<0 | a3<0 | a4<0 | b1<0 | b2<0 | b3<0 | b4 < 0 ){
        document.getElementById("mensaje").innerHTML = "no puede ingresar un cifra negativa"
    }
    else{
        let ventas1 = a1*200 + a2*180 + a3*160 + a4*150
        let ventas2 = b1*200 + b2*180 + b3*160 + b4*150
        if (ventas1>ventas2){
            document.getElementById("mensaje").innerHTML = "El vendedor del mes es Juana con un total de ventas de: $"+ventas1
        }
        else if(ventas1<ventas2){
            document.getElementById("mensaje").innerHTML = "El vendedor del mes es: Pedro con un total de ventas de: $"+ventas2
        }
        else if(ventas1 == ventas2){
            document.getElementById("mensaje").innerHTML = "Los  vendedores del mes son Juana y Pedro con un total de ventas de: $"+ventas1 +" y  $"+ventas2+" respectivamente"
        }
    }
}