import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, useSearchParams } from 'next/navigation';

interface QuestionCardProps {
  question: string;
  answer: string;
  index: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, answer, index }) => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const [isOpen, setIsOpen] = useState<boolean>(question.toString() === search);
  const [rating, setRating] = useState<number | null>(null);
  const [thankYou, setThankYou] = useState<boolean>(false);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const handleRating = (value: number) => {
    setRating(value);
    setThankYou(true);
  };

  return (
    <div className="bg-white rounded-lg shadow mb-4 p-4">
      <h2
        className="text-xl font-semibold text-black cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ReactMarkdown className="text-black">{question}</ReactMarkdown>
      </h2>
      {isOpen && (
        <div className="mt-2">
          <ReactMarkdown className="text-black">{answer}</ReactMarkdown>
          <p className="text-gray-500 mt-2">Последнее обновление 27.08.2024</p>
          {thankYou ? (
            <p className="text-green-600">Спасибо за оценку</p>
          ) : (
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((starValue) => (
                <svg
                  key={starValue}
                  className={`w-6 h-6 cursor-pointer ${rating === starValue || hoveredStar === starValue ? 'text-yellow-500' : 'text-gray-400'}`}
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                  onMouseEnter={() => setHoveredStar(starValue)}
                  onMouseLeave={() => setHoveredStar(null)}
                  onClick={() => handleRating(starValue)}
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.533L0 6.18l6.545-.952L10 0l2.455 5.227L20 6.18l-5.244 5.377 1.122 6.533z" />
                </svg>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
