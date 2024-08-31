"use client"
import { categories } from '@/data/question';
import Link from 'next/link';
import Search from './Search';
import SupportForm from './SupportForm';

const FAQSection = () => {
    return (
        <div className="max-w-4xl mx-auto py-10 px-2">
            <h1 className="text-3xl font-bold text-center mb-6">Как мы можем помочь? 👋</h1>
            <Search />
            <SupportForm />
            <h2 className="text-2xl font-bold">Все категории вопросов</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-1 md:px-2">
                {Object.entries(categories).map(([slug, categoryInfo]) => (
                    <Link href={`/categories/${slug}`} key={slug}>
                        <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center mb-4">
                                {/* Вы можете добавить иконку здесь, в зависимости от темы */}
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mr-3">

                                    <span className="material-icons">{categoryInfo.emoji}</span>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">{categoryInfo.titleRU}</h2>
                            </div>
                            <p className="text-gray-600 mb-2">
                                {categoryInfo.question.length} статьи
                            </p>
                            <p className="text-sm text-gray-500">
                                {categoryInfo.description}
                            </p>
                            <div className="mt-4">
                                <span className="text-blue-500 font-medium">Посмотреть все вопросы →</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default FAQSection;
