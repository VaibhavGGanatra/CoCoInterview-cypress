import BasePage from '../../pages/BasePage'
const basePage = new BasePage()


describe('Chat page tests', () => {

	beforeEach(() => {
		// Clear cookies
		cy.clearCookies()

		// Clear local storage
		cy.clearLocalStorage()

		// Visit the app
		basePage.loginToApp()
	})

	//Test case 1
	it('Click on Search an entire database and select a database', () => {
		cy.get('.chat-input-upload-button:not(.disabled)').click()

		// Click on Search and entire database

		// Search for a database

		// Select the radio button for db and click on select database button
	})

	//Test case 2
	it('Rename chat', () => {
		
		// Click on 3 dots for first chat

    	// Rename chat and save
	})

	//test case 3
	it('Start a new chat', () => {
		
		 // Type below message in chat input
		 const prompt = "What can you do when upload a file"

		 // Validate the response received from the bot
	})

})