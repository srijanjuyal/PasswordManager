function test()
{
    //Retrieving data
    var uid=document.getElementById("username").value;
    var pw=document.getElementById("password").value;
    
    //Storing data
    var user=sessionStorage.setItem("uid",uid);
    var pass=sessionStorage.setItem("pw",pw);

    //Retriving stored data and using it
    var user=sessionStorage.getItem("uid",uid);
    var pass=sessionStorage.getItem("pw",pw);

    var a=localStorage.getItem("usse",uid);
    var b=localStorage.getItem("pww",pw);
    
    if(a==user && b==pass)
    {
        alert("Login successful!");
        window.open("../crud/index.html", "_blank");
    }
    else{
        alert("Invalid details!")
    }
}