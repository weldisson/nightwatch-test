const { client } = require('nightwatch-api');
const { Given, Then } = require('cucumber');
const lista_page = client.page.lista_page();

Given('que eu esteja no site Passei Direto', () => {
    return lista_page
        .navigate()
        .acessarLogin();
});