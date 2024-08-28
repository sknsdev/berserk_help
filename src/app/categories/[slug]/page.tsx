'use client'
import { QuestionCard } from '@/components/QuestionCard';
import Search from '@/components/Search';
import { categories } from '@/data/question';
import Link from 'next/link'; // Изменен импорт на корректный
import { useParams } from 'next/navigation';

type CategorySlug = keyof typeof categories;

const CategoryPage = () => {
    const { slug } = useParams() as { slug: CategorySlug };
    console.log(slug)
    const categoryInfo = categories[slug]; // Получаем информацию о категории
    const categoryTitle = categoryInfo.titleRU; // Заголовок категории
    const categoryQuestions = categoryInfo.question; // Вопросы для категории

    return (
        <div className="max-w-4xl mx-auto py-10 px-2">
            <Search />
            <h1 className="text-3xl font-bold">{categoryTitle}</h1>
            <nav className="mb-5 text-gray-600">
                <Link href="/">Главная</Link> / <Link href="/">Категории</Link> / {categoryTitle}
            </nav>
            <div className="mt-5">
                {categoryQuestions.length > 0 ? (
                    categoryQuestions.map((item, index) => (
                        <QuestionCard key={index} question={item.question} answer={item.answer} index={index} />
                    ))
                ) : (
                    <p>Нет доступных вопросов в этой категории.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
