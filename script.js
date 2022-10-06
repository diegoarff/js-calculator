let input = document.getElementById("input");
let output = document.getElementById("output");

let buttons = document.querySelectorAll(".btn");
let btnContainer = document.getElementById("btnContainer");

btnContainer.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) {

        let text = e.target.innerText;

        switch (text) {
            case "=":
                equal(input.value);
                break;

            case "DEL":
                deleteStr();
                break;

            case "AC":
                result("");
                break;

            default:
                input.value += text;
                break;
        }
    }

    e.stopPropagation();

});

document.addEventListener("keydown", (e) => {
    12
    let keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "%", ".", "(", ")"];

    if (!keys.includes(e.key)) {
        switch (e.key) {
            case "Enter":
                equal(input.value);
                break;
            case "Backspace":
                deleteStr();
                break;
            case " ":
                result("");
                break;
        }
    } else {
        input.value += e.key;
    }
});

function deleteStr() {
    input.value = input.value.slice(0, -1);
}

function equal(data) {
    try {

        if (data.includes("%")) {
            result(percentage(data));
        } else {
            result(eval(data));
        }

    } catch (error) {
        result("Error")
    }
}

function result(data) {

    if (data === "Error") {
        input.value = "";
        output.value = data;
    } else {
        input.value = data;
        output.value = data;
    }
}

function percentage(input) {

    let data = input.split("%");

    if (data.length != 2) return "Error";

    return eval(data[0] * (data[1] / 100));
}