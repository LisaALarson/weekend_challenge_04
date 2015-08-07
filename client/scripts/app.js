$(document).ready(function (){
    $("#inputForm").submit(function(event){
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/things",
            data: formData,
            success: function(data){
                console.log(data);
                console.log("Finished first ajax call (POST)!");
                getData();
            }
        });
    });
});

function getData(){
    $.ajax({
        type:"GET",
        url: "/things",
        success: function(data){
            console.log("Finished first ajax call (GET)!");
            console.log(data);
            updateContainer(data);
        }
    })
}

function updateContainer(data){
    console.log('reached container!');
    for(var i = 0; i<data.length; i++){
        $("#container").append("<div></div>");
        var $el = $("#container").children().last();
        $el.append("<p>" + data[i].name + "</p>");
        $el.append("<p>" + data[i].description + "</p>");
        //$el.append("<button data-id='" + data[i]._id + "'>DELETE</button>");

    }
}