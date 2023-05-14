const data = [
    {
        img: "https://tokbor.uz/oz/uploads/articles/1349/article-medium.png",
        date: "23.01.2023",
        title: "Xitoylik elektromobillar uchun 140 kVt quvvatli razyomlarga ega nihoyatda kuchli stansiya endi Andijonda ham, «NAVRUZ MALL» savdo markazining avtoturargohida.@navruz_mall",
        text: "Biz quvvat oldirish stansiyalarini sizning lokatsiyalaringizga ham o‘rnatishimiz mumkin, bunda siz elektrokarlarning quvvat olishidan daromad olishingiz, shuningdek, sizning asosiy biznesingiz uchun to‘lovga layoqatli mijozlarni jalb qilishingiz mumkin!"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1349/article-medium.png",
        date: "23.01.2023",
        title: "Xitoylik elektromobillar uchun 140 kVt quvvatli razyomlarga ega nihoyatda kuchli stansiya endi Andijonda ham, «NAVRUZ MALL» savdo markazining avtoturargohida.@navruz_mall",
        text: "Biz quvvat oldirish stansiyalarini sizning lokatsiyalaringizga ham o‘rnatishimiz mumkin, bunda siz elektrokarlarning quvvat olishidan daromad olishingiz, shuningdek, sizning asosiy biznesingiz uchun to‘lovga layoqatli mijozlarni jalb qilishingiz mumkin!"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1349/article-medium.png",
        date: "23.01.2023",
        title: "Xitoylik elektromobillar uchun 140 kVt quvvatli razyomlarga ega nihoyatda kuchli stansiya endi Andijonda ham, «NAVRUZ MALL» savdo markazining avtoturargohida.@navruz_mall",
        text: "Biz quvvat oldirish stansiyalarini sizning lokatsiyalaringizga ham o‘rnatishimiz mumkin, bunda siz elektrokarlarning quvvat olishidan daromad olishingiz, shuningdek, sizning asosiy biznesingiz uchun to‘lovga layoqatli mijozlarni jalb qilishingiz mumkin!"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1349/article-medium.png",
        date: "23.01.2023",
        title: "Xitoylik elektromobillar uchun 140 kVt quvvatli razyomlarga ega nihoyatda kuchli stansiya endi Andijonda ham, «NAVRUZ MALL» savdo markazining avtoturargohida.@navruz_mall",
        text: "Biz quvvat oldirish stansiyalarini sizning lokatsiyalaringizga ham o‘rnatishimiz mumkin, bunda siz elektrokarlarning quvvat olishidan daromad olishingiz, shuningdek, sizning asosiy biznesingiz uchun to‘lovga layoqatli mijozlarni jalb qilishingiz mumkin!"
    }
]
function Maqolalar() {
    return (
        <div>
            <div className="asosiymaq">
                <div className='offer'>
                    <div className='offerSon'>
                        <a href='/smi'>MAQOLALAR</a>
                        <a href='/video'>VIDEO</a>
                    </div>
                </div>
                <img className="odam" src="https://tokbor.uz/uploads/files/image-4.jpg"/>
                <h2>Maqolalar</h2>
                <div className="render">
                    {
                        data && data.map((item, index) => {
                            return (
                                <div key={index} className="item">
                                    <div className="rasm">
                                        <img src={item.img}/>
                                    </div>
                                    <div className="haqida">
                                        <p>{item.date}</p>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                        <a href="">KO'PROQ O'QING</a>
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
export default Maqolalar