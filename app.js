module.exports.convertID = convertID;
function convertID(nic)
{
    if(nic.toString().length<11 && nic.toString().length >9 )
    {
        var b =('19'+(nic.substring(0,9)));
        insert = function insert(b, ins_string, pos) 
        {
            if(typeof(pos) == "undefined") 
            {
             pos = 0;
            }
            return b.slice(0, pos) + ins_string + b.slice(pos);
        }
        return(insert(b,'0',7));
    }
    else 
    {
      console.log("Please Enter Valid NIC Number ");  
    }
}