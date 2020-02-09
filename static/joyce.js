// d3 selectors for DOM elements
var gold = d3.select("#gold");
var silver = d3.select("#silver");
var bronze = d3.select("#bronze");
var slider = d3.select("#slider")
var year = d3.select("#value");
var rangeObject1 = document.getElementById("slider");
var submit = d3.select("#submit");
var header = d3.select("#header")

// displays slider value
slider.on("change", function(){
    year.attr("value", rangeObject1.value)

})

// submit function for draw charts
submit.on("click", function() {

    // DOM checkers for checkboxes
    var goldCheck = document.getElementById("gold").checked;
    var silverCheck = document.getElementById("silver").checked;
    var bronzeCheck = document.getElementById("bronze").checked;

    // updates chart header
    header.text(`Medal Placements at the ${rangeObject1.value} Olympics`);

    // dataset holders for plot
    var drawGold = [];
    var drawSilver = [];
    var drawBronze = [];
    var holder = [];

    // data filter for year
    dataHTML.forEach(function(d) {
        if (parseInt(rangeObject1.value) === d.year) {
            holder.push(d);
        };
    });

    // eliminator function for duplicates
    var toDraw = [...new Set(holder)];

    // map function to gather individual plot datasets
    var countries = toDraw.map((d) => d.name);
    var drawGold = toDraw.map((d) => d.gold);
    var drawSilver = toDraw.map((d) => d.silver);
    var drawBronze = toDraw.map((d) => d.bronze);

    // final toggle for draw
    if (goldCheck === false) {
        drawGold = [];
    };

    if (silverCheck === false) {
        drawSilver = [];
    };

    if (bronzeCheck === false) {
        drawBronze = [];
    };

    // plot instructions
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: countries,
        datasets: [
        {
            label: 'Bronze',
            backgroundColor: 'rgb(190, 78, 7)',
            borderColor: 'white',
            borderWidth: 0.5,
            data: drawBronze
            
        },
        {
            label: 'Silver',
            backgroundColor: 'rgb(195, 193, 187)',
            borderColor: 'white',
            borderWidth: 0.5,
            data: drawSilver
        },
        {
            label: 'Gold',
            backgroundColor: 'rgb(255, 207, 35)',
            borderColor: 'white',
            borderWidth: 0.5,
            data: drawGold
        }]
    },
    // Configuration options go here
    options: {
        scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
    }}
});


});