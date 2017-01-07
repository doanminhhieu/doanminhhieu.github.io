/**
 * Created by MinhHieu on 1/6/2017.
 */



function validateName() {

    var lenght_value= document.getElementById("name").value;
    validateBirthday();
    if(lenght_value.length < 8 ){

        document.getElementById("error_name").innerText= "Username phải có ít nhất 8 ký tự";
        document.getElementById("error_name").style.color="red";

        return false;

    } else{

        document.getElementById("error_name").innerHTML="OK";
        document.getElementById("error_name").style.color="blue";
        return true
    }


}
function validateEmail() {

    var values= document.getElementById("email").value;
    if(values.length==0){
        document.getElementById("error_email").innerHTML="email không được để trống";
        document.getElementById("error_email").style.color="red";
    }
    if(values.indexOf('@') != -1){

        document.getElementById("error_email").innerHTML="OK";
        document.getElementById("error_email").style.color="blue";
        return true;

    }else {
        document.getElementById("error_email").innerHTML="email chưa đúng";
        document.getElementById("error_email").style.color="red";

        return false;
    }


}
function validatePassword() {

    var values= document.getElementById("pass").value;
    if(values.length < 8){

        document.getElementById("error_pass").innerText= "Password phải có ít nhất 8 ký tự";
        document.getElementById("error_pass").style.color="red";

        return false;

    }else {
        document.getElementById("error_pass").innerText= "OK";
        document.getElementById("error_pass").style.color="blue";
        return true;
    }


}
function validateBirthday() {

    var values= document.getElementById("txt_username").isDisabled
    var values= document.getElementById("txt_username").value;
    var arr= values.split("/");
    for( i=0 ; i<= arr.length; i++){
        if(isNaN(arr[i])){
            return true

        }
    }
    document.getElementById("error_calendar").innerText= "Ngày không đúng định dạng";
    document.getElementById("error_calendar").style.color="red";
    return true;


}

function validate() {
    validatePassword();
    validateEmail();
    validateName();
    validateBirthday();

    if(validatePassword()==true && validateEmail()==true && validateName()==true){
        sentForm();
        return false;
    }else if(validateName()==false){

        return false;

    }else if(!validatePassword()==false){

        return false;

    }else if(!validateEmail()==false){

        return false;

    }
}
function sentForm() {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("resultCheckName").innerHTML = http.responseText;
        }
    };
    http.open("POST","action.php", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send("name="+document.getElementById("name").value);
}

