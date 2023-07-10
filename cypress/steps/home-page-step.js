import HomePage from "../pages/home-page";

export class HomePageStep {
    openHomePage() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html');
        cy.url().should('contain', 'Page-Object-Model')
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
        HomePage.clickChevronLeft;
        HomePage.getImageByIndex(2).should('be.visible');
        HomePage.getIndicatorByIndex(2).should('have.class', 'active');
        cy.wait(3000);
        HomePage.clickChevronRight;
        cy.wait(3000);
        HomePage.clickChevronRight;
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
        HomePage.clickFindOutMoreButton;
        HomePage.getWelcomeModal.should('be.visible'); //checking the visibility and content of the "Welcome" modal // create "Open modal" + check its content
        HomePage.getModalTitle.should('have.text', 'Welcome to webdriveruniversity.com'); //move to test data
        HomePage.getModalBody.should('have.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        HomePage.getModalCloseIcon.should('exist');
        HomePage.getModalFindOutMoreButton.should('exist');
        HomePage.getModalCloseButton.should('exist');
    }
    
    verifyInteractionWithWelcomeModal() {
        HomePage.clickModalFindOutMoreButton; //checking the interaction with the modal buttons: Find out more, Close (x2)
        HomePage.getWelcomeModal.should('not.be.visible');
        HomePage.clickFindOutMoreButton;
        HomePage.getWelcomeModal;
        HomePage.clickModalCloseButton;
        HomePage.getWelcomeModal.should('not.be.visible');
        HomePage.clickFindOutMoreButton;
        HomePage.getWelcomeModal;
        HomePage.clickModalCloseIcon;
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
}

export const homePageStep = new HomePageStep();