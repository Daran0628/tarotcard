// src/features/model/useFortune.js
import { useState, useMemo } from 'react';
import { fortuneRules } from '../fortune/config/rules.js';


export function useFortune() {
    const [category, setCategory] = useState(null);
    const [selectedCards, _setSelectedCards] = useState([]);

    const rule = useMemo(() => category && fortuneRules[category], [category]);
    const cardsToSelect = useMemo(() => (rule ? parseInt(rule.type[0], 10) : 0), [rule]);

    // orientation 처리
    const setSelectedCards = (cards) =>
        _setSelectedCards(cards.map(c => ({
            ...c,
            orientation: c.isReversed ? 'reversed' : 'upright'
        })));

    const resetSelection = () => _setSelectedCards([]);

    return {
        category,
        setCategory,
        selectedCards,
        setSelectedCards,
        resetSelection,
        rule,
        cardsToSelect
    };
}