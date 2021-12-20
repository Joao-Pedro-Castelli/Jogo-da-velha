var jogador = false
var space = []
for(let c = 0; c < 9; c++){
    space[c] = null
}
var simb = document.querySelector('span')
var tex = document.querySelector('#resultado')

function jogada(select)
{
    var esp = document.querySelector(`#s${select}`)
    var imagem = 'fundo.png'
    if( esp.getAttribute('src') == 'fundo.png')
    {
        if(jogador == false)
        {
            imagem = 'xizinho.png'
            space[select] = 'X'
            simb.innerText = 'O'
            simb.style.color = 'rgb(255, 0, 119)'
            jogador = true
        }else if(jogador == true)
            {
                var imagem = 'bolinha.png'
                space[select] = 'O'
                simb.innerText = 'X'
                simb.style.color = 'rgb(17, 0, 248)'
                jogador = false
            }
        esp.setAttribute('src', imagem)
        resultado()
    }
}

function resultado()
{
    if(space[0] != null && space[1] != null && space[2] != null && space[3] != null && space[4] != null && space[5] != null && space[6] != null && space[7] != null && space[8] != null)
    {
        tex.innerHTML = 'Empate! <br/> Para saber mais sobre o Jogo da Velha, <a href="https://pt.wikipedia.org/wiki/Jogo_da_velha" target="_blank">clique aqui</a>.'
        jogador = null
    }
    if((space[0] == 'X' && space[1] == 'X' && space[2] == 'X') || (space[3] == 'X' && space[4] == 'X' && space[5] == 'X') || (space[6] == 'X' && space[7] == 'X' && space[8] == 'X') || (space[0] == 'X' && space[3] == 'X' && space[6] == 'X') || (space[1] == 'X' && space[4] == 'X' && space[7] == 'X') || (space[2] == 'X' && space[5] == 'X' && space[8] == 'X') || (space[0] == 'X' && space[4] == 'X' && space[8] == 'X') || (space[2] == 'X' && space[4] == 'X' && space[6] == 'X'))
    {
        tex.innerHTML = 'Jogador X venceu! <br/> Para saber mais sobre o Jogo da Velha, <a href="https://pt.wikipedia.org/wiki/Jogo_da_velha" target="_blank">clique aqui</a>.'
        jogador = null
    }
    if((space[0] == 'O' && space[1] == 'O' && space[2] == 'O') || (space[3] == 'O' && space[4] == 'O' && space[5] == 'O') || (space[6] == 'O' && space[7] == 'O' && space[8] == 'O') || (space[0] == 'O' && space[3] == 'O' && space[6] == 'O') || (space[1] == 'O' && space[4] == 'O' && space[7] == 'O') || (space[2] == 'O' && space[5] == 'O' && space[8] == 'O') || (space[0] == 'O' && space[4] == 'O' && space[8] == 'O') || (space[2] == 'O' && space[4] == 'O' && space[6] == 'O'))
    {
        tex.innerHTML = 'Jogador O venceu! <br/> Para saber mais sobre o Jogo da Velha, <a href="https://pt.wikipedia.org/wiki/Jogo_da_velha" target="_blank">clique aqui</a>.'
        jogador = null
    }
}

function reset()
    {
    for(let c = 0; c < 9; c++){
        space[c] = null
        document.querySelector(`#s${c}`).setAttribute('src', 'fundo.png')
    }
    jogador = false
    simb.innerText = 'X'
    simb.style.color = 'rgb(17, 0, 248)'
    tex.innerHTML = 'O jogo está em progresso. <br/> Para conhecer as regras do Jogo da Velha, <a href="https://pt.wikipedia.org/wiki/Jogo_da_velha" target="_blank">clique aqui</a>.'
}