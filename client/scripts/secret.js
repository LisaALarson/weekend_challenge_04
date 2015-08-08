$(document).ready(function (){

    //on click function for submit button
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
        });//end ajax call

        //line below clears the input form fields
        $("#inputForm")[0].reset();
    });//end submit click

    //on click function for the refresh button - reloads the list in case other users added information while you added your information
    $('body').on('click', '#refresh', function(){
        getData();
    });

    $('body').on('click', 'button', function(){
        console.log("button clicked");
        $.ajax({
            type: "DELETE",
            url: "/things/" + $(this).data("id"),
            success: function(){
                console.log("He's dead Jim!");

            },
            error: function(xhr, status){
                alert("Error: ", status);
            },
            complete: function(){
                console.log("Delete Complete!");
            }
        });//end ajax call

        $(this).parent().remove();

    });//end click of remove button function

});//end document ready

//function to get the data back from the server
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

//function to append the data to the page
function updateContainer(data){
    console.log('reached container!');
    for(var i = 0; i<data.length; i++){
        $("#container").append("<div></div>");
        var $el = $("#container").children().last();
        $el.append("<p>" + '"' + data[i].messageArea + '"   ' + '-' +  data[i].name + "</p>");
        $el.append("<button data-id='"+data[i]._id+"'>Remove Message</button>");
        //$el.append("<p>" + data[i].messageArea + "</p>");
        //$el.append("<button data-id='" + data[i]._id + "'>DELETE</button>");

    }
}