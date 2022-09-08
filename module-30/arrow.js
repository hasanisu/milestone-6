
//  function declaration 
function add(first, second){ 
    const total = first + second;
    return total;
}

// function expression 
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

// function expression with anonymous
const add2 = function(first, second){ /* jodi functioin er pore kono name na dei tahole sheitake bole anonymous */
    const total = first + second;
    return total;
}


function add4(first, second){ 
    return first + second;
}

const add5 = function(first, second){  
    return first + second;  
}

// arrow function 
const add6 = (first, second) => first + second;  /* function er shortcut..arrow function e function kothata thakbe na => eita mane hosse arrow eitar kaj r return er kaj same */
const result = add(10, 20);
console.log(result);

// interview quetion: difference between 
// functioin diclaration,function expression and arrow function