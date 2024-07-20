function heapsort(arr){
    let n=arr.length
    for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }

    for(let i=n-1;i>0;i--){
        let temp=arr[0]
        arr[0]=arr[i]
        arr[i]=temp
        heapify(arr,i,0)
    }
    function heapify(arr,n,i){
        let largest=i
        let left=2*i+1
        let right=2*i+2
        if(left<n&&arr[left]>arr[largest]){
            largest=left
        }
        if(right<n&&arr[right]>arr[largest]){
            largest=right
        }
        if(largest!=i){
            let temp=arr[i]
            arr[i]=arr[largest]
            arr[largest]=temp
            heapify(arr,n,largest)
        }
    }

    
}

const arr=[8,4,3,5,7,9,0]
heapsort(arr)
console.log(arr);

// let top=arr[arr.length-1]
// console.log(top);