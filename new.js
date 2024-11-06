
	// 		let sentence = prompt("Enter sentence") // 
	// let var1 = sentence.substring(0, sentence.indexOf(' '))
	// Khaalid is enjoying the programming class 
	// let var2 = ''
	
	// for (let i = sentence.indexOf(' ') + 1; i < sentence.length; i++) {
	//     if(sentence.charAt(i) !== ' ') {
	//         var2 = var2 + sentence.charAt(i)
	//     } else {
	//         if (var1.length < var2.length) {
	//             var1 = var2
	//             var2 = ''
	//         } else {
	//             var2 = ''
	//         }
	//     }
	// }
	// if (var2.length > var1.length){
	//     var1 = var2
	// }
	// console.log(var1)
	// if (var2.length !== 0 && var2.length > var1.length){
	//     console.log(var2)
	// }else{
	// console.log(var1)
	// }
	
	
	// let username = prompt('what is ur name')
	// let userpassword = prompt('enter your password ') 
	// timeTry = 1
	// while(userpassword != 'adedokun' && timeTry <= 3){
	//     timeTry++ 
	//     userpassword =  prompt('retry your password ' )
		
	// }
	// console.log('wellcome, ' + username)
	
	
	
	// let username = prompt('what is ur name')
	// let userpassword = prompt('enter your password ') 
	// timeTry = 1
	// while(userpassword != 'adedokun' && timeTry <= 3){
	//     userpassword =  prompt('retry your password '+ timeTry  )
	//     timeTry++
		
	// }
	// console.log('wellcome, ' + username.toUpperCase())
	// let num1 =100
	// let num2 =10
	// //let division = num1 / num2
	
	
	// function div (num1 , num2){
	//     let division = num1 / num2
	//     return division
	
	// }
	// console.log(div(100, 10))
	// console.log(div(120, 5))
	// console.log(div(130, 10))
	// console.log(div(140, 7))
	// console.log(div(120, 6))
	
	// function duplicatetext(text) {
	//     return text 
	// }
	// let original = 'khallid can smile'
	// let duplicate = duplicatetext(original)
	
	// console.log(duplicate)
	 
	
	
	 // let sentence2 = prompt('What sentence do you have?') + ' '
	// let resultBox = sentence2.charAt(0).toUpperCase() 
	// + sentence2.substring(1,sentence2.indexOf(' '))
	// for(let i = 0; i < sentence2.length; i++){
	//     if(sentence2.charAt(i) === ' ') {
	//       let charUpperCase = sentence2.charAt(i+1).toUpperCase()
	//       let word = charUpperCase + sentence2.slice(i+2, sentence2.indexOf(' ',i+1))
	//       resultBox = resultBox + " " + word
	//      }
	//     // else {
	//     //     continue
	//     // }
	// }
	// console.log(resultBox)
	
	//=======================================================
	
	// let sen = prompt("write a sentence")
	// let res = ''
	// for (let i =0; i < sen.length; i++) {
	//     if(sen.charAt(i) === ' '){
	//         res = res + " " + String.fromCharCode(sen.charCodeAt(i+1)-32)
	//         i++
	//     }else {
	//         res+=sen.charAt(i)
	//     }
	// }
	// res = res.charAt(0).toUpperCase() + res.substring(1)
	// console.log(res)
	
	//========================================================
	// let username = prompt("Enter your username")
	// let inputPass = prompt('enter your passord...')
	// let attempt = 1
	// while(inputPass != 'adegoke' && attempt <= 3) {
	//     inputPass = prompt('Incorrect! You have ' + Number(4-attempt) + ' attempt(s) left. Enter your passord...')
	//     attempt++
	//     }
	// console.log("Welcome, " + username.toUpperCase())
	
	//========================================================
	
	// function add(num1, num2) {
	//     let sum = num1 + num2
	//     return sum
	//     }
	
	//==================================================
	
	// let add = function(num1, num2) {
	//     let sum = num1 + num2
	//     return sum
	// }
	
	// console.log(add(25,10))
	// console.log(add(2.5, 7.7))
	// console.log(add(2,20))
	
	//============================================
	// function greet(name) {
	//     return 'Good day, ' + name + ', from emi-agoro'
	// }
	
	// console.log(greet('numan'))
	// console.log(greet('Lutana'))
	
	//====================================================
	// function agoro(a,b,c) {
	//     return a * b * c
	// }
	
	// console.log(agoro(2,3,5))
	
	
	// let sentence2 = prompt('What sentence do you have?') + ' '
	// let resultBox = sentence2.charAt(0).toUpperCase() 
	// + sentence2.substring(1,sentence2.indexOf(' '))
	// for(let i = 0; i < sentence2.length; i++){
	//     if(sentence2.charAt(i) === ' ') {
	//       let charUpperCase = sentence2.charAt(i+1).toUpperCase()
	//       let word = charUpperCase + sentence2.slice(i+2, sentence2.indexOf(' ',i+1))
	//       resultBox = resultBox + " " + word
	//      }
	//     // else {
	//     //     continue    Khallid can smile for
	//     // }
	// }
	// console.log(resultBox)
	
	//=========================================================================================
	
	// let sen = prompt("write a sentence").toLowerCase() // khallid can smile
	// let res = ''
	// for (let i =0; i < sen.length; i++) {
	//     if(sen.charAt(i) === ' '){
	//         // res = res + " " + String.fromCharCode(sen.charCodeAt(i+1)-32)
	//         res = res + " " + sen.charAt(i+1).toUpperCase()
	//         i++
	//     }else {
	//         res = res + sen.charAt(i)
	//     }
	// }
	// console.log(res)
	// res = res.charAt(0).toUpperCase() + res.substring(1)
	// console.log(res)
	
	
	// khallid can smile
	// let str = "lekan"
	// console.log(str.charCodeAt(4))
	
	// console.log(String.fromCharCode(99 - 32))
	// console.log(String.fromCharCode(65 + 32))
	
	// let str1 = String(koala)
	// ================================================================================================
	
	//4. Write a program that capitalizes the first letter of 
	//every word in a sentence, where words are separated by spaces.
	// let sentence2 = prompt('What sentence do you have?')
	// let resultBox = sentence2.charAt(0).toUpperCase() 
	// + sentence2.substring(1,sentence2.indexOf(' '))
	// for(let i = 0; i < sentence2.length; i++){
	//     if(sentence2.charAt(i) === ' ') {
	//       let charUpperCase = sentence2.charAt(i+1).toUpperCase()
	//       let word = charUpperCase + sentence2.substring(i+2, sentence2.indexOf(' ',i+1))
	//       resultBox = resultBox + " " + word
	//      }
	//     // else {
	//     //     continue
	//     // }
	// }
	// console.log(resultBox)
	
	
	
	// ====================================================================================
	// let sentence = prompt("Enter sentence") // 
	// let var1 = sentence.substring(0, sentence.indexOf(' '))
	// // Khaalid is enjoying the programming class 
	// let var2 = ''
	
	// for (let i = sentence.indexOf(' ') + 1; i < sentence.length; i++) {
	//     if(sentence.charAt(i) !== ' ') {
	//         var2 = var2 + sentence.charAt(i)
	//     } else {
	//         if (var1.length < var2.length) {
	//             var1 = var2
	//             var2 = ''
	//         } else {
	//             var2 = ''
	//         }
	//     }
	// }
	// if (var2.length > var1.length){
	//     var1 = var2
	// }
	// console.log(var1)
	// if (var2.length !== 0 && var2.length > var1.length){
	//     console.log(var2)
	// }else{
	// console.log(var1)
	// }
	
	// ==================================================================================================
	/*
	1. Email Validation: 
	Check if a user input string is a valid email format (eg: example@mail.com). 
	Output "email is valid" if valid or "invalid email" otherwise. 
	*/
	
	
	// let compoundName = 'fagbemi-solarin'
	// // let firstName = compoundName.slice(0,5)
	// let firstName = ''
	// for(let i = 0; i <= compoundName.length; i++) {
	//     if(compoundName.charAt(i) !== '-') {
	//         firstName = firstName + compoundName.charAt(i)
	//     } else {
	//         break
	//     }
	//     }
		// console.log(firstName)
		
	/*
	1. Write a program that outputs  the number of 'e' in any string...
	2. Write a program that outputs the position (index) of the last 
	   vowel in a string...  eg: 'people are writing stuffz'
	   
	   1. look thru the given string character by character
	   2. check if a particular character is a vowel
	   3. if it is a vowel, keep the index in a box
	   4. if we continue looking and find another vowel, 
		  replace the box in step 3 with the index of the new vowel
	*/
	// let str2 = prompt('enter any string...')
	// let box
	// for (let i = 0; i < str2.length; i++) {
	//     if(str2.charAt(i) !== 'a' || str2.charAt(i) !== 'e' || 
	//     str2.charAt(i) !== 'i' || str2.charAt(i) !== 'o' || 
	//     str2.charAt(i) !== 'u') {
	//         box = i
	//     } else {
	//         continue
	//     }
	// }
	// console.log(box)
	
	
	// let str = prompt("Enter any string")
	// let e_collector = ''
	// for(let i = 0; i < str.length; i++) {
	//     if(str.charAt(i) === 'e') {
	//         e_collector = e_collector + str.charAt(i)
	//     }
	// }
	// console.log(e_collector.length)
	
	/*
	8. Sanitize User phone Input: 
	Write a program that accepts phone number and country of origin 
	from users. Phone number input must be 11 digits long and start 
	with 0. Remove any leading or trailing spaces from a user input 
	string, add the country code +234 if the user is a Nigerian, 
	+233 if use is Ghanaian or +44 if user is British. 
	Output a string that reads, 0eightzero1
	"As you're Nigerian, your full phone number is +234 809123457", etc.
	*/
	
	// let phone = prompt("enter your phone number").trim()
	// let country = prompt ("enter your country")
	// let result
	// if(phone.length !== 11 && phone.startsWith !== '0') {
	//     console.log('invalid phone number')
	// } else {
	//     let phoneWithoutzero = phone.substring(1)
	//     if(country === 'nigeria') {
	//         result = '+234 '.concat(phoneWithoutzero)
	//     }else if(country === 'ghana') {
	//         result = '+233 '.concat(phoneWithoutzero)
	//     }else if(country === 'uk') {
	//         result = '+44 '.concat(phoneWithoutzero)
	//     }else {
	//         console.log('invalid country')
	//     }
	//     console.log('As you are from ' + country + ', your full phone number is ' + result)
	// }
	
	
	
	/*
	 9. Forbidden Words Bot: 
	Write a bot that checks if a user message contains any 
	forbidden word like “bad” or “spam.” and substitute them 
	with nicer synonyms or with "" that is the same length 
	as the bad word.
	*/
	
	
	// let str1 = prompt("Enter any string")
	// let counter = 0
	// for(let i = 0; i < str1.length; i++) {
	//     if(str1.charAt(i) === 'e') {
	//         // counter = counter + 1
	//         counter++
	//     }
	// }
	// console.log(counter)
	
	
	
	// for(declearation; condition; incrementation){
	//     operation
	// }
	// for(let i = 0; i < 10; i++){}
	
	// let name ="Zulfah";
	
	// for(let zee = 0; zee <= name.length; zee++){
		
	//     console.log(name.charAt(name.length -1))
	// }
	
	// for (let i = 0; i <= name.length; i++) {
	//     // console.log('wajiat!')
	//     // console.log('alhaja!')
	//     // console.log('jide!')
	//     }
	  
	//   for (let i = 0; i <= 0 ; i++) {
	//     console.log('wajiat!')
	//     // console.log('alhaja!')
	//     // console.log('jide!')
	//     }
	
	
	
	// ==========================================================================================
	// HOME TASKS
	// 1. 
	//Given a string s consisting of words and spaces, 
	//return the length of the last word in the string.
	//Example 1: Input: s = " Hello World  " Output: 5
	//Explanation: The last word is "World" with length 5.
	
	
	//solution.
	
	// let word = "The name of my school is Zulfah academy"
	// let trimmedWord = word.trim();
	// let lastIndexOfSpace = trimmedWord.lastIndexOf(" ")
	// let lastWord = trimmedWord.substring(lastIndexOfSpace + 1)
	// let lastWordLength = lastWord.length
	
	// console.log(lastWordLength)
	
	
	//2. 
	
	//Write a program that encodes a string // to a coded (h4ck3r 5p34k) version of the string. 
	// And remove spaces at beginning and end of string In order to work properly, 
	//the program should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's 
	//with 0, and 's's with 5.
	
	
	//solution.
	//output : h4ck3r 5p34k
	
	// let program = "  HaCkir SpEako  ";
	// let trimmedProgram = program.trim();
	// let programToLowerCase = trimmedProgram.toLowerCase()
	// let changeAInProgram = programToLowerCase.replaceAll("a", 4 ).replaceAll("e", 3).replaceAll("s", 5).replaceAll("i", 1).replaceAll("o", 0);
	
	
	// console.log(changeAInProgram);
	
	
	
	//3.
	//Write a program to determine if a any given number is even or odd.
	
	//solution
	
	// let giveNum =22
	
	// if(giveNum & 1){
	//     console.log('It is and odd number')
	//     }else{
	//         console.log("it is an even number")
	//     }
	// let number = 1234
	// let numStr = String(number)
	// let lastValue = numStr.slice(-1)
	// if(lastValue==0||lastValue==2||lastValue==4||lastValue==6||lastValue==8){
	//     // console.log("even number")
	//     }else{
	//         // console.log("odd Number")
	//     }
	// if(giveNum % 2 === 0){
			// console.log("it is an even number")
		// }else{
		// console.log('It is and odd number')
			
		// }
	
	
	
	//4. 
	//Write a program that outputs: "It's a magic word",if the word ends with 
	//letter e and is 4 letters long. Otherwise, it should output: "Just another word!"
	
	//solution.
	
	// let magicWord = "  CAKE  "
	// let removeSpace = magicWord.trim().toLowerCase();
	// if(removeSpace.charAt(removeSpace.length-1) === "e" && removeSpace.length === 4){
	//     // console.log("It's a magic word")
	// }else{
	//     // console.log("Just another word!")
		
	// }
	
	
	//5. 
	//Write a program that outputs: "Long word ends in vowel!", 
	//if the word ends with a vowel and is longer than 4 letters. 
	//Otherwise, it should output: "Short word!"
	//solution.
	
	// let longWord  = prompt("Enter a word");
	// let longLength = longWord.length > 4;
	// let vowels = ["a", "e", "i", "o", "u"];
	
	// if(longLength && vowels){
	//     console.log("Long word ends with vowels")
	// }else{
	//     console.log("Short words")
	// };
	
	// let word2= "LONDONEE".toLowerCase();
	// if(word2.endsWith("a") || word2.endsWith("e") || word2.endsWith("i") ||word2.endsWith("o") ||word2.endsWith("u") && word2.length > 4){
	//     console.log("Long word ends with vowels")
	// }else{
	//     console.log("Short words")
	//     
	// }
	
	
	// ======================================================================================================
	// CLASS EXERCISE: SOME STRING PROBLEMS
	//1. Write a program that capitalizes the first letter in each name
	// 2. Write a program that puts the two name from (1) together as fullname
	// 3. Make the second to the last letter in fulname capital letter.
	// 4. what is the index of the last letter in firstname
	
	
	// let firstname = prompt('Input your firstname in lowercase:')
	// let surname = prompt('Input your surname in lowercase:')
	// console.log(firstname, surname);
	
	// let pickFirstCharInFirstname = firstname.charAt(0).toUpperCase();
	// let pickFirstCharInSurname = surname.charAt(0).toUpperCase();
	
	// console.log(pickFirstCharInFirstname.concat(".",pickFirstCharInSurname))
	// console.log(pickFirstCharInSurname)
	
	// let substringOfFirstname = firstname.substring(1, firstname.length);
	// let substringOfSurname = surname.substring(1, surname.length);
	
	// console.log(substringOfFirstname)
	// console.log(substringOfFirstname)
	
	// let joinFirstname = pickFirstCharInFirstname.concat(substringOfFirstname)
	// let joinSurname = pickFirstCharInSurname.concat(substringOfSurname)
	
	// console.log(joinFirstname)
	// console.log(joinSurname)
	
	// let fullname = joinFirstname.concat(" ",joinSurname);
	
	// console.log(fullname)
	
	// let lastLetter = fullname.charAt(fullname.length - 1)
	// let secondToTheLastLetter = fullname.charAt(fullname.length - 2).toUpperCase();
	// let fullnameSubstring = fullname.substring(0, fullname.length- 2);
	// let joinAllTogether = fullnameSubstring.concat(secondToTheLastLetter, lastLetter);
	
	// console.log(joinAllTogether)
	
	// let lastChar = firstname.charAt(firstname.length -1);
	// console.log(lastChar)
	
	// let pickIndex = firstname.indexOf(lastChar)
	// console.log(pickIndex)
	
	// let pickIndex1 = firstname.indexOf(lastChar, pickIndex + 1)
	// console.log(pickIndex1)
	
	// let pickIndex2 = firstname.indexOf(lastChar, pickIndex1 + 1)
	// console.log(pickIndex2)
	
	// console.log(pickIndex)
	// console.log(pickIndex1)
	// console.log(pickIndex2)
	
	//================ Q4 solved cleverly!=================
	// let lastLetterOfFirstname = firstname.length-1 
	// console.log(lastLetterOfFirstname)
	
	
	
	
	
	// on the 18th  of october i did this  
	// on the 18th  of october i did this  
	// on the 18th  of october i did this  
	// on the 18th  of october i did this  
	// on the 18th  of october i did this  
	
	// ===============================================================================
	
	
	
	// let firstname = 'cristian'
	// let secondname = 'Ronaldo '
	
	// function fulllname(){
	// 	let fullname = firstname.charAt(0).toUpperCase() + secondname.charAt(0).toUpperCase() + 7
	// 	console.log(fullname)
	// 	return fullname
	// }
	// fulllname()
	
	
	// ========================================================================================
	// function loop(){
	//     let i = 0 
	// while (i <=10){
	//     console.log("cristian Ronaldo")
	//     console.log("owotuyi rahman")
		
	//     i++
		
	// }
	// return i
	// }
	// loop()
	// =========================================================================================================
	// function lengthName(string){
	//     let length = 0
	//     if(string. length<8){
	//         console.log(" please your name can't be less than 8 characters
	// ")
	//     }
	//     else{
	//         length = length + string.length
	//     }
	//     return length
	//     }
	//     console.log(lengthName('i am happy'))
	
	
	// =======================================================================================================================
	// let action = 2
	
	// function math(a,b){
	//     if (action === 1){
	//         let sub = a - b
	//          return sub
	//     }else if (action === 2){
	//         let add = a + b
	//          return add
	//     }else if (action === 3){
	//         let muti = a * b
	//         return muti
	//     }else if (action === 4){
	//         let divide = a / b
	//         return divide
	//     }else {
	//         return 'Nooooo'
	//     }
	//     }
		
	//     console.log(math(100 ,20))
	// ==============================================================================================================================
	// function replaceWord(sentence){
	//     let word = ""
	//     for(let i = 0; i < sentence.length; i++){
	//         if(!word.includes(sentence.charAt(i)) || sentence.charAt(i) === ' '){
	//         word = word + sentence.charAt(i)
	//         }else{
	//             continue
	//         }
	//     }
	//     return word
	// }
	// console.log(replaceWord('cocacola'))
	
	// ================================================================================================================
	// function countCharOccurrences(str, char) {
	//     let count = 0
	//     for (let i = 0; i < str.length; i++) {
	//         if (str[i] === char) {
	//             count++
	//         }
	//     }
	//     return count
	// }
	
	// let string = "adedokun taofeeq"
	// let char = 'o'
	// let count = countCharOccurrences(string, char);
	// console.log(`The character '${char}' occurs ${count} times in the string.`)
	
	
	// ===========================================================================================================================
	
	// function pinAttempts(correctPin) {
	//     let attempts = 0;
	//     let enteredPin;
	
		
	//     while (enteredPin !== correctPin) {
	//         enteredPin = prompt("Enter your PIN:")
	//         attempts++
	//         if (enteredPin !== correctPin) {
	//             console.log("Incorrect PIN, try again.")
	//         }
	//     }
	
	//     console.log("Correct PIN entered after")
	//     return attempts;
	// }
	
	// const correctPin = '1234';
	// pinAttempts(correctPin);
	
	
	// ================================================================================
	
	// let array = ['a', 'b',true, 1, 2 , 'e']
	// console.log(array)
	// console.log(array[0])
	// console.log(array[1])
	// console.log(array[2])
	// console.log(array[3])
	// console.log(array[4])
	// console.log(array.length)
	// let word = ["are you there"]
	// console.log(word.slice(' '))
	
	
	// =========================================================================================================
	// let sampleStr = 'i am visiting the museum'
	// function strLimiter(str, xterlimit) {
	//     let strLimited
	//     if(str.length > xterlimit) {
	//         strLimited = str.substring(0, xterlimit+1) + '...'
	//     }else {
	//         strLimited = str
	//     }
	//     return strLimited
	//     }
		
	// console.log(strLimiter(sampleStr, 10))
	// ========================================================================================================
	// function camelToSnake(camelCase) {
	//     let snake_case
	//     for(let i = 0; i < camelCase.length; i++) {
	//         if(camelCase.charAt(i) === camelCase.charAt(i).toUpperCase()) {
	//             let replacement = '_' + camelCase.charAt(i).toLowerCase()
	//             snake_case = camelCase.replace(camelCase.charAt(i), replacement)
	//         }else {
	//             continue
	//         }
	//     }
	//     return snake_case
	// }
	
	// console.log(camelToSnake('isTrue'))
	
	
	
	// ========================================================================================================================
	
	// function name(word) {
	//     if (word === word.split(' ').reverse().join('')){
	//         return true
	
	//     }else{
	//         return false
	//     }
	// }
	
	// console.log(name('owo'))
	
	// ================================================================================================================================
	// abu work's
	// let ordersArr = ['iPhone', 'fan', 'jollof', 'bag']
	// let completedOrders = []
	
	// function makeOrder(order, isExpress = false) {
	//     if(isExpress) {
	//         ordersArr.unshift(order)
	//     } else {
	//         ordersArr.push(order)
	//     }
	//     return ordersArr
	//     }
	
	
	// function processOrder() {
	//     completedOrders.push(ordersArr.shift())
	//     return ordersArr
	// }
	
	// function cancelOrder(orderToCancel) {
	//     let indexToCancel = ordersArr.indexOf(orderToCancel)
	//     ordersArr.splice(indexToCancel, 1)
	//     return ordersArr
	// }
	
	
	// // console.log(makeOrder('fridge'))
	// // console.log(makeOrder('watch', true))
	// // console.log(processOrder())
	// // console.log('completedOrders are: ', completedOrders)
	// console.log(cancelOrder('jollof'))
	
 // ===============================================================================================================
	// let phone = prompt("enter your phone number").trim()
	// let country = prompt ("enter your country")
	// let result
	// if(phone.length !== 11 && phone.startsWith !== '0') {
	// 	console.log('invalid phone number')
	// } else {
	// 	let phoneWithoutzero = phone.substring(1)
	// 	if(country === 'nigeria') {
	// 		result = '+234 '.concat(phoneWithoutzero)
	// 	}else if(country === 'ghana') {
	// 		result = '+233 '.concat(phoneWithoutzero)
	// 	}else if(country === 'uk') {
	// 		result = '+44 '.concat(phoneWithoutzero)
	// 	}else if(country === 'uae') {
	// 		result = '+419 '.concat(phoneWithoutzero)
	// 	}else if(country === 'togo') {
	// 		result = '+414 '.concat(phoneWithoutzero)
	// 	}else if(country === 'mali') {
	// 		result = '+422 '.concat(phoneWithoutzero)
	// 	}else {
	// 		console.log('invalid country')
	// 	}
	// 	console.log('As you are from ' + country + ', your full phone number is ' + result)
