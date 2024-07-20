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
            let bucket=this.table[index]
            console.log("bucket is",bucket)
            if(!bucket){
                this.table[index]=[[key,value]]
                return
                
            }
            let samekey=bucket.find(ele=>ele[0]===key)
            console.log("samekey is",samekey)
            if(samekey){
                samekey[1]=value
                
            }else{
                bucket.push([key,value])
                
            }
        }
        get(key){
            let index=this.hash(key)
            let bucket=this.table[index]
            if(bucket){
                let samekey=bucket.find(ele=>ele[0]===key)
                if(samekey){
                    console.log("samekey is",samekey)
                    return samekey[1]
                   }
            }
        }
        remove(){
            let index=this.table[index]
            let bucket=this.table[index]
            if(bucket){
                let samekey=bucket.find(ele=>ele[0]===key)
                if(samekey){
                    bucket.splice(bucket.indexOf(samekey),1)
                }
            }

        }
        display(){
            for(let i=0;i<this.table.length;i++){
                if(this.table[i]){
                    console.log(i,this.table[i])
                }
            }
        }
}

const li=new hashtable(50)
li.set("name","sree")
li.set("place","pkd")
li.display()
console.log(li.get("name"))