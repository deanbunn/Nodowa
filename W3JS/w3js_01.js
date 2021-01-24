

//Testing Classes
class Pet {
    constructor(name,favorite_food) {
	this.name = name;
        this.food = favorite_food;
    }

    speak(p_msg) {
	return this.name + ' says ' + p_msg;
    }

}

let pups1 = new Pet("Apollo","Shredded Cheese");
let kitty1 = new Pet("Jazzy","Steak");


console.log(pups1.name);
console.log(kitty1.food);
console.log(pups1.speak('bark bark'));

/*
//Testing Arrow function
sayHowdy = () => {
   return 'Howdy';
}

console.log(sayHowdy());
*/

/*
//Testing var vs let
console.log(b20);
console.log(b21);
var b20 = 'Nova';
let b21 = 'Super';
//console.log(b20);
//console.log(b21);
*/

/*
//Testing Hoistering
bx1 = 6;

console.log(bx1);

var bx1;
*/


/*
//Testing booleans
let b1 = false;

if(b1 == true){
   console.log("Howdy");
}
else{
   console.log("Naw Dawg");
}
*/



/*
//Testing math functions
console.log(Math.random());
console.log(Math.floor(3.4));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 100) + 1);
*/


/*
//Testing basic functions
function milkDay(n1, n2) {
   return n1 * n2;
}

//console.log(milkDay(16,4));


var techie = { firstName: "Ken", 
               lastName: "Jones", 
               windows: false, 
               linux: true, 
	       displayName: function() {
				return this.firstName + " " + this.lastName;
                           }
              };


//console.log(techie.displayName());
*/


/*
//Testing more math functions
var n3 = 10.4539;
console.log(n3.toExponential());
console.log(n3.toExponential(3));
console.log(n3.toFixed(0));
console.log(n3.toFixed(2));
console.log(n3.toFixed(4));
*/


/*
//Testing arrays
var books = ["PowerShell", "NMAP", "Django"];

console.log(books);
books.shift();
console.log(books);
books.unshift('IAM');
console.log(books);
books.push('Curiosity');
console.log(books);
books.pop();
console.log(books);
books.push('AD Services');
books.push('Quick Python');
var funbooks = books.slice(1,4);
console.log(funbooks);
books.sort();
console.log(books);

for(i=0; i < books.length; i++) {
	console.log(books[i] + ' was fun to read');
}

*/


/*
//Testing Dates

var d1 = new Date();
console.log(d1);
console.log(d1.toDateString());
console.log(d1.toISOString());
console.log(d1.getHours());
console.log(d1.getDay());
console.log(Date.now());
*/



console.log('\n\n');
console.log('------- End of Testing --------');


