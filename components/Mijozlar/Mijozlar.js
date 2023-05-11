// import { mijozlar } from '../../mijozlar.js'
// export const getStaticProps = async () => {
//     return {
//         props: {
//             mijozlarCollection: mijozlar
//         }
//     }
// }
// console.log(mijozlar)

// function Mijozlar( {mijozlarCollection} ) {
//     return (
//         <div>
//             <div className="mijozlar">
//                 <h1 className="mijozlar_h1">Quvvat berish stansiyalariga ega bo‘lishga ulgurgan bizning mijozlarimiz</h1>
//                 <div className="row">
//                     {
//                         mijozlarCollection && mijozlarCollection.map((item, index) => {
//                             return (
//                                 <div key={index} className="col">
//                                     <div className="card">
//                                         <img src={item.image_src} />
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Mijozlar



import { mijozlar } from "../../mijozlar";

export const getStaticProps = async () => {
    return {
        props: {
            mijozlarCollection: mijozlar
        }
    }
}
function Mijozlar({mijozlarCollection}) {
    // console.log(mijozlarCollection)
    return (
        <>
            {
                mijozlarCollection && mijozlarCollection.map(item => {
                    console.log({mijozlarCollection})
                    return (
                        <h1>{item.image_src}</h1>
                    )
                })
            }
        </>
    )
}
export default Mijozlar
