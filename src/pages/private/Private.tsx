import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import { AppDispatch, RootState } from '../../redux/store/store'
import Sidebar from '../../components/sidebar/Sidebar'
import {useDispatch} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        console.log(true);
        
        // dispatch()
    }, [])

  return (
    <div className='dashboard'>
        {
            auth.token  ?
            <>
                <Sidebar/>
                <Outlet/>
            </> 
            : <Navigate to={"/auth/login"}/>



        }
    </div>
  )
}

export default Private