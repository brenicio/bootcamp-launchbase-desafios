# Desafio 2-3: Página de cursos e iframe

### LAUNCHBASE BOOTCAMP

> Este desafio consiste em criar uma pagina HTML (conteudos.html) com cards e iframe com estilos proprios utilizando GRID CSS.

### Sobre o desafio

A partir do arquivo do desafio 2.2, adicionar no header um link chamado Conteúdos. Essa página deve conter um grid onde devem ser mostrados os 3 principais cursos da Rocketseat: Starter, Launchbase e GoStack. Ao clicar em um dos cursos, deve ser aberta uma modal onde um iframe irá carregar as informações do curso selecionado.

### Informações da página

- Título da página
- Grid com 3 colunas e 1 linha onde serão apresentados os cards dos cursos

### Informações do card

- Logo do curso (Starter, Launchbase e GoStack)
- Título do curso
- Quantidade de módulos dos cursos
- Informação se o curso é gratuito ou pago

### Modal

O modal deve conter um iframe que busca a página do curso (dica: basta adicionar starter, launchbase ou gostack ao final de https://rocketseat.com.br/). Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal (dica: utilize a mesma lógica implementada para fechar o modalOverlay, mas trabalhe com a classe modal e utilize o método contains do classList para verificar se o elemento está ou não com a classe maximize).

### Estilização

- Deve ser utilizado o grid para organizar os cursos
- O modal nunca deve abrir maximizado
