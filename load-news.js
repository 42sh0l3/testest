document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".load-more-news-btn").addEventListener("click", event => {
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status != 200) {
                alert('Erro occurted! Please refresh the page.');
            } else {
                console.log(xhr.responseXML);
                console.dir(xhr.responseXML);
            }
        };

        xhr.open("GET", "news-1.html");
        xhr.responseType = "document";
        xhr.send();
    });
});