// }
	/*let name = prompt('give a write up')
		let output = ''
		for(let i= 0; i <= name.length; i++ ){
		if(name.charAt(i)=== 'e'){
			output= output + name.charAt(i)

		}else{

		}
		}	console.log(output.length)


		//2 //2 //2 //2 //2 //2 //2 //2 //2  //2  //2	//2	

		let str = prompt("open up to a word")
		let step
		for(let i = 0; i <= str.length; i++){
			if (str.charAt(i) === 'a' ||str.charAt(i) === 'e'||str.charAt(i) ===  'i' ||str.charAt(i) ===  'o'||str.charAt(i) === 'u'){
				step = i
			}else{
				continue
			}

		} 
		console.log(step)*/
				
		//=============================================================================================================================================
	// let ordersArr = ['iPhone', 'fan', 'jollof', 'bag']
	// let completedOrders = []
	
	// function makeOrder(order, isExpress = false) {
	//     if(isExpress) {
	//         ordersArr.unshift(order)
	//     } else {
	//         ordersArr.push(order)
	//     }
	//     return ordersArr
	//     }
	
	
	// function processOrder() {
	//     completedOrders.push(ordersArr.shift())
	//     return ordersArr
	// }
	// if (makeOrder === 2 ||makeOrder === 5||makeOrder === 3||makeOrder === 4){
	//     console.log(makeOrder)
	// }else{
	//     console.log(cancelOrder)
	// }
	
	
	// function cancelOrder(orderToCancel) {
	//     let indexToCancel = ordersArr.indexOf(orderToCancel)
	//     ordersArr.splice(indexToCancel, 1)
	//     return ordersArr
	// }
	
	
	// console.log(makeOrder('fridge'))
	// console.log(makeOrder('watch','jollof', true))
	// console.log(processOrder())
	// console.log('completedOrders are: ', completedOrders)
	// console.log(cancelOrder('jollof'))
	
	
	
	
	
	//================================================================================================================
	
	
	
	// number 1
	//function replaceUnderscore(numArr,val){
	//     for(let i=0; i<numArr.length;i++){
	//         if(numArr[i]===val){
	//             numArr[i]='_'
	//         }
	//     }
	//     return numArr
	//     }
		
	// console.log(replaceUnderscore([2,2,3,4,2,1], 2))
	
	
	
	
	// =================================================================================================
	// number 2
	
	
	// function removeElement(nums, val) {
	//     let index = 0
	//     for (let i = index; i < nums.length; i++) {
	//         nums[i] = '_ '
	//     }  
	//     for (let i = 0; i < nums.length; i++) {
	//         if (nums[i] !== val) {
	//             nums[index] = nums[i]
	//             index++
	//         }
	//     }
	
	   
	
	//     return index  
	// }
	
	// let nums1 = [0,1,2,2,3,0,4,2]
	// let result1 = removeElement(nums1, 2)
	// console.log(result1, nums1)
	
	
	//OR
	
	// function replaceVal(numbArr , val){
	//     let keep = []
	// for(let i = 0; i < numbArr.length; i++){
	//     if(numbArr[i] === val && keep.includes(numbArr[i])){
	//          keep.push("_")
	//     }else{
	//         keep.push(numbArr[i])
	//     }
	// }
	// return keep
	// }
	// console.log(replaceVal([1,1,3,4,1,2,1,5,4,1,6,7,1] , 1))
	
	
	
	
	//==================================================================================================================
	// number 3
	// function removeElement(nums, val) {
	// 	let i = 0
		
	// 	for (let j = 0; j < nums.length; j++) {
	// 		if (nums[j] !== val) {
	// 			nums[i] = nums[j]
	// 			i++
	
	// 		}
	// 	}   
	// 	return nums
	// }
	
	// console.log(removeElement([1,1,3,4,1,2,1,2,2,2,2,2,2,5,4,1,6,7,1], 2))
	
	//OR
	
	//function removeVal(numbArr , val){
	//     let remaining = []
	// for(let i = 0; i < numbArr.length; i++){
	//     if(numbArr[i] === val ){
	//         continue
	//     }else{
	//         remaining.push(numbArr[i])
	//     }
	// }
	// return remaining
	// }
	// console.log(removeVal([1,1,3,4,1,2,1,5,4,1,6,7,1] , 1))
	
	//======================================================================================
	// let action = 2
	
	// let math =(a,b)=>{
	//     if (action === 1){
	//         let sub = a - b
	//          return sub
	//     }else if (action === 2){
	//         let add = a + b
	//          return add
	//     }else if (action === 3){
	//         let muti = a * b
	//         return muti
	//     }else if (action === 4){
	//         let divide = a / b
	//         return divide
	//     }else {
	//         return 'Nooooo'
	//     }
	//     }
		
	//     console.log(math(100 ,20))


		
