
		let sentence = "the quick brown fox jumps over the lazy dog?"
        let add = "Does,"

        added_sentence = add +" "+ sentence
        console.log(added_sentence)


       // 
        let check = added_sentence.includes("o")
        console.log(check)

		let sub = added_sentence.substring(26 , 30).toUpperCase()
		console.log(sub)

		let replace = added_sentence.replaceAll("o","O")
		console.log(replace)


		let sent = "take"
		let last = "over"
		let sec = "O"
		let take_over = sent + last
		console.log(take_over.concat(sec))

		let word = "takeoverO"
		// let search = "O"
		console.log(word.indexOf("O"))
