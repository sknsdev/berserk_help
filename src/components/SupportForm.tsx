// components/SupportForm.tsx

import { useState } from 'react';
import { Client, Databases } from 'appwrite';
import { generateRandomId } from '@/helpers/generateId';

const SupportForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const client = new Client()
        .setEndpoint('https://appwrite.berserk-app.ru/v1')
        .setProject('66602f240028f4ac5b7c');
    const requestId = generateRandomId();
    const databases = new Databases(client);


    client
        .setEndpoint('https://appwrite.berserk-app.ru/v1')
        .setProject('66602f240028f4ac5b7c');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError('Пожалуйста, заполните все поля.');
            return;
        }
        try {
            const response = await databases.createDocument('66a8b44f001d1c9390b2', '66a8b45b003d6046356b', requestId.toString(), { name: name, theme: email, message: message });
            setSuccess(true);
            setName('');
            setEmail('');
            setMessage('');
            setError('');
            console.log('Форма успешно отправлена:', response);
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
        }


    };

    return (
        <div className="mb-8 px-2">
            <h2 className="text-2xl font-bold mb-6">Задать вопрос</h2>
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <div className="max-w-md mx-auto ">

                    {success && <p className="text-green-500 mb-4">Ваше сообщение отправлено!</p>}
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Имя</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border rounded-md p-2 w-full dark:text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border rounded-md p-2 w-full dark:text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Сообщение</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="border rounded-md p-2 w-full dark:text-black"
                                rows={4}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SupportForm;
