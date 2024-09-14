// function minimalOperations(wordCollection: string[]): number[] {
//     const counter: number[] = [];

//     for (const words of wordCollection) {
//         const wordArray = words.split('');
//         let count = 0;
//         let i = 0;

//         while (i < wordArray.length - 1) {
//             if (wordArray[i] === wordArray[i + 1]) {
//                 count++;
//                 i++;  // Skip the next character
//             }
//             i++;  // Move to the next character
//         }

//         counter.push(count);
//     }

//     return counter;
// }

function processLogs(logs, threshold) {
    const transactionCount = {};

    // Iterate through each log entry
    logs.forEach(log => {
        const [sender, recipient, amount] = log.split(' ');

        // Increment sender's count
        if (!transactionCount[sender]) {
            transactionCount[sender] = 0;
        }
        transactionCount[sender]++;

        // Increment recipient's count if it's different from sender
        if (sender !== recipient) {
            if (!transactionCount[recipient]) {
                transactionCount[recipient] = 0;
            }
            transactionCount[recipient]++;
        }
    });

    // Filter user IDs based on the threshold
    const suspiciousUsers = Object.keys(transactionCount).filter(userId => transactionCount[userId] >= threshold);

    // Sort user IDs numerically and return as strings
    return suspiciousUsers.sort((a, b) => Number(a) - Number(b));
}

// Example usage:
const logs = ["88 99 200", "88 99 300", "99 32 100", "12 12 15"];
const threshold = 2;
console.log(processLogs(logs, threshold)); // Output: [ '88', '99' ]