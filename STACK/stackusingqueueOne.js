class stack{
    constructor(){
        this.queue=[]
    
    }
    push(x){
        this.queue.push(x);
        let pos=this.queue.length
        while(pos > 1){
            this.queue.push(this.queue.shift());
            pos--;
        }
        
       
       
    }
    pop(){
        if (this.queue.length === 0) {
            throw new Error("Stack is empty");
        }
       
       
        return this.queue.shift()
    }
    peek(){
       return this.queue[0]
    }
    display(){
        console.log(this.queue)
    }
}


const st=new stack()
st.push(1000)
st.push(2000)
st.push(3000)
st.push(4000)
st.push(5000)
st.display()
console.log(st.pop())
console.log(st.peek())
