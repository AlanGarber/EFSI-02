let validarNota = () =>{
    let nota=document.getElementById("notaMatematica").value;
    if(nota>=1 && nota <=10){
        document.getElementById("notaMatematica").style.color="green"
        return true;
    }else{
        document.getElementById("notaMatematica").style.color="red"
        return false;
    }
}
