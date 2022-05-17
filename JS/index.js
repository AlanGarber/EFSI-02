let validarNota = (nota,materia) =>{
    if(nota>=1 && nota <=10){
        document.getElementById(materia).style.color="green"
        return true;
    }else{
        document.getElementById(materia).style.color="red"
        return false;
    }
}

let calcularPromedio = (nota1, nota2, nota3) => {
    let promedio=(nota1+nota2+nota3)/3;
    console.log(promedio)
    document.getElementById("resultado").value=promedio;
}