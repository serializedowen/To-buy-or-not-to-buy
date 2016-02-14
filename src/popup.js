function draw() {
var cv = document.getElementById("myChart");
var ctx = cv.getContext("2d");
ctx.fillStyle = "red";
ctx.strokeStyle = "black";
ctx.font='bold 15px Arial';
  ctx.fillText("GameOver", 160, 300);
  ctx.fillText("Your Score is: ", 145, 320);
  ctx.strokeRect(100, 350, 50, 30);
  ctx.strokeRect(250, 350, 50, 30);
  ctx.fillStyle = "black";
  ctx.fillText("Replay", 100, 370);
  ctx.fillText("Exit", 260, 370);
}

function handleClick() {
	if valueEntered() && numberEntered && emailEntered {
		alert("Success! We will send you an email as soon as possible.");
	}
}

function valueEntered() {
    $("#formPriceError")
        .hide();
    inputs = $("#priceForm")
        .find("input.price");
   	input = $(inputs[0]);
    if (input.val() != "") {
        current = 20;
        var val = input.val();
            if (val < current) {
            	return true;
            }
    show_watch_error("formPriceError");
    return false;
}

var formErrorTimeout = null;
function show_watch_error(id) {
    $("#formErrors")
        .show();
    $("#" + id)
        .show();
    bottom = $("#legend")
        .outerHeight() + 7;
    $("#formErrors")
        .css("bottom", bottom + "px");
    formErrorTimeout = setTimeout(function() {
        $("#formErrors")
            .hide();
    }, 10000);
}

function numberEntered() {
    $("#formNumberError")
        .hide();
    inputs = $("#priceForm")
        .find("input.price");
    input = $(inputs[0]);
    if (input.val() != "") {
        if (!input.val()
            .match(/^[0-9\.,\s]*$/)) {
            show_watch_error("formNumberError");
            return false;
        }
    }
    return true;
}
function emailEntered() {
    $("#formEmailError")
        .hide();
    if ($("#emailPrice")
        .val() == "") {
        show_watch_error("formEmailError");
        return false;
    } else {
    	return true;
    }
}