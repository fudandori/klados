function generateBranch() {
    const acc = String(document.getElementById("acc-input").value);
    let text = String(document.getElementById("text-input").value);

    if (acc.length === 0) {
        alert("ACC must be filled in");
    } else if (text.length === 0) {
        alert("Text must be filled in");
    } else if (isNaN(acc)) {
        alert("ACC is not a valid number");
    } else {


        text = text
            .replace(/á|ä|à|â/g, "a")
            .replace(/é|ë|è|ê/g, "e")
            .replace(/í|ì|î|ï/g, "i")
            .replace(/ó|ò|ô|ö/g, "o")
            .replace(/ú|ù|û|ü/g, "u")
            .replace(/Á|À|Ä|Â/g, "A")
            .replace(/É|È|Ë|Ê/g, "E")
            .replace(/Í|Ì|Ï|Î/g, "I")
            .replace(/Ó|Ò|Ö|Ô/g, "O")
            .replace(/Ú|Ù|Ü|Û/g, "U")
            .replace(/ñ/g, "n")
            .replace(/Ñ/g, "N")
            .replace(/ +/g, " ")
            .replace(/^ /g, "")
            .replace(/ /g, "_")
            .replace(/_+/g, "_")
            .replace(/_$/g, "");

        document.getElementById('branch-input').value = "ACC-" + acc + "_" + text;
    }
}

function generateCommit() {
    let text = String(document.getElementById("branch-commit-input").value);

    text = text
        .replace(/_/, " - ")
        .replace(/_/g, " ");

    document.getElementById("commit-input").value = text;
}