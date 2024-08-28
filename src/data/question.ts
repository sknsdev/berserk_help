// data/questions.ts
export interface Question {
    question: string;
    answer: string;
}

export interface Questions {
    [key: string]: Question[];
}

export interface Category {
    [key: string]: {
        titleRU: string,
        titleEN: string,
        description: string;
        emoji: string;
        question: Question[]
    }
}


export const categories: Category = {
    'user_security': {
        titleRU: 'Безопасность пользователя',
        titleEN: 'User Security',
        description: 'Вопросы о безопасности пользователей в приложении Берсерк Ассистент',
        emoji: '🔒',
        question: [
            {
                question: 'Как применяются права доступа в приложении?',
                answer: `Приложение **Берсерк Ассистент** требует **права доступа** только к тем функциям, которые необходимы для его нормальной работы. Например, доступ к интернету нужен для авторизации и синхронизации контента пользователя, а доступ к камере - для импорта готовой колоды через QR код приложения berserk-nxt. Вы можете управлять правами доступа в настройках вашего устройства.`
            },
            {
                question: 'Как предотвратить несанкционированный доступ к моей учетной записи?',
                answer: `Чтобы предотвратить **несанкционированный доступ** к вашей учетной записи: 
- Используйте **сложные пароли**: они должны содержать как минимум 8 символов, включая заглавные буквы, строчные буквы, числа и специальные символы.
- Включите **двухфакторную аутентификацию** (2FA), если это доступно, чтобы добавить дополнительный уровень безопасности.
- Не делитесь своими учетными данными с другими пользователями.`
            },
            {
                question: 'Что делать, если я забыл пароль?',
                answer: `Если вы **забыли пароль** к учетной записи, вы можете восстановить его, выбрав опцию «Забыли пароль?» на экране входа. Вам будет предложено ввести свой адрес электронной почты, после чего вы получите инструкции по сбросу пароля на указанный адрес. Убедитесь, что ваш новый пароль надежен!`
            },
            {
                question: 'Какое необходимо действовать в случае подозрительной активности в моем аккаунте?',
                answer: `Если вы заметили **подозрительную активность** в вашем аккаунте: 
- Немедленно измените свой пароль.
- Отправьте отчет в **техническую поддержку** приложения, чтобы они могли помочь вам в расследовании.
- Проверьте, есть ли несанкционированные транзакции или изменения в вашем профиле.`
            },
        ],
    },

    'cardDatabase': {
        titleRU: 'База данных карт',
        titleEN: 'cardDatabase',
        description: 'Вопросы о базе данных карт ККИ «Берсерк»',
        emoji: '🃏',
        question: [
            {
                question: 'Где я могу найти карты из последних сетов?',
                answer: 'Карты из всех сетов можно найти в разделе «База данных карт» приложения.'
            },
            {
                question: 'Как оценить стоимость отряда?',
                answer: 'Для оценки стоимости отряда воспользуйтесь калькулятором отряда, который есть в приложении.'
            },
            {
                question: 'Как быстро найти нужную карту?',
                answer: 'Вы можете использовать фильтры в базе данных карт для быстрого поиска необходимой карты по названиям и эффектам.'
            },
            {
                question: 'Какие наборы карт доступны в приложении?',
                answer: 'Доступны наборы: «Война стихий», «Нашествие тьмы», «Семена раздора», «Ложные боги» и «Легенды Лаара».'
            },
        ],
    },
    'diceRoll': {
        titleRU: 'Бросок кубика',
        titleEN: 'diceRoll',
        description: 'Вопросы о функции симуляции броска кубика',
        emoji: '🎲',
        question: [
            {
                question: 'Как использовать функцию «Бросок кубика»?',
                answer: 'Нажмите на кнопку, чтобы сымитировать бросок.'
            },
            {
                question: 'Можно ли сохранить результаты бросков кубика?',
                answer: 'Да, приложение сохраняет историю результатов бросков кубиков для вашего удобства.'
            },
            {
                question: 'Какой тип кубиков поддерживается?',
                answer: 'Поддерживаются кубики с 6 граней.'
            },
            {
                question: 'Что делать, если кубик не срабатывает?',
                answer: 'Попробуйте обновить приложение или перезапустить устройство.'
            },
        ],
    },
    'bersek_assistant': {
        titleRU: 'Берсерк Ассистент',
        titleEN: 'Berserk Assistant',
        description: 'Часто задаваемые вопросы о приложении Берсерк Ассистент',
        emoji: '🃏',
        question: [
            {
                question: 'Как установить приложение Берсерк Ассистент?',
                answer: `Вы можете установить приложение **Берсерк Ассистент** через App Store на вашем устройстве iOS или Google Play для устройств Android.`
            },
            {
                question: 'Как создать колоду для ККИ Берсерк',
                answer: `Для создания колоды откройте приложение, выберите раздел «Мои колоды» и нажмите «Создать новую колоду», затем добавьте карты из вашей коллекции.`
            },
            {
                question: 'Каковы основные функции Берсерк Ассистент',
                answer: `Приложение предлагает управление колодами, поиск карт, возможность анализа силы карт и доступ к правилам игры.`
            },
            {
                question: 'Могу ли я использовать Берсерк Ассистент без интернета?',
                answer: `Да, вы можете использовать базовые функции приложения в оффлайн-режиме, но для обновления данных и доступа к новым картам требуется интернет-соединение.`
            },
        ],
    },

    'cards': {
        titleRU: 'Карты',
        titleEN: 'Cards',
        description: 'Часто задаваемые вопросы о картах в ККИ Берсерк',
        emoji: '🃏',
        question: [
            {
                question: 'Как узнать, какие карты у меня в колодах?',
                answer: `Перейдите в раздел «Мои колоды», где вы сможете просмотреть все карты в своих собранных колодах.`
            },
            {
                question: 'Что такое редкость карты?',
                answer: `Редкость карты определяет, насколько сложно её достать в игре и влияет на силу и эффективность карты.`
            },
            {
                question: 'Можно ли удалить карту из колоды?',
                answer: `Да, для этого перейдите в свою колоду, выберите карту, которую хотите удалить, и нажмите «Удалить»`
            },
        ],
    },
    'support': {
        titleRU: 'Поддержка',
        titleEN: 'Support',
        description: 'Вопросы по технической поддержке и контактам',
        emoji: '💬',
        question: [
            {
                question: 'Как связаться с технической поддержкой?',
                answer: `Вы можете связаться с технической поддержкой через раздел «Поддержка» в самом приложении или по электронной почте, указанной на нашем сайте.`
            },
            {
                question: 'Я обнаружил баги. Как их сообщить?',
                answer: `Если обнаружили баг, сообщите о нём через раздел «Связаться с нами», оставьте отзыв в магазине приложений, или в нашей группе Вконтакте`
            },
            {
                question: 'Есть ли возможность оставить отзыв?',
                answer: `Да, вы можете оставить отзыв о приложении в App Store или Google Play, выбрав соответствующую опцию в приложении или на сайте магазина.`
            },
            {
                question: 'Где найти обновления для приложения?',
                answer: `Обновления приложения можно найти в разделе «Обновления» в App Store или Google Play. Проверяйте эту секцию регулярно для получения новых функций и исправлений.`
            },
        ],
    },
};

