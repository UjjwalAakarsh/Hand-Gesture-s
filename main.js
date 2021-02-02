Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach('#camera')

function capture(){
    Webcam.snap(function(pic) {
        document.getElementById("snapshot").innerHTML=`<img src=${pic} id="picture">`
    })
}

console.log(" ml5 ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s-b1a06Qu/model.json",ModelLoaded);

function ModelLoaded() {
    console.log("Model Is Loaded")
}

function identify() {
    img=document.getElementById("picture");
    classifier.classify(img,gotresults)
}

function gotresults(error,results){
    if (error) {
        console.log(error)
    }
    else{
        console.log(results);
        Prediction_1=results[0].label;
        Prediction_2=results[1].label;
        console.log(Prediction_1);
        console.log(Prediction_2);
        document.getElementById("prediction_1").innerHTML=Prediction_1;
        document.getElementById("prediction_2").innerHTML=Prediction_2;
        if (Prediction_1=="Thumbs Up") {
            document.getElementById("emoji_1").innerHTML="&#128077;"
        }
        if (Prediction_1=="Thumbs Down") {
            document.getElementById("emoji_1").innerHTML="&#128078;"
        }
        if (Prediction_1=="Perfect") {
            document.getElementById("emoji_1").innerHTML="&#128076;"
        }
        if (Prediction_1=="Victory") {
            document.getElementById("emoji_1").innerHTML="&#x270C;"
        }
        if (Prediction_1=="Call") {
            document.getElementById("emoji_1").innerHTML="&#x1F919;"
        }

        if (Prediction_2=="Thumbs Up") {
            document.getElementById("emoji_2").innerHTML="&#128077;"
        }
        if (Prediction_2=="Thumbs Down") {
            document.getElementById("emoji_2").innerHTML="&#128078;"
        }
        if (Prediction_2=="Perfect") {
            document.getElementById("emoji_2").innerHTML="&#128076;"
        }
        if (Prediction_2=="Victory") {
            document.getElementById("emoji_2").innerHTML="&#x270C;"
        }
        if (Prediction_2=="Call") {
            document.getElementById("emoji_2").innerHTML="&#x1F919;"
        }
        
        
        
    }
}