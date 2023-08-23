function reset()
{
    final="";
        var pass=sessionStorage.getItem("rec",final);
        var pass=localStorage.setItem("reco",pass);
    sessionStorage.clear();
}