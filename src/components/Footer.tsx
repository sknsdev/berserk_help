import logo from '@/components/squared.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 px-2">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start">
                {/* Колонка с ссылками и правами */}
                <div className="flex flex-col w-full md:w-3/4">
                    <div className="flex flex-col gap-2 items-center sm:flex-row mb-2">
                        <Image src={logo} alt="Логотип Берсерк Ассистент" width={48} height={48} className="mb-2 rounded-xl" />
                        <h1 className="text-2xl font-bold mb-1">Берсерк Ассистент</h1>
                    </div>
                    <div className="flex flex-col mb-4">
                        <a href="/agreement" className="text-white hover:text-orange-500 mb-1">Пользовательское соглашение</a>
                        <a href="https://berserk-app.ru/privacy.docx" className="text-white hover:text-orange-500 mb-1">Политика конфиденциальности</a>
                        <a href="/" className="text-white hover:text-orange-500 mb-1">Часто задаваемые вопросы</a>
                        <a href="/about" className="text-white hover:text-orange-500 mb-1">О разработчике</a>
                    </div>
                    <p className="text-sm">© 2024 Все права защищены.</p>
                    <p className="text-sm">Разработчик: Власов Алексей Сергеевич</p>
                </div>



                {/* Кнопка "Связаться с нами" */}
                <div className="mt-4 md:mt-0">
                    <a
                        href="mailto:alexey.vlasov97@mail.ru"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
                    >
                        Связаться с нами
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
