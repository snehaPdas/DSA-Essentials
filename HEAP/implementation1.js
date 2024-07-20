class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    add(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
    shiftUp(index) {
      let parent = Math.floor((index - 1) / 2);
      while (index > 0 && this.heap[parent] > this.heap[index]) {
        [this.heap[parent], this.heap[index]] = [  this.heap[index], this.heap[parent],];
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    }
  
    remove() {
      let min = this.heap[0];
     this.heap[0] = this.heap.pop();
      this.shiftDown(0);
      return min;
    }

  
    shiftDown(index) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
  

      if (smallest !== index) {
        [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
        this.shiftDown(smallest);
      }
    }
  
    print() {
      console.log(this.heap.join(" "));
    }
  }
  
  const heap = new MinHeap();
  heap.add(200);
  heap.add(34);
  heap.add(23);
  heap.add(78);
  heap.add(33);
  console.log("before remove")
    heap.print();
  console.log("After remove:")
 heap.remove();
  
  heap.print();

