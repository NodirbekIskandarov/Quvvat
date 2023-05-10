import { BsFillTelephoneFill, BsInstagram, BsTelegram } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi'
function Navbar() {
    return (
        <div>
            <div className="navbar">
            <div className="navbar_son">
                <div className="logo">
                    <a href=''>
                        <img src="https://tokbor.uz/uploads/logo.png" alt="logo"/>  
                    </a>
                </div>
                <div className="contacts">
                    <button className='callMe'>Menga qo'ng'iroq qiling</button>
                    <a className='phoneNumber' href=""><BsFillTelephoneFill className='number'/> +998 787 777 787</a>
                    <div className='social'>
                        <a href="https://instagram.com"><BsInstagram/></a>
                        <a href="https://telegram.me"><BsTelegram/></a>
                        <a href="https://youtube.com"><TfiYoutube/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='navbarMenu'>
            <div className='navbarMenuSon'>
                <a href=''>INVESTORLAR UCHUN</a>
                <a href=''>ELEKTROMOBILCHILAR UCHUN</a>
                <a href=''>KORPORATIV MIJOZLARGA</a>
                <a href=''>AVTODILLERLARGA</a>
                <a href=''>OAV</a>
                <a href=''>LOYIHALAR</a>
            </div>
            </div>
            <div className='offer'>
                <div className='offerSon'>
                    <a href=''>BIZ NIMA TAKLIF ETAMIZ</a>
                    <a href=''>QUVVAT BERISH STANSIYALARI</a>
                    <a href=''>DASTURIY MAJMUANING AFZALLIKLARI</a>
                </div>
            </div>
        </div>
        
    )
}
export default Navbar