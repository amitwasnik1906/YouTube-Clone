import React, { useEffect } from 'react'
import "./_loginScreen.scss"
import { login } from '../../redux/actions/auth.action'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function LoginScreen() {
   const dispatch = useDispatch()
   const accessToken = sessionStorage.getItem("ytc-access-token")

   const loginHandler = () => {
      dispatch(login())
   }

   const navigate = useNavigate()

   useEffect(() => {
      if (accessToken) {
         navigate('/')
      }
   }, [accessToken, navigate])

   return (
      <div className='login'>
         <div className='login__container'>
            <h2>Youtube Clone</h2>
            <img
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               alt=''
            />
            <button
               onClick={()=>loginHandler()}
            >Login With google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
         </div>
      </div>
   )
}

export default LoginScreen
