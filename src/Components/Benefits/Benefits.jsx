import gobo from "../../../public/assets/about.png";
import gigi from "../../../public/assets/gigi.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const Benefits = () => {
  return (
    <>
      <div className="lg:w-4/5 mx-auto my-16 flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:w-1/2 p-4 flex flex-col gap-10">
          <div className="w-40 px-1 py-2 rounded-lg shadow-xl">
            <h3 className="text-center text-2xl font-bold text-green-400">
              Benefits
            </h3>
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl w-11/12 leading-snug font-semibold">
              Why Choose Our Pet Care Company?
            </h1>
          </div>
          <div className="w-3/5 space-y-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="lg:w-3/5 flex items-center justify-center">
          <img className="lg:w-[600px]" src={gigi} alt="" />
        </div>
      </div>
    </>
  );
};

export default Benefits;
