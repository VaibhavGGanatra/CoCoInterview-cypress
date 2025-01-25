export default class BasePage {

    public base: Record<string, any>
    constructor() {

        // base page
        this.base = {
            usernameInput: 'input#Username',
            passwordInput: 'input#Password',
            signInButton: '#SignIn',
            tokenSelectionPanel: '#main.Main-wrap .Form-content',
            regKeyInputByName: (name) => `//label[contains(text(),"${name}")]`,
            regKeyContinueButton: '.ButtonBar button',
            fileUploadButtonRing: '[data-testid="file-upload-upload-button"] #ring',
            searchLoaderIcon: '#ring',
            searchProgressIcon: 'saf-progress-ring',
            breadCrumbItems: 'saf-breadcrumb-item',
            profileIconText: '#user-btn saf-avatar',
            acceptAllCookiesButton: '#onetrust-accept-btn-handler',
            closeCookiesButton: '#onetrust-close-btn-container > .onetrust-close-btn-handler',
            profileButton: 'saf-button#user-btn',
            welcomeDialogCloseButton: 'button#pendo-close-guide-81d5be69',
            welcomeToCoCounselV2DialogCloseButton: '._pendo-close-guide',
            sidebarNewButton: '[data-testid="new-chat-button"]',
            sortByButton: '[data-testid="sort-option-button"]',
            chatListItems: '.chat-or-folder-item-container',
            emptyChatList: '.empty-chat-list'
        }
    }

    /**
     * Login to app using valid credentials
     * @param {LoginAppType}
     * @returns {Promise<string>} - A promise that resolves to the value of the retrieved orchestration token.
     */
    async loginToApp(): Promise<any> {
        cy.visit('')
        cy.get(this.base.usernameInput).should('be.visible')
        cy.get(this.base.passwordInput).should('be.visible')
        //Update the username and password
        cy.get(this.base.usernameInput).type("TLE.TAAH-BOT@thomsonreuters.com")
        cy.get(this.base.passwordInput).type("CoCounselRocks@202401")
        cy.get(this.base.signInButton).should('be.visible')
        cy.get(this.base.signInButton).click()
        //Uncomment below 2 lines if reg key enabled for user
        //cy.get(this.base.regKeyContinueButton).should('be.visible')
        //cy.get(this.base.regKeyContinueButton).click()
        cy.get(this.base.profileIconText).should('be.visible')
        //Update the below text based on user
        cy.get(this.base.profileIconText).should('have.text', 'CT')
        cy.get(this.base.acceptAllCookiesButton).click()
        cy.get(this.base.acceptAllCookiesButton).should('not.be.visible')
    }
}