export const onOpen = () => {
    const menu = SpreadsheetApp.getUi()
        .createMenu('DEMO') // edit me!
        .addItem('Sheet Editor', 'openDialog')
        .addItem('About me', 'openAboutSidebar');

    menu.addToUi();
};

export const openDialog = () => {
    const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
        .setWidth(600)
        .setHeight(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'Dialog');
};

export const openAboutSidebar = () => {
    const html = HtmlService.createHtmlOutputFromFile('sidebar');
    SpreadsheetApp.getUi().showSidebar(html);
};
