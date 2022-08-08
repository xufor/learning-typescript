"use strict";
async function getDataFromAPI() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
}
getDataFromAPI().then((r) => console.log(r));
