


class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null

    }
    append(data){
    const newnode=new Node(data)
    if(this.head===null){
        this.head=newnode
        this.tail=newnode
    }else{
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=newnode
        this.tail=newnode
    }
    }
    Insert(index,data){
        const newnode=new Node(data)
        if(index===0){
            newnode.next=this.head
            this.head=newnode
            this.tail=newnode
        }else{
            let current=this.head
            for(let i=0;i<index-1;i++){
                current=current.next
            }
            newnode.next=current.next
            current.next=newnode
            this.tail=newnode
        }

     }
    between(val,data){
       const newnode= new Node(data)
        if(this.head===null){
            this.head=newnode
            this.tail=newnode
        }else{
            let current=this.head
            while(current){
                if(current.data===val){
                    newnode.next=current.next
                    current.next=newnode
                    this.tail=newnode
                }
                current=current.next
            }
        }
    }
    insertlast(data)
   {
   const newdata=new Node(data)
   this.tail.next=newdata
  this.tail=newdata
    }
    findmiddle(data){
        const newnode=new Node(data)
        let slow=this.head
        let fast=this.head
        let previous=null
        while(fast!==null && fast.next!==null){
            previous=slow
            slow=slow.next
            fast=fast.next.next
        }
        newnode.next=slow
        previous.next=newnode
       
       

    }
    reverse(){
      let current=this.head
          let previous=null
          while(current){
            let next=current.next
            current.next=previous
            previous=current
            current=next
          }
          this.head=previous
    }
    display(){
        let current=this.head
        let newvariable=""
        while(current){
     newvariable=newvariable+`${current.data}->`
     current=current.next
        }
        console.log(newvariable)
    }
}

const lists =new linkedlist()

lists.append(10)
lists.append(20)
lists.append(40)
lists.append(50)
lists.append(80)

list.display()
 list.Insert(2,30)
 list.display()
 list.between(40,45)
list.display()
 list.insertlast(75)
 list.display()
 list.reverse()
list.display()
 console.log(list.findmiddle())
list.findmiddle(99)
list.display()


///////////////////delete Doubly////////////////////////////////////////




class Node{
    constructor(data){
        this.data=data
        this.prev=null
        this.next=null
    }
}

class doublylinkedlist{
    constructor(){
        this.head=null
        this.tail=null

    }
    append(data){
    const newnode=new Node(data)
    if(this.head===null){
        this.head=newnode
        this.tail=newnode
    }else{
         let current=this.head
        while(current.next){
            current=current.next
        }
        this.tail.next=newnode
        newnode.prev=this.tail
        this.tail=newnode
    }
    }
    deleteval(val){
        let current=this.head
        let previous=null
        if(this.head.data===val){
            this.head=current.next
            return
        }
        while(current){
            if(current.data===val){
                previous.next=current.next
                current.next.prev=previous
                
            }
            previous=current
            current=current.next
        }
    }
    findmiddlenext(){
        let slow=this.head
        let fast=this.head
        let previous
        while(fast!==null&&fast.next!==null){
            previous=slow
            slow=slow.next
            fast=fast.next.next
        }
        if(previous){
            previous.next=slow.next
        }else{
            this.head=slow.next
        }
       if(slow.next){
        slow.next.prev=previous
       }else{
        this.tail=previous
       }
       
        
    }
    deletelast(){
        // if(this.head===null){
        //     console.log(null)
        // }else{
        //     this.tail=this.tail.prev
        //     this.tail.next=null
        // }
        let current=this.head
        while(current){
            current=current.next
        }
        return current.data
    }
    deletefirst(){
        let current=this.head
        this.head=current.next
        this.head.prev=null
    }
    sum(){
        let current=this.head
        let sum=0

        while(current){
            sum=sum+current.data
            current=current.next
        }
        return sum
    }
    findlastnode(){
        if(this.tail!==null){
            return this.tail.data
        }
    }
    palindrome(){
        let slow=this.head
        let fast=this.head
        let sta=[]
        while(fast!==null && fast.next!==null){
            sta.push(slow.data)
            slow=slow.next
            
            fast=fast.next.next
        }
        if(slow!==null){
            slow=slow.next
        }
        while(slow!==null){
            if(sta.pop()!==slow.data){
                return false
            }
            slow=slow.next

        }
        return true
    }
    display(){
    
        let current=this.head
        let newvariable=""
        while(current){
     newvariable=newvariable+`${current.data}->`
     current=current.next
        }
        console.log(newvariable)
    }
    reverse() {
       let current=this.head
       let temp=null
       while(current){
        temp=current.prev
        current.prev=current.next
        current.next=temp
        current=current.prev
       }
       if(temp){
        this.head=temp.prev
       }
    }
}


const listss=new doublylinkedlist()

listss.append(10)
listss.append(20)
listss.append(70)
listss.append(40)
listss.append(50)
listss.display()
listss.deleteval(10)
console.log(listss.findmiddlenext())
listss.findmiddlenext()
listss.deletelast()
listss.deletefirst()
listss.display()
console.log(listss.sum())
console.log(listss.findlastnode())
listss.reverse()
console.log(list.palindrome())
list.display()

//////////////////////////////////////////////////////////////////////
class node{
    constructor(data){
        this.data=data
        this.prev=null
        this.next=null
    }
}

class linkedlist{
constructor(){
    this.head=null
    this.tail=null
}
prepand(data){
    const newnode=new node(data)
    if(this.head===null){
        this.head=newnode
        this.tail=newnode
    }else{
        newnode.next=this.head
        this.head.prev=newnode
        
        
    }
}
append(data){
    const newnode=new node(data)
    if(this.head===null){
        this.head=newnode
        this.tail=newnode
        
    }else{
        this.tail.next=newnode
        newnode.prev=this.tail
        this.tail=newnode
    }
}
insert(index,data){
    const newnode=new node(data)
    if(this.head===null){
        this.head=newnode
        this.tail=newnode
    }else{
        let current=this.head
       for(let i=0;i<index-1;i++){
       current=current.next
       }
       newnode.next=current.next
       current.next.prev=newnode
       current.next=newnode
       newnode.prev=current
    }
}
deletevalue(val){
    if(this.head===val){
        this.head=this.head.next
    }else{
        let current=this.head
        let previous=null
        while(current){
            if(current.data===val){
              previous.next=current.next
              current.next.prev=previous
            }
            previous=current
            current=current.next
        }
    }

}
findmiddle(){
    let slow=this.head
    let fast=this.head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    return slow.data
}
toarray(){
    let array=[]
    let current=this.head
    while(current){
        array.push(current.data)
        current=current.next
    }
    return array
}
tolinkedlist(arr){
     this.head= new node(arr[0])
     let current=this.head
     for(let i=1 ;i<arr.length;i++){
      let  newnode=new node(arr[i])
        newnode.prev=current
        current.next=newnode
        current=newnode
     }
}
display(){
    let current=this.head
    let newvariable=""
    while(current){
        newvariable=newvariable+`${current.data} `
        current=current.next
    }
    console.log(newvariable)
}

}
const list=new  linkedlist()

// list.prepand(10)
// list.prepand(20)
// list.prepand(30)
// list.display()
list.append(10)
list.append(20)
list.append(30)
list.display()
// list.insert(1,75)
// list.deletevalue(20)
// list.display()
// console.log(list.findmiddle())
console.log(list.toarray())

list.tolinkedlist([41,55,66])
list.display()