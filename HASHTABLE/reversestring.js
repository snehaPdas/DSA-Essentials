class hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total=total+key.charCodeAt(i)

        }
        return total % this.size
    }
    set(key,value){
        let index=this.hash(key)
        //this.table[index]=value
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]

        }else{
            let same=bucket.find(e=>e[0]===key)

            if(same){
                same[1]=value
                return
            }
            bucket.push([key,value])
        }
    }
    get(key){
        let index=this.hash(key)
        //return this.table[index]
        let bucket=this.table[index]
        if(bucket){
            let same=bucket.find(e=>e[0]===key)
            if(same){
                return same[1]
            }
        }
    }
    remove(key){
       let index=this.hash(key)
       this.table[index]=undefined
    }
}

function removeduplicate(str){
    const newtable=new hashtable(str.length)
    let arr=[]
    for(let i=0;i<str.length;i++){
        let char=str[i]
        if(!newtable.get(char)){
            newtable.set(char,true)
            arr.push(char)
        }
    }
    return arr.join("")
}

console.log(removeduplicate("kaaaalyaaan"))




