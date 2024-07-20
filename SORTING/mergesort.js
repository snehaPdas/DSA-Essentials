function mergesort(arr)
{
if(arr.length<=1){
    return arr
}
let middle=Math.floor(arr.length)/2 
let left=arr.slice(0,middle)
let right=arr.slice(middle)
return merge (mergesort(left),mergesort(right))
}
function merge(left,right){
    let arr=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    return [...arr,...left,...right]
}

console.log(mergesort(["sneha","anugraha","meera","jisma"]))



function mergesort(arr,age){
    if(arr.length <= 1){
        return arr
    }
    let middle=Math.floor(arr.length)/2
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return merge (mergesort(left),mergesort(right))
    }
    function merge(left,right){
        let arrk=[]
        while(left.length && right.length){
            if(left[0].name<right[0].name){
                arrk.push(left.shift())
            }else{
                arrk.push(right.shift())
            }
        }
        return [...arrk,...left,...right]
    }

    let arrs=[{
        name:"mohan",age:25,
    },{
        name:"dhanu",age:55,
    },{
        name:"lavanya",age:15
    }]
    
    console.log(mergesort(arrs,"name"))


