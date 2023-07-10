import AccordionsPage from "../pages/accordions-page";
import { accordions } from "../test-data/accordions";
import { accordionsStep } from "../steps/accordions-step";
const accordionsPage = new AccordionsPage;

describe('Accordions Page', () => {
    beforeEach(() => {
        accordionsStep.openAccordionsPage();
      })

        it('Open the page, check the text in the header and in the Text Appear box', () => {
            accordionsStep.verifyHeaderText();
            accordionsStep.verifyTextAppearBoxOnPageLoad();
        })

      accordions.forEach((accordion, index) => {
        it(`Open the page and verify the visibility and content of accordion ${accordion.title}`, () => {
            if(index < 3) {
                accordionsStep.verifyAccordionsTitleAndDescription(accordion);
            }
            else if(index === 3) {
                setTimeout(() => {
                    accordionsStep.verifyAccordionsTitleAndDescription(accordion);
                    accordionsStep.verifyTextAppearBoxAfter5Seconds();
                },10000)
            }
        })
    })
})
