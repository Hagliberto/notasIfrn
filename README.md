# Calculadora de Notas

Este é o código-fonte de uma calculadora de notas desenvolvida para o curso de Sistemas para Internet do IFRN. A calculadora permite calcular a média das atividades, a nota parcial, a quantidade de atividades realizadas e a nota necessária na prova final para ser aprovado.

## Funcionalidades

✅ Inserir notas das atividades: A calculadora possui campos para inserir as notas das atividades de 1 a 8.

✅ Calcular média das atividades: Ao clicar no botão "Calcular Média", a calculadora realiza o cálculo da média das notas das atividades.

✅ Exibir nota parcial: A calculadora exibe a nota parcial, que é calculada a partir da média das atividades.

✅ Exibir quantidade de atividades realizadas: A calculadora exibe a quantidade de atividades realizadas com base nas notas inseridas.

✅ Exibir nota necessária na prova final: A calculadora calcula e exibe a nota necessária na prova final para ser aprovado, considerando uma média mínima de 6.

## Tecnologias Utilizadas

- HTML5: Linguagem de marcação utilizada para estruturar a página da calculadora.
- CSS3: Linguagem de estilo utilizada para definir a aparência e o layout da calculadora.
- JavaScript: Linguagem de programação utilizada para implementar a lógica de cálculo da média final.

## Instalação

1. Clone o repositório ou faça o download dos arquivos.
2. Abra o arquivo `index.html` em um navegador web.

##

Acesse: https://hagliberto.github.io/notasIfrn/

## Uso

- Insira as notas das atividades nos campos correspondentes.
- Clique no botão "Calcular Média" para calcular a média das atividades e exibir a nota parcial.
- Verifique a nota parcial, a quantidade de atividades realizadas e a nota necessária na prova final.
- Clique no botão "Apagar Notas" para limpar todos os campos e reiniciar.

## Alguns detalhes importantes utilizados no código

⚠️ Associando eventos de clique aos botões e campos no carregamento da página:⚠️ 

Os eventos de clique são associados aos botões "Calcular Média", "Calcular Nota Final" e "Redefinir" no momento em que a página é carregada. Isso permite que as funções correspondentes sejam chamadas quando esses botões são clicados.

⚠️ Evento de clique para campos de nota:⚠️ 

Quando o DOM é carregado, é atribuído um evento de clique a todos os campos de entrada com a classe "campo". Esse evento é usado para remover o atributo "placeholder" quando um campo de nota é clicado. Isso é feito para melhorar a usabilidade, tornando mais fácil a inserção de valores.

⚠️ Função validarNota:⚠️ 

Esta função é usada para validar se uma nota é um número válido, ou seja, se não é um NaN (não é um número), e se está dentro do intervalo de 0 a 10. A validação é feita com base no parâmetro isNotaFinal. Se for verdadeiro, a função verifica o intervalo de 0 a 10; caso contrário, valida apenas o intervalo de 0 a 10.

⚠️ Função calcularMedia:⚠️ 

Esta função é responsável por calcular a média das notas das atividades. Ela coleta as notas das atividades dos campos de entrada, verifica sua validade usando a função validarNota, calcula a média, a porcentagem da média e realiza várias verificações.

⚠️ Função calcularResultado:⚠️ 

Esta função é responsável por calcular a nota final do usuário. Ela coleta as notas das atividades e a nota da prova final, verifica a validade das notas, limita a nota da prova final a 10, calcula a nota final com base nas ponderações e aplica verificações de aprovação, recuperação ou reprovação.

⚠️ Função reset:⚠️ 

Esta função é acionada quando o botão "Redefinir" é clicado. Ela redefine todos os campos de entrada, remove as classes de erro, exibe um alerta se nenhum valor for inserido para recálculo e limpa os resultados anteriores.

## Contribuição

Contribuições são sempre bem-vindas! Se você tiver alguma sugestão, correção de bugs ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Sinta-se à vontade para utilizar, modificar e distribuir o código conforme necessário.

## Contato


## Agradecimentos
