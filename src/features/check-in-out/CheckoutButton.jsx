import Button from "../../ui/Button";
import { useCheckout } from "./useCheckOut";

function CheckoutButton({ bookingId }) {
  const { checkout, isLoadingCheckout } = useCheckout();
  return (
    <Button
      variations="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isLoadingCheckout}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
