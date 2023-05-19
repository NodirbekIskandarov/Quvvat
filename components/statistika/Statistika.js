import { useTranslation } from 'next-i18next'

function Statistika () {
  const { t } = useTranslation('common')

    return (
        <div className="statistika">
            <div className="statistikaImage1">
                <img src="https://tokbor.uz/oz/uploads/sections/1003/original.jpg" alt=""/>
            </div>
            <h1 className="first_h1">
                {t('home:company_has_been_supplying')}
            </h1>

            <p className="first_p">
            Bugungi kunga kelib ushbu sohadagi eng yirik operator bo‘lib hisoblanadi. Bizning tarmoq bugunni o‘zida O‘zbekstondagi eng katta operator hisoblanadi, modomiki biz sohadagi ulkan salohiyatni va elektrmobillarning soni har kuni oshib borayotganini ko‘rib turar ekanmiz, mamlakatning barcha hududlari bo‘yicha uni kengaytirib borish va jadallashtirish bizning rejalarga kiradi
            </p>


            <h1 className="second_h1">
            Elektromobillar sonining
o‘sish statistikasi
            </h1>
            <div className="statistikaImage2">
                <img src="https://tokbor.uz/oz/uploads/sections/1017/original.png" alt="statistikaImg"/>
            </div>
            <h1 className="third_h1">Biz nima taklif etamiz:</h1>
            <p className="second_p">Tushunadigan auditoriya orasida o‘z brendining imiji va sodiqligini oshirishni, eng muhimi, eng yuqori daromadli isteʼmolchilardan iborat avtomobil egalarining yangi segmentiga kirishni istagan har qanday kompaniya elektromobillar uchun quvvat berish stansiyalarini o‘z lokatsiyalarida joylashtirish orqali bizning hamkorimiz bo‘lishi mumkin.</p>
            <p className="third_p">Barqaror daromad olishni istagan tashkilotlar yoki jismoniy shaxslar uchun kompaniyamiz o‘zining elektr quvvat berish shahobchalari tarmog‘ini rivojlantirish bo‘yicha foydali takliflarni ishlab chiqdi.</p>
        </div>
    )
}
export default Statistika