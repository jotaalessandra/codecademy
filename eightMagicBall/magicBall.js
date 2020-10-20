// let userName = '';

// userName === 'Jane' ? console.log(`Hello, ${userName}`) : console.log('Hello!');

let userQuestion = prompt('Haz una pregunta!');

const randomNumber = Math.floor((Math.random() * 8) +1);

let eightBall = '';

switch (randomNumber){
  case 0 :
    eightBall = 'No cuentes con ello!';
    break;
  case 1 : 
    eightBall = 'Sin duda, si!';
    break;
  case 2 :
    eightBall = 'Ciertamente!';
    break;
  case 3 : 
    eightBall = 'No luce muy bien desde aca!';
    break;
  case 4 : 
    eightBall = 'Mis fuentes dicen que no!';
    break;
  case 5 : 
    eightBall = 'Parece que si!';
    break;
  case 6 :
    eightBall = 'No puedo predecir ahora!';
    break;
  case 7 : 
    eightBall = 'Debes confiar en ello!';
    break;
  case 8 : 
    eightBall = 'Muy dudoso!';
    break;
}

document.write(eightBall);