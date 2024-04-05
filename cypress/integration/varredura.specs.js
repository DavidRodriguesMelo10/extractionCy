/// realizar a varredura dos preços e nomes de produtos

describe('Coletar informaçoes nome e preço', () => {
    it('Entrar no site', async () => {
        // Entra no site
        cy.visit('https://telefonesimportados.netlify.app/');

        //Pegar os nomes dos produtos
        it('Buscar nomes dos produtos', async () => {
            cy.get(':nth-child(9) > .single-shop-product > h2 > a').as('nomeProduto');
            cy.get('@nomeProduto')
                .invoke('text')
                .then((nomeDoProduto) => {
                    console.log(`Nome do Produto: ${nomeDoProduto}`);
                });
        });

        it('Buscar  o preço dos produtos', () => {
            cy.get(':nth-child(1) > .single-shop-product > .product-carousel-price > ins').as('precoProduto');
            cy.get('@precoProduto')
                .invoke('text')
                .then((nomeDoProduto) => {
                    console.log(`Preço do Produto: ${precoProduto}`);
            })
        })
    });
    });