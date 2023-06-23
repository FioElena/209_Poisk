// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script for search
// @author       Fioshkina Elena
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


let links = document.links;
let search = document.getElementsByName("search")[0];
let keywords = ["Каталог мебели", "Купить мебель", "Магазин мебели"];
let keyword = keywords[getRandom(0, keywords.length)];

if (search != undefined) {
document.getElementsByName("q") [0].value = keyword;
search.click();
} else {
    for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes("shatura.com")) {
        let link = links[i];
        console.log("Нашел строку " + link);
        link.click();
        break;
    }
}
}

function getRandom(min,max) {
    return Math.floor(Math.random () * (max-min) + min);
}
