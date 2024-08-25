const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const pontos = document.querySelector('.pontos');
const recorde = document.querySelector('.recordePontos');
const recordePontos = localStorage.getItem("recordePontos");
var quantidadePontos = 0;

recorde.innerHTML = recorde.innerHTML.replace('0',recordePontos);  

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    } ,500); 
}

const pontuacao = setInterval(() => {
    quantidadePontos += 1;
    pontos.innerHTML = quantidadePontos
},1500)

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle (mario).bottom.replace("px","");

    console.log (marioPosition);


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = "./imagem/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval (loop);
        clearInterval(pontuacao);
        if(quantidadePontos <= recordePontos){
            pontos.innerHTML += " - TENTE NOVAMENTE";
        }else{
            pontos.innerHTML += " - NOVO RECORDE!";
            localStorage.setItem('recordePontos',quantidadePontos);
        }
        
    }

},10);


document.addEventListener('keydown', jump);