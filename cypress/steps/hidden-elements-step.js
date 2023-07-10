import { HiddenElementsPage} from "../pages/hidden-elements";

export class HiddenElementsStep {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Hidden-Elements/index.html');
        cy.url().should('contain', 'Hidden-Elements')
    }
    
    clickNotDisplayedButton() {
        HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
        HiddenElementsPage.getNotDisplayedButton.click({force: true}).should('not.be.visible');
    }

    changeDisabledStatusByHTML() {
        HiddenElementsPage.getNotDisplayedButton.should('not.be.visible');
        HiddenElementsPage.getNotDisplayedButton.invoke('attr', 'style', 'display: block !important').click();
        HiddenElementsPage.getNotDisplayedButton.click({force: true});
    }
    
    clickVisibilityButton() {
        HiddenElementsPage.getVisibilityButton.should('not.be.visible'); //.type({force: true}), .clear force true - works for these commands too
        HiddenElementsPage.getVisibilityButton.invoke('css', 'visibility', 'visible').click().should('be.visible');
        //HiddenElementsPage.getVisibilityButton.click({force: true}).should('be.visible');
    }

    clickZeroOpacityButton() {
        HiddenElementsPage.getZeroOpacityButton.should('exist');
        HiddenElementsPage.getZeroOpacityButton.invoke('css', 'opacity', '1').click().should('be.visible')
        //HiddenElementsPage.getZeroOpacityButton.click();
    }
}

export const hiddenElementsStep = new HiddenElementsStep();