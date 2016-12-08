
var handleClick = function()
    {
        var url=$("#addrInput").val();
        console.log(url);
        $.get("https://mins.herokuapp.com/new/"+url,(data,status)=>{
          $(".output").text("The shortened URL is: "+data.short_url);  
        });
    };