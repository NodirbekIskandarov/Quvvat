import { BsFillTelephoneFill, BsInstagram, BsTelegram } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi'
import { FaBars } from 'react-icons/fa'
import LanguageButtons from '../language/LanguageButtons';

import { useTranslation } from 'next-i18next'
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';




function Navbar() {
    const router = useRouter();
    const [menuShow, setMenuShow] = useState(1);
    const { t } = useTranslation('common')

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
                        <button className='callMe'>{t('home:call_me')}</button>
                        <a className='phoneNumber' href=""><BsFillTelephoneFill className='number' /> +998 787 777 787</a>
                        <div className='social'>
                            <a href="https://instagram.com"><BsInstagram /></a>
                            <a href="https://telegram.me"><BsTelegram /></a>
                            <a href="https://youtube.com"><TfiYoutube /></a>
                            {/* <a href='/en'>Eng</a>
                            <a href='/uz'>Uzb</a>
                            <a href='/ru'>Rus</a> */}
                            {/* <LanguageButtons/> */}
                        </div>
                    </div>
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
                                    <a href='/'>{t('home:for_investors')}</a>
                                    <a href='/elektromobilchilar-uchun'>{t('home:for_electric_car_owners')}</a>
                                    <a href='/korporativ-mijozlarga'>{t('home:for_corporate_clients')}</a>
                                    <a href='/avtodileram'>{t('home:for_all_dealer')}</a>
                                    <a href='/smi'>{t('home:mass_media')}</a>
                                    <a href='/loyihalar'>{t('home:projects')}</a>
                                    <button>Menga qo'ng'iroq qiling</button>
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
                                    {/* <Link href={router.localePath("/")}>{t('home:for_investors')}</Link>
                                    <Link href={router.localePath("/elektromobilchilar-uchun")}>{t('home:for_electric_car_owners')}</Link>
                                    <Link href={router.localePath("/korporativ-mijozlarga")}>{t('home:for_corporate_clients')}</Link>
                                    <Link href={router.localePath("/avtodileram")}>{t('home:for_all_dealer')}</Link>
                                    <Link href={router.localePath("/smi")}>{t('home:mass_media')}</Link>
                                    <Link href={router.localePath("/loyihalar")}>{t('home:projects')}</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbarMenu'>
                <div className='nms'>
                    <div className='navbarMenuSon'>
                        <a href='/'>{t('home:for_investors')}</a>
                        <a href='/elektromobilchilar-uchun'>{t('home:for_electric_car_owners')}</a>
                        <a href='/korporativ-mijozlarga'>{t('home:for_corporate_clients')}</a>
                        <a href='/avtodileram'>{t('home:for_all_dealer')}</a>
                        <a href='/smi'>{t('home:mass_media')}</a>
                        <a href='/loyihalar'>{t('home:projects')}</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar