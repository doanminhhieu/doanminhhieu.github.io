
function onLoad() {

    var day_choose,month_choose,year_choose;
    day_choose = new Date().getDate();
    month_choose = parseInt(new Date().getMonth())+1;
    year_choose = new Date().getFullYear();
    document.getElementById("txt_username").value=getday(day_choose,month_choose,year_choose);
    monthNow();
    listYear();
    yearNow();

    listDay( numdayOfmonth( parseInt(document.getElementById("year-select").value),document.getElementById("year").value));

}

function getday(day_choose,month_choose,year_choose) {

    return day_choose + "/" + month_choose + "/" + year_choose;

}

function listYear() {

    var d=new Date();
    var str="";

    for(var i = 1968; i <= 3000; i++ ){

        str += "<option value="+i+">" + i + "</option>";
    }

    document.getElementById("year").innerHTML=str;


}

function monthNow(){

    var day_now=new Date();
    var year_now=day_now.getMonth();
    var y=day_now.getFullYear();

    switch(year_now) {
        case 0:
            document.getElementById("year-select").value="0";
            break;
        case 1:
            document.getElementById("year-select").value="1";
            break;
        case 2:
            document.getElementById("year-select").value="2";
        break;
        case 3:
            document.getElementById("year-select").value="3";
            break;
        case 4:
            document.getElementById("year-select").value="4";
        break;
        case 5:
            document.getElementById("year-select").value="5";
            break;
        case 6:
            document.getElementById("year-select").value="6";
            break;
        case 7:
            document.getElementById("year-select").value="7";
            break;
        case 8:
            document.getElementById("year-select").value="8";
            break;
        case 9:
            document.getElementById("year-select").value="9";
            break;
        case 10:
            document.getElementById("year-select").value="10";
            break;
        case 11:
            document.getElementById("year-select").value="11";
            break;

        default:
            document.getElementById("year-select").value="choose year";
    }
}

function yearNow() {

    var day_now=new Date();
    document.getElementById("year").value=day_now.getFullYear();

}

function listDay(num_day) {

    y= document.getElementById("year").value;
    m= parseInt(document.getElementById("year-select").value);

    var num_nothing = new Date(y,m,1).getDay();
    var dayNow = new Date();

    if(parseInt(document.getElementById("year-select").value)==dayNow.getMonth() &&
        parseInt( document.getElementById("year").value) == dayNow.getFullYear()
    ){
        var num=1;
        var str="";

        for(var i = 0; i < 6; i++ ){
            str += "<tr>"
            for (var j = 0; j < 7; j++ ){

                if(num_nothing>0){

                    str+="<td style='border: none'></td>";
                    num_nothing--;

                }else {

                    if (num > num_day) {
                        break;
                    }
                    if (num == dayNow.getDate()) {

                        str += "<td> <input id=" + num + " onclick='changeDay(" + num + "),hindendate()' style='background: olivedrab' type='button' value=" + num + "></td>";
                        num++;
                    } else {

                        str += " <td> <input id=" + num + " onclick='changeDay(" + num + "),hindendate()' type='button' value=" + num + "></td>";
                        num++;
                    }

                }

            }

            str += "</tr>";
        }
        document.getElementById("change").innerHTML=str;

    }else {

        var num = 1;
        var str = "";

        for (var i = 0; i < 6; i++) {
            str += "<tr>"
            for (var j = 0; j < 7; j++) {

                if(num_nothing>0){

                    str+="<td style='border: none'></td>";
                    num_nothing--;

                }else{
                    if (num > num_day) {
                        break;
                    }
                    str += "  <td> <input id="+num+" onclick='changeDay("+num+"),hindendate()' type='button' value=" + num + "></td>";
                    num++;
                }

            }
            str += "</tr>";
        }
        document.getElementById("change").innerHTML = str;
    }
    
}

function numdayOfmonth(months,years){


    if( years%4==0 && years%100 !=0){

        switch(months) {

            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                return 31;
                break;
            case 3:
            case 5:
            case 8:
            case 10:
                return 30;
                break;
            case 1:
                return 29;
                break;
            default:
                return ;

        }

    } else {

        switch(months) {

            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                return 31;
                break;
            case 3:
            case 5:
            case 8:
            case 10:
                return 30;
                break;
            case 1:
                return 28;
                break;
            default:
                return ;

        }

    }

}

function changeBoxMonth() {

    listDay( numdayOfmonth( parseInt(document.getElementById("year-select").value),document.getElementById("year").value));
    month_choose = parseInt(document.getElementById("year-select").value)+1;
    year_choose =  parseInt(document.getElementById("year").value);
    document.getElementById("txt_username").value = getday(1,month_choose,year_choose);

}

function changeBoxYear() {

    listDay( numdayOfmonth( parseInt(document.getElementById("year-select").value),document.getElementById("year").value));
    month_choose = parseInt(document.getElementById("year-select").value)+1;
    year_choose =  parseInt(document.getElementById("year").value);
    document.getElementById("txt_username").value = getday(1,month_choose,year_choose);
}

function nextMonth() {
    var value_month=parseInt(document.getElementById("year-select").value);
    if(value_month < 11){

        document.getElementById("year-select").value=value_month+1;

    }else if(value_month==11){

        document.getElementById("year-select").value=1;
        document.getElementById("year").value=parseInt(document.getElementById("year").value)+1;

    }

    listDay( numdayOfmonth( parseInt(document.getElementById("year-select").value),document.getElementById("year").value));
    month_choose = parseInt(document.getElementById("year-select").value)+1;
    year_choose =  parseInt(document.getElementById("year").value);
    document.getElementById("txt_username").value = getday(1,month_choose,year_choose);
}

function changeDay(numbner) {

    month_choose = parseInt(document.getElementById("year-select").value)+1;
    year_choose =  parseInt(document.getElementById("year").value);
    day_choose=parseInt(document.getElementById(numbner).value);
    document.getElementById("txt_username").value = getday(day_choose,month_choose,year_choose);

}

function nextYear() {

    document.getElementById("year").value=parseInt(document.getElementById("year").value)+1;
    listDay(numdayOfmonth( parseInt(document.getElementById("year-select").value),document.getElementById("year").value));
    month_choose = parseInt(document.getElementById("year-select").value)+1;
    year_choose =  parseInt(document.getElementById("year").value);
    document.getElementById("txt_username").value = getday(1,month_choose,year_choose);
}

function prevMonth() {

    var value_month=parseInt(document.getElementById("year-select").value);
    if(value_month > 0){

        document.getElementById("year-select").value=value_month-1;

    }else if(value_month==0){

        document.getElementById("year-select").value=11;
        document.getElementById("year").value=parseInt(document.getElementById("year").value)-1;
    }

    listDay( numdayOfmonth( parseInt(document.getElementById("year-select").value),document.getElementById("year").value));
    month_choose = parseInt(document.getElementById("year-select").value)+1;
    year_choose =  parseInt(document.getElementById("year").value);
    document.getElementById("txt_username").value = getday(1,month_choose,year_choose);

}

function prevYear() {

    document.getElementById("year").value=parseInt(document.getElementById("year").value)-1;
    listDay( numdayOfmonth( parseInt(document.getElementById("year-select").value),document.getElementById("year").value));
    month_choose = parseInt(document.getElementById("year-select").value)+1;
    year_choose =  parseInt(document.getElementById("year").value);
    document.getElementById("txt_username").value = getday(1,month_choose,year_choose);

}

function showdate() {

    document.getElementById("box-calendar").style.display="block";
    
}

function hindendate(){

    document.getElementById("box-calendar").style.display="none";

}

