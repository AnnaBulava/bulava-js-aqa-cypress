import AccordionsPage from "../pages/accordions-page";
import { accordions } from "../test-data/accordions";
const accordionsPage = new AccordionsPage;

describe('Accordions Page', () => {
    beforeEach(() => {
        accordionsPage.openAccordionsPage();
      })

      accordions.forEach((accordion, index) => {
        it(`Open the page and verify the visibility and content of accordion ${accordion.title}`, () => {
            if(index < 3) {
                accordionsPage.verifyAccordionsTitleAndDescription(accordion);
            }
            else if(index === 3) {
                setTimeout(() => {
                    accordionsPage.verifyAccordionsTitleAndDescription(accordion);
                },10000)
            }
        })
    })
})
