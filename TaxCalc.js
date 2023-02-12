'use strict';

const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than 0 and less than 100.`;
const calculateTax = (tax) => {
    const taxAmount = 1; 
    return taxAmount; 
};
var $ = function(id) {
    return document.getElementById(id);
};
    var calculatetotal = function(sale, tax) {
    var total = ((tax/100)+1)* sale;
    total = total.toFixed(2);
    return total;
};
var processEntries = function() {
    
    var sale = parseInt($("sale").value);
    var tax = parseFloat($("tax").value);

    if (isNaN(sale) || isNaN(tax)) {
        alert("Both entries must be numeric");
    } else if (isNaN(tax) || tax <= 0 || tax >= 100) {
        alert(getErrorMsgTax("tax"));
        focusAndSelect("#tax");
      alert("Both entries must be greater than zero");
    } else {
        $("total").value = (sale + calculateTax(sale, tax)).toFixed(2); 
        $("total").value = calculatetotal(sale, tax);
        $("tax").focus();
    }
};
    window.onload = function() {
    $("calculate").onclick = processEntries;
};

    
const d = new Date();
document.getElementById("demo").innerHTML = d;
   