function determinarTriangulo(){
    var ladoA = document.getElementById("ladoA").value;
    var ladoB = document.getElementById("ladoB").value;
    var ladoC = document.getElementById("ladoC").value;
    if(ladoA || ladoB || ladoC){
        if(ladoA < 0 || ladoB < 0 || ladoC < 0){
            document.getElementById("resultado").innerHTML="Ingrese valores positivos.";
        }
        if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
            if(ladoA == ladoB && ladoA== ladoC){
                document.getElementById("resultado").innerHTML="Es un triángulo equilatero.";
            }
            else {
                document.getElementById("resultado").innerHTML="Es un triángulo isosceles.";
            }
        }
        else {
            document.getElementById("resultado").innerHTML="Es un triángulo escaleno.";
        }
    }
}

document.location.href = "/calidad-trabajo/?#"