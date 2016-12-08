
var handleClick = function()
    {
        var url=$("#addrInput").val();
        //console.log(url);
        $.get("https://mins.herokuapp.com/new/"+url,(data,status)=>{
          if(data=="Error: Invalid address"){ 
              $(".output").text(data); 
          }
          else { $(".output").text("The shortened URL is: "+data.short_url);   }
        });
    };