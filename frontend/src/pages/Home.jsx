import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  //localden kullanıcı var ise verilerini al parse et ve User değişkenine ata
  const userJson = localStorage.getItem("user");
  const user = userJson ? JSON.parse(userJson) : null; //oturumu açık kullanıcının verileri user da tutulur.

  //kullanıcı çıkış fonksiyonu
  const userLogout = () => {
    localStorage.removeItem("token"); // Mührü sil
    localStorage.removeItem("user"); // Kullanıcıyı localden sil
    navigate("/login"); //giriş yap kısmına yönlendir.
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        // Giriş yapmışsa burası görünür
        <>
          <h1>Selamün Aleyküm, {user.username}!</h1>
          <button onClick={userLogout}>Güvenli Çıkış Yap</button>
        </>
      ) : (
        // Giriş yapmamışsa (Veya bir şekilde buraya sızmışsa) burası görünür
        <>
  
          <h1>Yetkisiz Giriş!!</h1>
          <p>Devam etmek için giriş yap</p>
          <br />
          <Link to="/login">Giriş Yap</Link> |{" "}
          <Link to="/register">Kayıt Ol</Link>
        </>
      )}
    </div>
  );
}

export default Home;
