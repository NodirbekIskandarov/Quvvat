import { MdOutlineArrowRightAlt } from "react-icons/md"
import { AiOutlineLine } from "react-icons/ai"
const data = [
    {
        count: "01",
        text: "Bizga qo'ng'iroq qiling yoki yozing"
    },
    {
        count: "02",
        text: "Bizning menejerlarimiz barcha savollarga aniqlik kiritish va arizani qabul qilish uchun siz bilan bog'lanadi"
    },
    {
        count: "03",
        text: "Montaj qilish guruhi lokatsiyani, energiya tizimiga ulanish nuqtalarini tahlil qiladi va ish rejasini tuzadi"
    },
    {
        count: "04",
        text: "Hamkorlikning barcha tafsilotlarini kelishib olish"
    },
    {
        count: "05",
        text: "Obʼektingizda quvvat berish stansiyasini o'rnatish"
    },
]


function Starting() {
    return (
        <div className="starting">
            <div className="startingSon">
                <h2 className="first_h2">Nimadan boshlash kerak?</h2>
                <div className="renderPart">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className="col">
                                    <div className="card">
                                        <h2>{item.count}</h2>
                                        <p className="firstP"><MdOutlineArrowRightAlt /></p>
                                        <p className="secondP">{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="col2">
                        <div>
                            <h2>06</h2>
                            <p><AiOutlineLine /></p>
                            <div style={{ display: "flex" }}>
                                <p style={{marginInlineEnd: "5px"}}>
                                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11.3333" cy="11" r="11" fill="white"></circle>
                                        <path d="M7.5 10.5L10.5 13.5L16 8" stroke="#209C3C" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>
                                </p><span>Tarmoqqa ulanish</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <button>Pul ishlashni boshlang</button>
        </div>
    )
}
export default Starting