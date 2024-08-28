import React from 'react';

const SuccessPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4 text-black">Пароль успешно сменен!</h1>
                <p className="mb-6 text-black">Вы можете вернуться в приложение и авторизоваться с новым паролем.</p>

            </div>
        </div>
    );
};

export default SuccessPage;
