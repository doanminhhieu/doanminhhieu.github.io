<?php
    $arr_account= array("nguyen van a","nguyen van b","nguyen van c","nguyen van d");

    if(isset($_POST['name'])){

        if (Account::checkname($_POST['name'],$arr_account)){

            echo "username chưa đăng ký";

        }
        else{

            echo "username đã tồn tại";
        }

    }

    class Account
    {
        public static function checkname($name,$arr){

            foreach ($arr as $item){

                if($item == $name ){

                    return false;

                }
            }

            return true;

        }
    }