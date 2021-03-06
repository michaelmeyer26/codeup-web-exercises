(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsBreak = planetsArray.join('<br>');
    console.log(planetsBreak);


    //BONUS
    var planetsListArray = [];
    planetsArray.forEach(function(element) {
        planetsListArray.push("<li>" + element + "</li>");
    });

    var planetsList = planetsListArray.join("");
    planetsList = "<ul>" + planetsList + "</ul>";
    console.log(planetsList);

    //Alternate solution
    // var planetsList = planetsArray.join("</li><li>");
    // planetsList = "<ul><li>" + planetsList + "</li></ul>";
    // console.log(planetsList);

    document.write(planetsList);

})();
