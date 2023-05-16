import { BsFillTelephoneFill, BsInstagram, BsTelegram } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi'
import { FaBars } from 'react-icons/fa'


import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home']))
    }
  }
}
function Navbar(props) {
  const { c } = useTranslation()

    return (
        <div>
            <div className="navbar">
                <div className="navbar_son">
                    <div className="logo">
                        <a href='/'>
                            <img src="https://tokbor.uz/uploads/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="contacts">
                        <button className='callMe'>Menga qo'ng'iroq qiling</button>
                        <a className='phoneNumber' href=""><BsFillTelephoneFill className='number' /> +998 787 777 787</a>
                        <div className='social'>
                            <a href="https://instagram.com"><BsInstagram /></a>
                            <a href="https://telegram.me"><BsTelegram /></a>
                            <a href="https://youtube.com"><TfiYoutube /></a>
                            <a href='/en'>Eng</a>
                            <a href='/uz'>Uzb</a>
                            <a href='/ru'>Rus</a>

                        </div>
                    </div>
                    <div className='contactResponse'>
                        <FaBars/>
                    </div>
                </div>
            </div>
            <div className='navbarMenu'>
                <div className='nms'>
                    <div className='navbarMenuSon'>
                    <a href='/'>INVESTORLAR UCHUN</a>
                    <a href='/elektromobilchilar-uchun'>{c('home:electromobile')}</a>
                    <a href='/korporativ-mijozlarga'>KORPORATIV MIJOZLARGA</a>
                    <a href='/avtodileram'>AVTODILLERLARGA</a>
                    <a href='/smi'>OAV</a>
                    <a href='/loyihalar'>LOYIHALAR</a>
                </div>
                </div>
                
            </div>
        </div>

    )
}
export default Navbar