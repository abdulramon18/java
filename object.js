//In JavaScript, an object is a collection of key-value pairs, also known as properties. Objects are used to store and manipulate data.
// let personObj = {
// 	name: 'abdulramon',
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
console.log(family.old_richest_member[2].children[0].name )