function validate()
{
    var res = document.getElementById("phone").value
    if (res.length == 0)
    {
        document.getElementById("msg").innerHTML="phone no is required"
        return false
    }
    else if(isNaN(res) == true)
    {
        document.getElementById("msg").innerHTML="char is not allowed"
        return false
    }
    else if (res.length <10)
    {
        document.getElementById("msg").innerHTML="provide 10 digit number"
        return false
    }
    else if (res.length >10)
    {
        document.getElementById("msg").innerHTML="only 10 digit number is allowed"
        return false
    }
    else if (res.charAt(0)<7)
    {
        document.getElementById("msg").innerHTML="number should start with 7,8,or 9"
        return false
    }
}