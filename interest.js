function Interest() {
    let principle = document.getElementById("id1").value 
    let tenure = document.getElementById("id2").value
    let rate = document.getElementById("id3").value
    let Total = eval(principle * tenure * rate) / 100
    document.getElementById("div1").innerHTML = "Result: " + Total 
    }