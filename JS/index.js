let validarNota = (nota,materia) =>{
    console.log(nota)
    console.log(materia)
    if(nota>=1 && nota <=10){
        document.getElementById(materia).style.color="green"
        return true;
    }else{
        document.getElementById(materia).style.color="red"
        return false;
    }
}
