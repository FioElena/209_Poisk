// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script for search
// @author       Fioshkina Elena
// @match        https://www.bing.com/*
// @match        https://www.shatura.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


let links = document.links;
let search = document.getElementsByName("search")[0];
let keywords = [
    "Каталог мебели", 
    "Купить мебель", 
    "Магазин мебели", 
    "Мебель для прихожей"
];
let keyword = keywords[getRandom(0, keywords.length)];
let bingInput = document.getElementsByName("q") [0];
let pageNext = document.querySelector(".sb_pagN.sb_pagN_bp.b_widePag.sb_bp");

if (search != undefined) {
    let i = 0;
    let timerId = setInterval(() => {
        bingInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            search.click();
        }
    }, 500)

    } else if (location.hostname == "www.shatura.com") {
        console.log("Мы на целевом сайте");
        setInterval(() => {
            let index = getRandom(0, links.length);


            if (getRandom(0, 101) >= 70) {
                location.href = "https://www.bing.com/";
            }
            if (links.length == 0) {
                location.href = "www.shatura.com"
            }
            else if (links[index].href.indexOf("www.shatura.com") != -1) {
                links[index].click();
            }
        }, getRandom(3500, 5500))

    } else {
        let nextBingPage = true;
        for (let i = 0; i < links.length; i++) {
            if (links[i].href.includes("shatura.com")) {
                let link = links[i];
                nextBingPage = false;
                console.log("Нашел строку " + link);
                setTimeout(() => {
                    link.click();
                }, getRandom(3500, 5500))
                break;
            }
        }

        let elementExist = setInterval(() => {
            let element = document.querySelector(".sb_pagS");

            if (element != null) {
                if (element.innerText == "5") {
                    nextBingPage = false;
                    location.href = "https://www.bing.com/";
                }
                clearInterval(elementExist);
            }
        }, 150)

        if (nextBingPage) {
            setTimeout(() => {
                pageNext.click();
            }, getRandom(5000, 7000))
        }
    }

function getRandom(min,max) {
    return Math.floor(Math.random () * (max-min) + min);
}
