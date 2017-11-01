function setup(){
  
  createCanvas( windowWidth , windowHeight );
 
}

function draw(){
  
  background( 0 , 0 , 0 );
  
  a = (mouseX*0.002);
  
  var len = 200;
  
  stroke(255);
  translate( windowWidth*0.5 , height );
  branch(200);
}

function branch(len){
  
  line( 0 , 0 , 0 , -len);
  
  translate( 0 , -len );
  

  
  if( len>3){
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
