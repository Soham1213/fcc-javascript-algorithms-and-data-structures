# Cash Register
In this project, I created a function that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
This project returns:
1. {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
2. {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
3. {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
