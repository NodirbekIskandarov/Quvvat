const data = [
    {
        img: "https://tokbor.uz/oz/uploads/articles/1242/article-original.png",
        text: "Eng yaqin va bo'sh zaryadlash stantsiyasini topish"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1242/article-original.png",
        text: "Eng yaqin va bo'sh zaryadlash stantsiyasini topish"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1242/article-original.png",
        text: "Eng yaqin va bo'sh zaryadlash stantsiyasini topish"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1242/article-original.png",
        text: "Eng yaqin va bo'sh zaryadlash stantsiyasini topish"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1242/article-original.png",
        text: "Eng yaqin va bo'sh zaryadlash stantsiyasini topish"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1242/article-original.png",
        text: "Eng yaqin va bo'sh zaryadlash stantsiyasini topish"
    }
]
function DasturiyMajmua() {
    return (
        <div className="dMajmua">
            <div className='offer'>
                <div className='offerSon'>
                    <a href='/'>BIZ NIMA TAKLIF ETAMIZ</a>
                    <a href='/quvvat-berish-stansiyalari'>QUVVAT BERISH STANSIYALARI</a>
                    <a href='/dasturiy-majmuaning-afzalliklari'>DASTURIY MAJMUANING AFZALLIKLARI</a>
                </div>
            </div>
            <div className="son">
                <h1>TOK BOR dasturiy majmuasining afzalliklari</h1>
                <p>Kompaniya elektromobilchilar uchun zamonaviy dasturiy majmuani – O‘zbekiston hududida TOK BOR elektr quvvat oldirish stansiyalarini osonlashtirilgan tarzda qidirish va foydalanish uchun vositani ishlab chiqdi.</p>
                <p>iOS va Android foydalanuvchilari TOK BOR ilovasidan rus, o‘zbek va ingliz tillarida foydalanish imkoniyatiga ega bo‘lib, oddiy va tushunarli interfeysga ega hamda mahalliy to‘lov tizimi bilan integrallashtirilgan.</p>
                <h2>TOK BOR mobil ilovasida ro‘yxatdan o‘tish natijasida siz:</h2>
                <div className="row">
                    {
                        data && data.map((item, index) => {
                            return (
                                <div key={index} className="card">
                                    <img src={item.img} />
                                    <p>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="btn">
                    <button>Ulanmoq</button>
                </div>
            </div>
            <div className="son2">
                <div className="son2son">
                    <h2>Hammasi sizning smartfoningizda</h2>
                    <div className="list">
                        <ul>
                            <li>UX va UI ga zamonaviy yondashuv</li>
                            <li>UX va UI ga zamonaviy yondashuv</li>
                        </ul>
                        <ul>
                            <li>UX va UI ga zamonaviy yondashuv</li>
                            <li>UX va UI ga zamonaviy yondashuv</li>
                        </ul>
                    </div>
                    <div className="telefonlar">
                        <img className="toq" src="https://tokbor.uz/oz/uploads/articles/1246/article-original.png"/>
                        <img className="juft" src="https://tokbor.uz/oz/uploads/articles/1246/article-original.png"/>
                        <img className="toq" src="https://tokbor.uz/oz/uploads/articles/1246/article-original.png"/>
                        <img className="juft" src="https://tokbor.uz/oz/uploads/articles/1246/article-original.png"/>
                    </div>

                    <div className="buttons">
                        <button><img src="https://tokbor.uz/themes/tokbor-oz/driver/img/google.png"/></button>
                        <button><img src="https://tokbor.uz/themes/tokbor-oz/driver/img/apple.png"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DasturiyMajmua