let result =fetch("https://api.coindesk.com/v1/bpi/currentprice.json ")

result.then((res)=>{
	let more_q = res.json()
	return more_q
})
.then((nah)=>{
	console.log(nah)
})
.catch((err)=>{
	console.log(err)
})


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


let response = fetch(url)

response.then((res)=> {
    // console.log(res)
    return res.json()
})
.then((data)=>{
    console.log(data)
})

console.log("aaaaa")