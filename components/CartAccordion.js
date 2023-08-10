/* eslint-disable react/forbid-prop-types */
import { Accordion, Button, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import { deleteCartProduct } from '../api/orderData';

export default function CartAccordion({ cartProduct, onUpdate, keyNumber }) {
  const { user } = useAuth();
  const removeFromCart = () => {
    if (window.confirm(`Remove ${cartProduct.product_id.title} from cart?`)) {
      deleteCartProduct(cartProduct.product_id.id, user.uid).then(() => onUpdate());
    }
  };

  return (
    <Accordion.Item eventKey={keyNumber}>
      <Accordion.Header className="favoritesCardContainer">
        <Image className="favoritePic" src={cartProduct.product_id.image_url} />
        <div className="favoritesCardHeader">{cartProduct.product_id.title}</div>
        <div className="favPriceContainer">
          <div className="favoritesCardPrice">${cartProduct.product_id.price}</div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <p>
          {cartProduct.product_id.description}
        </p>
        <div className="favBtnContainer">
          <Button className="favBtn" variant="dark" onClick={removeFromCart}>Remove From Cart</Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

CartAccordion.propTypes = {
  cartProduct: PropTypes.shape({
    user: PropTypes.object,
    product_id: PropTypes.object,
    id: PropTypes.number,
    price: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  keyNumber: PropTypes.number.isRequired,
};
