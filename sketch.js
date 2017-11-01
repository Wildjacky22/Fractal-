function setup(){
  
  createCanvas( windowWidth , windowHeight );
 
//  slider =  createSlider(0, TWO_PI , PI/4 );
 
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
  branch( len*0.55 );
  pop();
  
  push();
  rotate(-a);
  branch( len*0.55 );
  pop();
  
  }
}
