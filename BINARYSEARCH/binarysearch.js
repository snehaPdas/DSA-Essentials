function binarysearch(arr,target){
    left=0
    right=arr.length-1
    while(left<=right){
        let middle=Math.floor(left+right)/2
    
        if(target===arr[middle]){
            return middle
        }
        
        if(target<arr[middle]){
            right=middle-1
            
        }else{
            left=middle+1
            
        }
    }
    return -1
}




console.log(binarysearch([1,2,3,5,7,9,10],2))

///////////////////////recursion////////////////////
function binarySearchRe(arr, target, low, high) {
    if (low > high) {
        return -1; // 
    }

    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid; 
    } else if (arr[mid] < target) {
        return binarySearchRe(arr, target, mid + 1, high);
    } else {
        return binarySearchRe(arr, target, low, mid - 1); 
    }
}

const array = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearchRe(array, 5, 0, array.length - 1)); 
console.log(binarySearchRe(array, 10, 0, array.length - 1)); 



