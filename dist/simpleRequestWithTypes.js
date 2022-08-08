"use strict";
const API_URL = "https://jsonplaceholder.typicode.com/todos/";
async function getDataFromAPI(url) {
    const res = await fetch(url);
    const parsedResponse = await res.json();
    return parsedResponse;
}
async function fetchAndPrintData(url) {
    for (let i = 1; i <= 5; i++) {
        const response = await getDataFromAPI(url + i);
        console.log(response);
    }
}
fetchAndPrintData(API_URL);
