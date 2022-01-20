function draw(){
    image(video, 0, 0, 300, 300)
    Classifier.classify(video, result)
}
function setup(){
canvas = createCanvas(300,300)
canvas.center() 
video = createCapture(VIDEO); 
video.hide(); 
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cHdTNikJa/model.json",ModelLoaded)    
}
function ModelLoaded(){
    console.log("Model Loaded");
    } 

    function result(error,Fame){
        if (error){
        console.error(error)    
        }    
        else{
        console.log(Fame)    
        document.getElementById("Result_Family_Name").innerHTML = Fame[0].label
        document.getElementById("Result_Family_Accuracy").innerHTML = Fame[0].confidence.toFixed(2);     
        }
    }
