const $primaryContent = $('#primaryContent');
const $latestRecipes = $('#latestRecipes');
const $musings = $('#musings');
const $rotation = $('#rotation');
const $columns = $('.col-lg');

// Changing background colors of the primary content columns
$latestRecipes.on({
    mouseenter: function(){
        $(this).css("background-color","#3C2C2C");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "initial");
    }
});

$musings.on({
    mouseenter: function(){
        $(this).css("background-color", "#3C3C3C");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "initial");
    }
});

$rotation.on({
    mouseenter: function(){
        $(this).css("background-color", "#3C3C4C");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "initial");
    }
});