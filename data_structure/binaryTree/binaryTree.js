const tree = {
    value: 'A',
    children: [
        {
            value: 'B',
            children: [
                {
                    value: 'D',
                    children: [
                        {
                            value: 'H',
                            children: [],
                        },
                    ],
                },
                {
                    value: 'E',
                    children: [],
                },
            ],
        },
        {
            value: 'C',
            children: [
                {
                    value: 'F',
                    children: [],
                },
                {
                    value: 'G',
                    children: [],
                },
            ],
        },
    ],
};

function rootFirstTraverse(tree) {
    if (!tree) {
        return;
    }
    const [leftTree, rightTree] = tree.children;

    console.log(tree.value);
    rootFirstTraverse(leftTree);
    rootFirstTraverse(rightTree);
}

function rootLastTraverse(tree) {
    if (!tree) {
        return;
    }
    const [leftTree, rightTree] = tree.children;

    rootLastTraverse(leftTree);
    rootLastTraverse(rightTree);
    console.log(tree.value);
}

function rootMiddleTraverse(tree) {
    if (!tree) {
        return;
    }
    const [leftTree, rightTree] = tree.children;

    rootMiddleTraverse(leftTree);
    console.log(tree.value);
    rootMiddleTraverse(rightTree);
}

function bfs(tree) {
    const queue = [tree];
    while(queue.length) {
        const left = queue.shift();
        console.log(left.value);
        Array.prototype.push.apply(queue, left.children);
    }
}

function dfs(tree) { // actually it's also a root first traverse
    const stack = [tree];
    while(stack.length) {
        const top = stack.pop();
        console.log(top.value);
        Array.prototype.push.apply(stack, [...top.children].reverse()); // reverse影响原数组
    }
}

function rootFirstTraverseByStack(tree) { // root > left > right
    const leftTree = 0;
    const rightTree = 1;
    let current = tree;
    const stack = [];
    while(current || stack.length) {
        while(current) {
            console.log(current.value);
            stack.push(current);
            current = current.children[leftTree]
        }
        const top = stack.pop();
        current = top.children[rightTree];
    }
}

function rootMiddleTraverseByStack(tree) { // left > root > right
    const leftTree = 0;
    const rightTree = 1;
    let current = tree;
    const stack = [];
    while(current || stack.length) {
        while(current) {
            stack.push(current);
            current = current.children[leftTree]
        }
        const top = stack.pop();
        console.log(top.value);
        current = top.children[rightTree];
    }
}

function rootLastTraverseByStack(tree) { // root > right > left ->>>reverse->>> left > right > root
    const leftTree = 0;
    const rightTree = 1;
    let current = tree;
    const stack = [];
    const res = [];
    while(current || stack.length) {
        while(current) {
            res.push(current.value);
            stack.push(current);
            current = current.children[rightTree]
        }
        const top = stack.pop();
        current = top.children[leftTree];
    }
    res.reverse();
    console.log(...res);
}
