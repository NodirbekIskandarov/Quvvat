import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
const data = [
    {
        imgSrc: "https://tokbor.uz/themes/tokbor-oz/driver/img/instruction-image/instruction-image-1.png",
        text: "Tizimda ro'yxatdan o'ting"
    },
    {
        imgSrc: "https://tokbor.uz/themes/tokbor-oz/driver/img/instruction-image/instruction-image-1.png",
        text: "Tizimda ro'yxatdan o'ting"
    },
    {
        imgSrc: "https://tokbor.uz/themes/tokbor-oz/driver/img/instruction-image/instruction-image-1.png",
        text: "Tizimda ro'yxatdan o'ting"
    },
    {
        imgSrc: "https://tokbor.uz/themes/tokbor-oz/driver/img/instruction-image/instruction-image-1.png",
        text: "Tizimda ro'yxatdan o'ting"
    },
    {
        imgSrc: "https://tokbor.uz/themes/tokbor-oz/driver/img/instruction-image/instruction-image-1.png",
        text: "Tizimda ro'yxatdan o'ting"
    },
    {
        imgSrc: "https://tokbor.uz/themes/tokbor-oz/driver/img/instruction-image/instruction-image-1.png",
        text: "Tizimda ro'yxatdan o'ting"
    }
]
const data2 = [
    {
        text: "Mijoz korporativ karta bilan to‘lay olmaydi. Shaxsiy hisob va kompaniya hisobi mavjud.",
        answer: "Biz, albatta, nima uchun bu holat sodir bo'lganini tekshiramiz (operator avtoulovchining telefon raqamini, ilovadan skrinshotni ilova qiladi va uni texnik yordamga yuboradi)."
    },
    {
        text: "Mijoz korporativ karta bilan to‘lay olmaydi. Shaxsiy hisob va kompaniya hisobi mavjud.",
        answer: "Biz, albatta, nima uchun bu holat sodir bo'lganini tekshiramiz (operator avtoulovchining telefon raqamini, ilovadan skrinshotni ilova qiladi va uni texnik yordamga yuboradi)."
    },
    {
        text: "Mijoz korporativ karta bilan to‘lay olmaydi. Shaxsiy hisob va kompaniya hisobi mavjud.",
        answer: "Biz, albatta, nima uchun bu holat sodir bo'lganini tekshiramiz (operator avtoulovchining telefon raqamini, ilovadan skrinshotni ilova qiladi va uni texnik yordamga yuboradi)."
    },
    {
        text: "Mijoz korporativ karta bilan to‘lay olmaydi. Shaxsiy hisob va kompaniya hisobi mavjud.",
        answer: "Biz, albatta, nima uchun bu holat sodir bo'lganini tekshiramiz (operator avtoulovchining telefon raqamini, ilovadan skrinshotni ilova qiladi va uni texnik yordamga yuboradi)."
    }
]
function ElektromobillarUchun () {
    const [questionIndex, setQuestionIndex] = useState(0);
    return (
        <div className="elektromobil">
            <div className='offer'>
                <div className='offerSon'>
                    <a href=''>FOYDALANUVCHI YO‘RIQNOMASI</a>
                    <a href=''>FAQ</a>
                    <a href='/elektromobilchilar-uchun/acdc'>AC/DC (220В - 380В)</a>
                    <a href='/elektromobilchilar-uchun/konnektorlarning-turlari'>KONNEKTORLARNING TURLARI</a>
                    <a href='/elektromobilchilar-uchun/moroz'>ELECTROMOBIL SOVUQDA</a>
                    <a href=''>SHAXSIY KABINET</a>
                </div>
            </div>
            <div className="asosiyel">
                <div className="image">
                    <img src="https://tokbor.uz/themes/tokbor-oz/driver/img/intro-image/intro-image-1.jpg"/>
                </div>
                <div className="yuklash">
                    <h2>Foydalanuxchi yo'riqnomasi</h2>
                    <p>Bizning tizimimizda ro‘yxatdan o‘ting va TOK BOR elektr quvvat berish stansiyalariga to‘liq kirish huquqiga ega bo‘ling</p>
                    <div className="mobileApp">
                        <button>AppStore da yuklab oling</button>
                        <button>Google Play da yuklab oling</button>
                    </div>
                    <div className='row'>
                        {
                            data && data.map((item, index) => {
                                return (
                                    <div className='card' key={index}>
                                        <img src={item.imgSrc}/>
                                        <p>{item.text}</p>
                                        {
                                            index%3!=2 && <BsArrowRightShort className='toRight'/>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='faq' id='faq'>
                        <h2>FAQ</h2>
                        <div className='render'>
                            {
                                data2 && data2.map((item, index) => {
                                    return (
                                        <div key={index} className='renderSon'>
                                            <div className='question'>
                                                <p>{item.text}</p>
                                                <button>
                                                    {
                                                        questionIndex!=index?<span onClick={() => setQuestionIndex(index)}>+</span>:
                                                        <span onClick={() => setQuestionIndex(null)}>-</span>
                                                    }
                                                
                                                </button>
                                            </div>
                                            <div className={questionIndex==index?"answer active":"answer"}>
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
            </div>
        </div>
    )
}
export default ElektromobillarUchun