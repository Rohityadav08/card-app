import { connect } from "react-redux";
import Header from "../Components/Header";

const mapStateToProps = (state) => ({
  cartData: state.cartItems,
});
const mapDispatchToProps = (state) =>({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
