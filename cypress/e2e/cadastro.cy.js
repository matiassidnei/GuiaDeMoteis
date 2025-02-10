import { faker } from '@faker-js/faker';

const email = faker.internet.email();

describe('Formulário de Cadastro', () => {
    beforeEach(() => {
        cy.visit('https://www.guiademoteis.com.br/usuario/cadastro');
    });

    it('Deve exibir erro ao digitar uma senha fraca', () => {
        cy.get('#Nome').type('Mila Teste');
        cy.get('#sexo-Masculino').check();
        cy.get('#DataNascimento').type('09102000');
        cy.get('#Cep').type('06332-335');
        cy.get('#Email').type('teste@email.com');
        cy.get('#ConfEmail').type('teste@email.com');
        cy.get('#Senha').type('123');
        cy.get('input[value="Confirmar cadastro"]').click();
        cy.contains('Senha deve ter 4 ou mais caracteres.').should('be.visible');
    });

    it('Deve exibir erro ao confirmar e-mail incorretamente', () => {
        cy.get('#Nome').type('Mila Teste');
        cy.get('#sexo-Masculino').check();
        cy.get('#DataNascimento').type('09102000');
        cy.get('#Cep').type('06332-335');
        cy.get('#Email').type('teste@email.com');
        cy.get('#ConfEmail').type('tesrrte@email.com');
        cy.get('#Senha').type('123456');
        cy.get('input[value="Confirmar cadastro"]').click();
        cy.contains('O campo confirmação de email deve ser identico ao campo email.').should('be.visible');
    });

    it('Deve cadastrar com sucesso quando todos os campos estão corretos', () => {
        cy.get('#Nome').type('Usuário Teste');
        cy.get('#sexo-Masculino').check();
        cy.get('#DataNascimento').type('09102000');
        cy.get('#Cep').type('06332-335');
        cy.get('#Email').type(email);
        cy.get('#ConfEmail').type(email);
        cy.get('#Senha').type('123456');
        cy.get('label[for="checkbox-privacy"]').click();
        cy.get('input[value="Confirmar cadastro"]').click();
        cy.contains('p', 'Tudo Ok! Seu cadastro VIP Guia de Motéis foi concluido com sucesso.', { timeout: 10000 }).should('be.visible');
    });
});

