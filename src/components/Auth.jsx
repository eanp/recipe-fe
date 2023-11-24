import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Auth({children}) {
	let user = localStorage.getItem("token")
	if(!user){
		return <Navigate to="/" replace={true} />
	}

	return children
}
