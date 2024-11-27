
		// let amount = prompt("Enter total amount") 

		// let modeOfPayment = prompt("How do u want to pay")
		// if (amount.typeof() === "Number"){
		// 	if (modeOfPayment === "cash"){

		// 	}else{
		// 		console.log("sorry we accect only cash ")
		// 	}

		// }else{
		// 	console.log("We accept ONLY number ")

		// }

		let password = '12345'
		let gbotemiBalance = 50000000000000

		if( password === '12345') {
			let amountToWithdraw = prompt("how much do you want?")
			if (amountToWithdraw <= gbotemiBalance) {
				gbotemiBalance = gbotemiBalance - amountToWithdraw
				console.log(" take your cash")
			}else{
				console.log("insufficient fund")
			}
				}else{
					console.log('invalid password')
				}
