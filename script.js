let calculations = "";
let ID = [];
let func = () => {     
    $("*").each(function () {
        if (this.id) {
            ID.push(this.id);
        }
    })};
func();
ID = ID.slice(11, 29)
for (let n = 0; n < ID.length; n++) {
    document.getElementById(ID[n]).onclick = function() {
        if (ID[n] == "ac") {
            calculations = "";
        }
        else if (ID[n] == "equal") {
            calculations = eval(calculations);
        }
        else if (ID[n] == "delete") {
            calculations = calculations.substring(0, calculations.length-1)
        }
        else {
            calculations += ID[n]
        }
        document.getElementById("calculator-display").innerText = calculations;

    }

}