//=========================================================================================================================
		// let  removeVal = (numbArr , val)=>{
		// 		let remaining = []
		// 	for(let i = 0; i < numbArr.length; i++){
		// 		if(numbArr[i] === val ){
		// 			continue
		// 		}else{
		// 			remaining.push(numbArr[i])
		// 		}
		// 	}
		// 	return remaining
		// 	}
		// 	console.log(removeVal([1,1,3,4,1,2,1,5,4,1,6,7,1] , 1))

		
//===========================================================================================================


 // -----CONST KEYWORD, ARROW FUNCTION  AND FOREACH()----

// let name = "wajiah"
// name = "emi-agoro"
// console.log(name)

// const ANOTHER_NAME = "femi"

// ANOTHER_NAME = 'lautana'
// console.log(ANOTHER_NAME)

// let array = []
// const arr = [1,2]

// let num = 78
// const = 56

// let myFunc = ()=> x+y
// const myFunc = ()=> x+y


// let scores = [1,2,3,4,5]
// let newScores = []
// // numbers.push(1,2,3,4,5)
// for(let i = 0; i < scores.length; i++) {
//     newScores.push(scores[i] + 10)
// }
// console.log(newScores)


// let scores = [1,2,3,4,5]
// for(let i = 0; i < scores.length; i++) {
//     scores[i] = scores[i] + 10
// }
// console.log(scores)

