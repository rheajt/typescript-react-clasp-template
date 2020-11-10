export const onOpen = () => {
    const menu = SpreadsheetApp.getUi()
        .createMenu('DEMO') // edit me!
        .addItem('Sheet Editor', 'openDialog')
        .addItem('Temp', 'temp')
        .addItem('About me', 'openAboutSidebar');

    menu.addToUi();
};

export const temp = () => {
    SpreadsheetApp.getActive().toast('temp');
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
