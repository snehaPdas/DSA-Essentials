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
        return total%this.size
    }
    Set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        let index=this.hash(key)
        return this.table[index]
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

}

const newhash=new hashtable(50)

newhash.Set("name","sneha")
newhash.Set("age","28")
newhash.display()
newhash.get("name")