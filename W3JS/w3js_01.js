

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


var n3 = 10.4539;

/*
console.log(n3.toExponential());
console.log(n3.toExponential(3));
console.log(n3.toFixed(0));
console.log(n3.toFixed(2));
console.log(n3.toFixed(4));
*/

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