// let scores = [1,2,3,4,5]
// for(let i = 0; i < scores.length; i++) {
//     scores[i] = scores[i] * 2
// }

// console.log(scores)

// let scores = [1,2,3,4,5]
// const double = (elem,i, arr)=> arr[i] = elem * 2
// scores.forEach(double)

// console.log(scores)


// let scores = [10,20,30,40,50]
// let doubledScores = []
// // const double = (elem)=> doubledScores.push(elem * 2)
// scores.forEach((elem,i,arr)=> doubledScores.push(elem * 2))

// console.log(doubledScores)

// let animal = ['cat', 'bat', 'wasp']
// animal.forEach( (elem, i, arr)=> arr[i] = elem + 's'       )

// console.log(animal)

// function square(a,b,c){
//     res.push(a*a)
    
// }

// let scores = [1,2,3,4,5]
// let res = []
// scores.forEach(square)
// console.log(res)


// function square(a,b,c){
//     c[b] = a*a
// }

// let scores = [1,2,3,4,5]
// scores.forEach(square)
// console.log(scores)

// let fetchData = async (id) => {

// 	return new Promise((resolve) => setTimeout(() => resolve(`Data for ${id}`), 1000))
//   }
  
//   let ids = [1, 2, 3, 4, 5]
  
//   ids.forEach(async (id) => {
// 	let data = await fetchData(id)
// 	console.log(data)
//   })


