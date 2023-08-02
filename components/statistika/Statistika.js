import { useTranslation } from 'next-i18next'

function Statistika () {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="statistika">
            <div className="statistikaImage1">
                <img src="https://tokbor.uz/oz/uploads/sections/1003/original.jpg" alt=""/>
            </div>
            <h1 className="first_h1">
                {t('h11')}
            </h1>

            <p className="first_p">
{t('h12')}
            </p>


            <h1 className="second_h1">
            {t('h13')}
            </h1>
            <div className="statistikaImage2">
                <img src="https://tokbor.uz/oz/uploads/sections/1017/original.png" alt="statistikaImg"/>
            </div>
            <h1 className="third_h1">{t('h14')}</h1>
            <p className="second_p">{t('h15')}</p>
            <p className="third_p">{t('h16')}</p>
        </div>
    )
}
export default Statistika