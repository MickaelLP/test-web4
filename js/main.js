const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const messages = document.getElementById('messages');

function contactForm() {
	window.alert("hey")
}

function checkForm () {
	if(prenom.value == ""){
		Toastify({
			text: "Veuillez remplir le champ prénom !",
			duration: 3000,
			gravity: "top",
			position: "center",
			backgroundColor: "#ff6347"
		  }).showToast();
		  return false;
	}
		

	if(nom.value == ""){
		Toastify({
			text: "Veuillez remplir le champ nom !",
			duration: 3000,
			gravity: "top",
			position: "center",
			backgroundColor: "#ff6347"
		  }).showToast();
		  return false;
	}
	if(email.value == ""){
		Toastify({
			text: "Veuillez remplir le champ email !",
			duration: 3000,
			gravity: "top",
			position: "center",
			backgroundColor: "#ff6347"
		  }).showToast();
		  return false;
	}
	if(message.value == ""){
		Toastify({
			text: "Veuillez remplir le champ message !",
			duration: 3000,
			gravity: "top",
			position: "center",
			backgroundColor: "#ff6347"
		  }).showToast();
		  return false;
	}
	return true;
	
}

function checkEmail () {
	aEmail = email.value;
	if(validateEmail(aEmail)){
		return true;
	} else {
		Toastify({
			text: "Veuillez saisir une adresse email valide !",
			duration: 3000,
			gravity: "top",
			position: "center",
			backgroundColor: "#ff6347"
		  }).showToast();
		return false;
	}
}

function sendMessage () {
	const mess = 
	"<tr>" +
		"<th>Prénom</th>" +
		"<th>Nom</th>"+
		"<th>Email</th>"+
		"<th>Message</th>" +
	"</tr>"+
	"<tr>"+
    	"<td>"+prenom.value+"</td>"+
    	"<td>"+nom.value+"</td>"+
		"<td>"+email.value+"</td>"+
		"<td>"+message.value+"</td>"+
	"</tr>";
	messages.innerHTML+= mess;
}

function cleanForm () {
	prenom.value="";
	nom.value ="";
	email.value = "";
	message.value = "";
}

function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

form.addEventListener("submit", function(event){
	event.preventDefault();
	if(checkForm()==true && checkEmail() == true) {
		sendMessage();
		cleanForm();
	}
	
});