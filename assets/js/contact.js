
//start form validation
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('Phone-error');
var EmailError = document.getElementById('email-error');
var ContactError = document.getElementById('contact-error');
var SubmitError = document.getElementById('submit-error');

function validationName(){
var name = document.getElementById('name').value;
if(name.length == 0){
nameError.innerHTML = "name is Require";
return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
nameError.innerHTML = '<i class="fa fa-times" style="background-colour:red;"></i>';
return false;
}
nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
return true;
}

function validationPhone(){

var phone = document.getElementById("phone").value;

if(phone.length == 0){
phoneError.innerHTML = "phone no is required";
return false;
}

if(!phone.match(/^[0-9]{10}$/)){
phoneError.innerHTML = '<i class="fa fa-times"></i>';
return false;
}
phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
return true; 
}

function validationEmail(){
var Email = document.getElementById('email').value;
if(Email.length == 0){
EmailError.innerHTML = 'fill the Email';
return false;
}

if(!Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
EmailError.innerHTML = '<i class="fa fa-times"></i>';
return false;
}

EmailError.innerHTML = '<i class="fa fa-check-circle"></i>';
return true; 
}

function validationmassage(){
var massage = document.getElementById('contact').value;
var required = 30;

var left = required - massage.length;

if(left > 0)
{
ContactError.innerHTML = left + 'more character require';
return false;  
}

ContactError.innerHTML = '<i class="fa fa-check-circle"></i>';
return true;

} 

function validateForm(event){
event.preventDefault();
if(!validationName() || !validationPhone() || !validationEmail() ){
SubmitError.style.display = 'block';
SubmitError.innerHTML = 'please fix error to submit';
setTimeout(function(){
 SubmitError.style.display = 'none';
}, 12000);
}
}


function sendEmail(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var contact= document.getElementById("contact").value;

var body = 'name :' +name + '<br/> email' +email+ '<br/> phone'+phone+'<br/> contact'+ contact;


Email.send({
SecureToken : "7ef95e53-6589-4c21-b18b-4c412cc0d986",
To : 'osandalelum@gmail.com',
From : "osandalelum@gmail.com",
Subject : "From Osas Portofolio",
Body : body
}).then(
  message => alert(message)
);
}

