let dialogue = [`title lol`, 
  //Intro

  `It’s the beginning of the year. You wake up and starts on your daily 
  100 push ups, 100 sit-ups, 100 squats, and a 10 kilometer run.`, //1

  `After your daily routine, you go and eat your post-workout breakfast 
  consisting of 3 protein shakes, 6 eggs, and 3 protein bars.`, //2

  `After that, you go to school.`, //3

  `On the way to school… `, //4

  `I wish I could work out more before school but I guess this will 
  do for now…`, //5

  `Hey hey Marky! Miss me? I haven’t seen you all summer!`, //6

  `It is better that way.`, //7

  `Oh don’t be so cold!`, //8

  `*sniffs* Hmm… did you not shower before going out?`, //9

  `No, why?`, //10

  `Hee hee. I love the smell of your sweat. So delectable, 
  so masculine… It's worth killing for.`, //11

  `Can I lick your sweat?`, //12

  `Choices placeholder` //13
];
let names = ["title lol", 
  "Narrator", //1
  "Narrator", //2
  "Narrator", //3
  "Narrator", //4
  "Mark", //5
  "Avery", //6
  "Mark", //7
  "Avery", //8
  "Avery", //9
  "Mark", //10
  "Avery", //11
  "Avery", //12
  "Mark" //13

];
// let portraits = [
//   "",
//   "",
//   "",
//   'femboy.jpg',
// ] doesn't work yet

let index = 0;
let state = "title";

function preload(){
  img = loadImage("femboy.jpg");
}

function setup() {
  createCanvas(1200, 850);
}

function draw() {
  background(80);
    if (state === "title") {
    title();
  } else if (state ==="intro") {
    intro();
  } //else if (state === "math1"){
  //   math1();
  // } else if(state === "math2"){
  //   math2();
  // } else if(state === "math3"){
  //   math3();
  // }
    
}

function title() {
  //text stuff

  textSize(70);
  textAlign(CENTER);
  text("Dating Sim", 600,100); 
  rectMode(CENTER);
  rect(600,600,700,200); //play button
  text("Play", 600,620);

  //button

  if (mouseX > 250 && mouseX < 950 && mouseY > 500 && mouseY < 700) {
    cursor(HAND);
    if (mouseIsPressed) {
      state = "intro";
    }
  } else {
    cursor(ARROW);
  }
}

function intro() {

  //formatting
  cursor(ARROW);
  textFont("Alice");
  rectMode(CENTER);
  textAlign(CENTER);
  fill(174,255,234);

  // character portraits also doesn't work
  // text(portraits[index], 80, 50);
  // image(img, 80, 50, 500, 750);
  // image(img, 600, 50, 500, 750);

  //dialogue
  rect(600,700,1200,300); //dialogue box
  rect(150,500,300,100); //characters
  fill(0);
  textSize(40);
  text(dialogue[index], 600, 625);
  text(names[index], 150, 510);

//   //Choices (still working on it)

//   if(index === 13){
//     cursor(ARROW);
//     fill(255);
//     rect(200,350,300,100);
//     rect(600,350,300,100);
//     rect(1000,350,300,100);
//     fill(0);
//     textSize(30);
//     text(`"Ayo what’s wrong 
// with you, man!"`, 200,340);
//     text(`"Can you not?"`, 600,360);
//     text(`"Huh?"`, 1000,360);

// //Choice boxes

//     if(mouseX > 50 && mouseX < 350 && mouseY > 300 && mouseY < 400){
//       cursor(HAND);
//         if (mouseIsPressed) {
//           state = "math1";
//         }
//       } else if(mouseX > 450 && mouseX < 750 && mouseY > 300 && mouseY < 400){
//         if (mouseIsPressed) {
//           state = "math2";
//         }
//       } else if(mouseX > 850 && mouseX < 1150 && mouseY > 300 && mouseY < 400){
//         cursor(HAND);
//         if (mouseIsPressed) {
//           state = "math3";
//         }
//       } else{
//         cursor(ARROW);
//     }

//   }

}

// function math1(){
//   fill(255);
//   text("This truly was a dating sim choice 1", 500, 600);
// }

// function math2(){
//   fill(255);
//   text("This truly was a dating sim choice 2", 500, 600);
// }

// function math3(){
//   fill(255);
//   text("This truly was a dating sim choice 3", 500, 600);
// }

function mousePressed(){
    index++;
} //this is how we are doing scene skipping

