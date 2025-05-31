// src/features/model/FortuneContext.jsx

import { createContext, useContext, useState, useMemo } from 'react';
import { fortuneRules } from '../fortune/config/rules.js'; // 운세 타입 정보

// 1) Context 객체 생성
const FortuneContext = createContext(null);

// 2) FortuneProvider 컴포넌트
// 하위 컴포넌트에서 useFortuneContext()를 통해 상태 공유할 수 있도록 제공

function FortuneProvider({ children }) {
    // -- (1) 상태 정의
    // 현재 선택되 운세 카테고리
    const [category, setCategory] = useState(null);
    // 현재 셔플된 카드 덱 (tarotCards 배열을 한 번만 셔플해서 저장)
    const [deck, setDeck] = useState([]);
    // 선택된 카드 배열
    const [selectedCards, _setSelectedCards] = useState([]);

    // -- (2) rule 및 cardToSelect 계산
    const rule = useMemo(
        () => (category ? fortuneRules[category] : null),
        [category]
    );
    const cardsToSelect = useMemo(
        () => (rule ? parseInt(rule.type[0], 10) : 0),
        [rule]
    );

    // -- (3) selectedCard 업데이트 로직
    // orientation (정/역방향) 처리
    const setSelectedCards = (cards) => {
        _setSelectedCards(
            cards.map(c => ({
            ...c,
            orientation: c.isReversed ? 'reversed' : 'upright'
        }))
        );
    };
    const resetSelection = () => _setSelectedCards([]);

    // (4) shuffledDeck 기능 (카드 페이지 진입 시 한번 만 호출
    // CardSelectPage 에서 category 가 설정될 때 아래 useEffect로 deck을 셔플해서 세팅
    // (실제 셔플 동작은 CardSelectPage가 mount될 때 호출)

    // --(5) Context에 넘겨줄 값 모으기
    const contextValue = {
        category,
        setCategory,
        deck,
        setDeck,
        selectedCards,
        setSelectedCards,
        resetSelection,
        rule,
        cardsToSelect
    };

    return (
        <FortuneContext.Provider value ={contextValue}>
            {children}
        </FortuneContext.Provider>
    );
}

// 3) useFortuneContext 훅
// 하위 컴포넌트에서 Context를 사용하도록 껍데기 훅으로 제공
function useFortuneContext() {
    const context = useContext(FortuneContext);
    if (!context) {
        throw new Error('useFortuneContext must be used within a FortuneProvider');
    }
    return context;
}

export { FortuneProvider, useFortuneContext };


