var likes = document.getElementsByClassName("like");
console.log(likes);
for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    like.addEventListener("click", function () {
        if (like.firstChild.style.color == "red") {
          like.firstChild.style.color = "black";
        } else {
          like.firstChild.style.color = "red";
        }
    });
}