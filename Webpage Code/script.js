$(document).ready(function(){
    let recipes = [];
    $(".currentr").click(function() {
        $("#home").css("visibility", "hidden");
        $("#add").css("visibility", "hidden");
        $("#recipes").css("visibility", "visible");
        $("#textbox").append(recipes);
    });
    $(".newr").click(function() {
        $("#home").css("visibility", "hidden");
        $("#add").css("visibility", "visible");
        $("#recipes").css("visibility", "hidden");
        $("#buttonAdd").click(function(){
            let current = {name: $(".name").val(), cuisine: $(".select-cuisine").val(), meal: $(".select-meal").val(), recipe: $(".recipe").val()};
            recipes.push(current);
        });
    });
    $(".mainpage").click(function() {
        $("#home").css("visibility", "visible");
        $("#add").css("visibility", "hidden");
        $("#recipes").css("visibility", "hidden");
    });
});