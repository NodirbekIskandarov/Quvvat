import { BsFillTelephoneFill, BsInstagram, BsTelegram } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import Link from 'next/link';




function Navbar() {
    const [menuShow, setMenuShow] = useState(1);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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
                        <button className='callMe'>{t('h1')}</button>
                        <a className='phoneNumber' href=""><BsFillTelephoneFill className='number' /> +998 787 777 787</a>
                        <div className='social'>
                            <a href="https://instagram.com"><BsInstagram /></a>
                            <a href="https://telegram.me"><BsTelegram /></a>
                            <a href="https://youtube.com"><TfiYoutube /></a>
                        </div>
                    </div>
                    <button onClick={() => i18n.changeLanguage('en')}>English</button>
                    <button onClick={() => i18n.changeLanguage('ru')}>Russian</button>
                    <button onClick={() => i18n.changeLanguage('uz')}>Uzbek</button>

                    <button onClick={() => setMenuShow(0)} className="menu-toggle">
                        <FaBars />
                    </button>
                    <div className={menuShow == 0 ? 'contactResponse activ' : 'contactResponse'}>

                        <div className='xButton'>
                            {menuShow == 0 &&
                                <button onClick={() => setMenuShow(1)}>x</button>
                            }
                        </div>
                        <div className='menu_in_respons'>
                            <div>
                                <div className='menu_in_responsSon'>
                                    {/* <a href='/'>{t('home:for_investors')}</a>
                                    <a href='/elektromobilchilar-uchun'>{t('home:for_electric_car_owners')}</a>
                                    <a href='/korporativ-mijozlarga'>{t('home:for_corporate_clients')}</a>
                                    <a href='/avtodileram'>{t('home:for_all_dealer')}</a>
                                    <a href='/smi'>{t('home:mass_media')}</a>
                                    <a href='/loyihalar'>{t('home:projects')}</a> */}
                                    <button>{t('h1')}</button>
                                    <a href=''>FOYDALANUVCHI YO‘RIQNOMASI</a>
                                    <a href=''>FAQ</a>
                                    <a href='/elektromobilchilar-uchun/acdc'>AC/DC (220В - 380В)</a>
                                    <a href='/elektromobilchilar-uchun/konnektorlarning-turlari'>KONNEKTORLARNING TURLARI</a>
                                    <a href='/elektromobilchilar-uchun/moroz'>ELECTROMOBIL SOVUQDA</a>
                                    <a href=''>SHAXSIY KABINET</a>
                                    <a>+998 787 777 787</a>
                                    <div className='social'>
                                        <a href="https://instagram.com"><BsInstagram /></a>
                                        <a href="https://telegram.me"><BsTelegram /></a>
                                        <a href="https://youtube.com"><TfiYoutube /></a>
                                    </div>
                                    <Link href="/">{t('h2')}</Link>
                                    <Link href="/elektromobilchilar-uchun">{t('h3')}</Link>
                                    <Link href="/korporativ-mijozlarga">{t('h4')}</Link>
                                    <Link href="/avtodileram">{t('h5')}</Link>
                                    <Link href="/smi">{t('h6')}</Link>
                                    <Link href="/loyihalar">{t('h7')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbarMenu'>
                <div className='nms'>
                    <div className='navbarMenuSon'>
                        <Link href="/">{t('h2')}</Link>
                        <Link href="/elektromobilchilar-uchun">{t('h3')}</Link>
                        <Link href="/korporativ-mijozlarga">{t('h4')}</Link>
                        <Link href="/avtodileram">{t('h5')}</Link>
                        <Link href="/smi">{t('h6')}</Link>
                        <Link href="/loyihalar">{t('h7')}</Link>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar