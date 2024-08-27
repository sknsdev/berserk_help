// components/FAQSection.tsx
import { categories, questions } from '@/data/question';
import Link from 'next/link';
import Search from './Search';

export type CategorySlug = keyof typeof categories;

const FAQSection = () => {
    const categoryKeys = Object.keys(questions) as CategorySlug[]; // Приведение к типу CategorySlug

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-6">Как мы можем помочь? 👋</h1>
            <Search />
            <h2 className="text-2xl font-bold">Все категории</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryKeys.map((slug) => {
                    const categoryInfo = categories[slug];
                    return (
                        <Link href={`/categories/${categoryInfo}`} key={categoryInfo}>
                            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer hover:bg-gray-100 transition transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-black flex items-center">
                                    {slug}
                                </h2>
                                <p className="text-black">
                                    {questions[slug].length} статей
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQSection;