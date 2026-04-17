import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {
const [formData, setFormData] = useState({username:"" , email : "" , password : "" }) 
const navigate = useNavigate();

const registerSubmit = async (e)=>{
    e.preventDefault(); //sayfanın yenilemesini engeller.
    try{
      const response = await axios.post("http://localhost:3000/api/register" , formData)
      alert(response.data.mesaj);
    }catch(err){
      alert(err.response?.data?.hata || "Bir sıkıntı çıktı!")
    }

    navigate("/login")
}

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <form onSubmit={registerSubmit} className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body gap-3">
        <h1 className="card-title justify-center text-2xl font-bold">HOŞGELDİN</h1>

        <span className="label-text font-bold ">Kullanıcı Adı</span>
        {/* burada inputun içine onchange tanımladık ki her yeni veri girildiğine o veriyi alsın ve formData stateinin username parametresine tanımlasın  */}
        <input required className="input input-bordered w-full transition-all duration-300 focus:border-primary outline-none " type="text" placeholder='' onChange={(e) => setFormData({...formData, username: e.target.value})} />


        <span className="label-text font-bold ">E-mail</span>
        <input required className="input input-bordered w-full transition-all duration-300 focus:border-primary outline-none" type="text" placeholder='' onChange={(e) => setFormData({...formData, email: e.target.value})} />



        <span className="label-text font-bold ">Şifre</span>
        <input required className="input input-bordered w-full transition-all duration-300 focus:border-primary outline-none" type="password" placeholder='' onChange={(e) => setFormData({...formData, password: e.target.value})} />



        <button type='submit' className="btn">Kayıt Ol</button>

        </div>
      </form>
    </div>
  )
}

export default Register

