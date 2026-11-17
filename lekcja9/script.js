"use strict";

// TODO: utwórz zmienną przechowującą stan licznika
let counter = 0;
// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz
function addPoint() {
    counter = counter + 1;
    document.getElementById("counter-display").textContent = counter;
}

function resetCounter() {
    counter = 0
    document.getElementById("counter-display").textContent = counter;
}

let items = ["CS2", "Minecraft", "fortnite", "brawl stars", "idle startup", "roblox"]
function losowanie() {
    let index = Math.floor(Math.random() * items.length)
    document.getElementById("random-display").textContent = items[index];
}

// TODO: utwórz tablicę z elementami do losowania
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
