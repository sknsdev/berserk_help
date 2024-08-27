const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-center md:text-left">© 2024 Все права защищены.</p>
                <div className="mt-2 md:mt-0">
                    {/* Кнопка "Связаться с нами" */}
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