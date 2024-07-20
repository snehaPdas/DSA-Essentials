



class stack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
  push(x) {
    this.queue1.push(x);
  }
  pop() {
    if (this.empty()) {
      return "empty";
    }
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    const poppeditem = this.queue1.shift();
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return poppeditem;
  }
  empty() {
    return this.queue1.length === 0 && this.queue2.length === 0;
  }
  top(){
      if(this.empty()){
          return "empty"
      }
      while(this.queue1.length > 1){
        
          this.queue2.push(this.queue1.shift())
      }
      const topelement=this.queue1.shift();
      this.queue2.push(topelement);
      [this.queue1,this.queue2]=[this.queue2,this.queue1]
      return topelement
  }
  display() {
    const order = [...this.queue1, ...this.queue2].reverse();
    console.log("the stacks are", order);
  }
}

const st = new stack();
st.push(100);
st.push(200);
st.push(300)

st.display();
console.log("the poppeditem", st.pop());
console.log("the top ele",st.top())
