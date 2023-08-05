import { Accordion, Button, Image } from 'react-bootstrap';

export default function AccordionRow() {
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header className="favoritesCardContainer">
        <Image className="favoritePic" src="https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
        <div className="favoritesCardHeader">Shoes description</div>
        <div className="favBtnContainer">
          <Button className="favBtn" variant="dark">Remove Favorite</Button>
          <Button className="favBtn" variant="dark">Add to Cart</Button>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  );
}
