/**
 * Created by MinhHieu on 1/5/2017.
 */


setInterval(function(){
  next_Image()
}, 3000);
load();

function load() {

  var active=document.getElementById("image-active");
 

  var list_image=document.getElementsByName("image-slider");

  for (var i=0; i<=list_image.length; i++ ){
    if(list_image[i].src==active.src){
      list_image[i].className="border-active";
    }
  }

}
function next_Image() {

  var list_image= document.getElementsByName("image-slider");
  var num_list = parseInt(list_image.length);

  var active=document.getElementById("image-active");
  var num_active =parseInt(active.src[active.src.length-5]);

  if(num_active < num_list){

    num_active ++;
    active.src = "images/image"+num_active+".jpg";

  }else if(num_active == num_list){

    active.src="images/image1.jpg";

  }

  var list_image=document.getElementsByName("image-slider");

  for (var i=0; i<=list_image.length; i++ ){
    if(list_image[i].src==active.src){
      list_image[i].className="border-active";
    }else{
      list_image[i].className="";
    }
  }

}
function prev_Image() {

  var list_image= document.getElementsByName("image-slider");
  var num_list = parseInt(list_image.length);

  var active=document.getElementById("image-active");
  var num_active =parseInt(active.src[active.src.length-5]);

  if(num_active <= num_list && num_active > 1 ){

    num_active --;
    active.src = "images/image"+num_active+".jpg";

  } else if(num_active == 1){
    active.src="images/image"+num_list+".jpg";
  }

  var list_image=document.getElementsByName("image-slider");

  for (var i=0; i<=list_image.length; i++ ){
    if(list_image[i].src==active.src){

      list_image[i].className="border-active";

    }else{

      list_image[i].className="";

    }
  }

}




