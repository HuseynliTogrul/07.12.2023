const password = prompt("Please enter a new password:");

if(password.length > 6){
    alert("Password confirmed")
}else{
    alert("Weak password! Please enter a password that has more than 6 characters")
}