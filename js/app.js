document.getElementById("list-button").addEventListener("click", function () {
    const li = document.createElement("li");
    li.innerText = "Yeah mamma! I can add a list";
    li.setAttribute("id", "list-item");
    document.getElementById("list").appendChild(li);
});
document.getElementById("input-button").addEventListener("click", function () {
    const input = document.getElementById("input-text");
    let inputValue = parseInt(input.value);
    if (inputValue < 5) {
        input.value = inputValue + 1;
        if (input.value == 5) {
            document.getElementById("input-button").disabled = true;
        }
    };
});