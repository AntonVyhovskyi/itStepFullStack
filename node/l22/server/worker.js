const { parentPort, workerData } = require('worker_threads')

function analyzeText(text) {
    const words = text.toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, '')
        .split(/\s+/)
        .filter(Boolean);

    const totalWords = words.length
    const frequencyMap = {};

    for (const word of words) {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1
    }

    const uniqueWords = Object.keys(frequencyMap).length;
    const topWords = Object.entries(frequencyMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([word, count]) => ({ word, count }));

    return { totalWords, uniqueWords, topWords };
}


const result = analyzeText(workerData);
parentPort.postMessage(result);