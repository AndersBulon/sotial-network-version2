import axios from "axios"


const instance = axios.create({
	baseURL: "http://127.0.0.1:3001/account",
	// withCredentials: true,
	headers: { "Content-Type": "application/json" }
});

// export const usersAPI = {

// 	setFollow(id) {
// 		return (
// 			instance.post(`follow/${id}`,
// 				{})
// 				.then(response => response.data)
// 		);
// 	},
// 	delFollow(id) {
// 		return (
// 			instance.delete(`follow/${id}`,
// 			)
// 				.then(response => response.data)
// 		);
// 	},
// 	setUsersPageParams(numpage, pagesize) {
// 		return (
// 			instance.get(`users?page=${numpage}&count=${pagesize}`,
// 			)
// 				.then(response => response.data)
// 		);
// 	},
// }

export const authAPISN = {
	setRegistration(name, login, email, password) {

		return (
			instance.post(`/reg`,
				{ name: name, login: login, email: email, password: password })
		);
	},
	// getAuthorisation() {
	// 	return (
	// 		instance.get(`auth/me`)
	// 	);
	// },
	// setLogin(email, password, rememberMe = false, captcha = '') {
	// 	return (
	// 		instance.post(`auth/login`, { email: email, password: password, rememberMe: rememberMe, captcha: captcha })
	// 	);
	// },
	// unLogin() {
	// 	return (
	// 		instance.delete(`auth/login`)
	// 	);
	// },
	// getCaptchaURL() {
	// 	return (
	// 		instance.get(`security/get-captcha-url`)
	// 	);
	// },
}

// export const profileAPI = {
// 	async getProfile(id) {
// 		try {
// 			return await instance.get(`profile/${id}`)
// 		} catch (err) {
// 			console.log("ОШИБКА из getProfile:", err.toString());
// 			return false
// 		}
// 	},
// 	async getStatus(usrId) {
// 		try {
// 			return await instance.get(`profile/status/${usrId}`)
// 		} catch (err) {
// 			console.log("ОШИБКА из getStatus:", err.toString());
// 			return false
// 		}
// 	},
// 	updateStatus(status) {
// 		return instance.put(`profile/status`, { status: status });
// 	},
// 	updatePhoto(file) {
// 		const formData = new FormData();
// 		formData.append("image", file)
// 		return instance.put(`profile/photo`, formData, {
// 			headers: {
// 				'Content-Type': "multipart/form-data"
// 			}
// 		});
// 	},
// 	updateProfile(fullName, aboutMe, lookingForAJobDescription, lookingForAJob, contacts) {
// 		return instance.put(`profile`, {fullName, aboutMe, lookingForAJobDescription, lookingForAJob, contacts});
// 	},

// }
