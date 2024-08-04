interface items {
    name: string
    price: number
}
// create two objects
const book: items={
    name : 'ANATOMY',
    price : 450
}
const apple : items ={
    name: 'APPLE',
    price: 200
}
console.log(`Book name: ${book.name}, Price: ${book.price}`);
console.log(`Apple name: ${apple.name}, Price: ${apple.price}`);
