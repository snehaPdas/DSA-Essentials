

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "----" + Array.from(this.adjacencyList[vertex]));
        }
    }

    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2)&&
        this.adjacencyList[vertex2].has(vertex1))

    }

    removeEdge(vertex1,vertex2){

        
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
        
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return;
        }
        for(let vert of this.adjacencyList[vertex]){
            this.removeEdge(vertex,vert)
        }

        delete this.adjacencyList[vertex]
    }
    bfsTraversal(startVertex){
        let visited = {};
      
        let result = [];
        let queue = [startVertex];
        visited[startVertex] = true;
        
        

        while(queue.length>0){
            let currentVertex = queue.shift();
            result.push(currentVertex);

            for(let vortex of this.adjacencyList[currentVertex]){
            
                if(!visited[vortex]){
                    
                    visited[vortex]=true;
                    
                    queue.push(vortex)
                }
            }
        }

        return result;



    }

    dfsTraversal(startVertex){

        let visited = {};
    let result = [];
    
    const dfs=(vertex)=> {
        visited[vertex] = true;
        result.push(vertex);

        for (let neighbor of this.adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    dfs(startVertex);

    return result;

    }
    detectCycle() {/////////////////////////in undirected graph using dfs
        const visited = new Set();
        
        const dfs = (vertex, parent) => {
            visited.add(vertex);
            
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, vertex)) {
                        return true;
                    }
                } else if (neighbor !== parent) {
                    return true;
                }
            }
            
            return false;
        }
        
        
        for (let vertex in this.adjacencyList) {
            if (!visited.has(vertex)) {
                if (dfs(vertex, null)) {
                    return true;
                }
            }
        }
        
        return false;
    }   
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1,2);
graph.addEdge(2, 31);
graph.addEdge(3, 21);
graph.addEdge(3, 31);
console.log(graph.dfsTraversal(3))
graph.display();
console.log(graph.bfsTraversal(3))
console.log(graph.detectCycle())

