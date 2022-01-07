// MORTGAGE CALCULATOR


// PV = present value mortgage amount
// n = term length in months
// pmt = payment
// timeframe = biweekly,monthly/annualy etc...
// i = annual interest rate as a decimal, not a percentage




// determines parameters based on mortgage frequency selected
function freq () {
       
    if(document.getElementById('Weekly').checked) {   
        f = 52;
        t = "weekly";
    }
    else if(document.getElementById('Bi-Weekly').checked) {   
        f = 26;
        t = "bi-weekly";
    } 
    else if(document.getElementById('Semi-Monthly').checked) {   
        f = 24;
        t = "semi-monthly";
    } 
    else if(document.getElementById('Monthly').checked) {   
        f = 12;
        t = "monthly"
    }
    else {   
        f = "You have not selected a payment frequency"; 
    };

console.log("Mortgage Payment Frequency: " + f);
};

//Calculates additional mortgage 
function mortgageCalc () {
    
    freq()

    var PV = document.getElementById("upgTotal").value;
    console.log("Principal amount: " + PV);

    var i = document.getElementById("rate").value / 100 / f;
    console.log("annual interest rate: " + i);

    var n = document.getElementById("term").value * f;
    console.log("Mortgage Ammortization: " + n);

    var pmt = (PV * i * Math.pow(1 + i, n)) / (Math.pow(1 + i,n) - 1);
    console.log(pmt);

    document.getElementById("output").innerHTML = "Your mortgage will increase by: $" + Math.round(pmt*100)/100 + " per " + t + " payment!";
};


// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
        alert("Fill All Fields !");
    } else {
        document.getElementById('form').submit();
        alert("Form Submitted Successfully...");
    }
};

//Function To Display Popup
function popup_show() {
    document.getElementById('mortgagePopup').style.display = "block";
};

//Function to Hide Popup
function popup_hide(){
    document.getElementById('mortgagePopup').style.display = "none";
};


