const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera dell',
    'Dell 1X59 lanovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
];
const searching = 'dell'

// indexOf()        --//full string er sob chack kore 

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}

// console.log(output);

//includes()        --//full string er sob chack kore 

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }

}



//start with         --//full string er sudhu first word chack kore 

for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product);
    }
}




// endWith       --//full string er sudhu Last word chack kore 

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);