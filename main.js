objects = [];
r = 0;
g = 0;
b = 0;


function preload(){

  vid = createVideo("video.mp4");
  vid.hide();


}

function setup(){

  canvas = createCanvas(480,380);
  canvas.center();

}

function draw(){

  image(vid,0,0,480,380);

  
  
    if( status != ""){

        dectector.detect(vid,gotResults);
        
        for( i = 0 ; i < objects.length ; i++){

            document.getElementById("status").innerHTML =  "Status : Objects Have Been Detected";
            document.getElementById("object-numbers").innerHTML = "Number of objects detected : " + objects.length;
            
          r = random(255);
          g = random(255);
          b = random(255);

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "% " , objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);

          

        }
        

     


    }

}

function gotResults(error,results){

  if(error){

    console.log(error);

  }

  else{

    console.log(results);
    objects = results;

  }

}

function START(){

 dectector = ml5.objectDetector('cocossd',modeLoaded);
 document.getElementById("status").innerHTML = " Status : Detecting Objects";

}

function modeLoaded(){

console.log("model has been loaded!");
 
status = true
vid.loop();
vid.speed(1);
vid.volume(0);
  

}