let validarNota = (nota,materia) =>{
    if(nota>=1 && nota <=10){
        document.getElementById(materia).style.color="green"
        return true;
    }else{
        document.getElementById(materia).style.color="red"
        return false;
    }
}

let calcularPromedio = () => {
    let nota1=document.getElementById('notaMatematica').value
    let nota2=document.getElementById('notaLengua').value
    let nota3=document.getElementById('notaEfsi').value
    verificarInputNull(nota1,nota2,nota3)
    let promedio=(Number(nota1)+Number(nota2)+Number(nota3))/3;
    let promedioRed=promedio.toFixed(2)
    document.getElementById('resultado').value=promedioRed
}

let materiaMasAlta = () => {
    let nota1=parseFloat(document.getElementById('notaMatematica').value)
    let nota2=parseFloat(document.getElementById('notaLengua').value)
    let nota3=parseFloat(document.getElementById('notaEfsi').value)
    let matMasAlta
    verificarInputNull(nota1,nota2,nota3)
    let notaMas=Number(Math.max(nota1,nota2,nota3)).toFixed(2)
    if(notaMas==nota1 && notaMas==nota3){
        matMasAlta="Matematica y EFSI"
    }else if(notaMas==nota1 && notaMas==nota2){
        matMasAlta="Matematica y Lengua"
    }else if(notaMas==nota3 && notaMas==nota2){
        matMasAlta="EFSI y Lengua"
    }else if(notaMas==nota1){
        matMasAlta="Matematica"
    }else if(notaMas==nota2){
        matMasAlta="Lengua"
    }else if(notaMas==nota3){
        matMasAlta="EFSI"
    }
    document.getElementById('resultado').value=matMasAlta
    document.getElementById('resultado').style.color="blue"
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