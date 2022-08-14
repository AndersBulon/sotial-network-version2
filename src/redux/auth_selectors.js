export const getSelected_Login = (state) => {
	return state.auth.login;
}

export const getSelected_MyId = (state) => {
	return state.auth.myId;
}
export const getSelected_Captcha = (state) => {
	return state.auth.captcha;
}
export const getSelected_AuthMessages = (state) => {
	return state.auth.messages;
}


export const getSelected_IsAuth = (state) => {
	return state.auth.isAuth;
}
export const getSelected_AuthMsg = (state) => {
	return state.auth.msg;
}
export const getSelected_AuthCode = (state) => {
	return state.auth.code;
}
export const getSelected_AuthToken = (state) => {
	return state.auth.token;
}