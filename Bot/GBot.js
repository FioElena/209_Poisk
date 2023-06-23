// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Scriot for search
// @author       Fioshkina Elena
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==
let links = document.links;
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Вывод произвольных типов записей и полей в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];

if (btnK != undefined) {
document.getElementsByName("q") [0].value = keyword;
btnK.click();
} else {
    for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes("napli.ru")) {
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
