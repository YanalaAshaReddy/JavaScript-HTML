function AreaOfCircle() {
    const pi = 3.14
    let radius = document.getElementById("id1").value 
    let Total = eval(pi * radius * radius)
    document.getElementById("div1").innerHTML = "Result: " + Total 
    }