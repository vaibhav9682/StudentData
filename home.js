
var list = $("#list");

$(document).ready(function () {
    $("#submit").click(function (e) {

        e.preventDefault();




        var arr = $("#formdata").serializeArray();

        var li = $("<li>")
        var roll = arr[0].value;
        var name = arr[1].value;
        var mark = arr[2].value;
        // var name = field.name
        li.html("<span class='green'> Roll no - </span>" + roll + "  " + "<span class='green leftMargin'>Name :</span>" + name + " " + "<span class='green leftMargin'> Marks :</span>" + mark);
        list.append(li);


        // let roll = $("#rollnumber")

        // // roll.val("")
        // console.log(roll.val())


    })
})





