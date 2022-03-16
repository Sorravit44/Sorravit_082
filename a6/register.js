window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var spantext = document.getElementById("errormsg");
   
    var    FirstName = document.forms["myForm"]["firstname"]
    var    LastName  = document.forms["myForm"]["lastname"]
    var    Gender    = document.forms["myForm"]["gender"]
    var    Birthday  = document.forms["myForm"]["bday"]
    var    Email     = document.forms["myForm"]["email"]
    var    Username  = document.forms["myForm"]["username"]
    var    Password  = document.forms["myForm"]["password"]
    //var    RetypePassword = document.forms["myForm"]["retypePassword"]


    if(Password[0].value != Password[1].value)
    {
        alert("Password Uncorrect")
        spantext.textContent = "Password Uncorrect";
        return false;
    }
}