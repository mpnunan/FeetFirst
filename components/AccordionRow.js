import { Accordion, Button, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';

export default function AccordionRow({ favoriteProduct, onUpdate, keyNumber }) {
  const { user } = useAuth();
  const removeFavorite = () => {
    if (window.confirm(`Delete ${favoriteProduct?.title}?`)) {
      removeFavorite(favoriteProduct.id, user.uid).then(() => onUpdate());
    }
  };

  return (
    <Accordion.Item eventKey={keyNumber}>
      <Accordion.Header className="favoritesCardContainer">
        <Image className="favoritePic" src={favoriteProduct.image_url} />
        <div className="favoritesCardHeader">{favoriteProduct.title}</div>
        <div className="favBtnContainer">
          <Button className="favBtn" variant="dark" onClick={removeFavorite}>Remove Favorite</Button>
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

AccordionRow.propTypes = {
  favoriteProduct: PropTypes.shape({
    image_url: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  keyNumber: PropTypes.number.isRequired,
};
