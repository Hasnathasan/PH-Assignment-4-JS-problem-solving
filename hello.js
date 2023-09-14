const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('genNew').style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("mouseenter", setBg);
  setBg();