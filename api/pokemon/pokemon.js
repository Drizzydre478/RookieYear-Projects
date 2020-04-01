let content = "";
const button = document.getElementById('button')
button.addEventListener('click', function(){
    button.hidden = true;
    for(let i = 1; i <701;i++){
            content += "<img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+i+".png'>"
    }
    document.getElementById('catchum').innerHTML = content;
})