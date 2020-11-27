describe('verify check options', () => {
    it('uploading a file', async () => {
        cy.visit('https://www.w3schools.com/howto/howto_html_file_upload_button.asp')

        /* Plain HTML input */
        const yourFixturePath = 'ntd.jpg'; // the file to be uploaded, from the cypress/fixtures/ directory
        cy.get('[type="file"]').attachFile(yourFixturePath)
        //cy.get('[data-cy="file-input"]').attachFile(yourFixturePath);
        /* Drag-n-drop component */
        //cy.get('[data-cy="dropzone"]').attachFile(yourFixturePath, { subjectType: 'drag-n-drop' });
        /* You can also attach multiple files by chaining the command */
        //const yourBestPicture = 'meow.png';
        //cy.get('[data-cy="file-input"]').attachFile(yourFixturePath).attachFile(yourBestPicture);
    });

    it('Downloading a file', async () => {
        cy.downloadFile('https://www.w3schools.com/getcertified.jpg','my download','getcertified.jpg')
    });
});