$(document).ready(function(){
    let recipes = [];
    $(".currentr").click(function() {
        $("#home").css("visibility", "hidden");
        $("#add").css("visibility", "hidden");
        $("#recipes").css("visibility", "visible");
        for(i = 0; i < recipes.length; i++) {
            let current = recipes[i];
            if (i === 0) {
                $("#textbox").append(current.name, "<br/>", current.cuisine, "<br/>", current.meal, "<br/>", current.recipe);
            }
            else {
                $("#textbox").append("<br/>", current.name, "<br/>", current.cuisine, "<br/>", current.meal, "<br/>", current.recipe);
            }
        }
    });
    $(".newr").click(function() {
        $("#home").css("visibility", "hidden");
        $("#add").css("visibility", "visible");
        $("#recipes").css("visibility", "hidden");
        $("#buttonAdd").click(function(){
            let current = {name: $("#name").val(), cuisine: $("#select-cuisine").val(), meal: $("#select-meal").val(), recipe: $("#recipe").val()};
            recipes.push(current);
        });
    });
    $(".mainpage").click(function() {
        $("#home").css("visibility", "visible");
        $("#add").css("visibility", "hidden");
        $("#recipes").css("visibility", "hidden");
    });
});