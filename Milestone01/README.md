# Project Milestone 1 - Store Mockup

Project

O que vamos fazer?
* Loja de tortas
* Descrição curta da aplicação
* Loja que vende bolos prontos ou personalizados
* Mockups
* Entregar até dia 20/05
* Usaremos o Figma para fazer os mocks
* Após o dia 20/05 conversaremos para corrigir os erros e para tentar alcançar a pontuação máxima

Telas base da nossa aplicação
* Cliente
* Página home
* Produtos
* Carrinho
* Meus Pedidos

# Relatório geral

Requerimentos cumpridos:
1. Escrita do relatório (este documento!)
2. [Diagrama de fluxo](https://github.com/jorgesalhani/StoreWebProject/blob/main/Milestone01/Fluxo_Pags.jpg)
3. Mockup completo no [Figma](https://www.figma.com/community/file/979470959790367574) e em [pdf](https://github.com/jorgesalhani/StoreWebProject/blob/main/Milestone01/MockUp.pdf) das páginas (high-fidelity)

Abaixo estão listadas as funcionalidades que pretendemos implementar. Para cada página associaremos as funções desejadas.
# Mockup

1. Home
- Slider contendo os produtos mais vendidos
- Rolagem de produtos em lista contendo aqueles em promoção (menores preços)

Ambas informações para query (mais vendidos e menores preços) devem ser selecionadas conforme o número de vendas de cada produto e seu preço, armazenado no banco de dados conforme a página AdmProdutos;

- Na listagem de promoções, cada figura de produto é linkada à sua página de referência ProdutosEspecíficos. Cada item da lista contém uma descrição curta do produto

2. Login
- Formulário simploes contendo espaços textuais para preenchimento. O Login garante acesso às funções de carrinho e pagamento. Caso o login é feito sem que uma conta esteja vinculada no banco de dados (AdmClientes), uma mensagem de erro deve aparecer e o cliente deve ser sugerido a cadastrar-se pelo botão 'Crie uma conta'.
- Em princípio deixamos explícita a função 'Administrador', que garante acesso às páginas Adm*. Futuramente esse link será feito diretamente via consulta das contas de funcionários conforme página AdmPrivilegios. Caso exista privilégio de Adm à conta inserida, o acesso às informações Adm são automáticas

3. Cadastro
- Formulário simples contendo espaços textuais para preenchimento. O botão Cadastrar registra as informações passadas em um banco de dados conforme a página AdmClientes

4. Profile
- Informações da conta com botão de edição. O botão redireciona à página ProfileEdit

5. ProfileEdit
- Formulário simples contendo espaços textuais para preencimento. O botão Finalizar altera as informações do cliente previamente armazenadas com as novas

6. AdmPrivilegios
- Menu contendo abas: Gerenciar privilégios (página atual), Clientes, Produtos, Pedidos. Cada uma redireciona às páginas AdmClientes, AdmProdutos, AdmPedidos
- Permite a manutenção de privilégios a cada uma das contas.
- Dados presentes: Id, Nome, Email, Fone, Função, Privilégio

7. AdmClientes
- Permite acesso às contas de clientes já registradas
- Dados presentes: Id, Nome, Email, Fone

8. AdmProdutos
- Permite acesso aos produtos registrados
- Dados presentes: Id, Nome, Descrição, Foto, Preço, Número em estoque, Número de vendas

9. AdmPedidos
- Permite acesso aos pedidos já registrados
- Dados presentes: Id, Nome, Comentário, Preço, Número de vendas, Data

10. ProdutosTodos
- Acesso a uma matriz de elementos, contendo cada produto vendido que apresente o rótulo clicado no menu do header (Bolos, Tortas, Cupcakes, Veganos, Diet)
- Cada imagem é um link para uma página específica do produto selecionado seguindo a estrutura da página ProdutosEspecíficos
- Abaixo de cada imagem, explicitamos detalhes do produto como preço e número em estoque;
- Ao lado, temos uma caixa de texto contendo detalhes de descrição do produto
- Ao fim da página, mantemos em qual número de página a pessoa está

11. ProdutosEspecificos
- Acesso àsinformações do produto selecionado
- Botão que armazena o produto ao carrinho do cliente

12. Carrinho
- Lista contendo os produtos selecionados pelo cliente em aberto
- Botão para adição de mais produtos ao carrinho
- Botão de finalização de compra
- Cada item permite ao cliente visualizar o número de itens do mesmo produto que foram adicionados e um botão com a função de customização

A função de customização será o diferencial da nossa loja, onde pertimiremos aos clientes a adição ou remoção de ingredientes, formatos e outras especificidades ainda não construída)

O acesso ao header e footer é comum a todas as páginas (com excessão às Adm*):
a. header
- Logo redirecionável à página Home;
- Searchbar com busca via palavras-chave referentes aos nomes dos produtos e descrições;
- Carrinho redirecionável à página Carrinho, caso login como cliente já tenha sido feito;
- Perfil redirecionável à página Profile
- Menu contendo abas: Bolos, Tortas, Cupcakes, Veganos, Diet. Cada aba vincula um mecanismo de query que separa, na página ProdutosTodos, produtos com determinado rótulo (nossa página de exemplo utiliza do rótulo 'Tortas')

b. footer
- Acesso às redes sociais de nossa loja. Instagram, Facebook e Twitter
- Link à página Home e às páginas de contato e como se tornar um franqueado (ainda não construídas)

