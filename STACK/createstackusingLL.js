class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class stack{
    constructor(){
        this.top=null
    }
    push(value){
        const newnode=new node(value)
        if(this.top==null){
            this.top=newnode
        }else{
            newnode.next=this.top
            this.top=newnode

        }
    }
    pop(){
        let poppedval=this.top.value
        this.top=this.top.next
        return poppedval
    }
    tops(){
        return this.top.value
    }
    display(){
        let current=this.top
        let newva=[]
        while(current!==null){
            newva.push(current.value)
            current=current.next

        }
        console.log("values..",newva)
    }
}

const st=new stack()
st.push(100)
st.push(200)
st.push(300)
st.display()
console.log(st.pop())
console.log(st.tops())