class stack{
    constructor(){
        this.stack=[]
    }
    push(x){
        this.stack.push(x)
    }
    pop(){
       return this.stack.pop()
    }
    top(){
        return this.stack[this.stack.length-1]
    }
    display(){
       return [...this.stack].reverse()
    }
}

// const st=new stack()
// st.push(500)
// st.push(600)
// st.push(700)
// console.log(st.display())
// console.log(st.pop())
// console.log(st.display())
// console.log(st.top())

function reverse(str){
const st=new stack()
let store=""
for(let i=0;i<str.length;i++){
    st.push(str[i])
}
while(st.stack.length!==0){
    store=store+st.pop()

}
return store

}

console.log(reverse("helloworld"))

    