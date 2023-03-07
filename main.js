var indice=0;
var lista_imagem=["https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/02/11/1522220506-manchester-united.jpg", "https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/static/og-image.png", "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"];
var lista_de_nome=["manchester u", "real", "liverpol"];
function trocador(){
    indice=indice+1;
    if(indice>=lista_de_nome.length){
        indice=0;
    }
    document.getElementById("time").src=lista_imagem[indice];
    document.getElementById("nome").innerHTML=lista_de_nome[indice];
    
}