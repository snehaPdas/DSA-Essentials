function quicksort(arr){
    if(arr.length <= 1){
        return arr
    }
    
    let pivot=arr[0]
    let left=[]
    let right=[]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quicksort(left),pivot,...quicksort(right)]
}

console.log(quicksort([4,1,8,9,5,6]))

// ////////////////////////////////////////////////////////////////////

function quicksort(arr){
    if(arr.length <= 1){
        return arr
    }
    
    let pivot=arr[0]
    let left=[]
    let right=[]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quicksort(left),pivot,...quicksort(right)]
}

console.log(quicksort(["chinju","anju","manju"]))
/////////////////////////////////////////////////////////////



function quicksort(arr,age){
    if(arr.length <= 1){
        return arr
    }
    
    let pivot=arr[0]
    let left=[]
    let right=[]
    for(let i=1;i<arr.length;i++){
        if(arr[i][age]<pivot[age]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quicksort(left),pivot,...quicksort(right)]
}

let arrl=[
    {name:"bagya",age:32},
    {name:"kavya",age:18},
    {name:"kavi",age:22}
]
console.log(quicksort(arrl,"age"))