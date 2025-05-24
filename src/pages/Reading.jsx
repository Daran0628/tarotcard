/* eslint-disable */
// src/pages/Reading.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Reading.css';

// Reading 컴포넌트: 선택된 카드를 보여주고 운세 텍스트를 출력하는 화면
// Props: selectedCards: [{ id, name, file, isReversed, meanings }, ...], onBack

export default function Reading({ category, selectedCards, onRestart, onBack }) {
    // category: 'romance' / 'wealth' / 'career' / 'education' / 'daily' /'choice' / 'YesNo'
    const destination = (category === 'romance') ? '연애운' : (category === 'wealth') ? '금전운' : (category === 'career') ? '직업운' :
        (category === 'education') ? '학업운' : (category === 'choice') ? '양자택일': (category === 'YesNo') ? 'Yes / No' : '오늘의 운세';

    return (
        <div className="reading-container">
            <button className="back-button" onClick={onBack}>타로 운세 다시 보기</button>
            <h1>당신의 {destination}를 읽었습니다.</h1>

            <div className="reading-cards">
                {selectedCards.map((card, index) => {
                    const meaningSet = card.meanings[card.isReversed ? 'reversed' : 'upright'];
                    const text = meaningSet[category];

                    return (
                            <div key={card.id} className="reading-card">
                                <motion.div
                                    className="reading-card-inner"
                                    initial={{scale: 0}}
                                    animate={{scale: 1}}
                                    transition={{delay: index * 0.2, type: 'spring'}}
                                >
                                    {/* 카드 이미지: 정/역방향에 따라 회전 */}
                                    <img
                                        src={`/src/assets/img/${card.file}`}
                                        alt={card.name}
                                        className={`reading-card-image${card.isReversed ? ' reversed' : ''}`}
                                    />
                                    {/* 카드 의미 텍스트 */}
                                    <div className="reading-card-text">
                                        <h2 style={{textAlign: 'center'}}>{card.name}</h2>
                                        <h2 style={{textAlign: 'center'}}>{card.isReversed ? '逆' : '正'}</h2>
                                        <p style={{textAlign: 'center'}}>{text}</p>
                                    </div>
                                </motion.div>
                            </div>
                )}
            )}
            </div>
            {/*<button onClick={onRestart}>다시 셔플</button>*/}
            {/*<button onClick={confirm}>확인</button>*/}
        </div>
    );
    
}

