function validate(){
    var res=document.getElementById("phone").value
    var bool=/^[7-9]{1}[0-9]{9}$/.test(res)

    //if test==true means data is valid
    if( bool == false){
        document.getElementById("msg").innerHTML="Invalid Data"
        return false
    }
}