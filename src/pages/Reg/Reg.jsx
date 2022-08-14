import style from "./Reg.module.css"
import { useForm } from "react-hook-form"
import React from "react"
import { Navigate } from "react-router-dom"
import eye from "../../assets/images/eye.svg"
import eyeClosed from "../../assets/images/eye-closed.svg"

function RegForm(props) {
	console.log(props);
	let [passType, changePassType] = React.useState("password")
	let [eyeImg, changeEyeImg] = React.useState(eyeClosed)

	const toggleType = () => {
		if (passType === "password") {
			changePassType("text")
			changeEyeImg(eye)
		}
		else {
			changePassType("password")
			changeEyeImg(eyeClosed)
		}
	}

	let errRef = React.createRef();
	let handleClick = () => {
		const wrapper = errRef.current;
		wrapper.classList.add("err")
		setTimeout(() => {
			wrapper.classList.remove("err")
		}, 850);
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onBlur" })

	const onSubmit = (data) => {
		props.setRegistration(data.name, data.login, data.email, data.password)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<fieldset className={style.fieldset}>
				<legend> Registration </legend>
				{<p ref={errRef} className={`${style.message}`}>{props.msg}</p>}
				{/* input name */}
				<div>
					<input type="text" placeholder={"Name"}
						size="20"
						className={errors.name ? style.inputErr : style.input}
						{...register('name', {
							required: "Поле Name обязательно !",
						})}
					/>
				</div>
				{errors.name ?
					<div className={style.error}>{errors.name.message}</div> :
					<div className={style.error}></div>}
				{/* input login */}
				<div>
					<input type="text" placeholder={"Login"}
						size="20"
						className={errors.login ? style.inputErr : style.input}
						{...register('login', {
							required: "Поле Login обязательно !",
						})}
					/>
				</div>
				{errors.login ?
					<div className={style.error}>{errors.login.message}</div> :
					<div className={style.error}></div>}
				{/* input email */}
				<div>
					<input type="text" placeholder={"Email"}
						size="20"
						className={errors.email ? style.inputErr : style.input}
						{...register('email', {
							required: "Поле Email обязательно !",
						})}
					/>
				</div>
				{errors.email ?
					<div className={style.error}>{errors.email.message}</div> :
					<div className={style.error}></div>}


				<div className={style.passContainer}>
					<img onClick={toggleType} className={style.eyeImg} src={eyeImg} alt="" />
					<input maxLength="20" size="20"
						{...register('password', {
							required: "Поле Password обязательно !",
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9@#$%!]).{8,20}$/,
								message: `Пароль 8 - 20 символов. Обязательны: цифра или спецсимол: "@, #, $, %, !", заглавная буква, 
										строчная буква. `
							}
						})}
						type={passType}
						className={`${errors.password ? style.inputErr : style.input} ${style.passInput}`}
						placeholder={"Password"} />
				</div>
				{errors.password ?
					<div className={style.error}>{errors.password.message}</div> :
					<div className={style.error}></div>}
			</fieldset>

			<div>
				<input type="submit" className={`${style.submitBtn} button`}
					onClick={handleClick}
					value="Send"
				/>
			</div>
		</form>
	)
}

function Reg(props) {
	if (props.code === 0) {
		return <Navigate replace to='/login' />
	}
	if (props.auth) {
		return <Navigate replace to='/' />
	}
	return (
		<div className={style.content} >
			<h3>Registration</h3>
			<RegForm
				{...props}
			/>
		</div>
	)
}
export default Reg;