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

let head = null;
let tail = null;
let len = 0;

const chainMaker = {


    getLength() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return len;
    },
    addLink(value = " ") {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let newNode = new Node(value)

        if (!head) {
            head = newNode
            tail = head
        } else {
            tail.next = newNode
            tail = newNode
        }
        len++
        return this
    },
    removeLink(position) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (typeof position !== 'number' || position < 1 || position > len) throw new Error("You can\'t remove incorrect link!")
        //удаляем первую позицию
        if (position == 1) {
            let currentHead = head;
            head = currentHead.next;
            len--;
            if (len === 0) {
                tail = null;
            }
            return this
        }

        let current = head;
        let i = 2;
        let flag = false;
        while (current != null) {
            tail = current
            if (i === position) {
                current.next = current.next.next;
                len--;
                flag = true;
                if (len === 0) {
                    tail = null;
                }
            } else current = current.next
            i++
        }
        if (!flag) throw new Error("You can\'t remove incorrect link!")
        return this;
    },
    reverseChain() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (len === 1) return this
        let node = head;
        head = tail;
        tail = node;
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
        let current = head;
        while (current != null) {
            plainChain += (current == head ? "" : "~~") + "( " + current.val + " )";
            current = current.next
        }
        delete this
        return plainChain;
    }

};
//chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0),
//chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'),
//chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
//chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
//i =chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()
//console.log(i)

i = chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
console.log(i)
module.exports = {
    chainMaker
};
