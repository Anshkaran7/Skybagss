function functio(small){
    var full = document.getElementById("imagebox")
    full.src = small.src
}

const bars = document.querySelectorAll('.bar');
bars.forEach(bar => {
  bar.addEventListener('click', () => {
    console.log(bar.style.height);
  });
});