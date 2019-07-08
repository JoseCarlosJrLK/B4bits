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
        if(ctt.fone.lenght == 12) throw "Digite no padrão 0xx9xxxxxxxx";
        if(ctt.fone.lenght == 11) throw "Digite no padrão 0xx3xxxxxxx";

    }catch(erro){
    alert("Erro: "+erro);
    }finally{
        alert(ctt);
    }
}
