document.querySelector("#search-icon").addEventListener("click", searchOrRedirect);
document.querySelector(".input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchOrRedirect();
    }
});
function searchOrRedirect() {
    const input = document.querySelector(".input").value;
    const urlPattern = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/; 
    const dotPattern = /^[^\s]+[.][^\s]+$/;

    if (urlPattern.test(input)) {
        window.open(input, "_blank"); 
    } else if (dotPattern.test(input)) {
        const websiteUrl = `https://${input}`; 
        window.open(websiteUrl, "_blank"); 
    } else {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
        window.location.href = searchUrl; 
    }
}
