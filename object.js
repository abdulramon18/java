//In JavaScript, an object is a collection of key-value pairs, also known as properties. Objects are used to store and manipulate data.
// let personObj = {
	// name: 'abdulramon',
// 	age : 18,
// 	class_ : 'fullstack',
// 	likes : ['eating','coding'],
// 	friends:['{
// 		name:'abdulazzaz',
// 		age : 33,
// 		class_ : 'backend',
// 	},
// 		{
// 			name:'gbotemi',
// 			age : 33,
// 			class_ : 'UI/UX',
// 		},
// 		{
// 			name:'ADEDOKUN',
// 			age : 33,
// 			class_ : 'web 3',
// 		},], 
// 	address :{
// 		no : 4,
// 		street :'ramat aroyewu',
// 		city : 'ogudu ojota lagos',
// 	},
// 	ismale: true,
// 	laugh:()=>console.log(`adedokun !!!!!!!`)
// }
// console.log(personObj)









let family = {
	name : 'adedokun',
	member : 'over 200 members',
	oldest_age : 76,
	old_richest_member :[
			{
			name:'adedokun suliaman',
			age : 54,
			networth : '$2b',
			occupatetion: 'GMD of meristem',
			children :[
				{
					name:'adedokun abdulramon',
					age : 18,
					networth : '$500k',
					gender: 'male'
				},
				{
					name:'adedokun fridaus',
					age : 18,
					networth : '$200k',
					gender: 'female'

				},
				{
					name:'adedokun frizah',
					age : 16,
					networth : '$122k',
					gender: 'female'

				},]
			},
			{
				name : 'abdulsalam adedokun',
				age : 57,
				networth : '$1.7b',
				gender: 'male',
				occupatetion: 'government worker (pam-sec)',
				children :[
					{
						name:'adedokun zaynab',
						age : 28,
						networth : '$700k',
						gender: 'female'
					},
					{
						name : 'ibarhim adedokun',
						age : 26,
						networth : '$10M',
						gender: 'male'
	
					},
					{
						name:'adedokun muhammand ',
						age : 16,
						networth : '$22k',
						gender: 'female'
	
					},]

			},
			{
				name : 'daud adedokun',
				age : 41,
				networth : '$1b',
				gender: 'male',
				occupatetion: 'project management and web dev',
				children:[{
					name: 'nabila adedokun',
					age :6,
					networth : "$100",
					gender: 'female'
				},]
			},],
	young_richest_member :[
			{
				name : 'TAOFEEQ adedokun',
				age : 33,
				networth : '$15M',
				gender: 'male',
				status : 'single',
				occupatetion: 'web dev'
			},
			{
				name : 'ibarhim adedokun',
				age : 26,
				networth : '$10M',
				gender: 'male',
				status : 'single',
				occupatetion: 'fx trader'

			},
			{
				name : 'awwal adedokun',
				age : 30,
				networth : '$5M',
				gender: 'male',
				status : 'married',
				occupatetion: 'selling print'		
			},],
	town : 'OTUN EKITI',		
	state : 'EKITI STATE',

	laugh:()=>console.log(`adedokun to the world`)
}
// console.log(family.old_richest_member[2].children[0].name )





