var lastDay = 11 ;
for (var day = 1; day <= lastDay; day++){
    if ( day % 3 == 0){
        console.log(day + " - " + "medicine");
    }
    else{
        console.log(day + " - " + "rest")
    }
}

// Output
// 1 - rest
// 2 - rest
// 3 - medicine
// 4 - rest
// 5 - rest
// 6 - medicine
// 7 - rest
// 8 - rest
// 9 - medicine
// 10 - rest
// 11 - rest 