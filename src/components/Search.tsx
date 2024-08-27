"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { categoriesEngToRus, questions, categories } from '@/data/question';

type CategoryKeys = keyof typeof categories;

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<{ category: string; question: string }[]>([]);
    const router = useRouter();

    useEffect(() => {
        const handler = setTimeout(() => {
            // Обновляем результаты поиска только если есть текст
            if (searchTerm.trim()) {
                const filtered = filteredResults();
                setResults(filtered);
            } else {
                setResults([]);
            }
        }, 500); // Задержка 500 мс

        return () => {
            clearTimeout(handler); // Очистка таймера
        };
    }, [searchTerm]);

    // Функция для поиска вопросов по тексту
    const filteredResults = () => {
        const results: { category: string; question: string }[] = [];
        Object.entries(questions).forEach(([category, qs]) => {
            qs.forEach((q) => {
                if (q.question.toLowerCase().includes(searchTerm.toLowerCase())) {
                    results.push({ category, question: q.question });
                }
            });
        });
        return results;
    };

    // Подсветка текста
    const highlightText = (text: string) => {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) =>
            regex.test(part) ? <span key={index} className="bg-orange-300">{part}</span> : part
        );
    };

    // Обработка клика по вопросу
    const handleQuestionClick = (cat: CategoryKeys, question: string, index: string) => {
        const categorySlug = categories[cat]; // Получаем slug категории
        console.log(question,)
        router.push(`/categories/${categorySlug}?search=${index}`); // Навигация на страницу категории
    };

    return (
        <div className="max-w-4xl mx-auto my-10 relative">
            <input
                type="text"
                placeholder="Поиск вопросов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-black"
            />
            {results.length > 0 && (
                <div className="mt-2 absolute top-full left-0 right-0 bg-white z-50 border border-gray-200 rounded shadow-lg">
                    {results.map((result, index) => (
                        <div
                            key={index}
                            className="p-3 border-b text-black border-gray-200 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleQuestionClick(result.category as CategoryKeys, result.question, result.question)}
                        >
                            <p>{highlightText(result.question)}</p>
                        </div>
                    ))}
                </div>
            )}
            {results.length === 0 && searchTerm && (
                <div className="mt-2 absolute top-full left-0 right-0 bg-white z-50 border border-gray-200 rounded shadow-lg p-3 text-black">
                    <p>Нет совпадений.</p>
                </div>
            )}
        </div>
    );
};

export default Search;