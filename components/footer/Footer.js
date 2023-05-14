import { BsInstagram, BsTelegram } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi'


function Footer() {
    return (
        <div className="footer">
            <div className="footerSon">
                <div className="footerMenu">
                    <a href='/'>INVESTORLAR UCHUN</a>
                    <a href='/elektromobilchilar-uchun'>ELEKTROMOBILCHILAR UCHUN</a>
                    <a href='/korporativ-mijozlarga'>KORPORATIV MIJOZLARGA</a>
                    <a href='/avtodileram'>AVTODILLERLARGA</a>
                    <a href='/smi'>OAV</a>
                    <a href='/loyihalar'>LOYIHALAR</a>
                </div>
                <div className="footerI">
                    <div className="footerImage">
                        <a href="">
                            <img className="img1" src="https://tokbor.uz/uploads/logo.png" alt="logo"/>
                        </a>              
                        <a href="https://imgroup.uz/">
                            <img className="img2" src="https://tokbor.uz/oz/uploads/files/600logo-white.png" alt="logo2"/>
                        </a>          
                    </div>
                    <div className="footerInfo">
                        <a href="">info@tokbor.uz</a>
                    </div>
                </div>
                <div className="footerSoc">
                    <div className="fSocial">
                        <a href="https://instagram.com"><BsInstagram/></a>
                        <a href="https://telegram.me"><BsTelegram/></a>
                        <a href="https://youtube.com"><TfiYoutube/></a>
                    </div>
                    <div className='lStyle'>
                        <p>© 2020 - 2023 Tokbor.Uz | Barcha huquqlar himoyalangan.
Sayt yaratish <a href=''>Life Style</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer