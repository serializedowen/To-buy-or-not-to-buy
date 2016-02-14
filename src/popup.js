function draw() {
  console.log('aaa');

  var cv = document.getElementById("myChart");
  var ctx = cv.getContext("2d");

  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
  };

  var chart = new Chart(ctx).Bar(data, {
    barShowStroke: false
  });

}


// function handleClick() {
// 	if (valueEntered() && numberEntered() && emailEntered()) {
// 		alert("Success! We will send you an email as soon as possible.");
// 	}
// }

// function valueEntered() {
//     $("#formPriceError")
//         .hide();
//     inputs = $("#priceForm")
//         .find("input.price");
//    	input = $(inputs[0]);
//     if (input.val() != "") {
//         current = 20;
//         var val = input.val();
//             if (val < current) {
//             	return true;
//             }
//     show_watch_error("formPriceError");
//     return false;
// }

// var formErrorTimeout = null;
// function show_watch_error(id) {
//     $("#formErrors")
//         .show();
//     $("#" + id)
//         .show();
//     bottom = $("#legend")
//         .outerHeight() + 7;
//     $("#formErrors")
//         .css("bottom", bottom + "px");
//     formErrorTimeout = setTimeout(function() {
//         $("#formErrors")
//             .hide();
//     }, 10000);
// }

// function numberEntered() {
//     $("#formNumberError")
//         .hide();
//     inputs = $("#priceForm")
//         .find("input.price");
//     input = $(inputs[0]);
//     if (input.val() != "") {
//         if (!input.val()
//             .match(/^[0-9\.,\s]*$/)) {
//             show_watch_error("formNumberError");
//             return false;
//         }
//     }
//     return true;
// }
// function emailEntered() {
//     $("#formEmailError")
//         .hide();
//     if ($("#emailPrice")
//         .val() == "") {
//         show_watch_error("formEmailError");
//         return false;
//     } else {
//     	return true;
//     }
// }


document.addEventListener('DOMContentLoaded', function () {
  // document.querySelector('button').addEventListener('click', console.log('aaa'));
  draw();
});