
describe('Hello World Challenge', () => {
    it('logs "Hello World!" to the console', () => {
        const expectedMessage = "Hello World!";
        const consoleSpy = jest.spyOn(console, 'log')

        require("../codes/8a68bafa-e4f5-4821-b944-1f042b845f34")

        try {
            expect(consoleSpy).toHaveBeenCalledWith(expectedMessage);
        } catch (error) {
            throw new Error(`Expected: ${expectedMessage} but received: ${consoleSpy.mock.calls[0][0]}`);
        } finally {
            consoleSpy.mockRestore();
        }
    });
}); 