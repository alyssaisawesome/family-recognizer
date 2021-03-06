Webcam.set({

  width:350,
  height: 300,
  image_format: 'png',
  png_quality: 90

});

var camera = document.getElementById("camera");

Webcam.attach('#camera');

function snapshot() {

  Webcam.snap(function (data_uri){

    document.getElementById("result").innerHTML="<img id='captureimg' src='" + data_uri + "'>";

  });

}

console.log("ml5 version : ", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8YoUK5AEG/model.json', modelLoaded);

function modelLoaded() {

  console.log("Model loaded!");

}

function identify() { 

var img = document.getElementById("captureimg");

classifier.classify(img, gotResult);

 }

 function gotResult(error, results) {

  if (error) {
console.error(error);
  
}

else{

console.log(results);

document.getElementById("person").innerHTML = results[0].label;
document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);

}

 }