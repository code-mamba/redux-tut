import React from "react";
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { decrement,increment,reset,login,logOut } from "../Redux/Actions/actions";

const ReduxCounter = ()=>{
	const counter = useSelector((state)=> state.counter)
	const auth = useSelector((state)=>state.auth)
	const dispatch = useDispatch()

	return(
		<div>
			<h1>Redux counter</h1>
			<button onClick={dispatch(increment)}>Increase</button>
			<button onClick={dispatch(decrement)}>Decrement</button>
			<button onClick={dispatch(reset)}>reset</button>
			<h2>For Logged in users only</h2>
			<h3>{counter}</h3>
			<p>Please Login</p>
			<button onClick={dispatch(login)}>Login</button>
			<button onClick={dispatch(logOut)} >LogOut</button>
			{auth?(
				<div>
					<p>Welcome dhanush</p>
				</div>
			):("")}
		</div>
	)
}
export default ReduxCounter