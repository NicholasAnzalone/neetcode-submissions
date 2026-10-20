class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}


class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
      let current = this.head;
      let count = 0;
      while(current) {
        if(index == count) {
          return current.data;
        }
        count++
        current = current.next;
      }
      return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
      this.head = new Node(val, this.head);
      this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
      let current = this.head;
      let node = new Node(val);
      if(!current) {
        this.head = node;
        return;
      } else {
        while(current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
      if(index > 0 && index > this.size) {
        return false;
      }
      let current = this.head;
      let previous;
      let count = 0;

      if(index == 0) {
        if(current){
        this.head = current.next;
        return true;
        }
        return false;
      }
      else {
        while(count < index) {
          if(current) {
            count++;
            previous = current;
            current = current.next;
          } else {return false;}
        }
        if(current) {
          previous.next = current.next;
          this.size--;
          return true;
        } else {
          return false;
        }

      }
    }

    /**
     * @return {number[]}
     */
    getValues() {
      let temp = [];
      let current = this.head;
      while(current) {
        temp.push(current.data);
        current = current.next;
      }
      return temp;
    }
}