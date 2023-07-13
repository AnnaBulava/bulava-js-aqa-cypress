import { HiddenElementsPage} from "../pages/hidden-elements";

export class HiddenElementsStep {
    visit() {
        HiddenElementsPage.visit('http://www.webdriveruniversity.com/Hidden-Elements/index.html');
        cy.url().should('include', 'Hidden-Elements')
    }
    
    clickNotDisplayedButton() {
        HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
        HiddenElementsPage.getNotDisplayedButton.click({force: true}).should('not.be.visible');
    }

    clickNotDisplayButtonByHTML() {
        HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
        HiddenElementsPage.getNotDisplayedDiv.invoke('css', 'display', 'block');
        HiddenElementsPage.getNotDisplayedButton.invoke('html', '<p> CLICK ME!</p>');
        HiddenElementsPage.getNotDisplayedButton.find('p').should('have.text', ' CLICK ME!').click();
    }
    
    changeDisabledStatusByHTML() {
        HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
        HiddenElementsPage.getNotDisplayedButton.invoke('attr', 'style', 'display: block !important').click({force: true}); //the Invoke in this function is not necessary, as it still does not make our button visible and we still need to use the "force true" method to click on the button that's not displayed.
        //HiddenElementsPage.getNotDisplayedButton.click({force: true});
    }
    
    clickVisibilityButton() {
        HiddenElementsPage.getVisibilityButton.should('not.be.visible'); //.type({force: true}), .clear force true - works for these commands too
        HiddenElementsPage.getVisibilityButton.invoke('css', 'visibility', 'visible').click().should('be.visible');
        //HiddenElementsPage.getVisibilityButton.click({force: true}).should('be.visible');
    }

    clickZeroOpacityButton() {
        HiddenElementsPage.getZeroOpacityButton.should('exist');
        HiddenElementsPage.getZeroOpacityModal.invoke('css', 'opacity', '1').should('be.visible');
        HiddenElementsPage.getZeroOpacityButton.invoke('css', 'opacity', '1').click().should('be.visible')
        //HiddenElementsPage.getZeroOpacityButton.click();
    }
}

export const hiddenElementsStep = new HiddenElementsStep();