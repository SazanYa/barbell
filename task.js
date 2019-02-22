const lefts = document.getElementById("left-weights");
const rights = document.getElementById("right-weights");
const storage = document.getElementById("storage-weights");
const result = document.getElementById("result");


function addToLeft(elem) {
    if (elem.parentNode.id !== storage.id) {
        storage.appendChild(elem);
    } else {
        lefts.appendChild(elem);
    }
    result.hidden = checkSum();
}

function addToRight(elem) {
    rights.appendChild(elem);
    result.hidden = checkSum();
}

function addToStorage() {
    const field = document.getElementById("input");

    if (field.value >= 0 && field.value <= 20) {
        storage.innerHTML += `<span class="weight" onclick="addToLeft(this)" oncontextmenu="addToRight(this);return false">${field.value}</span>`;
    }
}

function checkSum() {
    return !(getSum(lefts.childNodes) === getSum(rights.childNodes));
}

function getSum(elems) {
    let sum = 0;
    for (let i = 0; i < elems.length; i++) {
        sum += parseInt(elems[i].innerHTML);
    }
    return sum;
}