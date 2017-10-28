function load(){
    //6JaKOgr0sKU0I4VayPrscsq5oOpvOMwp
    var gifkey = "6JaKOgr0sKU0I4VayPrscsq5oOpvOMwp";

    /*var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+q+"&api_key="+gifkey+"&limit=5");
    xhr.done(dataLoad);*/

    $("#searchBox").keyup(function(){
        var q = $("#searchBox").val();
        if(q.indexOf(" ") == q.length-1){
            if(q.length == 1){
                $("#searchBox").val("");
            }else {
                //var fakeJson = $.getJSON("js/stuff.json", dataLoad);
                var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+q+"&api_key="+gifkey+"&limit=5");
                xhr.done(dataLoad);
            }
        }else if(q.indexOf(" ") > 0){
            submitImage($("img").attr("src"), $("#searchBox").val());
            $("#searchBox").val(q.substr(q.length-1,1));
            if($("#searchBox").val() == " "){
                $("#searchBox").val("");
            }
        }
   }) ;
}

function dataLoad(data) {
    console.log(data);
    $.each(data.data, function (i, item) {
        console.log(i);
        //console.log(item);
        console.log(item["images"]["original"]["url"]);
        var atag = $("<a>").attr("href", "javascript:submitImage('" + item["images"]["fixed_width_small_still"]["url"] + "')").appendTo("#imageSelection");
        $("<img>").attr("src", item["images"]["fixed_width_small_still"]["url"]).appendTo(atag);
    });
}

function submitImage(uri, text){
    $("<img>").attr("src", uri).appendTo("#imageSubmission");
    $("<p>").text($("#searchBox").val()).appendTo("#imageSubmission");
    $("#imageSelection").html("");
}