
// let result =fetch("https://api.coindesk.com/v1/bpi/currentprice.json ")
// result.then((res)=>{
// 	let more_q = res.json()
// 	return more_q
// })
// .then((nah)=>{
// 	console.log(nah)
// })
// .catch((err)=>{
// 	console.log(err)
// })
/*
console.log('emi_agoro1')
console.log('emi_agoro2')
console.log('emi_agoro3')
console.log('emi_agoro4')
console.log('emi_agoro5')
console.log('emi_agoro6')
console.log('emi_agoro7')
console.log('emi_agoro8')
console.log('emi_agoro8')
console.log('emi_agoro9')
console.log('emi_agoro12')
console.log('emi_agoro13')
console.log('emi_agoro14')
console.log('emi_agoro15')
console.log('emi_agoro18')
*/
// let response = fetch("https://api.coindesk.com/v1/bpi/currentprice.json ")
// response.then((res)=> {
//     // console.log(res)
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
// 	console.log(err)
// })
// map 
// function
// api
// while loop 
/*

function mydate(){
    const allDate = new Date()
    const Months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
        ]
        
const daysOfTheWeek = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    
    
    
    const result = ${daysOfTheWeek[allDate.getDay()]} ${allDate.getDate()} ${Months[allDate.getMonth()]} ${allDate.getFullYear()}
    
return    result
}
console.log(mydate())
*/
//class work
// number4
// function maximum (number){
//     let max = number[0]
//     for(let i = 1; i < number.length; i++){
//         if(number[i] > max){
//             max = number[i]
//         }
//     }
//     return max
// }
// console.log(maximum([2,3,4,5,9,6,7,7,8]))
// num 6
// function square(number){
//     let total = number * number
//     return total
// }
// console.log(square(5)) 
// number 10
// function vowel(word){
//     let voowel = ['a', 'e', 'i', 'o', 'u']
//     let count = 0
//     for(let i = 0; i < word.length; i++){
//         if(voowel.includes(word[i].toLowerCase())){
//             count++
//         }
//     }
//     return count
// }
// console.log(vowel('abdulramon'))
// number 9
// function absoluteValue (amount){
//     let value = amount/2
//     return value
// }
// console.log(absoluteValue(1200))
// number 8
// function simpleInterest (amount){
//     let interest = amount * 5 / 100
//     return interest
// }
// console.log(simpleInterest(100))
// let fahrenheit = prompt("Enter temperature in Fahrenheit: ")
//  let celsius = (fahrenheit - 32) * 5/9
//   console. log(`The temperature in Celsius is ${celsius. toFixed(2)}`)
// function taxable (fahrenheit) {
//  let celsius = (fahrenheit - 32) * 5/9
// return celsius
// }
// console.log(taxable(223).toFixed(2))
//===================================================================

// function oldAndEvenNumber(giveNum){

// }
// console.log(oldAndEvenNumber(1,2,3,4,5,6,7,8,9))


// function reverseText(text) {
//     let reverse = ''
//     for (let i = text.length - 1; i = 0; i--) {
//         reverse += text[i]
//     }
//     return reverse
// }
// console.log(reverseText('connection'))





function sumElement (element) {
	let sum = 0
    for(let i = 0; i < element.length; i++){
        sum += element[i]
    }
    return sum
}
console.log(sumElement([10,20,30,40,50]))




function loops (nums,target) {
	let greater = nums.filter((elem) => elem >target)
	return greater
}
[24,14,18,23,7,32,10]
console.log(loops([24,14,18,23,7,32,10],14))