let facebook_account ={
	name : "abdulramon adedokun",
	ade : 23,
	gender: 'male',
	new_friends : [
		{
			name: 'tunde ednut',
			age : 33,
			gender: 'male',
			friends: [
				{
					name: 'olamide',
					age : 33,
					gender: 'male',
				},
				{
					name: 'davido',
					age : 32,
					gender: 'male',
				},
				{
					name: 'wizkid',
					age : 30,
					gender: 'male',
				},
			],
		},
		{
			name : 'yamustaphael',
			age : 32,
			gender : 'male',
			friends: [
				{
					name: 'asake',
					age : 28,
					gender: 'male',
				},
				{
					name: 'seyi vibz',
					age : 29,
					gender: 'male',
				},
				{
					name: 'abdullah ali',
					age : 40,
					gender: 'male',},
				],
		},
		{
			name : 'femi somo',
			age : 29,
			gender: 'female',
			friends: [
				{
					name: 'mathtileni',
					age : 23,
					gender: 'male',
				},
				{
					name : "abdulramon adedokun",
					age : 23,
					gender: 'male',
				},
				{
					name: 'ronadino',
					age : 45,
					gender: 'male',
				},]
		},
		{
			name : 'femi adeola',
			age : 26,
			gender: 'female',
			friends: [
				{
					name : 'femi otedola',
					age : 60,
					gender: 'male',
				},
				{
					name : 'mike adeluga',
					age : 55,
					gender: 'male',
				},
				{
					name : 'aliko dangote ',
					age : 63,
					gender: 'male',
				},]	
		},
		{
			name : 'femi somo',
			age : 59,
			gender: 'male',
			friends: [
				{
					name : 'femi otedola',
					age : 60,
					gender: 'male',
				},
				{
					name : 'mike adeluga',
					age : 55,
					gender: 'male',
				},
				{
					name : 'aliko dangote ',
					age : 63,
					gender: 'male',
				},]
		},],
	old_friends: [
		{
			name : 'femi otedola',
			age : 60,
			gender: 'male',
			follower : "5000k"
		},
		{
			name : 'mike adeluga',
			age : 55,
			gender: 'male',
			follower : "5000k"

		},
		{
			name : 'dino melaye',
			age : 53,
			gender: 'male',
			
			follower : "5000k"

		},
		{
			name : 'aliko dangote ',
			age : 63,
			gender: 'male',
			follower : "5000k"

		},],
}

// console.log(facebook_account.new_friends[3].friends[2].age)


let bank_account = {
    account_number: 1234567890,
    balance: 1000000,
    account_holder_name: 'abdulramon adedokun',
    account_type: 'checking',
}
// let oob = Object.keys(bank_account)
// console.log(oob)

// let baby = Object.entries(bank_account)
// console.log(baby)

// let bank_operations = Object.values(bank_account)
// console.log(bank_operations)

// let data = {
// 	a : 1,
// 	b : 2,
//     c : 3,
// }
// data.a = 300
// console.log(data)
// data.b = 400
// let obj = Object.freeze(data)
// data.c = 500
// console.log(obj)

 
//new day 


//1
let obi = {
	name : 'John',
	age : 23,
	class : 'year one',
}
Object.entries(obi)
// console.log(obi)

//2
let data ={
	a : 1,
    b : 2,
    c : 3,
}

let satisfies = {}
Object.assign(satisfies, data, obi)

// console.log(satisfies)
//3
let time = Object.create(satisfies)

// time.day = 'Monday'

// console.log(time)

//4

let personObj = {
	uersname: 'John',
	email : "john@example.com",
	password: 'password123',
}
// console.log(personObj['email'])


for(let key in personObj){
	if(personObj[key].length > 5){
		// console.log(personObj[key])
	}else{
		continue
	}
}


//6
Object.seal(personObj)


// 7
function keylen(personame){
	return Object.keys(personame).length
}
// console.log(keylen({name:'abdulramon'}))




















// let product = {
// 	name: 'Apple',
//     price: 700    
// }
// let price = product.price
// if(product.price ===100){
// 	price = price / 0.10
//     console.log(price + '%')
// }else if(product.price < 100){
// 	price = price / 0.07
// 	console.log(price + '%')
// }else if (product.price > 100){
// 	price = price / 0.10
// 	console.log(price + '%')
// }

// let priceess = (product)=>{
// 	let produt = {
// 		name: 'Apple',
//    		 price: 700   	
// 	}
// }


// let productt = {
//     name: "garri",
//     price: 140,
// }
// const priceP = (product)=>{
    
//     let discount
   
//     if(product.price > 100){
//         discount = (10/100)*product.price;
//          product.discount = 10/100
//     }
//     else{
//         discount = (7/100)*product.price
//          product.discount = 7/100
//     }
//     let remainingPrice = product.price - discount
//     product.discountAmt = discount
//     product.discountedPrice =  remainingPrice
   
