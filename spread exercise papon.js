// Es5 function that takes a variables//
function filterOutodds () {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0
    });
}


//Es2015 that takes a variables//
const filterOutodds = (...args) => args.filter (v => v % 2 === 0)

//FindMin, write a function that accepts a variable number//
const FindMin = (...args) => Math.min(...args)
FindMin(5,25,4,-8)
FindMin(6,-4)
FindMin(30,25,10)

//mergeObjects that accepts two objects//
const mergeObjects = (obj1, obj2) => ({...obj1,...obj2})
mergeObjects ({a:1, b:2}, {c:3, d:4})

//DoubleAndReturnsArgs //
const DoubleAndReturnsArgs = (arr, ...args) => [...arr, ...args.map(v => v*2)]
DoubleAndReturnsArgs ([1,2,3],3,8) 
DoubleAndReturnsArgs ([2],11,5)

// Slice and Dice//
const removeRandom = items => {
    let idx = MAth.floor(Math.random() * items.lenght);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2 };
}

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}
