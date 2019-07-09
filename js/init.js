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

function preenche(){

    var txt = [
        "Mapeamento da Rede",
        "Segurança de Rede",
        "Configuração de Roteamento para VPN",
        "Implantação de Firewall",
        "Criação da políticas de Segurança",
        "Implantação de Proxy",
        "Sistema de Arquivos em Cloud",
        "Autenticação de Usuário",
        "Migração de Serviços Locais para Cloud",
        "Implantação de Serviço de Voip",
        "Monitoramento da infraestrutura",
        "Backup Cloud",
        "Disaster Recovery"
    ];
    for (var i = 0; i < 13; i++) {
        var img = document.createElement("IMG");
        img.src = "static/img/servicos-pb/tumb-pb-"+i.toString()+".png";
        img.classList.add("rounded", "mx-auto", "d-block", "img-thumbnail");
        img.addEvent("onmouseover", revelar());

        var p = document.createElement("p");
        p.setAttribute("id", "base-img" );
        p.appendChild(document.createTextNode(txt[i]));

        var servico = document.getElementById('servico-'+i.toString());

        servico.appendChild(img);
        servico.appendChild(p);
    }


}

function revelar(){
    alert("Top");
}
