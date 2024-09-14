// // var stock = 22;

// let response = fetch('https://reserve-prime.apple.com/AU/en_AU/reserve/A/availability.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log(data);

// let url = fetch(
//   "https://reserve-prime.apple.com/AU/en_AU/reserve/A/availability.json"
// );

// let data = res.json();
// //JSON.parse(response);
// console.log(data);

// async function getJSON() {
//   let url = 'https://reserve-prime.apple.com/AU/en_AU/reserve/A/availability.json';
//   try {
//     let response = await fetch(url);
//     return await response.json();
//   } catch (error) {
//     console.log('Request Failed', error);
//   }
// }


//getAppleJSON();

// response = fetch(
//   "https://reserve-prime.apple.com/AU/en_AU/reserve/A/availability.json"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     let a = data.stores.R483["MQ183ZP/A"].availability.contract;
//     let b = data.stores.R483["MQ233ZP/A"].availability.contract;
//     console.log(a, b);
//   });

var count = 0
const audioJs = new Audio('https://www.w3schools.com/html/horse.mp3')
var countWhite = 0
var countMax = 0

// document.addEventListener('touchstart', function(){ 
//   audioJs.play();
// }, false);


async function getAppleJSON() {
  const response = await fetch(
    "https://reserve-prime.apple.com/AU/en_AU/reserve/A/availability.json"
  )
    .then((response) => response.json())
    .then((data) => {
      let gold256 = data.stores.R483["MQ183ZP/A"].availability.contract;
      let gold512 = data.stores.R483["MQ233ZP/A"].availability.contract;

      if (gold256 == true) {
        document.getElementById("bonus-life").style.background = "red";
        document.getElementById("bonus-life").innerHTML = "有!!!!!!!!!";
      }
      else if ( gold512 == true){
        document.getElementById("bonus-life2").style.background = "red";
        document.getElementById("bonus-life2").innerHTML = "有!!!!!!!!!";
      }

      count = count + 1;
      document.getElementById("count").innerHTML = count;

      if(gold256 ==true || gold512 == true){
        // audioJs.play();
        document.getElementById('audio2').play();
      }
      //audioJs.play();
      //console.log(gold256);
    });
  // const posts = response.json();
  // console.log(posts.data);
  // console.log(posts);
}


// async function getWhiteJSON() {
//   const responseWhite = await fetch(
//     "https://reserve-prime.apple.com/AU/en_AU/reserve/A/availability.json"
//   )
//     .then((response) => response.json())
//     .then((data) => {
      
//       let white256 = data.stores.R483["MQ103ZP/A"].availability.contract;
//       let white512 = data.stores.R483["MQ1W3ZP/A"].availability.contract;
     

//       if (white256 == true) {
//         document.getElementById("bonus-life3").style.background = "red";
//         document.getElementById("bonus-life3").innerHTML = "有!!!!!!!!!";
//       }
//       else if ( white512 == true){
//         document.getElementById("bonus-life4").style.background = "red";
//         document.getElementById("bonus-life4").innerHTML = "有!!!!!!!!!";
//       }
//       countWhite = countWhite + 1;
//       document.getElementById("count2").innerHTML = countWhite;

//       if(white256 ==true || white512 == true){
//         //audioJs.play();
//         document.getElementById("audio2").play();
//       }
//     });
// }

async function getMaxJSON() {
  const responseMax = await fetch(
    "https://reserve-prime.apple.com/AU/en_AU/reserve/A/availability.json"
  )
    .then((response) => response.json())
    .then((data) => {
      // let goldMax = data.stores.R483["MQ9W3ZP/A"].availability.contract;
      let Max = data.stores.R483["MQAM3ZP/A"].availability.contract;

      if (Max == true) {
        document.getElementById("bonus-life5").style.background = "red";
        document.getElementById("bonus-life5").innerHTML = "有!!!!!!!!!";
        // audioJs.play();
        document.getElementById("audio2").play();
      }
      countMax = countMax + 1;
      document.getElementById("count3").innerHTML = countMax;

    });

}

//setInterval(getAppleJSON, 1250);

// const myInterval = setInterval(getWhiteJSON, 1250);
const myIntervalGold = setInterval(getAppleJSON, 1250);
const myIntervalMax = setInterval(getMaxJSON, 1250);

// function myStop() {
//   clearInterval(myInterval);
// }

function myStopGold() {
  clearInterval(myIntervalGold);
}

function myStopMax() {
  clearInterval(myIntervalMax);
}

