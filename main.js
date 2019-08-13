const prompt = require('prompt-sync')();
while (true) {
  let input = prompt('Do you want to play? [yes/no] ');
  if (input === 'yes') { 

let input = prompt('You are going to a wedding. What do you want to wear? [weddingDress/tuxedo/suit/cocktailDress] ');
   if (input === 'weddingDress') { 
console.log('We are now legally married!');
}
  else if (input === 'tuxedo') { 
console.log('We are now legally married!');
}
  else if (input === 'suit') { 
console.log('Welcome to the singles table!');
}
  else if (input === 'cocktailDress') { 
console.log('Welcome to the singles table!');
}

} else (input === 'No'); {
    console.log('Bye!');
    break;
  }
}
