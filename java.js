
function pass(){
//creer une variable pour la valeur de l'id si ok
var passverif =document.getElementById('password').value;
//creer une variable pour la valeur de l'id de comparaison
var passok =document.getElementById('confirmPassword').value;
//si variable 1 et variable 2 sont identique alors affiche en vert
if(passverif == passok) {
document.getElementById('password').style.border= '2px solid green';
//sinon affiche en rouge
}else {
document.getElementById('password').style.border='2px solid red';

}
}
