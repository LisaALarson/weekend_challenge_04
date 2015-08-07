$(document).ready(function (){
    $("#inputForm").submit(function(event){
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/things",
            data: formData,
            success: function(){

            }
        });
    });
});

function getData(){
    $.ajax({
        type:"GET",
        url: "/things",
        success: function(){

        }
    })
}