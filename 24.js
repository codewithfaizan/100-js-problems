let capitalize = (string) =>{
    string = string.charAt(0).toUpperCase() + string.slice(1)
    return string
}

let result = capitalize("hinder")
console.log(result)

// let findVowel = (string) => {
    
//     let count = string.match(/[aeiou]/ig);
//     console.log(count.length)
//     return count
// }
// console.log(findVowel("Synchronization"));


