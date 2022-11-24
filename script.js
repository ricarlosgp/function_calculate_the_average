/*lista de aluno*/
//obs: quando declaramos uma variável e informamos seu valor, esse valor passa a ser a variável
// {} entre chaves é OBJETO que contêm PROPERTY
// [] entre colchetes é ARREY que contêm qualquer coisa(objeto, sting, number,booleam etc...)
// () entre parênteses à vezes é PARAMETER, ARGUMENTOS ...
// `` é Template literals ou Template strings
// ${} 

alert(`Olá, me chamo ricarlosgp@gmail.com, sou estudante de desenvolvimento web front-end. Criei uma função que irá calcular a média das notas de alguns alunos e supondo que a média seja 7, irei verificar se cada aluno(a) obteve sucesso ou não em entrar no concurso e irei exibir mensagem na tela.`)


let belo = {name: 'Ricarlos', noteOne: 9, noteTwo: 9, sex: 'masculine'} //declarando variável que recebe objetos{} e dentro do objeto contêm propriedades com valores ex: name:'Sorionaet' string ou number ou boolen
let taia = {name: 'Ricássia', noteOne: 5, noteTwo: 6, sex: 'feminine'}
let gabriel = {name: 'Átila', noteOne: 5, noteTwo: 4, sex: 'masculine'}
let maya = {name: 'Assuramaya', noteOne: 8, noteTwo: 8, sex: 'feminine'}

//obs: let students vai varrer e armazenar todos os objetos acima e guardar todas as property no array
let students = [belo, taia, gabriel, maya] //declarando uma variável let students que recebe um array[] e os ELEMENTOS DO ARRAY são as variáveis declaradas(belo, taia, gabriel, maya) e seus valores acima na mesma ordem. Lembrando que para cada variável declarada foi atribuído objetos com suas propriedades. Tudo o que está entre{} são objetos que contêm propriedades. Ex: a variável let name recebe um obketo e a propriedade name recebeu valor de uma string = Ricarlos, Ricássia, Átila, Assuramaya.

//o for...of é um loop que vai percorrer todo o array let students 
for(let student of students){ //students se refere ao ARRAY let students e dentro desse escopo execute {}
    let Name = (student.name) //declarando uma nova variavél let Name que recebe a variavel let student e a propriedade name do objeto 
    let score1 = (student.noteOne)//declarado nova variável let score1 que recebe a variável let student e a propriedade noteOne do objeto
    let score2 = (student.noteTwo)//declarado nova variável let score2 que recebe a variável let student e a propriedade noteTwo do objeto
    let sexuality = (student.sex)//declarado nova variável sexuality que recebe a variável let student e a propriedade sex do objeto
   
    getScore(Name, score1, score2, sexuality)  //criamos uma função de controle getScore com argumentos do escopo do for..of na mesma sequencia(Name, score1, score2, sexuality).
}

function getScore(name, n1, n2, sex){ //criou uma função reatribuindo os ARGUMENTOS(Name, score1, score2, sexuality) para PARÂMETROS(name, n1, n2, sex) do getScore e executando o escopo do objeto{}
    let estudante = name;
    let calculo = (n1 + n2)/2;
    let sexuality = sex;

    let average = 6;

    let A = calculo >= average;
    let F = calculo < average;
    let men = sexuality == 'masculine';
   
    if(A){
        if(men == true){
            alert(`A média do aluno ${estudante} foi de: ${calculo}.\n 
            Parabéns você foi aprovado no concurso.`)
        }else{
            alert(`A média da aluna ${estudante} foi de: ${calculo}.\n 
            Parabéns você foi aprovada no concurso.`)
        }
    }else if(F){
        if(men == true){
            alert(`A média do aluno ${estudante} foi de: ${calculo}.\n 
            Que pena, você foi reprovado no concurso.`)
        }else{
            alert(`A média da aluna ${estudante} foi de: ${calculo}.\n 
            Que pena, você foi reprovada no concurso.`)
        }
    }
}

