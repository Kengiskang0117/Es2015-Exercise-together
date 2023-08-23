//  #1 what does the following code return?
new Set([1,1,2,2,3,4])
{1,2,3,4}

//#2
[...new Set("referee")].join("")
"ref"

// #3
let m = new Map();
m.Set ([1,2,3], true);
m.Set ([1,2,3], false);
// {Array(3) => true}
// {Array(3) => false}

//Has duplicate
hasDuplicate([1,3,2,1]) //true
hasDuplicate([1,5,-1,4]) // false
const hasDuplicate = arr => new Set(arr).size !== arr.length

//VowelCount
vowelCount('backspace')
vowelCount('enter')

function isvowel(char){
    return "aeiou".includes(char);
}
function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isvowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(loweCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap
}