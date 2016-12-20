console.log('hello world');

const leftDiv = document.getElementById('left');
const rightDiv = document.getElementById('right');
const picList = document.getElementById('photos');
const infoDiv = document.getElementById('info');

const xhrRequest = new XMLHttpRequest(); 
xhrRequest.open('GET', 'http://reqres.in/api/users');

let parsedData;
xhrRequest.onreadystatechange = function() {
  if (xhrRequest.readyState === 4 && xhrRequest.status == 200) {
    ///console.log(typeof xhrRequest.responseText); /// this is a string
    console.log(JSON.parse(xhrRequest.responseText)); /// json.parse takes a string and turns it into an object
    parsedData = JSON.parse(xhrRequest.responseText).data;
  }
  console.log(parsedData);
  getUserPhotos(parsedData);
  let userArray = document.getElementsByTagName('li');
  for (let user of userArray) {
    user.addEventListener('click', getTheInfo);
  }
};
xhrRequest.send();

function getUserPhotos(xhr) {
  for (let obj in xhr) {
    let newPic = document.createElement('li');
    newPic.innerHTML = `<img src="${xhr[obj].avatar}" alt="${xhr[obj].first_name} ${xhr[obj].last_name}" data-numb="${obj}">`;
    picList.appendChild(newPic);
  }
}

function getTheInfo() {
  let x = event.target;
  let a = x.dataset.numb;
  console.log(a);
  infoDiv.innerHTML = `<h2>${parsedData[a].first_name}</h2> <h1>${parsedData[a].last_name}</h1>`;
}

