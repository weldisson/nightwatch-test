var nextCommands = {
    acessarLogin() {
      return this.waitForElementVisible('@body', 15000)
        .assert.title('trex-row - T')
        .click('@btnLogar')
        .click('@btnLoginGoogle');
    },
    realizarLogin() {
        return this.waitForElementVisible('@inpEmailGoogle', 15000)
        .setValue('@inpEmailGoogle', 'qapasseidireto@gmail.com')
        .click('@btnNextEmail')
        .waitForElementVisible('@inpSenhaGoogle', 15000)
        .setValue('@inpSenhaGoogle', 'Qapd1234@')
        .click('@btnNextSenha')
    },
    criarLista() {
        return this.waitForElementVisible('@btnSalvarArquivo', 15000)
        .click('@btnSalvarArquivo')
        .waitForElementVisible('@btnCriarNovaLista', 15000)
        .click('@btnCriarNovaLista')
        .waitForElementVisible('@inpNomeLista', 15000)
        .setValue('@inpNomeLista', 'Nova lista')
        .click('@btnSalvarLista')
        .waitForElementVisible('@tituloPage', 15000)
    },
    validarListaCriada() {
        return this.waitForElementVisible('@nomeListaCriada', 15000)
        .assert.containsText('@nomeListaCriada', 'Nova lista')
    }
};

module.exports = {
    url: 'https://www.passeidireto.com/arquivo/29260283/trex-row',
    commands: [nextCommands],
    elements: {
        body: 'body',
        btnLogar: 'a[class="button login mobile"]',
        btnLoginGoogle: 'button[class="btn_google"]',
        inpEmailGoogle: 'input[id="identifierId"]',
        inpSenhaGoogle:'input[name="password"]',
        btnNextEmail: 'div[id="identifierNext"]',
        btnNextSenha:'#passwordNext > content > span',
        btnSalvarArquivo: '#app > div.application--wrap > main > div > div > div > div > div.layout.align-space-around.justify-space-around.row.fill-height > div.flex.mv-material-viewer-main > div.layout.mv-material-viewer-toolbar.align-center.justify-space-between.row.fill-height.mv-viewer-toolbar > div:nth-child(3) > ul > li > div > button > div',
        inpNomeLista: '#modals-container > div > div > div.v--modal-box > div > div.main > div > div.form > div > div > div.v-input__slot > div > input[type=text]',
        btnSalvarLista: '#modals-container > div > div > div.v--modal-box > div > div.main > div > div.footer > button.pd-btn_base.v-btn.v-btn--depressed.v-btn--round.theme--light.orange > div',
        tituloPage: 'div[class="notification-wrapper"] h2',
        nomeListaCriada: 'h1[class="pd-card-title"]',
        btnCriarNovaLista: 'div[class="add-container"]'
    }
};
