let n = window.prompt("Digite um numero de 1 a 10")
let res = document.getElementById("res")
let res2 = document.getElementById("res2")
let h2 = res2.children[0]
let p = res2.children[1]
let nome1 = document.getElementsByTagName("h1")[0]
let imagem = res.children[0]



if(n < 1 || n > 10){
    alert("[ERRO] SOMENTE NÚMEROS DE 1 A 10")
    n = window.prompt("Digite novamente um numero de 1 a 10")
}

let pokemons = [
    adcPokemon("000","000"),
    adcPokemon("Charmander","charmander.png"),
    adcPokemon("Pikachu","pikachu.png"),
    adcPokemon("Abra","abra.png"),
    adcPokemon("Bullbasaur","bullbasaur.png"),
    adcPokemon("Caterpie","caterpie.png"),
    adcPokemon("Eevee","eevee.png"),
    adcPokemon("Gastly", "gastly.png"),
    adcPokemon("Growlithe", "growlithe.png"),
    adcPokemon("Lugia", "lugia.png"),
    adcPokemon("Squirtle", "squirtle.png"),
]

nome1.innerHTML = pokemons[n].nome

imagem.src = ".//imagem pokemon/" + pokemons[n].arquivo
p.style = "color: white; font-size: 25px; text-shadow: 2px 2px 5px black;"

switch(n){
    case "1":
        h2.innerHTML = "TIPO: Fogo"
        res2.style.backgroundColor = "rgb(255, 136, 0)"
        p.innerHTML = "Tem preferência por coisas quentes. Desde o momento em que nasce, uma chama arde na ponta de sua cauda. Sua vida acabaria se a chama se apagasse. Quando chove, dizem que o vapor jorra da ponta da cauda."
        
        break
    case  "2":
        h2.innerHTML = "TIPO: Elétrico" 
        res2.style.backgroundColor = "rgb(255, 238, 0)"
        p.innerHTML = "O pikachu, que pode gerar eletricidade poderosa, tem bolsas nas bochechas que são extremamente macias e super elásticas. Quando os Pikachu se encontram, eles tocam suas caudas e trocam eletricidade através deles como uma forma de saudação."
        break
    case "3":
        h2.innerHTML = "TIPO: psíquico"
        res2.style.backgroundColor = "rgb(189, 189, 189)"
        p.innerHTML = "Este Pokémon usa seus poderes psíquicos enquanto dorme. O conteúdo dos sonhos de Abra afeta os poderes do Pokémon. Abra pode se teletransportar durante o sono. Aparentemente, quanto mais profundamente Abra dorme, mais longe vão seus teletransportes"
        break
    case "4":
        h2.innerHTML = "TIPO: Grama"
        res2.style.backgroundColor = " rgb(20, 177, 20)"
        p.innerHTML = "Há uma semente de planta em suas costas desde o dia em que o Pokémon nasceu. A semente cresce lentamente.Enquanto é jovem, ele usa os nutrientes que estão armazenados na semente em seu dorso para crescer."
        break
    case "5":
        h2.innerHTML = "TIPO: Inseto"
        res2.style.backgroundColor = "rgb(141, 224, 93)"
        p.innerHTML = "Para proteção, ele libera um fedor horrível da antena em sua cabeça para afastar os inimigos.Seus pés curtos são apoiados em ventosas que permitem a escalada incansável de encostas e paredes."               
        break
    case "6":
        h2.innerHTML = "TIPO: Normal"
        res2.style.backgroundColor = "rgb(252, 136, 136)"
        p.innerHTML = "Ele tem a capacidade de alterar a composição de seu corpo para se adequar ao ambiente circundante.Graças à sua composição genética instável, este Pokémon especial esconde muitas evoluções diferentes possíveis."       
        break
    case "7":
        h2.innerHTML = "TIPO: Fantasma"
        res2.style.backgroundColor = "rgb(208, 55, 247)" 
        p.innerHTML = "Nascido de gases, qualquer um desmaiará se for engolfado por seu corpo gasoso, que contém veneno.Com seu corpo semelhante a um gás, ele pode se infiltrar em qualquer lugar que desejar. No entanto, pode ser levado pelo vento."
        break
    case "8":
        h2.innerHTML = "TIPO: Fogo"
        res2.style.backgroundColor = "rgb(255, 136, 0)"
        p.innerHTML = "Tem uma natureza corajosa e confiável. Ele enfrenta destemidamente inimigos maiores e mais fortes.Extremamente leal, ele latirá sem medo para qualquer oponente para proteger seu próprio Treinador do perigo."
        break
    case "9":
        h2.innerHTML = "TIPO: Lendário"
        res2.style.backgroundColor = "gold"
        p.innerHTML = "As asas de Lugia possuem um poder devastador - um leve bater de asas pode explodir casas normais. Como resultado, este Pokémon opta por viver longe da vista nas profundezas do mar."
        break
    case "10":
        h2.innerHTML = "TIPO: Água"
        res2.style.backgroundColor = "rgb(0, 204, 255)"
        p.innerHTML = "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.Quando se sente ameaçado, ele puxa seus membros para dentro de sua concha e espirra água de sua boca."
        break               
}

function adcPokemon(name,pasta){
   return{
       nome:name,
       arquivo:pasta,   
   }
}



 

