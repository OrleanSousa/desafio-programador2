function questao_1() {
    const INDICE = 13;
    let SOMA = 0;
    let K = 0;
    
    while (K < INDICE) {
        K += 1;
        SOMA += K;
    }
    
    console.log("Questão 1 - Resultado:", SOMA);
}

function questao_2(numero) {
    let a = 0, b = 1;
    while (b < numero) {
        [a, b] = [b, a + b];
    }
    
    if (b === numero) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
}

// Função para carregar o JSON e processar os dados
function carregarDados() {
    fetch('dados.json')  // Carrega o arquivo JSON
        .then(response => response.json())  // Converte a resposta para JSON
        .then(dados => {
            // Extrair os valores de faturamento (ignorando o valor 0)
            const faturamento = dados.map(item => item.valor).filter(valor => valor > 0);
            
            // Agora podemos chamar a função questao_3 com os dados carregados
            questao_3(faturamento);
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo JSON:", error);
        });
}

// Função questao_3 (modificada para o novo formato de dados)
function questao_3(faturamento) {
    const menorFaturamento = Math.min(...faturamento);
    const maiorFaturamento = Math.max(...faturamento);
    const mediaMensal = faturamento.reduce((acc, dia) => acc + dia, 0) / faturamento.length;
    
    const diasAcimaDaMedia = faturamento.filter(dia => dia > mediaMensal).length;
    
    console.log("Menor faturamento:", menorFaturamento);
    console.log("Maior faturamento:", maiorFaturamento);
    console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
}

// Chamando a função para carregar os dados
carregarDados();


function questao_4() {
    const faturamentoEstados = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };
    
    const total = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);
    
    for (const [estado, valor] of Object.entries(faturamentoEstados)) {
        const percentual = (valor / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}

function questao_5(texto) {
    let invertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    console.log("String invertida:", invertida);
}

// Executando as questões
const testNumero = 20;  // Teste para a questão 2
const testString = "Python";

questao_1();
questao_2(testNumero);
questao_4();
questao_5(testString);
