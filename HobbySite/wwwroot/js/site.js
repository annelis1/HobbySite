// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    //calculate button
    $("#calcForm").submit(function (event) {
        event.preventDefault();// prevent form submission refresh

        //input values
        var hours = $("#hours").val();
        var costPH = $("#costph").val().replace('$', '');//removes $ so can grab value

        //total
        var total = hours * costPH;

        //display / send to box on calc page
        $("#total").text("$" + total); //update content of total box
    });

    //reset button
    $("#reset").click(function () {
        $("#hours").val("");
        $("#total").text("");
        $("#calcForm")[0].reset();
    })
});
