// src/pages/CardSelect/index.jsx
import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFortuneContext } from '../../features/model/FortuneContext.jsx';
import tarotCards from '../../data/tarotCard'; // 기존 데이터 위치
import '../../pages/Home.css';
import {shuffleDeck} from "../../features/fortune/lib/cardUtils.jsx";                // 스타일 재사용

export default function CardSelectPage() {
    console.log('[CardSelectPage] category : ', category);
    const navigate = useNavigate();
    const {
        category, rule, cardsToSelect,
        selectedCards, setSelectedCards, resetSelection,
        deck, setDeck,
    } = useFortuneContext();

    //(a) 카테고리가 설정되면 한 번만 덱을 셔플하고 초기 선택 초기화
    useEffect(() => {
        if(category) {
            const shuffled = shuffleDeck(tarotCards);
            setDeck(shuffled); // deck 상태에서 셔플 덱 저장
            resetSelection(); // 이전 선택 초기화
        }
    }, [category]);

    // (b) 카드 클릭 처리
    const handleCardClick = useCallback((card) => {
        if (selectedCards.length < cardsToSelect) {
            setSelectedCards([...selectedCards, card]);
        }
    }, [selectedCards, cardsToSelect, setSelectedCards]
    );

    // (c) 선택 완료 시 리딩 페이지로 이동
    useEffect(() => {
        if (selectedCards.length === cardsToSelect) {
            navigate('/reading');
        }
    }, [selectedCards, cardsToSelect, navigate]);

    // (d) 카테고리 미 설정 시 렌더 방지
    if (!rule) return null; // 카테고리 선택 전엔 렌더하지 않음

    return (
        <div className="image-grid">
            {deck.map((card) => {
                const isSelected = selectedCards.some(c => c.id === card.id);
                return (
                    <div
                        key={card.id}
                        className="card-wrapper"
                        onClick={() => !isSelected && handleCardClick(card)}
                        style={{ opacity: isSelected? 0.6 : 1 }}
                    >
                        <img
                            src={`/assets/img/${card.image}`}
                            alt={card.name}
                            className="card-face card-front"
                        />
                    </div>
                );
            })}
        </div>
    );
}


