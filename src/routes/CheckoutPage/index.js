import CartProvider from "../../components/CartProvider";
import Checkout from "../../components/CheckoutComponent";

const CheckoutPage = () => {
  return (
    <CartProvider>
      <Checkout></Checkout>
    </CartProvider>
  );
};

export default CheckoutPage;
