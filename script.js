function changeImage(newSrc) {
    let imageElement = document.getElementById('shoe-pic')
    imageElement.src = newSrc;
    imageElement.classList.add("w-[640px] h-[640px]")
}