//firstly we have to create 2 queues

class node{
    constructor(value){
     this.value=value;
     this.next=null;
    }

}
class queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    push(value){
         const newnode= new node(value)
         if(this.rear===null){
            this.rear=this.front=newnode
         }else{
            this.rear.next=newnode
            this.rear=newnode
         }

    }
    shift(){
        let dequeditem=this.front.value
        this.front=this.front.next
        // if(this.front===null){
        //     this.rear=null
        // }
        return dequeditem
    }
    size(){
        let count=0
        let current=this.front
        while(current){
            count++
            current=current.next
        }
        return count
    }
    peek(){
        if(this.front){
            return this.front.value
        }else{
            return "empty"
        }
    }
    empty(){
        return this.front===null
    }
}
//create stack using 2 queue
class  stack{
    constructor(){
        this.queue1=new queue()
        this.queue2=new queue()

    }
    push(x){
        this.queue1.push(x)

        
    }
    pop(){
        if(this.empty()){
            return "empty"
        }
            while(this.queue1.size() > 1){
                this.queue2.push(this.queue1.shift())
            }
            const  poppeditem=this.queue1.shift();
            [this.queue1,this.queue2]=[this.queue2,this.queue1]
            return poppeditem
        

    }
    top(){
        if(this.empty()){
            return "empty"
        }
        while(this.queue1.size() > 1){
            this.queue2.push(this.queue1.shift())
        }
        const  topitem=this.queue1.peek();
        [this.queue1,this.queue2]=[this.queue2,this.queue1]
        return topitem
    


    }
    empty(){
        return this.queue1.empty() && this.queue2.empty()
    }
    display(){
        let arr=[]
        let current=this.queue1.front
        while(current!==null){
            arr.push(current.value)
            current=current.next
        }
        console.log("the stack item are",arr.reverse())
    }


}

const st =new stack()
st.push(1)
st.push(2)
st.push(3)
st.display()

console.log("the popped element are:",st.pop())
st.display()
st.push(3)
st.display()
console.log("the peek element is",st.top())