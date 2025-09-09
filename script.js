const btn = document.querySelectorAll(".btn");
const input = document.getElementById("input");

btn.forEach((button) => {
    button.addEventListener("click", function() {
        const value = button.textContent;

        switch(value) {
            case "=":
                try {
                    input.value = eval(input.value);
                } catch(error) {
                    input.value = "Error";
                }
                break;
            case "C":
                input.value = "0";
                break;
            default:
                input.value += value;
        }
    });
});

