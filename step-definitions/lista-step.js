const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const lista_page = client.page.lista_page();

Given('que eu esteja no site Passei Direto', () => {
    return lista_page
        .navigate()
        .acessarLogin();
});
Given('logado no sistema com uma conta gmail', () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
When('salvo um arquivo em uma nova lista', () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('visualizo a nova lista criada com sucesso', () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});