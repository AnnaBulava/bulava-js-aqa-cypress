import AccordionsPage from "../pages/accordions-page";
import { accordions } from "../test-data/accordions";
const accordionsPage = new AccordionsPage;

describe('Accordions Page', () => {
    beforeEach(() => {
        accordionsPage.openAccordionsPage();
      })
      accordions.forEach(accordion => {
        it(`Open the page and verify the visibility and title of accordion ${accordion.title}`, () => {
          accordionsPage.verifyAccordionVisibilityAndTitles(accordion);
        })
      })

      accordions.forEach((accordion, index) => {
      it(`Open the page and verify accordions with immediate response on click`, () => {
        //if(accordions.length <= 3) {
            console.log('index = ', index);
        if(index < 3) {
            accordionsPage.verifyAccordionsTextDisplayedImmediately(accordion);
        }
      })
    })
})
