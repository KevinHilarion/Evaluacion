function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    console.log(edad);
    
    var esviable = "";
 
 	if(edad >= 18 && edad <=68){
		 
		 esviable = "Viable";
	 }else{
		 esviable = "No Viable";
	 }
	 document.getElementById("Viablilidad").value=esviable;
}


var input = document.getElementById("myinput");
new Awesomplete(input, {
	list: ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"]
});