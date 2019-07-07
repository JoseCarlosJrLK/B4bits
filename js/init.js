function send(){

    var ctt = {
        nome : document.getElementById('cttNome').value,
        email : document.getElementById('cttMail').value,
        fone : document.getElementById('cttFone').value,
        titulo : document.getElementById('cttTitulo').value,
        mensagem : document.getElementById('cttMsg').value,

    };

    try{
        if(isNaN(ctt.fone)) throw "Somente numeros no campo Telefones";
    }catch(erro){
    alert("Erro: "+erro);
}finally{
    alert(ctt);
}
}
