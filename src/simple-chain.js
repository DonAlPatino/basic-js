const {NotImplementedError} = require('../extensions/index.js');
const {checkForThrowingErrors} = require("../extensions");

/**
 * Implement chainMaker object according to task description
 *
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const chainMaker = {
    head: null,
    tail: null,

    getLength() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let current = this.head;
        let i = 0;
        while (current != null) {
            current = current.next
            i++;
        }
        return i;
    },
    addLink(value = " ") {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        return this
    },
    removeLink(position) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here

        if (typeof position !== 'number' || position < 1|| this.getLength()< position) {
            this.head = null
            this.tail = null
            throw new Error("You can\'t remove incorrect link!")
        }
        //удаляем первую позицию
        if (position == 1) {
            let currentHead = this.head;
            this.head = currentHead.next;

            if (this.getLength() === 0) {
                this.tail = null;
            }
            return this
        }
        let current = this.head;
        let i = 1;
        while (current != null) {
            if (i + 1 === position) {
                current.next = current.next.next;
                if (this.getLength() === 0) {
                    this.tail = null;
                }
            }
            current = current.next
            i++
        }
        return this;
    },
    reverseChain() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let len = this.getLength();
        if (len === 1) return this
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < len; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    },
    finishChain() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let plainChain = "";
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let current = this.head;
        while (current != null) {
            plainChain += (current == this.head ? "" : "~~") + "( " + current.val + " )";
            current = current.next
        }
        this.head = null
        this.tail = null
        return plainChain;
    }

};
module.exports = {
    chainMaker
};