//     return product
// }

// console.log(priceP(productt))










// let products = { 
//     name: "headphones", 
//     price: 100, 
//     discount: 0,
//     discountedPrice: 100
// }
// const  setDiscount = (obj) => {
//     if(obj.price <=100) {
//         obj.discount = 7/100
//     }
//     else {
//         obj.discount = 10/100
//     }
//         obj.discountValue = Math.round(obj.price * obj.discount)
//         obj.discountedPrice = obj.price - obj.discountValue    
        
//     return obj
// }
// console.log(setDiscount(products))


// var merge = function(nums1, m, nums2, n) {
// 	let first = m-1
// 	let second = n-1
// 	for( let i = m+n-1; i>=0 ; i--){
// 		if(second >= 0){
// 			if(nums1[first]>=nums2[second] && first>=0){
// 				nums1[i]=nums1[first]
// 				first--
// 			}
// 			else{
// 				nums1[i] = nums1[first]
// 				second --
// 			}
// 		}
		
// 	}
// //    return i /
// }
// console.log(merge(1,2,3,0,0,0))


























// function merge(nums1, m, nums2, n) {

// 	let i = m - 1
// 	let j = n - 1
// 	let k = m + n - 1
  
// 	while (i >= 0 && j >= 0) {
// 	  if (nums1[i] > nums2[j]) {
// 		nums1[k--] = nums1[i--]
// 	  } else {
// 		nums1[k--] = nums2[j--]
// 	  }
// 	} 
  
// 	while (j  >= 0) {
// 		nums1[k--] = nums2[j--]
// 	  }
// 	  return i
// }


// console.log(merge([1, 2, 3, 0, 0, 0],3, [2, 5, 6], 3))





// function merge(nums1, m, nums2, n) {
// 	for(let i = m, j = 0; j < n; i++, j++) {
// 		nums1[i] = nums2[j]

// 	}
// 	 return nums1.sort((a,b)=> a-b)
// }
// console.log(merge([1, 2, 3, 0, 0, 0],3, [2, 5, 6], 3))

 

// let arr = ["sunflower","hibiscus","tulip", "lilly" ,' daise'] 
// let [ aa,bb,cc,dd,ee]= arr

// console.log(aa) 


function names ( about, name ){
	return about + name
}
const number = [33 , 50]

// console.log(names(...number))



let meme = ["names", "seyi", "gbotemi","peller"]
let items = [...meme]

// console.log(...items)


let arr = [1, 2, 3, 4, 5]	
let agoro = [...arr]

// console.log(...agoro)
///// sunday  24/ 11 /2024


let addition = (a,b,c, ...more)=>{
	let nnum = a+b+c
	more.forEach((item)=>nnum+=item )
	return nnum
}
// console.log(addition(5,6,7,8,9,9,9))



// let one1= "something"
// let one2= one1 ?? 'anything'
// console.log(one2)

// 5>2 ? console.log("yes") : console.log("no")

// let firstname = 'abdulramon'
//  let  lastname = 'gbotemi'
//  let surname = 'adedokun'
//  let  email = 'abdulramon@gmail.com'
// console.log(`my name is ${firstname.toUpperCase()} ${lastname.toUpperCase()} and my surname is ${surname.toUpperCase()} while my email is ${email}`)



//   let score  =[2,4,10,8]
// if (score.length % 2 !== 0){
//     console.log(it is odd)
// }else{
//     console.log(it is even)
// }

// let score  =[0,2,4,6]
// score.length % 2!==0? console.log('it is odd') : console.log('it is even')

let dateToday = new Date()
let date = dateToday.getDate() + ' / ' + dateToday.getMonth() + ' / ' + dateToday.getFullYear()
console.log(date)
console.log(dateToday.getMinutes())

// console.log(dateToday.getDate())
// console.log(dateToday.getMonth())
// console.log(dateToday.getYear())
// console.log(dateToday.getFullYear())
// console.log(dateToday.getDay())
// console.log(dateToday.getHours())
// console.log(dateToday.getMinutes())
// console.log(dateToday.getTime())



