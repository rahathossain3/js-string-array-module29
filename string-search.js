const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    '1X59 lanovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'purple color phone with Laptop'
];
const searching = 'laptop'

// indexOf()

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}

// console.log(output);

//includes()

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }

}

console.log(output);