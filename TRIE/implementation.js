class Node{
    constructor(){
        this.children = {};
         this.endOfword = false;
    
    }
    
}
class Trie{
    constructor(){
        this.root = new Node()
        
        
        
    }
    insert(word){

        let node = this.root;
        
        for(let i =0;i<word.length;i++){
            let char = word[i];
            if(!node.children[char]){
                node.children[char] = new Node()
               
               
            
            }
           node = node.children[char]
           
           


            if(i=== word.length-1){
                node.endOfword = true;
            }
        }
        

    }

    contains(word){
         let node = this.root;
         for(let i =0;i<word.length;i++){
            let char = word.charAt(i);
            if(node.children[char]){
                node = node.children[char]
            }else{
                return false
            }
         }
         return node.endOfword


    }

    prefixCheck(prefix){
        let node = this.root;
        for(let i =0;i<prefix.length;i++){
            let char = prefix.charAt(i);
            if(node.children[char]){
                node = node.children[char]
            }else{
                return false;
            }
        }
        return true
    }

    prefixWords(prefix){
        let node = this.root;
        for(let char of prefix){
            if(node.children[char]){
                node = node.children[char]
            }else{
                return []
            }
        }
        let words = []
        this.collectWords(node,prefix,words);
        return words
    }

    collectWords(node,prefix,words){
        if(node.endOfword){
            words.push(prefix)
        }

        for(let [char,childNode] of Object.entries(node.children)){
            this.collectWords(childNode,prefix+char,words)
        }
    }
    delete(word){
        let node =this.root;
        let nodes = [];
        for(let char of word){
            nodes.push({char,node});
            
            node = node.children[char]
        }
        node.endOfword = false;

        while(nodes.length>0){
            let {char,node} = node.pop();
            
            let childNode = node.children[char];
            

            if(Object.keys(childNode.children).length==0&&!childNode.endOfword){
                delete node.children[char]
            }else{
                break;
            }
        }
        return true
    }
    display() {
        let words = this.prefixWords("");
        console.log(words.join(", "));
    }


}

const trie = new Trie()
 trie.insert("BAT")
 trie.insert("TIN")
trie.insert("A")
trie.insert("PARROT")
trie.insert("BALOON")
trie.insert("BAT")
trie.display()
console.log("prefix wordsss",trie.prefixWords("A"))
console.log("a contains?",trie.contains("S"))
console.log("prfixcheckkk",trie.prefixCheck("A"))
console.log(trie)
console.log(trie.delete("TIN"))
trie.display()
