function gradeView(){
    document.getElementById("gradeview").classList.remove("hidden")
    document.getElementById("addgrade").classList.add("hidden")
}
function addGrade(){
    document.getElementById("gradeview").classList.add("hidden")
    document.getElementById("addgrade").classList.remove("hidden")
}

function login(){
    if(document.getElementById("username").value != "cool")
        document.getElementById("invalid").innerHTML = "Your username is incorrect."
    else if(document.getElementById("password").value != "password")
        document.getElementById("invalid").innerHTML = "Your password is incorrect."
    else{
        document.getElementById("gradeview").classList.remove("hidden")
        document.getElementById("login").classList.add("hidden")
        document.getElementById("navbar").classList.remove("hidden")

    }
}

function submit(){
    var grade = document.getElementById("grade").value
    if(isNaN(grade)||grade<0||grade>100)
        document.getElementById("incorrect").innerHTML = "You must enter a number between 0-100."
    else{
        document.getElementById("grades").innerHTML +=(`<p>Student Name: ${document.getElementById("text").value} Grade: ${grade}</p>`)
        document.getElementById("incorrect").innerHTML=""
        gradeView()
    }
}