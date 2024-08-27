'use client'
import { QuestionCard } from '@/components/QuestionCard';
import { categoriesEngToRus, questions } from '@/data/question';
import Link from 'next/dist/client/link';
import { useParams } from 'next/navigation';

type CategorySlug = keyof typeof categoriesEngToRus;
const CategoryPage = () => {
    const { slug } = useParams() as { slug: CategorySlug };

    // Используем английское название для получение русского названия
    const categoryTitle = typeof slug === 'string' && categoriesEngToRus[slug] ? categoriesEngToRus[slug] : '';

    // Находим вопросы по русскому названию
    const categoryQuestions = categoryTitle && questions[categoryTitle] ? questions[categoryTitle] : [];

    return (
        <div className="max-w-4xl mx-auto py-10">

            <h1 className="text-3xl font-bold">{categoryTitle.replace('-', ' ')}</h1>
            <nav className="mb-5 text-gray-600">
                <Link href="/">Главная</Link> / <Link href="/">Категории</Link> / {categoryTitle.replace('-', ' ')}
            </nav>
            <div className="mt-5">
                {categoryQuestions.length > 0 ? categoryQuestions.map((item, index) => (
                    <QuestionCard key={index} question={item.question} answer={item.answer} index={index}/>
                )) : (
                    <p>Нет доступных вопросов в этой категории.</p>
                )}
            </div>
        </div>
    );
};


export default CategoryPage;