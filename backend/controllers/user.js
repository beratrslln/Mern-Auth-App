//user.js

const bcrypt = require("bcrypt");
const User = require("../models/User");
//json web token oluşturmak için aşağıdaki yapıyı import ederiz.
const jwt = require("jsonwebtoken"); 





exports.registerPost = async (req, res) => { 
    try {
     
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        //Veritabanına kaydı
        await user.save();

        res.status(201).json({ 
            mesaj: "KAYDINIZ BAŞARIYLA OLUŞTURULDU"
        });

    } catch (err) {
        res.status(500).json({ hata: "Kayıt sırasında bir sıkıntı çıktı." });
    }
};





exports.    loginPost = async (req,res)=>{
    try{
        //kullanıcıdan girilen email ve passwordu aldık
        const {email , password} =  req.body;
        //findOne ile kullanıcıdan girilen email ile db ye gidip email sütununda var ise o kullanıcının BÜTÜN verilerini getiririz.
        const kullaniciSorgu =await User.findOne(({email:email})) //sağdaki bizim değerimiz soldaki db sütunu
        if(kullaniciSorgu){
            //bcrypt compare ile kullanıcıdan girilen şifre hashlenip db deki hashli şifresiyle karşılaştırılır. eşlenirse true döndürür.
            const passwordSorgu = await bcrypt.compare(password , kullaniciSorgu.password) 
            if(passwordSorgu){
            //eğer passwordSorgu doğruysa kullanıcı giriş yapmalıdır.
            
                //jwt için token oluştururuz.
                const token = jwt.sign(
                { id: kullaniciSorgu._id },
                    process.env.JWT_SECRET, // <-- BURASI ARTIK GİZLİ!
                   { expiresIn: "1h" }
                );
    
                res.status(200).json({
                    mesaj : "Giriş Başarılı Kod:200",
                    token : token,
                    kullanici:{
                        email : kullaniciSorgu.email,
                        username : kullaniciSorgu.username
                    }
                })}
                
                else{
                res.status(500).json({hata : "hatalı parola girdiniz. hata kodu:500" })  
            }
        }else{
            res.status(500).json({hata : "Kullanıcı bulunamadı. hata kodu:500" }) 
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({ hata: "Sunucu hatası oluştu." });
    }

    
}