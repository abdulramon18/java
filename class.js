
		let any = prompt('enter any word')
		let palindromePair = ''
		for(let i = any.length-1; i >= 0; i--){
			palindromePair = palindromePair +  any.charAt(i)
		}
			if(any === palindromePair){
				console.log('good')
			}else{
				console.log('bad')
			}
		