const toggleButton = document.querySelector('#dark-light')



let calcScrollValue = () => {
    const currentMode = document.body.dataset.mode 
    
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    if (currentMode === 'light') {
        scrollProgress.style.background = `conic-gradient(#1d3673 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    }
     else if(currentMode === 'dark') {
        scrollProgress.style.background = `conic-gradient(#1d3673 ${scrollValue}%,rgb(14, 13, 13) ${scrollValue}%)`;
    }
    
  };

toggleButton.addEventListener('click', (e) =>{
    const currentMode = document.body.dataset.mode 
    
    if(currentMode === 'light') {
        document.documentElement.style.setProperty('--txt-clr', '#212121' );
        document.documentElement.style.setProperty('--bg-clr', '#ffffff');
document.body.dataset.mode = 'dark'
toggleButton.src ="img/sun.png";
e.target.innerHTML = 'light'; 
    }
    else if(currentMode === 'dark') {
        document.documentElement.style.setProperty('--txt-clr', '#ffffff')
        document.documentElement.style.setProperty('--bg-clr', '#212121')
document.body.dataset.mode = 'light'
toggleButton.src ="img/moon.png";
e.target.innerHTML = 'dark';

    }
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


