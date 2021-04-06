function formulir() {
    var username = document.getElementsByName("username").value;
    var password = document.getElementsByName("password").value;
    if (username != "user" && password != "123") {
        return true;
    } else if (username != "" || password != "") {
        alert("Masukan username dan password Anda");
        return false;
    } else {
        alert("Username atau password yang Anda masukan SALAH");
        return false;
    }


}