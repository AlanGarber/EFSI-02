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
    verificarInputNull(nota1,nota2,nota3)
    let resultado=document.getElementById('resultado')
    let promedio=(Number(nota1)+Number(nota2)+Number(nota3))/3;
    resultado.value=promedio
}

let verificarInputNull = (nota1,nota2,nota3) => {
    let inputs=[nota1,nota2,nota3]
    let vacio=false;
    inputs.forEach(nota => {
        if(nota==null || nota==''){
            vacio=true
        }
    });
    if(vacio){
        alert("Hay campos vacios")
    }
}