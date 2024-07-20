function bubble(arr){
for(let i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
return arr
}

console.log(bubble([8,4,1,9,6]))



function bubble(arr,name){
    for(let i=0;i<arr.length;i++){
        for(j=0;j<arr.length-1;j++){
            if(arr[j][name]>arr[j+1][name]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
    }
    
let arrl=[
    {name:"bagya",age:32},
    {name:"avya",age:18},
    {name:"kavi",age:22}
]
console.log(bubble(arrl,"name"))