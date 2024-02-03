import "jquery-3.7.1.min.js";
$(document).ready(function(){
    let recipes = {};
    $("buttonAdd").click(function(){
        let current = {name: $(".name").val(), cuisine: $(".select-cuisine").val(), meal: $(".select-meal").val(), recipe: $(".recipe").val()};
        recipes.push(current);
    });
    $(".recipes").load(function() {
        $(".content").text() = recipes;
    });
});