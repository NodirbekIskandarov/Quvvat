const data =[
    {
        img: "https://tokbor.uz/oz/uploads/gallery/big-3a8a85.png"
    },
    {
        img: "https://tokbor.uz/oz/uploads/gallery/big-3a8a85.png"
    },
    {
        img: "https://tokbor.uz/oz/uploads/gallery/big-3a8a85.png"
    },
    {
        img: "https://tokbor.uz/oz/uploads/gallery/big-3a8a85.png"
    },
    {
        img: "https://tokbor.uz/oz/uploads/gallery/big-3a8a85.png"
    },
    {
        img: "https://tokbor.uz/oz/uploads/gallery/big-3a8a85.png"
    }
]
function Avtodillerlar () {
    return (
        <div className="asosiya">
            <div className="taklif">
                <img src="https://tokbor.uz/oz/uploads/sections/999/original.jpg"/>
                <h2 className="first_h2">Аvtosalonlar uchun foydali taklif!</h2>
                <div className="row">
                    <div className="card1">
                        <span>Hamkorning salonida</span>
                        <h4>Elektromobillarni xarid qilishda, ikki tomonlama shartnoma amal qilishi davomida, butun «TOK BOR» tarmogʼi boʼyicha quvvat oldirish uchun 20% chegirma taqdim etiladi.</h4>
                    </div>
                    <div className="card2">
                        <p>Bu avtosalondagi xaridorlar talabini sezilarli darajada oshiradi va raqobatchilarga nisbatan muhim ustunlik boʼlib xizmat qiladi, sababi TOK BOR tarmogʼi Oʼzbekiston boʼylab eng katta tarmoq boʼlib hisoblanadi va uni jadal ravishda 1500 stantsiyagacha kengaytirish rejalashtirilgan.</p>
                        <p>Oʼz navbatida avtosalon vakillari «TOK BOR» ilovasini oʼrnatishda, roʼyxatdan oʼtishda va ilovadan foydalanishda mijozga yordam berishadi. Salon rahbarining istagiga koʼra xaridorga, istalgan summaga balansni birlamchi toʼldirish koʼrinishida, qoʼshimcha bonusni taqdim etish mumkin.</p>
                        <h4>Chegirma sotish amalga oshirilgan kundan boshlab 1 yil mobaynida yoki elektrokarning egasi almashguniga qadar amal qiladi.</h4>
                    </div>
                </div>
                <button className="button">Ariza qoldiring</button>
            </div>
            <div className="line"></div>
            <div className="avtasalon">
                <h2>Biz bilan hamkorlik qilayotgan avtosalonlar</h2>
                <div className="row">
                    {
                        data && data.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <img src={item.img}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Avtodillerlar