function  isSame(arr1 , arr2 ) {
    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false){
        return "Invalid";
    }
    if (arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}


const resultArray = isSame([1 , 4 , 5], [1 , 4 , 5]);
console.log(resultArray);


// Output
// true