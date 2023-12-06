function calc() {
    if (studentName.value == '' && biology.value == '' && physics.value == '' && chemistry.value == '' && math.value == '' && geo.value == '' && studentID.value == '' && eng.value == '') {
        alert("Boda wa, haba")
    } else {
        var confirmation = confirm("Are you sure you want to proceed?")
        if (confirmation == true) {
            var sum = Number(biology.value) + Number(physics.value) + Number(chemistry.value) + Number(math.value) + Number(geo.value) + Number(eng.value)
            var cumu = ((sum/600) * 100) + "%"
            document.getElementById('biology').value = ""
            document.getElementById('studentName').value = ""
            document.getElementById('physics').value = ""
            document.getElementById('chemistry').value = ""
            document.getElementById('math').value = ""
            document.getElementById('geo').value = ""
            document.getElementById('eng').value = ""
            document.getElementById('studentID').value = ""
        } else {
            console.log(("check again"));
        }
    }
}