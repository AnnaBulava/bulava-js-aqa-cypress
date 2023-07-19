import HomePage from "../pages/home-page";
import { GeneralStep } from "./general-step";

export class HomePageStep extends GeneralStep {
    openHomePage() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html');
        cy.url().should('contain', 'Page-Object-Model')
    }

    clickFindOutMoreButton() {
        HomePage.getFindOutMoreButton.click();
    }

    clickModalCloseIcon() {
        HomePage.getModalCloseIcon.click();
    }

    clickModalFindOutMoreButton() {
        HomePage.getModalFindOutMoreButton.click();
    }

    clickModalCloseButton() {
        HomePage.getModalCloseButton.click();
    }

    clickChevronLeft() {
        HomePage.getChevronLeft.click();
    }

    clickChevronRight() {
        HomePage.getChevronRight.click();
    }
    
    verifyActiveNavItem() {
        HomePage.getActiveNavItem.should('have.text', 'Home');;
    }

    verifyCarouselHasRequiredComponents() {
        HomePage.getCarousel.should('exist');
        HomePage.getCarouselItemActive.should('exist');
        HomePage.getImageByIndex(0).should('be.visible');
        HomePage.getCarouselIndicators.should('exist');
        HomePage.getChevronLeft.should('exist');
        HomePage.getChevronRight.should('exist')
    }

    verifyActiveImagesChange() {
        HomePage.getIndicatorByIndex(0).should('have.class', 'active');
        this.clickChevronLeft();
        HomePage.getImageByIndex(2).should('be.visible');
        HomePage.getIndicatorByIndex(2).should('have.class', 'active');
        cy.wait(3000);
        this.clickChevronRight();
        cy.wait(3000);
        this.clickChevronRight();
        HomePage.getImageByIndex(1).should('be.visible');
        HomePage.getIndicatorByIndex(1).should('have.class', 'active');
        HomePage.getCarouselItemActive.should('exist');
    }

    verifyWhoWeAreContainerContent() {
        HomePage.getWhoAreWeContainer.should('not.be.empty');
        HomePage.getWhoAreWeTitle.should('have.text', 'Who Are We?')
        HomePage.getFindOutMoreButton.should('exist');
    }

    verifyWelcomeModalContent() {
        this.clickFindOutMoreButton();
        HomePage.getWelcomeModal.should('be.visible'); //checking the visibility and content of the "Welcome" modal // create "Open modal" + check its content
        HomePage.getModalTitle.should('have.text', 'Welcome to webdriveruniversity.com'); //move to test data
        HomePage.getModalBody.should('have.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        HomePage.getModalCloseIcon.should('exist');
        HomePage.getModalFindOutMoreButton.should('exist');
        HomePage.getModalCloseButton.should('exist');
    }
    
    verifyInteractionWithWelcomeModal() {
        this.clickModalFindOutMoreButton(); //checking the interaction with the modal buttons: Find out more, Close (x2)
        HomePage.getWelcomeModal.should('not.be.visible');
        this.clickFindOutMoreButton();
        HomePage.getWelcomeModal;
        this.clickModalCloseButton();
        HomePage.getWelcomeModal.should('not.be.visible');
        this.clickFindOutMoreButton();
        HomePage.getWelcomeModal;
        this.clickModalCloseIcon();
        HomePage.getWelcomeModal.should('not.be.visible');
    }

    verifyWhyChooseUsContainerContent() {
        HomePage.getWhyChooseUsContainer.should('not.be.empty');
        HomePage.getWhyChooseUsTitle.should('exist');
    }

    verifyGreatServiceContainerContent() {
        HomePage.getGreatServiceContainer.should('not.be.empty');
        HomePage.getGreatServiceTitle.should('exist');
        HomePage.getGreatServiceStars.should('have.length', 5);
    }

    verifyExcellentServiceContainerContent() {
        HomePage.getExcellentCustomerServiceContainer.should('not.be.empty');
        HomePage.getExcellentCustomerServiceTitle.should('exist');
        HomePage.getExcellentCustomerServiceStars.should('have.length', 5);
    }

    verifyButtonName() {
        HomePage.getButtonName('Find Out More').should('have.text', 'Find Out More')
    }
}

export const homePageStep = new HomePageStep();