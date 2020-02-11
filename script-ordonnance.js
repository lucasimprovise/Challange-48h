var lien = document.location.href;
var split = lien.split("?");
split = split[1];
split = split.split(";");


var temp = split[0].split("=")
var name = temp[1];

var temp = split[1].split("=")
var prenom = temp[1];

var temp = split[2].split("=")
var tel = temp[1];

var temp = split[3].split("=")
var idmed = temp[1];

var temp = split[4].split("=")
var com = temp[1];

var info1 = document.querySelector("#info1");
info1.innerHTML="Nom: "+name;
var info2 = document.querySelector("#info2");
info2.innerHTML="Prenom: "+prenom;
var info3 = document.querySelector("#info3");
info3.innerHTML="Tel: "+tel;
var info4 = document.querySelector("#info4");
info4.innerHTML="ID Médecin: "+idmed;
var com1 = document.querySelector("#com");
com1.innerHTML="Commentaire : "+com;