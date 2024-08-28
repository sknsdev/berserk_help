// components/Header.tsx
import Image from 'next/image';
import logo from '@/components/squared.png';

const links = [
    { title: 'Главная', link: '/', active: true },
    { title: 'Домой', link: 'https://berserk-app.ru', active: true },
    { title: 'Google play', link: 'https://play.google.com/store/apps/details?id=com.vlasov.berserk_assistant', active: true },
    { title: 'App Store (soon)', link: 'https://instagram.com', active: false },
];

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-5 shadow-md">
            <div className="md:max-w-4xl mx-auto flex flex-col items-center">
                <div className="flex flex-col gap-2 items-center sm:flex-row">
                    <Image src={logo} alt="Логотип Берсерк Ассистент" width={48} height={48} className="mb-2 rounded-xl" />
                    <h1 className="text-2xl font-bold mb-1">Берсерк Ассистент</h1>
                    <span className="text-gray-400 italic mb-2">Help Center</span>
                </div>
                <nav>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        {links.map(({ title, link, active }) => (
                            <li key={title}>
                                <a href={link} className={`transition ${active ? 'hover:underline ' : 'disabled cursor-default opacity-60'}`}>{title}</a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="mailto:alexey.vlasov97@mail.ru"
                                className="text-white rounded transition duration-200 hover:underline"
                            >
                                Связаться с нами
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
