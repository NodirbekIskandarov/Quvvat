const takliflar = [
    {
        img: "https://tokbor.uz/uploads/articles/1233/article-original.png",
        text: "Bizning iqlim xususiyatlarimiz uchun maxsus ishlab chiqilgan yuqori sifatli uskunalar"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1232/article-original.png",
        text: "Uskunalarni o‘rnatish"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1231/article-original.png",
        text: "Barcha huquqiy hujjatlarni tayyorlash"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1230/article-original.png",
        text: "Lokatsiyani TOK BOR zaryad stansiyalarining yagona platformasiga ulash"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1229/article-original.png",
        text: "Quvvat berish stansiyalarining billingi To‘lovlarni qabul qilib olish va taqsimlash"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1228/article-original.png",
        text: "Kafolatli va kafolatdan keyingi xizmat ko‘rsatish"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1227/article-original.png",
        text: "Umr bo‘yi xizmat ko‘rsatish"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1226/article-original.png",
        text: "Aloqa liniyasining oxirida turgan foydalanuvchilar uchun 24/7 koll markazi"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1225/article-original.png",
        text: "Lokatsiyalarni reklama yordamida jadallashtirish"
    }
]


function Taklif () {
    return (
        <div className="taklif">
            <div className="taklifSon">
                <h2>Biz hamkorlikning har qanday ko‘rinishida nima taklif etamiz:</h2>
                <p>Faqat bizda! TOK BOR elektr zaryadlash stansiyalarini o‘rnatishda biz quyidagilarni taʼminlaymiz:</p>
                <div className="xizmatlar">
                    {
                        takliflar && takliflar.map((item, index) => {
                            return (
                                <div key={index} className="xizmat">
                                    <div className="xizmatSon">
                                        <img src={item.img} alt={item.text}/>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Taklif