//==========================================================================================================================================================
//friday 1st of noverber 



// let ages =[5,9,7,11,15,17]
// ages.forEach((elem, i, arr)=> arr[i]= elem + 5)

// let add = (elem , i , arr)=> arr[i] = elem + 5
// ages.forEach(add)
// console.log(ages)



// let mark = [55, 60, 72, 45, 81]
// let mark_update = []
// mark.forEach((element, index, array)=> mark_update.push(element + 10))
// console.log(mark)
// console.log(mark_update)


// let marrk = [55, 60, 72, 45, 81]
// let result = marrk.map((el)=> el + 10)
// console.log(result.unshift)




// let nouns =['diretor', 'manager', 'admin', 'cso', 'clerk']
// const rest =nouns.map((elem)=>'Ex-' + elem )
// console.log (nouns)
// console.log (rest)


// let single = ['table', 'girl', 'cup', 'box', 'baby']
// const remaining = single.map(if )
// singles.slice([4])

// let single = ['table', 'girl', 'cup', 'box', 'baby']
// const remain = single.map((ele)=>{
// 	if(ele.endsWith('e')||ele.endsWith('l')||ele.endsWith('p')){
//     return ele + 's'}
//     else if(ele.endsWith('x')){
//         return ele + 'es'
//     }else{
// 		return ele.slice(0,ele.length-1) + 'ies'
// 	}
	
