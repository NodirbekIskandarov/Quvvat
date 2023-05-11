import { BsChevronRight } from 'react-icons/bs'
// import { variant } from '../../variant.js'

export const getStaticProps = async () => {
    return {
        props: {
            variantCollection: variant
        }
    }
}
function Hamkorlik({ variantCollection }) {
    return (
        <div className="hamkorlik">
            <div className="hamkorlikSon">
                <h2>Aynan Siz uchun mos bo‘lgan hamkorlik variantini tanlang:</h2>
                <div className="row">
                    {
                        variantCollection && variantCollection.map((item, index) => {
                            return (
                                <div key={index} className="col">

                                    <a href={item.link}>
                                        <img src={item.img} alt="" />
                                        <div className="text">
                                            <a href={item.link}>{item.text}</a>
                                            <button><a href={item.link}><BsChevronRight /></a></button>
                                        </div>
                                    </a>


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


// export const variant = [
//     {
//         img: "https://tokbor.uz/oz/uploads/articles/1224/article-original.png",
//         link: "",
//         text: "Agar sizda erkin elektr quvvatiga ega bo‘lgan mos lokatsiyangiz bo‘lsa, lekin siz to‘g‘ridan-to‘g‘ri investitsiyalar uchun tayyor bo‘lmasangiz"
//     },
//     {
//         img: "https://tokbor.uz/oz/uploads/articles/1224/article-original.png",
//         link: "",
//         text: "Agar sizda erkin elektr quvvatiga ega bo‘lgan mos lokatsiyangiz bo‘lsa, lekin siz to‘g‘ridan-to‘g‘ri investitsiyalar uchun tayyor bo‘lmasangiz"
//     },
//     {
//         img: "https://tokbor.uz/oz/uploads/articles/1224/article-original.png",
//         link: "",
//         text: "Agar sizda erkin elektr quvvatiga ega bo‘lgan mos lokatsiyangiz bo‘lsa, lekin siz to‘g‘ridan-to‘g‘ri investitsiyalar uchun tayyor bo‘lmasangiz"
//     },
//     {
//         img: "https://tokbor.uz/oz/uploads/articles/1224/article-original.png",
//         link: "",
//         text: "Agar sizda erkin elektr quvvatiga ega bo‘lgan mos lokatsiyangiz bo‘lsa, lekin siz to‘g‘ridan-to‘g‘ri investitsiyalar uchun tayyor bo‘lmasangiz"
//     }
// ]
