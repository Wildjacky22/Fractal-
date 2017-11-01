function setup(){
  
  createCanvas( windowWidth , windowHeight );

 //background(0, 0 ,0);
}

function draw(){
  
  background( 0 , 0 , 0 );
  
  var r = random( 0 , 255 );
  var g = random( 0 , 255 );
  var b = random( 0 , 255 );
  
  frameRate(1);
  a = random( PI/0.01 , PI);
  //(mouseX*0.002);
  
  var len = 200;
  
  stroke(r,g,b,155);
  translate( windowWidth*0.5 , height );
  branch(200);
}

function branch(len){
  
  line( 0 , 0 , 0 , -len);
  
  translate( 0 , -len );
  

  
  if( len>4){
  push();
  rotate(a);
  branch( len*0.69 );
  pop();
  
  push();
  rotate(-a);
  branch( len*0.69 );
  pop();

  }
}
