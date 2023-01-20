function validate()
{
    var res = document.getElementById("fname").value
    if (res.length == 0)
    {
        document.getElementById("msg").innerHTML="F-name is required"
        return false
    }
    else if(res.length < 3)
    {
        document.getElementById("msg").innerHTML="F-name is must"
        return false
    }
    else if (res.length >15)
    {
        document.getElementById("msg").innerHTML="should provide first name of char less than 15 character"
        return false
    }
}