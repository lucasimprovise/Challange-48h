var btn = document.querySelector("#send");

btn.addEventListener("click",function(){
    var nom = document.querySelector("#nm").value;
    var prenom = document.querySelector("#pm").value;
    var tel = document.querySelector("#callm").value;
    var idmed = document.querySelector("#idm").value;
    var com = document.querySelector("#commentaire").value;
    document.location.href="./ordonnance.html?n="+nom+";prenom="+prenom+";tel="+tel+";idmed="+idmed+";com="+com;
});
