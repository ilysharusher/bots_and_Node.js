let candy = ['bdzhilka', 'barbaris'];
let cookie = ['oreo'];
let sweets = candy + cookie;
// console.log(sweets);

let sweets2 = candy.concat(cookie);
// console.log(sweets2);

let sweets3 = [...candy, ...cookie, 'ice cream'];
// console.log(sweets3);

let cake = {
    name: 'napoleon',
    brand: 'ZCF',
    city: 'Zaporizhzhya'
};

let cake2 = {...cake};

cake2.name = 'medovik';

console.log(cake);
console.log(cake2);