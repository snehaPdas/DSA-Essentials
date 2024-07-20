function selectionsort(arr){
    for(let i=0;i<arr.length;i++){
      let smallest=i
      for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[smallest]){
            smallest=j
        }
      }
      if(smallest!==i){
        let temp=arr[i]
        arr[i]=arr[smallest]
        arr[smallest]=temp
      }
    }
    return arr
}

console.log(selectionsort([8,9,1,4,7,6,2]))
///////////////////////////////////////////////////////////
function selectionsort(arr,age){
    for(let i=0;i<arr.length;i++){
      let smallest=i
      for(let j=i+1;j<arr.length;j++){
        if(arr[j][age]<arr[smallest][age]){
            smallest=j
        }
      }
      if(smallest!==i){
        let temp=arr[i]
        arr[i]=arr[smallest]
        arr[smallest]=temp
      }
    }
    return arr
}
let sele=[{
    name:"a",age:85,

},{
    name:"k",age:12
},{
    name:"b",age:18
}]
console.log(selectionsort(sele,"name"))

/////////////////////////////////////////////////////


function selection (arr){
  for(let i=0;i<arr.length;i++){
    let smallest=i
    for(let j=i;j<arr.length;j++){
      if(arr[j]<arr[smallest]){
        smallest=j
      }
    }
    if(smallest!==i){
   let temp=arr[i]
        arr[i] =arr[smallest]
        arr[smallest]=temp
    }
  }
  return arr
}

console.log(selection([7,8,9,5,1,4,9]))

/////////////////////////////////////////////////////////////
function selection(array){             //[6,4,1,2,5,7]
  for(let i=0;i<array.length;i++){
    let smallest=i//0
    for(let j=i;j<array.length;j++){
      if(array[j]<array[smallest]){
        smallest=j//j=2
      }
    }
    //swapping
    if(smallest!==i){
      let temp=array[i]
      array[i]=array[smallest]//1,4,6,2,5,7
      array[smallest]=temp
    }

  }
  return array
}

console.log(selection([6,4,1,2,5,7]))