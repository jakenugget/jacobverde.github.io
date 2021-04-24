var date = new Date();
document.getElementById("year").innerHTML = date.getFullYear();

function Update() {
    var message = "";

    if (document.fileModifiedDate) {
        message += "Last updated: " + document.fileModifiedDate;
    }
    if (document.lastModified) {
        message += "Last updated: " + document.lastModified;
    }
    if (document.fileUpdatedDate) {
        message += "Last updated: " + document.fileUpdatedDate;
    }

    var info = document.getElementById("updatedDate");
    info.textContent = message;
}
