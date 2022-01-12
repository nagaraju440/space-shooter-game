
var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
var ctx=canvas.getContext('2d');
var ctx1=canvas.getContext('2d');
canvas.width=400;
var x1=200;
var tx=[],ty=[],k1=0,j1=0,score=0;
canvas.height=window.innerHeight;
function Space(x,y,dy){
this.x=x;
this.y=y;
this.dy=dy;
// this.a=a;
// this.b=b;
// this.w=w;
this.radius=15;
    this.starupdate=function(){
        this.x=this.x;
        this.y=this.y+3;
        if(this.y>700){
            this.y=0;
        }
    }
    this.stardraw=function(){
        c.beginPath();
        c.arc(this.x, this.y,0.7, 0, 2 * Math.PI,false);
        c.stroke();
        c.fill();
        c.fillStyle="white";
        // c.strokeStyle="white";
        
        // c.shadowBlur = 10;
        // c.shadowColor = "white";  
    }
    this.updateufo=function(){
        
        this.x=x1-500;
        if(this.x>350){
            this.x=350;
        }
        this.y=650;
    }
    this.ufo=function(){
                    
var img=document.getElementById("img");

ctx.drawImage(img,this.x,650,50,80);

    }
    this.bulletupdate=function(k,j){
        k1=k;
        j1=j;
        // console.log(j)
        if(this.y<0){
            this.y=900;
            this.dy=-10;
            score=score+1;
            document.getElementById('score').innerHTML="score:"+score;

        }
    this.x=this.x;
     this.y=this.y-this.dy;
       tx[k]=this.x;
       ty[k]=this.y;
    }
    this.bulletdraw=function(){
        
        ctx1.fillStyle="red";
        ctx1.beginPath();
        ctx1.rect(this.x,this.y, 5,15);
        ctx1.stroke();
        ctx1.fill();
    }

    //enemy
  
    this.enemyupdate=function(){
        // console.log(tx,ty)
          this.x=this.x;
          this.y=this.y+dy;
          if(this.y>600){
            document.getElementById('demo').innerHTML="game over 😜😜😜";
          }
    //  console.log(this.x,this.y)

    }
    this.enemydraw=function(){
        for(var i=0;i<k1;i++){
            // console.log(tx[i],i)
        if(tx[i]>this.x && tx[i]<this.x+40 && this.y>-30 && ty[i]<this.y+80 ){
            // alert("hiii");
            console.log("blast")
            this.y=-15000;
        } else{
            var img1=document.getElementById("img1");
            ctx.drawImage(img1,this.x,this.y,40,80);
        }
    }
    }
}
var space=new Space(200,750);
space.updateufo();
space.ufo();
var bullets=[];
var by=650;

var enemy=[];
var er=0,ey=-80,ex=30;
for(i=0;i<100;i++){
    er=er+1;
    if(er==5 ){
          ey=ey-200;
          er=0;
    }
    var ex1=(Math.floor(Math.random()*40)+50);
    // console.log(ex1);
    ex=ex+ex1;
    if(ex>350){
        ex=50;
    }
    enemy[i]=new Space(ex,ey,2);
}

var array=[];
for(var i=0;i<200;i++){
    this.x=Math.floor(Math.random()*400);
    this.y=Math.floor(Math.random()*window.innerHeight);
       array[i]=new Space(this.x,this.y);
}
for(var i=0;i<100;i++){
    array[i].stardraw();
}
var a=[];
i=0,j=0;
document.addEventListener('mousemove',function(){

    x1=event.clientX;
//    y=event.clientY;
  if(x1>500 && x1<900){
    c.clearRect(0,0,innerWidth,innerHeight);
i=i+1;
if(i==15)
{ 
      i=0;
    j=j+1;
}
a[j]=x1-480;    
bullets[j]=new Space(a[j],by,5);

  starseen();
  
  }
  })

  function starseen(){
    for(var k=0;k<j;k++){
        bullets[k].bulletupdate(k,j);
        bullets[k].bulletdraw();
      
    }
    // console.log(j)
    for(var i=0;i<100;i++){
        array[i].starupdate();
        array[i].stardraw();  
        enemy[i].enemyupdate();
        enemy[i].enemydraw();
    }
    space.updateufo();
  space.ufo();  
  }

