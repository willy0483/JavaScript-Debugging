// write cool JS here!!
const myInfo = 'en variabel';
const myBooks = ["The Catcher in the Rye",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Great Gatsby",
    "The Hobbit",
    "Harry Potter and the Sorcerer's Stone",
    "The Lord of the Rings",
    "The Da Vinci Code",
    "The Hunger Games"]


console.log("Konsol blev ryddet")
console.group("konsol opgave")
console.log("jeg er en almindelig konsol log")
console.log('jeg er en konsol info:' + myInfo)
console.groupEnd()


console.warn("jeg er en advaersel!")
console.error("jeg er en fejl!!!")


console.table(myBooks);

console.time()
console.timeEnd()

