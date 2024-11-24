
// let firstname = prompt('whats is your first name ')
//         let surname = prompt('whats is your surname ')
//         console.log(firstname , surname);

//         let pickFirstCharInFirstname = firstname.charAt(0).toUpperCase();
//         let pickFirstCharInSurname = surname.charAt(0).toUpperCase();
//         console.log(pickFirstCharInFirstname.concat(".",pickFirstCharInSurname ))

//         let substringOfFirstname = firstname.substring(1, firstname.length)
//         let substringOfSurname = surname.substring(1, surname.length)
//         console.log(substringOfFirstname)
//         console.log(substringOfSurname)


//         let joinFirstname = pickFirstCharInFirstname.concat(substringOfFirstname)
//         let joinSurname = pickFirstCharInSurname.concat(substringOfSurname)

//         console.log(joinFirstname)
//         console.log(joinSurname)

//         let fullname = joinFirstname.concat(" ",joinSurname);

//         console.log(fullname)

//         let lastLetter = fullname.charAt(fullname.length - 1)
//         let secondToTheLastLetter = fullname.charAt(fullname.length - 2).toUpperCase();
//         let fullnameSubstring = fullname.substring(0, fullname.length- 2);
//         let joinAllTogether = fullnameSubstring.concat(secondToTheLastLetter, lastLetter);

//         console.log(joinAllTogether)

//         let lastChar = firstname.charAt(firstname.length -1);
//         console.log(lastChar)

//         let pickIndex = firstname.indexOf(lastChar)
//         console.log(pickIndex)
        
        





//         let days =['fri','tue','wed','sun','mon','thur','sat']
// days.sort((a,b)=>{
//         if(a<b){
//                 return-1
//         }else{
//                 return 1
//         }
// })
// console.log(days)

        

        let digits =[100]
        let result = digits.join('')
        let nums = String(Number(result) + 1)
        let array = []
        for(let i = 0; i<nums.length; i++){
        array.push(Number(nums[i]))
        }
        // console.log(array)

