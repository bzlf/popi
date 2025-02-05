document.getElementById("btnReject").addEventListener("mouseover", function() {
    let randomX = Math.random() * window.innerWidth - 100;
    let randomY = Math.random() * window.innerHeight - 50;
    this.style.position = "absolute";
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});

document.getElementById("btnAccept").addEventListener("click", function() {
    alert("mujejeje 💖");
});