// 	})

// let single = ['table', 'girl', 'cup', 'box', 'baby']
// let output = single.filter((elem)=> elem.length >= 4)
// console.log(output)




//sort  it arrage an element 
  
  
//   let amount = [200,2,1,2,,23,44,56,778,89,1000,22,-22,-90]
//   amount.sort((a,b)=> a-b)
// //   console.log(amount)



// let names = ["abdulramon"]

// let splitName = names[0].split("")

// splitName.sort()

// let sortedName = splitName.join("")

// console.log(sortedName)

//===============================================================================

// let namess = ["abdulramon"]

// let splitNames = namess[0].split("")

// splitNames.sort((a,b)=>{if(a>b){
// 	return -1
// }
// else{
// 	return 1
// }})

// let sortedNames = splitNames.join("")

// console.log(sortedNames)




//=======================================================================================================================

// let products = ['lemonade', 'cereal', 'yoghurt', 'honey', 'headset-pro']

// let searchItem =products.filter( (el)=> el.includes('e') )

// console.log(searchItem)

// let findItem= products.find( (el,i,arr)=> el.includes('e') )

// console.log(findItem)

//====================================================================================
// let prices = [200,290,233,154,344,654]
// let meme = 0
// prices.forEach( (el, i)=>{
//     meme = meme +prices[i]
//     return meme
// })
// console.log(meme)






//=====================================================


let arr = [23,17,11,9,12,18,12,8,12,19,11,17,8,8,23]


// arr.sort( (a,b)=> a-b)
// arr.splice([8,1])
// console.log(arr)





let add = arr.reduce((acrr, cv)=>acrr + cv,0)
console.log(add /14)
























