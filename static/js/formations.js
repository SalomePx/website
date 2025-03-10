function toggleExpand() {
    let formationsBox = document.querySelector(".formations-box");

    if (formationsBox.classList.contains("expanded")) {
        formationsBox.classList.remove("expanded");
    } else {
        formationsBox.classList.add("expanded");
    }
}