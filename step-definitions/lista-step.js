const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const lista_page = client.page.lista_page();

Given('que eu esteja no site Passei Direto', () => {
    return lista_page
        .navigate()
        .acessarLogin();
});
Given('logado no sistema com uma conta gmail', () => {
    client
        .windowHandles((result) => {
            var handle = result.value[1]
            this.switchWindow(handle)
            
        })
    return lista_page
        .realizarLogin();
    // return lista_page
    //     .realizarLogin();
});
When('salvo um arquivo em uma nova lista', () => {
    client
        .windowHandles((result) => {
            var handle = result.value[0]
            this.switchWindow(handle)
        });
    return lista_page
        .criarLista();
    
});

Then('visualizo a nova lista criada com sucesso', () => {
    client
        .url('https://www.passeidireto.com/perfil/65340787/listas')
    return lista_page
        .validarListaCriada();
});