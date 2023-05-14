const data = [
    {
        img: "https://tokbor.uz/oz/uploads/articles/1386/article-medium.png",
        text1: "Vatanimizning eng chekka burchaklaridan biri ham e'tibordan chetda qolmadi. Bugun biz Uchquduq shahrida xitoylik elektromobillar uchun 40 kVt quvvatli TOK BOR quvvatlantirish stansiyasini o‘rnatdik.",
        text2: "Lokatsiya - Qizil avtoservis",
        text3: "Butun O‘zbekiston bo‘ylab TOK BOR bilan birgalikda sayohat qiling!"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1386/article-medium.png",
        text1: "Vatanimizning eng chekka burchaklaridan biri ham e'tibordan chetda qolmadi. Bugun biz Uchquduq shahrida xitoylik elektromobillar uchun 40 kVt quvvatli TOK BOR quvvatlantirish stansiyasini o‘rnatdik.",
        text2: "Lokatsiya - Qizil avtoservis",
        text3: "Butun O‘zbekiston bo‘ylab TOK BOR bilan birgalikda sayohat qiling!"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1386/article-medium.png",
        text1: "Vatanimizning eng chekka burchaklaridan biri ham e'tibordan chetda qolmadi. Bugun biz Uchquduq shahrida xitoylik elektromobillar uchun 40 kVt quvvatli TOK BOR quvvatlantirish stansiyasini o‘rnatdik.",
        text2: "Lokatsiya - Qizil avtoservis",
        text3: "Butun O‘zbekiston bo‘ylab TOK BOR bilan birgalikda sayohat qiling!"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1386/article-medium.png",
        text1: "Vatanimizning eng chekka burchaklaridan biri ham e'tibordan chetda qolmadi. Bugun biz Uchquduq shahrida xitoylik elektromobillar uchun 40 kVt quvvatli TOK BOR quvvatlantirish stansiyasini o‘rnatdik.",
        text2: "Lokatsiya - Qizil avtoservis",
        text3: "Butun O‘zbekiston bo‘ylab TOK BOR bilan birgalikda sayohat qiling!"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1386/article-medium.png",
        text1: "Vatanimizning eng chekka burchaklaridan biri ham e'tibordan chetda qolmadi. Bugun biz Uchquduq shahrida xitoylik elektromobillar uchun 40 kVt quvvatli TOK BOR quvvatlantirish stansiyasini o‘rnatdik.",
        text2: "Lokatsiya - Qizil avtoservis",
        text3: "Butun O‘zbekiston bo‘ylab TOK BOR bilan birgalikda sayohat qiling!"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1386/article-medium.png",
        text1: "Vatanimizning eng chekka burchaklaridan biri ham e'tibordan chetda qolmadi. Bugun biz Uchquduq shahrida xitoylik elektromobillar uchun 40 kVt quvvatli TOK BOR quvvatlantirish stansiyasini o‘rnatdik.",
        text2: "Lokatsiya - Qizil avtoservis",
        text3: "Butun O‘zbekiston bo‘ylab TOK BOR bilan birgalikda sayohat qiling!"
    }
]
function Loyihalar() {
    return (
        <div>
            <div className="asosiymaq">
                <img className="odam" src="https://tokbor.uz/oz/uploads/files/project123.jpg"/>
                <h2>Loyihalar</h2>
                <div className="render">
                    {
                        data && data.map((item, index) => {
                            return (
                                <div key={index} className="item">
                                    <div className="rasm">
                                        <img src={item.img}/>
                                    </div>
                                    <div className="haqida">
                                        <p>{item.text1}</p>
                                        <p>{item.text2}</p>
                                        <p>{item.text3}</p>
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
export default Loyihalar