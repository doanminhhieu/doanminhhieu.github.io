/**
 * Created by MinhHieu on 1/7/2017.
 */
var http;

function  create_object() {

    var name= navigator.appName;
    if(name == "Microsoft Internet Explorer"){

        http= new ActiveXObject("Microsoft.XMLHTTP");

    }else{

        http= new XMLHttpRequest();
    }
}

function  checkUserName(name) {

    http.open("get","action.php?name="+name,true);
    http.onreadystatechange = process();
    http.send(null);

}

function process() {

    if(http.readyState == 4 && http.status == 200){
        alert("ok");
        results1= http.responseText;
        document.getElementById("resultCheckName").innerHTML = results1;
    }


}