import { connect } from "react-redux";
import { compose } from "redux";
import { registerThunkCreator } from "../../redux/auth_reducer.js";
import { getSelected_AuthCode, getSelected_AuthMsg} from "../../redux/auth_selectors.js";
import Reg from "./Reg.jsx";


const mapStateToProps = (state) => {
	return {
		msg: getSelected_AuthMsg(state),
		code: getSelected_AuthCode(state),
	
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setRegistration: (name, login, email, password) =>
		 (dispatch(registerThunkCreator(name, login, email, password)))
	}
}

const RegContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Reg)

export default RegContainer;