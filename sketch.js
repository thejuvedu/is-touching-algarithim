var mRectangle,sRectangle;
var s1Rectangle;
var s2R;
var s3R;
var s4R;
function setup() {

  createCanvas(800,400)
  mRectangle=createSprite(400, 200, 200, 50);
  sRectangle=createSprite(500,200,20,100)
  mRectangle.shapeColor="green";
  sRectangle.shapeColor="green";

  s1Rectangle=createSprite(100,200,50,20);
  s1Rectangle.shapeColor="green";

  s2R=createSprite(200,200,100,50)
  s2R.shapeColor="pink";

}




function draw() {
  background(0);  
  mRectangle.x=World.mouseX;
  mRectangle.y=World.mouseY;
  console.log(sRectangle.x-mRectangle.x);
  if(isTouching(mRectangle,s1Rectangle)){
    
     mRectangle.shapeColor="purple"
     s1Rectangle.shapeColor="purple"
   
   
  }
  else
  {
    mRectangle.shapeColor="green"
    s1Rectangle.shapeColor="green"
  }
  
if(isTouching(mRectangle,sRectangle)){
  mRectangle.shapeColor="orange"
     sRectangle.shapeColor="orange"
}
else{
  mRectangle.shapeColor="red"
     sRectangle.shapeColor="red"
}

if(isTouching(mRectangle,s2R)){
  mRectangle.shapeColor="blue"
  s2R.shapeColor="blue"
}
else{
  mRectangle.shapeColor="brown"
  s2R.shapeColor="brown"
}

  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<sRectangle.height/2+object2.height/2){
    return true;
 }
 else{
  return false;

 }
 
}