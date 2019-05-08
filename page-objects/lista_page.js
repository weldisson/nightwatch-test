var nextCommands = {
    acessarLogin() {
      return this.waitForElementVisible('@body')
        .assert.title('trex-row - T')
        .click('@btnLogar')
        .click('@btnLoginGoogle');
    }
};

module.exports = {
    url: 'https://www.passeidireto.com/arquivo/29260283/trex-row',
    commands: [nextCommands],
    elements: {
        body: 'body',
        btnLogar: 'a[class="button login mobile"]',
        btnLoginGoogle: 'button[class="btn_google"]'
    }
};
