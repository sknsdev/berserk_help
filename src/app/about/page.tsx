// pages/about.js

import Head from 'next/head';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center  p-8 bg-gray-100">
            <Head>
                <title>О разработчике</title>
            </Head>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
                <h1 className="text-3xl font-bold mb-4">О разработчике</h1>
                <p className="text-gray-700 mb-2">
                    Имя разработчика: <strong>Власов Алексей Сергеевич</strong>
                </p>
                <p className="text-gray-700 mb-2">
                    Юридический адрес: <strong>Ростов-на-Дону, Будённовский просп. 97, 2 этаж</strong>
                </p>
                <p className="text-gray-700 mb-2">
                    Электронная почта: <strong><a href="mailto:alexey.vlasov97@mail.ru" className="text-orange-600 hover:underline">alexey.vlasov97@mail.ru</a></strong>
                </p>
                <p className="text-gray-700 mb-2">
                    Телеграм: <strong><a href="https://t.me/sketchns" className="text-orange-600 hover:underline">@sketchns</a></strong>
                </p>
                <p className="text-gray-700 mb-2">
                    Номер телефона: <strong><a href="tel:+79885562520" className="text-orange-600 hover:underline">+7 988 556-25-20</a></strong>
                </p>
                <p className="text-gray-700 mb-2">
                    Доступно консультации: <strong>С понедельника по пятницу, 10:00 - 18:00</strong>
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Юридическая информация</h2>
                <p className="text-gray-700 mb-2">
                    Все пользователи должны согласиться с Условиями использования и Политикой конфиденциальности, доступными на нашем сайте.
                </p>
                <p className="text-gray-700 mb-2">
                    В случае возникновения вопросов или проблем, пожалуйста, свяжитесь с нами по указанным выше контактам.
                </p>
                <p className="text-gray-700 mb-2">
                    Мы оставляем за собой право изменять условия и политику в соответствии с законодательством Российской Федерации.
                </p>

                <div className="mt-4">
                    <a
                        href="mailto:alexey.vlasov97@mail.ru"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
                    >
                        Связаться с нами
                    </a>
                </div>


            </div>
        </div>
    );
}
