// data/questions.ts
export interface Question {
    question: string;
    answer: string;
}

export interface Questions {
    [key: string]: Question[];
}

export const categories = {
    'Наука': 'science',
    'Технологии': 'technology',
    'Искусство': 'art',
    'История': 'history',
} as const;

export const categoriesEngToRus = {
    'science': 'Наука',
    'technology': 'Технологии',
    'art': 'Искусство',
    'history': 'История',
} as const;

export const questions: Questions = {
    'Наука': [
        {
            question: 'Что такое **гравитация**?',
            answer: 'Гравитация — это сила притяжения между объектами с массой.'
        },
        {
            question: 'Как работает **фотосинтез**?',
            answer: 'Фотосинтез — это процесс, с помощью которого растения используют солнечную энергию.'
        },
    ],
    'Технологии': [
        {
            question: 'Что такое **искусственный интеллект**?',
            answer: 'Искусственный интеллект — это область компьютерных наук.'
        },
        {
            question: 'Как работает **блокчейн**?',
            answer: 'Блокчейн — это распределенная база данных, хранящая данные в блоках.'
        },
    ],
    'Искусство': [
        {
            question: 'Что такое **модернизм** в искусстве?',
            answer: 'Модернизм — это движение в искусстве, характеризующееся инновациями.'
        },
        {
            question: 'Кто такой **Винсент Ван Гог**?',
            answer: 'Винсент Ван Гог — нидерландский художник, известный своими яркими цветами.'
        },
    ],
    'История': [
        {
            question: 'Когда началась **Вторая мировая война**?',
            answer: 'Вторая мировая война началась 1 сентября 1939 года.'
        },
        {
            question: 'Кто был первым **президентом США**?',
            answer: 'Первым президентом США был Джордж Вашингтон.'
        },
    ],
    // Заполните остальные категории аналогично
};
