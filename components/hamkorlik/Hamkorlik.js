import { BsChevronRight } from 'react-icons/bs'
const variant = [
    {
        img: "https://tokbor.uz/oz/uploads/articles/1224/article-original.png",
        link: "",
        text: "Agar sizda erkin elektr quvvatiga ega bo‘lgan mos lokatsiyangiz bo‘lsa, lekin siz to‘g‘ridan-to‘g‘ri investitsiyalar uchun tayyor bo‘lmasangiz"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1224/article-original.png",
        link: "",
        text: "Agar sizda erkin elektr quvvatiga ega bo‘lgan mos lokatsiyangiz bo‘lsa, lekin siz to‘g‘ridan-to‘g‘ri investitsiyalar uchun tayyor bo‘lmasangiz"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1224/article-original.png",
        link: "",
        text: "Agar sizda erkin elektr quvvatiga ega bo‘lgan mos lokatsiyangiz bo‘lsa, lekin siz to‘g‘ridan-to‘g‘ri investitsiyalar uchun tayyor bo‘lmasangiz"
    },
    {
        img: "https://tokbor.uz/oz/uploads/articles/1224/article-original.png",
        link: "",
        text: "Agar sizda erkin elektr quvvatiga ega bo‘lgan mos lokatsiyangiz bo‘lsa, lekin siz to‘g‘ridan-to‘g‘ri investitsiyalar uchun tayyor bo‘lmasangiz"
    }
]


function Hamkorlik() {
    return (
        <div className="hamkorlik">
            <div className="hamkorlikSon">
                <h2>Aynan Siz uchun mos bo‘lgan hamkorlik variantini tanlang:</h2>
                <div className="row">
                    {
                        variant && variant.map((item, index) => {
                            return (
                                <div key={index} className="col">

                                    <a href={item.link}>
                                        <img src={item.img} alt="" />
                                    </a>
                                    <div className="text">
                                        <a className='textSon' href={item.link}>{item.text}</a>
                                        <button><a href={item.link}><BsChevronRight /></a></button>
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
export default Hamkorlik


