// src/pages/ReadingPage/index.jsx
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useFortuneContext } from '../../features/model/FortuneContext.jsx';
import '../../pages/Reading.css';

export default function ReadingPage() {
    const navigate = useNavigate();
    const { rule, selectedCards, category} = useFortuneContext();

    // src/pages/ReadingPage/index.jsx
    useEffect(() => {
        console.log('[ReadingPage] category, selectedCards:', category, selectedCards);
    }, [category, selectedCards]);

    if (!rule) {
        // 직접 URL 진입 시 SelectPage로 돌려보내기
        navigate('/select');
        return null;
    }

    return (
        <div style={{ padding:'1rem' }}>
            <h2>{rule.label} 결과</h2>
            {rule.fields.map((field, idx) => {
                const card = selectedCards[idx];
                return (
                    <div key={field} style={{ margin:'1rem 0' }}>
                        <h3>{field.toUpperCase()}</h3>
                        <p>{card.meanings[card.orientation][field]}</p>
                    </div>
                );
            })}

            <button onClick={() => navigate('/')} style={{ marginRight:'1rem' }}>
                ◀︎ 카테고리 다시 선택
            </button>
            <button onClick={() => navigate('/select')}>
                ↻ 다시 뽑기
            </button>
        </div>
    );
}


// /* eslint-disable */
// // src/pages/index.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import '../Reading.css';
//
// // Index 컴포넌트: 선택된 카드를 보여주고 운세 텍스트를 출력하는 화면
// // Props: selectedCards: [{ id, name, file, isReversed, meanings }, ...], onBack
//
// export default function Index({ category, selectedCards, onRestart, onBack }) {
//     // category: 'romance' / 'wealth' / 'career' / 'education' / 'daily' /'choice' / 'YesNo'
//     const destination = (category === 'romance') ? '연애운' : (category === 'wealth') ? '금전운' : (category === 'career') ? '직업운' :
//         (category === 'education') ? '학업운' : (category === 'choice') ? '양자택일': (category === 'YesNo') ? 'Yes / No' : '오늘의 운세';
//
//     return (
//         <div className="reading-container">
//             <button className="back-button" onClick={onBack}>타로 운세 다시 보기</button>
//             <h1>당신의 {destination}를 읽었습니다.</h1>
//
//             <div className="reading-cards">
//                 {selectedCards.map((card, index) => {
//                     const meaningSet = card.meanings[card.isReversed ? 'reversed' : 'upright'];
//                     const text = meaningSet[category];
//
//                     return (
//                             <div key={card.id} className="reading-card">
//                                 <motion.div
//                                     className="reading-card-inner"
//                                     initial={{scale: 0}}
//                                     animate={{scale: 1}}
//                                     transition={{delay: index * 0.2, type: 'spring'}}
//                                 >
//                                     {/* 카드 이미지: 정/역방향에 따라 회전 */}
//                                     <img
//                                         src={`/src/assets/img/${card.file}`}
//                                         alt={card.name}
//                                         className={`reading-card-image${card.isReversed ? ' reversed' : ''}`}
//                                     />
//                                     {/* 카드 의미 텍스트 */}
//                                     <div className="reading-card-text">
//                                         <h2 style={{textAlign: 'center'}}>{card.name}</h2>
//                                         <h2 style={{textAlign: 'center'}}>{card.isReversed ? '逆' : '正'}</h2>
//                                         <p style={{textAlign: 'center'}}>{text}</p>
//                                     </div>
//                                 </motion.div>
//                             </div>
//                 )}
//             )}
//             </div>
//             {/*<button onClick={onRestart}>다시 셔플</button>*/}
//             {/*<button onClick={confirm}>확인</button>*/}
//         </div>
//     );
//
// }
//
