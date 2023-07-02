const button = document.querySelector(".btn");
const close = document.querySelector(".close")
const videoContent = document.querySelector(".movie-content");
const video = document.querySelector(".video");

button.addEventListener("click", ()=> {
    videoContent.classList.add("active")
});

close.addEventListener("click", ()=> {
    videoContent.classList.remove("active");
    video.pause();
    video.currentTime = 0;
})