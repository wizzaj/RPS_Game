const but = document.querySelectorAll("#myBtn");
but.forEach(key => key.addEventListener('click', games));
function games(){
console.log(this.textContent);
}