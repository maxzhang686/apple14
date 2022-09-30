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

var count = 0

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
      
      let purple256 = data.stores.R483["MQ1F3ZP/A"].availability.contract;
      let purple512 = data.stores.R483["MQ293ZP/A"].availability.contract;


      if (purple256 == true) {
        document.getElementById("bonus-life3").style.background = "red";
        document.getElementById("bonus-life3").innerHTML = "有!!!!!!!!!";
      }
      else if ( purple512 == true){
        document.getElementById("bonus-life4").style.background = "red";
        document.getElementById("bonus-life4").innerHTML = "有!!!!!!!!!";
      }

      count = count + 1;
      document.getElementById("count").innerHTML = count;
      //console.log(gold256);
    });
  // const posts = response.json();
  // console.log(posts.data);
  // console.log(posts);
}

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

setInterval(getAppleJSON, 1250);
