describe('Hello Node.js App Test', () => {
    it('should display the correct message', () => {
        browser.get('https://practixsao21hds.surge.sh/');
        const message = element(by.tagName('h1')).getText();
        expect(message).toContain('Hello, Node.js!');
    });
});
