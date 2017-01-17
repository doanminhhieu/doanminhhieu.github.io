/**
 * Created by MinhHieu on 1/10/2017.
 */
    var monster1, monster2, monster3, monster4, monster5 ,monster6, monster7, monster8, monster9, monster10;
    var _canvas;
    var _context;
    var number_monster = 9;
    var num = 0;
    var heart1 = 5;
    var pause = true;
    var x_monter = 60;
    var y_monter = 60;
    var speed_monster = 1;
    var list_monster = new Array();
    sessionStorage.score = 0;
    var stop = 3;
    var buzm = 3;
    var pause = true;
    var reqAnimation;


    window.onload = function(){
        document.getElementById("score").innerHTML = sessionStorage.score;
        document.getElementById("stop").innerHTML = stop;
        document.getElementById("buzm").innerHTML = buzm;
        _canvas = document.getElementById("canvasMonster");
        document.getElementById("speed").innerHTML = speed_monster;
        _context = _canvas.getContext("2d");
        _canvas.addEventListener("click", function (e) {
			if(pause){
            var k = MonstersLife();
            for(var i = 0 ; i < list_monster.length ;i++) {
                list_monster[i].checkLife(e.offsetX, e.offsetY);

            }
            if(MonstersLife() == 0){
                init();
                speed_monster ++;
                document.getElementById("speed").innerHTML = speed_monster;
            }
            if(k == MonstersLife()){
                heart1 --;
                if(heart1<0){
                    alert("Bạn chơi gà quá thua mất rồi nhấn ok để chơi lại ");
                    refreshMonsters();
                }else {
                    heart();
                }


            }
			}

        });

        init();
        heart();

    }
    function heart() {
        document.getElementById("heart").innerHTML="";
        for(var i = 0 ; i < heart1 ; i++){
            document.getElementById("heart").innerHTML += "<img src=\"images/heart.png\"/>";
        }
    }

    function init() {
        num = 0;
        list_monster = [];
         for(var i = 0 ; i < number_monster ;i++) {
            var a = new monster(_canvas.width, _canvas.height)
            a.key = i;
            list_monster.push(a);
        }
        run();

    }

    function monster(mapWidth, mapHeight) {

        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
        this.key;
        this.speedX = Math.floor((Math.random() * 5) + speed_monster);
        this.speedY =  Math.floor((Math.random() * 5) + speed_monster);
        this.life = true;

        if (num < number_monster) {

            switch (num) {
                case 0:
                    this.cx = 0 ;
                    this.cy = 0;
                    num++;
                    break;
                case 1:
                    this.cx = 0;
                    this.cy = Math.floor(this.mapHeight/2);
                    num++;
                    break;
                case 2:
                    this.cx =0;
                    this.cy = this.mapHeight - y_monter-5;
                    num++;
                    break;
                case 3:
                    this.cx = Math.floor(this.mapWidth / 2);
                    this.cy = 0 ;
                    num++;
                    break;
                case 4:
                    this.cx = Math.floor(this.mapWidth / 2);
                    this.cy = Math.floor(this.mapHeight/2);
                    num++;
                    break;
                case 5:
                    this.cx = Math.floor(this.mapWidth/2);
                    this.cy = this.mapHeight-5-y_monter;
                    num++;
                    break;

                case 6:
                    this.cx = this.mapWidth - x_monter-5;
                    this.cy = 0 ;
                    num++;
                    break;
                case 7:
                    this.cx = this.mapWidth-x_monter-5;
                    this.cy = this.mapHeight-y_monter-5;
                    num++;
                    break;
                case 8:
                    this.cx = this.mapWidth-x_monter-5;
                    this.cy = Math.floor(this.mapHeight/2);
                    num++;
                    break;
            }
        } else {
            if (this.life) {
                do {
                    this.cx = Math.floor(Math.random() * (this.mapWidth));
                } while (this.cx <= 0 || this.cx + 60 >= this.mapWidth);

                do {
                    this.cy = Math.floor(Math.random() * (this.mapHeight));
                } while (this.cy <= 0 || this.cy + 60 >= this.mapHeight);

            }
        }
    }

    monster.prototype.draw = function(){
        var c = document.getElementById("canvasMonster");
        var c = c.getContext("2d");
        var image = new Image();
        image.src = "images/Mike.png";
        c.drawImage(image, this.cx, this.cy, x_monter, y_monter);
    }

    monster.prototype.move = function(){
        this.cx += this.speedX; 
        this.cy += this.speedY;
        this.left = this.cx;
        this.top = this.cy;
        this.right = this.cx + x_monter;
        this.bottom = this.cy + y_monter;
    }

    monster.prototype.checkCollision = function(shapes) {
        if(this.left <= 0 || this.right >= this.mapWidth)
            this.speedX = - this.speedX;
        if(this.top <= 0 || this.bottom >= this.mapHeight)
            this.speedY = - this.speedY;
    }

    monster.prototype.update = function () {
        if(pause) {
            this.move();
        }
            this.checkCollision();
            draw();
    }

   monster.prototype.checkLife = function (ox, oy) {
       if((ox <= this.cx + x_monter) && (ox >= this.cx) &&
           (oy <= this.cy + y_monter) && (oy >= this.cy)
        )
       {
           this.life = false;
           sessionStorage.score ++;
           document.getElementById("score").innerHTML = sessionStorage.score;
           return true;

       }
       return false;

   }

    draw = function () {
        _context.clearRect(0,0,_canvas.width,_canvas.height);
        for(var i = 0 ; i < list_monster.length ;i++) {

            if(list_monster[i].life) {
                list_monster[i].draw();
            }
        }

    }

   function updateMonster(time){

           for (var i = 0; i < list_monster.length; i++) {
               list_monster[i].update();
           }
       reqAnimation(updateMonster);

    }
    function refreshMonsters() {
        for(var i = 0 ; i < list_monster.length ; i++) {
            if(list_monster[i].life){
                list_monster[i].life = false;
            }
        }
        sessionStorage.score=0;
        document.getElementById("score").innerHTML = sessionStorage.score;
        buzm = 3;
        document.getElementById("buzm").innerHTML = buzm;
        stop = 3;
        document.getElementById("stop").innerHTML = stop;


        speed_monster = 3;
        heart1 = 5;
        heart();
        init();

    }
    function removeAllMonsters(){
      if(buzm >0) {
          buzm -- ;
          document.getElementById("buzm").innerHTML = buzm;
          speed_monster ++;
          document.getElementById("speed").innerHTML = speed_monster;
          for (var i = 0; i < list_monster.length; i++) {
              if (list_monster[i].life) {
                  list_monster[i].life = false;
                  sessionStorage.score++;
                  document.getElementById("score").innerHTML = sessionStorage.score;
              }
          }
          init();

      }

    }

    function MonstersLife(){
        var num = 0;
        for(var i = 0 ; i < list_monster.length ; i++) {
            if(list_monster[i].life){
               num++;
            }
        }
       return  num;
    }

    function run() {
        console.log(1);
        reqAnimation = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ;
        if(reqAnimation)
            updateMonster();
        else
            alert("Your browser doesn't support requestAnimationFrame.");
            // var interval=50;
            // setInterval("updateMonster()", interval);
    }

    function  pauseMonsters() {
        if(stop > 0) {
            if (pause) {
                pause = false;
                stop--;
                document.getElementById("pause").innerHTML= "<img src='images/play.png'>";
            }
        }
        document.getElementById("stop").innerHTML = stop;

    }
    function  RunMonsters(){
        if(!pause){
            document.getElementById("pause").innerHTML= "<img src='images/pause.png'>";
            pause =true;

        }

     }


