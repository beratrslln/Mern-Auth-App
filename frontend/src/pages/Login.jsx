import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Login() {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({ email: '', password: '' })

  const loginSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/api/login', loginData)
      
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.kullanici))
      alert(response.data.mesaj)
      navigate("/home")

    } catch (err) {
      console.log(err)
      alert(err.response?.data?.hata || 'hatali giris hata kodu:500')
    }
   }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <form onSubmit={loginSubmit} className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body gap-3">

          <h1 className="card-title justify-center text-2xl font-bold">HOŞGELDİN</h1>
          <label className="form-control w-full">
            <span className="label-text font-bold ">Email</span>
            <input
              type="text"
              className="input input-bordered w-full outline-none transition-all duration-300 focus:border-primary"
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text mb-1 font-bold">Password</span>
            <input
              type="password"
              className="input input-bordered w-full outline-none transition-all duration-300 focus:border-primary"
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
          </label>

          <button type='submit' className="btn">Giriş Yap</button>

      <h3 className='font-bold text-blue-600 mt-8' >Hesabın yok mu ?</h3>

      <a href="/register" className="btn btn-outline text-blue-600">Hemen Kaydol</a>
        </div>
      </form>


<div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl">

  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    </div>
  )
}

export default Login



