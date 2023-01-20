var choice=prompt("Enter your choice 1)Add 2)Sub 3)Mul 4)Div")
var num1=Number(prompt("Enter the first number"))
var num2=Number(prompt("Enter the second number"))
switch(choice)
{
    case "Add":console.log("Addition-"+(num1+num2))
    break
    case "Sub":console.log("Subtraction-"+(num1-num2))
    break
    case "Mul":console.log("Multiplication-"+(num1*num2))
    break
    case "Div":console.log("Division-"+(num1/num2))
    break
    default:console.log("Invalid Choice")
}