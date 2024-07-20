function insertion (arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
        
        while(j>=0 && arr[j] > temp){
        
            arr[j+1]=arr[j]
            j--
           
        }
        arr[j+1]=temp
    }
    return arr

}

console.log(insertion([4,1,7,8,6,9]))


function insertion (arr,age){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
        
        while(j>=0 && arr[j][age] > temp[age]){
        
            arr[j+1]=arr[j]
            j--
           
        }
        arr[j+1]=temp
    }
    return arr

}

    let arrs=[{
        name:"mohan",age:25,
    },{
        name:"dhanu",age:55,
    },{
        name:"lavanya",age:15
    }]
    
    console.log(insertion(arrs,"age"))