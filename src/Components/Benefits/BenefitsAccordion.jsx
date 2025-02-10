import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const BenefitsAccordion = () => {
  return (
    <>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Premium pet care for your friend</AccordionTrigger>
          <AccordionContent>
            We provide top-quality pet care services, ensuring your furry friend
            stays happy, healthy, and pampered. From nutritious meals to expert
            grooming, we prioritize their well-being with love and care.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Quality toys & food for your pets</AccordionTrigger>
          <AccordionContent>
            We offer a wide selection of high-quality toys and nutritious food
            to keep your pets entertained and well-fed. Our products are
            carefully chosen to ensure safety, durability, and optimal health
            benefits for your beloved companions.{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Incredible salon pet services</AccordionTrigger>
          <AccordionContent>
            Our professional pet salon offers grooming, styling, and spa
            treatments to keep your pets looking and feeling their best. With
            gentle care and high-quality products, we ensure a stress-free and
            refreshing experience for your furry friends.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Indoor & outdoor activities for pets
          </AccordionTrigger>
          <AccordionContent>
            We provide a variety of engaging indoor and outdoor activities to
            keep your pets active and happy. From interactive toys and agility
            training to fun outdoor play sessions, we ensure they get the
            exercise and stimulation they need.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default BenefitsAccordion;
