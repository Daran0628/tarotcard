// src/App.jsx
import {useState} from "react";
import CategorySelect from './pages/CategorySelect';
import Home from './pages/Home';
import Reading from './pages/Reading';

export default function App() {
    const [stage, setStage] = useState('category'); // 화면 단계 관리 : 'category' -> 'home' -> 'reading'
    const [category, setCategory] = useState(null); // 사용자가 고른 운세 종류 :'romance' / 'wealth' / ...
    const [selectionLimit, setSelectionLimit] = useState(); // 선택 가능한 카드의 수 : 3 / 2 / 1
    const [selectedCards, setSelectedCards] = useState([]); // 홈에서 최종 선택된 카드(3장 / 2장 / 1장)

    // console.log(selectedCards);

    return (
        <>
            {stage === 'category' && (
                <CategorySelect
                    onSelect={(cat, cardCount) => {
                        setSelectionLimit(cardCount);
                        setCategory(cat);
                        setStage('home');
                    }}
                />
            )}
            {stage === 'home' && (
                <Home
                    selectionLimit={selectionLimit}
                    onComplete={(cards) => {
                        setSelectedCards(cards);
                        setStage('reading');
                    }}
                />
            )}
            {stage === 'reading' && (
                <Reading
                    category={category}
                    selectedCards={selectedCards}
                    onRestart={() => setStage('home')}
                    onBack={() => setStage('category')}
                />
            )}
        </>
    );
}
// `/src/assets/img/${file}`
