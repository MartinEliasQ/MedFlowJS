import "babel-polyfill";
import * as handTrack from 'handtrackjs';
import * as mobileNet from '@tensorflow-models/mobilenet';
import data from "./data.json"
// Seleccionemos los elementos video y canvas
const video = document.getElementById("myvideo");
const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2");

const ctx1 = canvas.getContext("2d")
const ctx2 = canvas2.getContext("2d")

const labelPred = document.getElementById("prediction");
const labelVersus = document.getElementById("versus");


const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const labelPoints = document.getElementById("points");


const attributes = ["stars",
    "forks",
    "issues",
    "watchers"
]
//Tama`no del lienzo
const width = 500
const height = 400
const midWidth = width / 2
const midHeight = height / 2
video.width = width
video.height = height
canvas.width = width
canvas.height = height


// Constantes para los modelos
const modelParams = {
    flipHorizontal: true, // flip e.g for video  
    maxNumBoxes: 3, // maximum number of boxes to detect
    iouThreshold: 0.93, // ioU threshold for non-max suppression
    scoreThreshold: 0.93, // confidence threshold for predictions.
}
let handModel = undefined
let mobileModel = undefined

let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let startVideo = async () => {}


let detection = async () => {}


let init = async () => {}

init()