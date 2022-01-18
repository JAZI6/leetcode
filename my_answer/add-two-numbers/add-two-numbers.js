/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) { // my thoughts
    function getAddRes(current1, current2, addUp = 0) {
        const current1Val = current1 ? current1.val : 0;
        const current2Val = current2 ? current2.val : 0;
        return {
            onePlace: (current1Val + current2Val + addUp) % 10,
            tenPlace: Math.floor((current1Val + current2Val + addUp) / 10), // key point
        };
    }

    let addRes = getAddRes(l1, l2);
    let result = new ListNode(addRes.onePlace);
    let start = result;
    let tenPlaceAddUp = addRes.tenPlace;

    while (true) {
        l1 &&= l1.next;
        l2 &&= l2.next;
        if (!l1 && !l2) {
            break;
        }

        addRes = getAddRes(l1, l2, tenPlaceAddUp);

        start.next = new ListNode(addRes.onePlace);
        start = start.next;
        tenPlaceAddUp = addRes.tenPlace;
    }

    if (tenPlaceAddUp > 0) {
        start.next = new ListNode(tenPlaceAddUp);
    }

    return result;
};

var addTwoNumbers = function (l1, l2) { // brief answer
    let result = new ListNode(-1);
    let start = result;
    let sum = 0;
    while (l1 || l2 || sum) {
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }

        start.next = new ListNode(sum % 10);
        start = start.next;
        sum = Math.floor(sum / 10)
    }
    return result.next;
};
