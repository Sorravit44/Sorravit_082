var s = 0;

function postFunction()
{
    var text = document.getElementById("text1").value;
    console.log(text);
    if (s==0)
    {
        if(text ==""|| text==" ")
        {
            alert("Type something!");
            return false;
        }
        else
        {
            document.getElementById("topic1").innerHTML = text;
            s++;
        }
    }


    else if(s == 1)
    {
        if(document.getElementById("text1").value == "")
        {
           alert("Type something!");
           return false; 
        }
        else
        {
            document.getElementById("comment1").innerHTML = text;
            s++;
        }
    }

    else if(s == 2)
    {
        if(document.getElementById("text1").value == "")
        {
            alert("Type something!");
            return false;
        }
        else
        {
            document.getElementById("comment2").innerHTML = text;
            s++;
        }
    }
    else
    {
        return null;
    }
    document.getElementById("text1").value = "";
}

function clearFunction()
{
    document.getElementById("topic1").innerHTML = null;
    document.getElementById("comment1").innerHTML = null;
    document.getElementById("comment2").innerHTML = null;
    document.getElementById("text1").value = "";
    s = 0;
}