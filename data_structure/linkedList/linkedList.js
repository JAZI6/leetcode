const linkedList = {
    value: 'A',
    next: {
        value: 'B',
        next: {
            value: 'C',
            next: {
                value: 'D',
                next: {
                    value: 'E',
                    next: null,
                }
            }
        }
    }
};

function linkedListTraverse(cur) {
    while(cur) {
        console.log(cur.value);
        cur = cur.next;
    }
}

function linkedListTraverseByRecursion(cur) {
    if(!cur) {
        return;
    }

    console.log(cur.value);
    cur = cur.next;
    linkedListTraverseByRecursion(cur);
}

function linkedListReverse(cur) {
    let prev = null;
    let next = null;
    while(cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}