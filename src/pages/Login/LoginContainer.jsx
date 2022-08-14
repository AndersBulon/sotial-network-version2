import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./Login.jsx";
import { authThunkCreator, logOutThunkCreator } from "../../redux/auth_reducer.js";
import { getSelected_IsAuth, getSelected_AuthMsg, getSelected_AuthToken, getSelected_AuthCode } from "../../redux/auth_selectors.js";


const mapStateToProps = (state) => {
	return {
		code: getSelected_AuthCode(state),
		token: getSelected_AuthToken(state),
		isAuth: getSelected_IsAuth(state),
		msg: getSelected_AuthMsg(state),
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => { dispatch(logOutThunkCreator()) },
		setLogin: (login, password) => (dispatch(authThunkCreator(login, password))),
	}
}

const LoginContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Login)

export default LoginContainer;