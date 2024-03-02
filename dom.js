

function change()
{


    let username = document.forms["myform"]["name"].value;
    document.getElementById("name").innerHTML = username 

    if(username=="")
    {
        document.getElementById("error1").innerHTML = "Name should be filled"
    }

    if(!isNaN(username))
    {
        document.getElementById("error1").innerHTML = "Name should not be a number"
    }
    if(!isNaN(username))
    {
        document.getElementById("error1").innerHTML = "Name should not be a number"
    }
    return false

 
} 
 

