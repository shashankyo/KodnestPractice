//Write a RE for the following patterns:

var reg1=function()
{
    var str="Kodnest Technologies"
//a)search a character "t" in the given string "KodNest Technologies"
    var res1=str.search("K")//Regular Expression-search()

//b)To replace the charater "T" with character "C" in the given string str.
    var res2=str.replace("T","C")//Regular Expression-replace()

//c)To replace the charater "T" with character "C" in the given string str by ignoring the case
    var res3=str.replace(/T/ig,"C")//Regular Expression-replace(), Quantifiers-i,g(global)
    
// quantifier i- it will replace only first one t by ignoring the case.
//Quantifier g- it will replace all the t.


    var res4 = str.match(/ol+/g)
    var res5 = str.match(/ol*/g)
    //sending the data from js to html file
    document.getElementById("one").innerHTML=res1
    document.getElementById("two").innerHTML=res2
    document.getElementById("three").innerHTML=res3
    document.getElementById("four").innerHTML=res4
    document.getElementById("five").innerHTML=res5

}
reg1()