// // src/pages/Index.jsx
// import {useState, useEffect, useRef} from 'react';
// import { imageName } from '../../shared/data/imageName.js';
// import { motion } from 'framer-motion';
// import '../Home.css';
// import tarotCards from "../../data/tarotCard.js";
//
// // 카드 정보를 셔플하여 초기화
// function shuffleDeck(cardDeck) {
//     const array = [...cardDeck];
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     // 정/역방향 + flipped 상태 초기화
//     return array.map(card => ({
//         ...card,
//         isReversed: Math.random() < 0.5,
//         flipped: false,
//     }));
// }
//
// export default function Index({ onComplete, selectionLimit }) {
// // onComplete (cards) => { setSelectedCards(cards); setView('reading')}
//
//     const [deck, setDeck] = useState([]); // 카드 배열
//     const [phase, setPhase] = useState('enter') // "enter" -> "spread" -> "rearrange"
//     const [ready, setReady] = useState(false); // 카드 배열 생성 완료 여부
//     const containerRef = useRef(null); // 카드 덱 컨테이너
//     const [offset, setOffset] = useState(0); // 카드 너비
//
//     const [selected, setSelected] = useState([]); // 선택된 카드
//     const [showResultButton, setShowResultButton] = useState(false); // 결과보기 버튼
//
//     const CARD_WIDTH = 120;           // Index.css 에 맞춘 픽셀
//     const CARD_COUNT = deck.length;   // 카드 숫자 22
//     const CARD_SPACING = 30; // 결과 카드 정렬의 갭
//
//
//     // 1) 초기 덱 셔플 & ready 플래그
//     useEffect(() => {
//         const CARD_COUNT = 78;   // 카드 숫자 78장
//         const initial = imageName.map((file, index) => {
//             const meta = tarotCards.find((c) => c.id === index) || {};
//             return {
//                 id: index,
//                 file,
//                 name: meta.name,
//                 meanings: meta.meanings,
//                 isReversed: Math.random() < 0.5,
//                 flipped: false,
//             };
//         });
//         setDeck(shuffleDeck(initial));
//         setReady(true);
//     }, []);
//
//
//     // 2) 컨테이너 너비 읽어서 offset 계산 및 리사이즈 핸들링
//     useEffect(() => {
//         if (!ready) return;
//         const calculate = () => {
//             const w = containerRef.current.offsetWidth;
//             setOffset((w - CARD_WIDTH) / (CARD_COUNT + 0.55));
//         };
//         calculate();
//         window.addEventListener('resize', calculate);
//         return () => window.removeEventListener('resize', calculate);
//     }, [ready]);
//
//     // 3) enter 후 spread로 단계 전환
//     useEffect(() => {
//         if (!ready) return;
//         const timer = setTimeout(() => setPhase('spread'), 800);
//         return () => clearTimeout(timer);
//     }, [ready]);
//
//     // 4) 카드 클릭 → flipped 토글 한 번만
//     const toggleFlip = (id) => {
//         const selectedCount = deck.filter(c => c.flipped);
//         if (selectedCount.length >= selectionLimit) return; // 이미 n장 선택 시 무시
//
//         setDeck((prev) =>
//             prev.map((card) =>
//                 card.id === id && !card.flipped ? { ...card, flipped: true } : card
//             )
//         );
//        ;
//     };
//
//     // 5) flipped 개수 체크 → rearrange -> 결과보기 버튼 → onComplete
//     useEffect(() => {
//         const flippedCards = deck.filter((c) => c.flipped).length;
//
//         if (flippedCards === selectionLimit) {
//             // 1초 뒤에 rearrange 단계로 이동
//             const t = setTimeout(() => setPhase('rearrange'), 1000);
//             const tt = setTimeout(() => setShowResultButton(true), 1500);
//
//             setSelected(deck.filter(c => c.flipped));
//
//             return () => {
//                 clearTimeout(t);
//                 clearTimeout(tt);
//             };
//         }
//     }, [deck, selectionLimit]);
//
//     // 6) Variants 정의
//     const containerVariants = {
//         enter: { transition: { staggerChildren: 0.05 } },
//         spread: { transition: { staggerChildren: 0.02, delayChildren: 0.35 } },
//         rearrange: { transition: { staggerChildren: 0 } } // 즉시 정렬
//     };
//     const cardVariants = {
//         enter: { x: 1200, opacity: 0, scale: 0.8},
//         spread: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5} },
//         rearrange: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5} },
//     };
//
//     // console.log(selected);
//     return (
//     <div>
//         <div className="deck-container">
//             <motion.div
//                 className="image-grid"
//                 ref={containerRef}
//                 variants={containerVariants}
//                 initial="enter"
//                 animate={phase}>
//                 {ready &&
//                     deck.map(({ id, file, isReversed, flipped }, i) => {
//                         const isSelected = deck[i].flipped;
//                         // const isSelected = selected.some((c) => c.id === id);
//                         let xPos, yPos;
//
//                         if (phase === 'rearrange' && isSelected) {
//                             // 3장 뒤집힌 뒤 중알 정열
//                             const selectedIndex = deck.filter(c => c.flipped).findIndex(c => c.id === id);
//                             // GAP 포함한 총 너비
//                             const totalWidth = CARD_WIDTH * selectionLimit + CARD_SPACING * (selectionLimit - 1);
//                                 xPos = (containerRef.current.offsetWidth - totalWidth) / 2 + selectedIndex * (CARD_WIDTH + CARD_SPACING);
//                                 yPos = 450;
//                         } else {
//                             // enter/spread/선택 중엔 그냥 원래 덱 순서대로
//                                 xPos = i * offset;
//                         }
//
//                         const px = Number.isFinite(xPos) ? xPos : 0;
//
//                         return (
//                                 <motion.div
//                                     key={id}
//                                     className="card-wrapper"
//                                     style={{
//                                         position: 'absolute',
//                                         left: `${px}px`,top: `${yPos}px`,zIndex: flipped ? 999 : i,
//                                         pointerEvents: "none",
//                                     }}
//                                     variants={cardVariants}
//                                     custom={i}
//                                 >
//                                     <motion.div
//                                         className="card-inner"
//                                         style={{ pointerEvents:'auto', cursor:'pointer' }}
//                                         onClick={() => toggleFlip(id)}
//                                         animate={{
//                                             rotateY: flipped ? 180 : 0,
//                                             z: flipped ? 150 : 0,
//                                             y: flipped ? -100 : 0
//                                         }}
//                                         transition={{duration: 0.6}}
//                                     >
//                                         <img
//                                             src={`src/assets/img/${file}`}
//                                             alt={`Card ${id}`}
//                                             className={`card-face card-front ${isReversed ? 'reversed' : ''}`}
//                                         />
//                                         <div
//                                             // src="src/assets/img/back.jpg"
//                                             title="card back"
//                                             className="card-face card-back"
//                                         />
//                                     </motion.div>
//                                 </motion.div>
//                         )
//                         })
//                 }
//             </motion.div>
//         </div>
//             {showResultButton && (
//                 <button className="result-button" onClick={() => onComplete(selected)}>결과 보기</button>)}
//         {!showResultButton && (
//                 <button style={{opacity: "0"}} className="result-button" >결과 보기</button>)}
//     </div>
//     );
// }
