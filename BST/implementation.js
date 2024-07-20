class node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null

    }
}
class binarysearchtree{
    constructor(){
        this.root=null
    }
    isempty(){
        return this.root===null
    }
    insert(value){
        const newnode=new node(value)
        if(this.isempty()){
            this.root=newnode
        }else{
            this.insertnode(this.root,newnode)
        }
    }   
    insertnode(root,newnode){
        if(newnode.value<root.value){
            if(root.left===null){
              root.left=newnode
            }else{
                this.insertnode(root.left,newnode)
            }
    }else{
        if(root.right===null){
            root.right=newnode
        }else{
            this.insertnode(root.right,newnode)
        }
    }

}
search(root,value){
    if(!root){
        return false
    }else{
        if(value===root.value){
            return true
        }else if(value < root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    } 

}
preorder(root){
    if(root){
        console.log(root.value)
    
        this.preorder(root.left)

        this.preorder(root.right)
    }
    
}
inorder(root,result=[]){
    if(root){   
        this.inorder(root.left,result)
        result.push(root.value)
        this.inorder(root.right,result)
        
    }
    return result
}
postorder(root){
    if(root){
        this.postorder(root.left)
        this.postorder(root.right)
        console.log(root.value)
    }
}
levelorder(){
    const queue=[]
    queue.push(this.root)

    while(queue.length){
        let current=queue.shift()
        console.log(current.value)
        if(current.left){
            queue.push(current.left)
        }


        if(current.right){
            queue.push(current.right)
        }
    }
}
min(root){
    if(!root.left){
          return root.value
    }else{
        return this.min(root.left)
    }
}
thirdMin(root) {
    if (!root) return null;
    let firstMin = Infinity;
    let secondMin = Infinity;
    let thirdMin=Infinity
    
    function traverse(node){
        if(!node)return
        if(node.value<firstMin){
            thirdMin=secondMin
            secondMin = firstMin
            firstMin=node.value
            
           }
           
          else if(node.value > firstMin && node.value < secondMin){
            thirdMin=secondMin
                secondMin=node.value
            
        } else if (node.value > secondMin && node.value < thirdMin) {
            thirdMin = node.value;
        }
           
        traverse(node.left)
        traverse(node.right)

    }
    traverse(root)
    if(thirdMin===Infinity){
        return null
    }else{
        return thirdMin
    }
    
}
deletion(value){
    this.root=this.deletenode(this.root,val)
}

max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
}
addminandmax(){
    let minimum=this.min(this.root)
    let maximum=this.max(this.root)
    let total=minimum+maximum
    return total
}
height(root){
    if(root===null){
        return -1
    }else{
        let leftheight=this.height(root.left)
        let rightheigt=this.height(root.right)
        return Math.max(leftheight,rightheigt)+1
    }
}
isBST(){
    const inorderval=this.inorder(this.root)
    for(let i=1;i<inorderval.length;i++){
      if(inorderval[i]<=inorderval[i-1]){
        return false
      }
    }
    
return true
}




}

const bst=new binarysearchtree()
//console.log("if root is empty",bst.isempty())
bst.insert(7)
bst.insert(1)

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)



console.log("search result",bst.search(bst.root,5))
// console.log(bst.search(bst.root,2))

//bst.preorder(bst.root)
console.log("---------------------???")
console.log(bst.inorder(bst.root))
bst.postorder(bst.root)
bst.levelorder()

console.log(bst.min(bst.root))
console.log(bst.max(bst.root))

console.log(bst.addminandmax())
console.log("-------------------")
console.log(bst.height(bst.root))

console.log(bst.isBST())


console.log("secondmin",bst.secondMin(bst.root))




