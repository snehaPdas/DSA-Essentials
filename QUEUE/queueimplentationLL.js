class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class queue{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0
    }
    enqueue(x){
        const newnode=new node(x)
        if(this.rear===null){
            this.rear=newnode
        }else{
            this.rear.next=newnode
            this.rear=newnode
        }
        if(this.front===null){
            this.front=newnode
        }
        this.size++

    }
    dequeue(){
        let dequedval=this.front.value
        this.front=this.front.next
        return dequedval
        this.size--
    }
    peek(){
        return this.front.value
    }
    display(){
        let current=this.front
        let arr=[]
        while(current){
            arr.push(current.value)
            current=current.next
        }
        console.log(arr)
    }
    
}

const queues=new queue()
queues.enqueue(800)
queues.enqueue(900)
queues.enqueue(1000)
queues.display()
console.log(queues.peek())
console.log(queues.dequeue())
queues.display()
console.log(queues.peek())
// console.log(queues.dequeue())
// queues.display()

