
exports.urlCheck = function(addr)
{
   if(addr.startsWith("http://www.") || addr.startsWith("https://www."))
        {
        if(addr.match(/\./g).length>=2 && addr.indexOf(".")+1<addr.lastIndexOf(".") && addr.lastIndexOf(".")<addr.length-2) 
        //Make sure there are atleast 2 '.' and that there is something between them and something after the last '.'
            {
            return true;    
            }
        }

    return false;
}