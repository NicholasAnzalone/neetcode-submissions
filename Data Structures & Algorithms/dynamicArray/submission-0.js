class DynamicArray {
    /**
     * @constructor
     * @param {number}
     */
    
    newArray;

    constructor(capacity) {
        if(capacity < 0) {
            this.capacity = 0;
        }
        else {
            this.capacity = capacity;
        }
        this.newArray = [];
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.newArray[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.newArray[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.newArray.length === this.capacity) {
            this.resize();
        }
        this.newArray.push(n);
    }
    /**
     * @returns {number}
     */
    popback() {
        return this.newArray.pop();
    }
    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.newArray.length;
    }
        
    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
