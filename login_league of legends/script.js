
//    PARA SUBIR O SPAM PARA CIMA DA LABEL    //


const inputs = document.querySelectorAll('.input')
/*
- com isso eu busco no documento todos os selectores que possuem a classe input.
No caso, será um array com dois elementos (possui apenas dois elementos com a classe .input)
*/



const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}
/*
- Essa é uma função que eu vou chamar abaixo. Como abaixo já passei que vou chamar esssa função
quando um EVENTO ocorrer, quero saber qual elemento foi a origem desse EVENTO. Por isso tem o ({target}), ou seja,
pega a origem do elemento que teve realizou o evento, no caso o "FOCO".
- Mas como não quero adicionar a nva classe no elemento origemdo foco, mas sim no inmão anterior, ou seja, o SPAN anterior
crio uma cons spam e o target.previousElementSibling diz para pegar o "irmão" anterior ao elemento que originou o evento de foco.
- classList é uma propriedade para retornar uma lista de classes deum elemento (no caso, do irmão anterior do elemento que causou
o evento)
- .add('span-active') insere a classe ('span-active') no elemento
*/

const handleFocusOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}
/*
- O mesmo que o anterior, porém esse vai remover a classe 'span-active'
- Como quero apenas remover a classe se o elemento não estiver mais em foco E o impt estiver vazio, coloquei o if().
- No if(), para verificar que o input esteja vazio, vejo o "value" do target (que foi o elemento que ocasionou o evento)
*/



inputs.forEach((input) => {
    input.addEventListener('focus', handleFocus)
});
/* 
- forEach significa que para cada item do array (inputs), irei executar algo.
- ()=>{}  é uma função anínima (apenas uma função que não declaro o nome).   
- addEventListener( , ) serve para configurar a chamada de uma função quando um evento específico acontece. NO caso,
quando o input ficar em FOCO, vai chamar a função "handleFocus"
*/

inputs.forEach((input) => {
    input.addEventListener('focusout', handleFocusOut)
});

/*
O mesmo que o anterior, porém utilizado para quando o elemento sair de foco
*/





//    PARA ATIVAR OU DESATIVAR O BOTÃO DE LOGIN    //
const button = document.querySelector('.login__button');
/* busco no documento um elemento que possua a classe (.login__button) */


const handleChange = () => {
    const [username, password] = inputs;
    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled','');
    }
}
/* 
- no array inputs(visto no primeiro script PARA SUBIR O SPAM PARA CIMA DA LABEL), estou definindo o "username" como sendo o
primeiro elemento do array e "password" como sendo o segundo elemento
- se possuir qualquer valor no username e um valor igual ou maior que 8 caracteres na senha, vai remover o atributo 'disabled'
do botão.
- com o ELSE, caso alguma condição deixe de ser verdadeira, então irá insrir novamente o atributo 'disabled' ao botão
*/


inputs.forEach((input) => {
    input.addEventListener('input', handleChange)
});
/* o evendo dessa vez será o input, ou seja, se no campo input for digitado alguma coisa, vai executar a função handleChange */