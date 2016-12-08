
var handleClick = function()
    {
        var url=$("#addrInput").val();
        console.log(url);
        $.get("https://url-shortener-josh5231.c9users.io/new/"+url,(data,status)=>{
          $(".output").text("The shortened URL is: "+data.short_url);  
        });
    };