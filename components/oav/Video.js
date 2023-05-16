const data = [
    {
        video: "https://www.youtube.com/embed/3EPUO-M0Bx0",
        date: "23.01.2023",
        title: "O'rbekiston 24 TOK BOR zaryad olayotgan elektr transport vositalari haqida",
        text: "TOK BOR tez zaryadini ochish uchun Samarqandga sayohat qilishda Tesla 3 Performance elektromobili haqida @ungpetro"
    },
    {
        video: "https://www.youtube.com/embed/3EPUO-M0Bx0",
        date: "23.01.2023",
        title: "O'rbekiston 24 TOK BOR zaryad olayotgan elektr transport vositalari haqida",
        text: "TOK BOR tez zaryadini ochish uchun Samarqandga sayohat qilishda Tesla 3 Performance elektromobili haqida @ungpetro"
    },
    {
        video: "https://www.youtube.com/embed/3EPUO-M0Bx0",
        date: "23.01.2023",
        title: "O'rbekiston 24 TOK BOR zaryad olayotgan elektr transport vositalari haqida",
        text: "TOK BOR tez zaryadini ochish uchun Samarqandga sayohat qilishda Tesla 3 Performance elektromobili haqida @ungpetro"
    },
    {
        video: "https://www.youtube.com/embed/3EPUO-M0Bx0",
        date: "23.01.2023",
        title: "O'rbekiston 24 TOK BOR zaryad olayotgan elektr transport vositalari haqida",
        text: "TOK BOR tez zaryadini ochish uchun Samarqandga sayohat qilishda Tesla 3 Performance elektromobili haqida @ungpetro"
    },
]
function Video() {
    return (
        <div>
            <div className="asosiyv">
                <div className='offer'>
                    <div className='offerSon'>
                        <a href='/smi'>MAQOLALAR</a>
                        <a href='/video'>VIDEO</a>
                    </div>
                </div>
                <img className="odam" src="https://tokbor.uz/uploads/files/image-4.jpg"/>
                <h2>Video</h2>
                    
                <div className="render">
                    {
                        data && data.map((item, index) => {
                            return (
                                <div key={index} className="item">
                                    <div className="rasm">
                                    <iframe src={item.video}></iframe>
                                    </div>
                                    <div className="haqida">
                                        <p>{item.date}</p>
                                        <h4>{item.title}</h4>
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
export default Video