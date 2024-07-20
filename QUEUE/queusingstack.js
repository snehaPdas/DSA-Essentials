class queue{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(x){
        this.stack1.push(x)
    }
    dequeue(){
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
            return this.stack2.pop()
        }
    }
    top(){
        this.stack2[this.stack2.length-1]
    }
    display(){
       let displayArray=[...this.stack2]
       for(let i=this.stack1.length-1;i>=0;i--){
        displayArray.push(this.stack1[i])
       }
        

        console.log("Queue elements:", displayArray);
    }
}

const q1=new queue()
q1.enqueue(7000)
q1.enqueue(8000)
q1.enqueue(9000)
q1.display()
console.log(q1.dequeue())
q1.display()