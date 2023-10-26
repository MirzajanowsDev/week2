function searchinsert(n){
    let arr = [1, 3, 5, 6]
    for (let index = 0; index <= arr.length; index++) {
        if (n == arr[index]) {
            return arr.indexOf(n)
        }
        else{
            arr.push(n)
            arr.sort((a,b) => a-b)
            console.log(arr);
            return arr.indexOf(n)
        }
        
    }
}
console.log(

    searchinsert(2)
    );