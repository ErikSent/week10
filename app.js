const canvas = document.body;
const colors = ['#ebc334', '#a6e892', '#86a6eb', '#e29de3', '#8febe0', '#122a80'];

for(let i = 0; i < 1000; i++){
    const star = document.createElement('div');
    star.classList.add('star');
    
    const x = Math.floor(Math.random() * (canvas.offsetWidth - 1) + 1);
    const y = Math.floor(Math.random() * (canvas.offsetHeight - 1) + 1);
    
    star.style.left = x + 'px'; //256px
    star.style.top = y + 'px';
    
    const size = Math.floor(Math.random() * (10 -1) + 1);
    star.style.height = size + 'px';
    star.style.width = size + 'px';
    
    star.style.background = colors[Math.floor(Math.random() * colors.length)];
    canvas.append(star);
}


