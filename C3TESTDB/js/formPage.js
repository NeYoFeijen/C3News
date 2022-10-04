const formSuccessAlert = document.getElementById("successAlert");
const formDangerAlert = document.getElementById("dangerAlert");

function validateForm() {
    let formName = document.forms["form"]["fName"].value;
    let formAdress = document.forms["form"]["fAdress"].value;

    if (!formName == "" && !formAdress == "") {
        formDangerAlert.classList.add("hide");
        formSuccessAlert.classList.remove("hide");
    } else {
        formSuccessAlert.classList.add("hide");
        formDangerAlert.classList.remove("hide");
    }
}

function hideDangerAlert() {
    formDangerAlert.classList.add("hide");
}

function hideSuccessAlert() {
    formSuccessAlert.classList.add("hide");
}