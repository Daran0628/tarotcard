// src/data/tarotCards.js
const tarotCards = [
    {
        id: 0,
        name: "The Fool",
        image: "0_M_TheFool.png",
        meanings: {
            upright: {
                romance: "새로운 시작의 설렘",
                wealth: "재정적 모험이 기대됨",
                career: "자유롭게 기회 탐색",
                education: "호기심이 학습 이끎",
                daily: "예측 불가한 하루",
                choice: "무작정 도전해 보기",
                YesNo: "예"
            },
            reversed: {
                romance: "경솔한 선택으로 상처",
                wealth: "불안정한 투자 주의",
                career: "목표 없이 방황함",
                education: "집중 저하로 진도 부진",
                daily: "혼란스러운 일상",
                choice: "결정 미루는 게 좋아",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 1,
        name: "The Magician",
        image: "1_M_TheMagician.png",
        meanings: {
            upright: {
                romance: "능동적인 매력 발산",
                wealth: "새 기회로 재정 개선",
                career: "자신감 있게 프로젝트 주도",
                education: "호기심으로 성과 상승",
                daily: "의욕 넘치는 하루",
                choice: "가능성 있는 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "감정 소모 갈등 잦음",
                wealth: "기대 이하의 수익",
                career: "자만으로 실수 주의",
                education: "집중력 저하 심함",
                daily: "지나친 신중함 답답",
                choice: "결정 유보 필요",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 2,
        name: "The High Priestess",
        image: "2_M_TheHighPriestess.png",
        meanings: {
            upright: {
                romance: "내면의 감성 교감 증가",
                wealth: "은밀한 재테크 정보 획득",
                career: "직관력으로 문제 해결",
                education: "깊은 통찰과 이해",
                daily: "평온한 마음의 하루",
                choice: "감정 따라 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "비밀 누설로 불화",
                wealth: "숨겨진 비용 과다 지출",
                career: "정보 부족 혼란",
                education: "집중 산만 주의",
                daily: "우유부단한 하루",
                choice: "혼란스러운 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 3,
        name: "The Empress",
        image: "3_M_TheEmpress.png",
        meanings: {
            upright: {
                romance: "풍요로운 사랑 경험",
                wealth: "안정된 재정 흐름",
                career: "창의적 아이디어 빛남",
                education: "학습 능력 성장",
                daily: "여유로운 하루",
                choice: "넉넉한 선택 기회",
                YesNo: "예"
            },
            reversed: {
                romance: "의존적 관계 주의",
                wealth: "낭비로 인한 불안",
                career: "아이디어 고갈 조심",
                education: "소홀한 학습 경향",
                daily: "게으름으로 흐릿함",
                choice: "제한된 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 4,
        name: "The Emperor",
        image: "4_M_TheEmperor.png",
        meanings: {
            upright: {
                romance: "안정적 파트너십",
                wealth: "계획된 재정 관리",
                career: "리더십 발휘 유망",
                education: "체계적 학습 성과",
                daily: "질서정연한 하루",
                choice: "확고한 결정",
                YesNo: "예"
            },
            reversed: {
                romance: "권위적 태도 충돌",
                wealth: "경직된 지출 관리",
                career: "융통성 부족 경계",
                education: "과도한 규칙 피로",
                daily: "엄격함으로 답답",
                choice: "망설임 많은 결정",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 5,
        name: "The Hierophant",
        image: "5_M_TheHierophant.png",
        meanings: {
            upright: {
                romance: "전통적 사랑 유지",
                wealth: "안정적 투자 추천",
                career: "멘토 조언 수용",
                education: "규칙적 학습 효과",
                daily: "전통적 일상 안착",
                choice: "믿음 있는 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "관습 거부로 불화",
                wealth: "보수적 투자 손실",
                career: "권위 도전 시도",
                education: "형식주의 피로",
                daily: "일상 변화 거부",
                choice: "반항적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 6,
        name: "The Lovers",
        image: "6_M_TheLovers.png",
        meanings: {
            upright: {
                romance: "깊은 감성 교류",
                wealth: "공동 투자 상승",
                career: "팀워크로 성공",
                education: "협력 학습 효과",
                daily: "조화로운 하루",
                choice: "가치 중심 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "갈등과 오해 주의",
                wealth: "분배 불공정 고민",
                career: "협업 마찰 발생",
                education: "소통 부재로 지연",
                daily: "불협화음 하루",
                choice: "이중적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 7,
        name: "The Chariot",
        image: "7_M_TheChariot.png",
        meanings: {
            upright: {
                romance: "관계 진전 가속",
                wealth: "목표 지향 투자",
                career: "의지로 문제 돌파",
                education: "집중력 높은 학습",
                daily: "동기 부여 하루",
                choice: "결단력 있는 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "과도한 통제 갈등",
                wealth: "충동적 소비 주의",
                career: "방향성 상실 위험",
                education: "집착으로 피로",
                daily: "급박한 하루",
                choice: "급한 선택 후회",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 8,
        name: "Strength",
        image: "8_M_Strength.png",
        meanings: {
            upright: {
                romance: "진실한 마음의 힘",
                wealth: "인내로 재정 안정",
                career: "담대해진 업무 처리",
                education: "끈기 있는 학습",
                daily: "마음의 평온 유지",
                choice: "용기 있는 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "불안감으로 소극",
                wealth: "우유부단한 소비",
                career: "자신감 결여 주의",
                education: "포기 경향 강함",
                daily: "의욕 상실 하루",
                choice: "망설임 많은 결정",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 9,
        name: "The Hermit",
        image: "9_M_TheHermit.png",
        meanings: {
            upright: {
                romance: "내면 성찰의 시간",
                wealth: "신중한 지출 권장",
                career: "독립적 연구 성과",
                education: "자기주도 학습",
                daily: "고요한 하루",
                choice: "숙고 후 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "소통 단절 고립",
                wealth: "정보 부족 손실",
                career: "외로움에 지침",
                education: "집중력 산만",
                daily: "고립감 느끼는 하루",
                choice: "결정 회피 경향",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 10,
        name: "Wheel of Fortune",
        image: "10_M_WheelOfFortune.png",
        meanings: {
            upright: {
                romance: "운명의 만남 예상",
                wealth: "예상치 못한 수익",
                career: "전환점 도래",
                education: "새 기회 학습",
                daily: "변화 무쌍 하루",
                choice: "운명 따르는 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "변덕스러운 감정",
                wealth: "복불복 투자 주의",
                career: "정체기 지속",
                education: "진도 느린 학습",
                daily: "예측 불가 상황",
                choice: "결과 불확실 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 11,
        name: "Justice",
        image: "11_M_Justice.png",
        meanings: {
            upright: {
                romance: "균형 잡힌 관계",
                wealth: "공정한 재정 분배",
                career: "합리적 의사 결정",
                education: "정확한 평가 기대",
                daily: "정의로운 하루",
                choice: "이성적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "불공정한 대우 상처",
                wealth: "편파적 분배 문제",
                career: "판단 착오 주의",
                education: "부정확한 정보",
                daily: "불공정감 느끼는 하루",
                choice: "감정적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 12,
        name: "The Hanged Man",
        image: "12_M_TheHangedMan.png",
        meanings: {
            upright: {
                romance: "관계 재고의 시간",
                wealth: "일시적 지출 감수",
                career: "새 관점으로 업무",
                education: "시야 넓히는 학습",
                daily: "멈춤의 하루",
                choice: "잠시 유예 권장",
                YesNo: "예"
            },
            reversed: {
                romance: "정체된 관계 답답",
                wealth: "지출만 반복",
                career: "변화 거부로 정체",
                education: "고집으로 배움 지연",
                daily: "막막한 하루",
                choice: "변화 회피 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 13,
        name: "Death",
        image: "13_M_Death.png",
        meanings: {
            upright: {
                romance: "종료와 새 시작",
                wealth: "구조조정 기회",
                career: "변화의 필요성",
                education: "습관 개선 효과",
                daily: "종결감 있는 하루",
                choice: "단절 후 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "변화 회피로 정체",
                wealth: "불필요한 집착",
                career: "두려움으로 정체",
                education: "저항감 높은 학습",
                daily: "변화 불안감",
                choice: "결단 미루기",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 14,
        name: "Temperance",
        image: "14_M_Temperance.png",
        meanings: {
            upright: {
                romance: "균형 잡힌 관계 유지",
                wealth: "절제된 소비 습관",
                career: "조화로운 협업",
                education: "꾸준함으로 성과",
                daily: "평온한 하루",
                choice: "중용의 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "과도한 공감 피곤",
                wealth: "절제 실패 지출",
                career: "불협화음 업무",
                education: "의욕 과잉 피로",
                daily: "감정 기복 심함",
                choice: "편향적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 15,
        name: "The Devil",
        image: "15_M_TheDevil.png",
        meanings: {
            upright: {
                romance: "집착적 사랑 경계",
                wealth: "위험 투자 유혹",
                career: "권력 남용 주의",
                education: "집중 과몰입",
                daily: "욕망 따라 움직임",
                choice: "유혹적 선택",
                YesNo: "아니오"
            },
            reversed: {
                romance: "해방감 느끼는 사랑",
                wealth: "부채 탈출 기회",
                career: "구속에서 해방",
                education: "편견 극복 학습",
                daily: "자유로운 하루",
                choice: "해방적 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 16,
        name: "The Tower",
        image: "16_M_TheTower.png",
        meanings: {
            upright: {
                romance: "갑작스러운 변화",
                wealth: "예기치 못한 손실",
                career: "위기에서 배움",
                education: "충격적 깨달음",
                daily: "혼돈의 하루",
                choice: "결단적 순간",
                YesNo: "아니오"
            },
            reversed: {
                romance: "갈등 회피로 안정",
                wealth: "위기 모면 기회",
                career: "충돌 후 수습",
                education: "실패 학습 문턱",
                daily: "불안정 속 안정",
                choice: "안전한 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 17,
        name: "The Star",
        image: "17_M_TheStar.png",
        meanings: {
            upright: {
                romance: "희망의 빛 밝음",
                wealth: "미래 기대 수익",
                career: "창의적 영감",
                education: "비전 있는 학습",
                daily: "희망찬 하루",
                choice: "긍정적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "실망감 느껴짐",
                wealth: "기대 이하 결과",
                career: "영감 부족",
                education: "목표 상실감",
                daily: "우울한 하루",
                choice: "소극적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 18,
        name: "The Moon",
        image: "18_M_TheMoon.png",
        meanings: {
            upright: {
                romance: "감정의 기복",
                wealth: "불확실한 수익",
                career: "직관 따라 움직임",
                education: "무의식적 학습",
                daily: "몽환적 하루",
                choice: "직감적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "환상 깨질 위험",
                wealth: "사기 조심",
                career: "혼란스러운 업무",
                education: "집중 방해",
                daily: "불안한 하루",
                choice: "현실적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 19,
        name: "The Sun",
        image: "19_M_TheSun.png",
        meanings: {
            upright: {
                romance: "행복한 관계",
                wealth: "풍부한 수익 기대",
                career: "성과가 빛남",
                education: "명확한 이해",
                daily: "밝고 즐거운 하루",
                choice: "성공적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "과도한 낙관주의",
                wealth: "자만으로 손실",
                career: "성과 과신 주의",
                education: "소홀히 하는 경향",
                daily: "피로한 하루",
                choice: "현실적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 20,
        name: "Judgment",
        image: "20_M_Judgment.png",
        meanings: {
            upright: {
                romance: "관계 재평가 기회",
                wealth: "결산과 평가",
                career: "업적 인정받음",
                education: "성과 되돌아봄",
                daily: "결정적 순간",
                choice: "합리적 판단",
                YesNo: "예"
            },
            reversed: {
                romance: "후회감 느껴짐",
                wealth: "평가 미흡 문제",
                career: "인정 지연",
                education: "반성 없이 진행",
                daily: "혼란스러운 하루",
                choice: "미루는 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 21,
        name: "The World",
        image: "21_M_TheWorld.png",
        meanings: {
            upright: {
                romance: "완전한 조화",
                wealth: "목표 달성 수익",
                career: "성공적 완성",
                education: "학습 완성감",
                daily: "성취감 있는 하루",
                choice: "만족스러운 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "미완의 감정",
                wealth: "목표 미달 수익",
                career: "과업 미완료",
                education: "학습 중단",
                daily: "아쉬움 남는 하루",
                choice: "추가 검토 필요",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 22,
        name: "Ace Of Wands",
        image: "22_mW_1_AceOfWands.png",
        meanings: {
            upright: {
                romance: "열정적인 만남의 시작",
                wealth: "창의적 투자 기회",
                career: "새로운 프로젝트 착수",
                education: "호기심으로 학습 촉진",
                daily: "의욕 넘치는 하루",
                choice: "모험적 선택 도전",
                YesNo: "예"
            },
            reversed: {
                romance: "열정 식은 관계 주의",
                wealth: "충동구매 조심",
                career: "계획 부족으로 답답",
                education: "집중력 저하 경계",
                daily: "의욕 상실한 하루",
                choice: "신중한 결정 필요",
                YesNo: "아니오"
            }
        }
    },
    // Wands (완드)
    {
        id: 23,
        name: "Two Of Wands",
        image: "23_mW_2_TwoOfWands.png",
        meanings: {
            upright: {
                romance: "장기적 관계 모색",
                wealth: "투자 방향 설정",
                career: "전략적 계획 수립",
                education: "목표 설정에 집중",
                daily: "미래 고민의 하루",
                choice: "계획한 대로 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "결단력 부족 갈등",
                wealth: "투자 우유부단함",
                career: "결정 미루는 상황",
                education: "목표 없이 방황",
                daily: "우유부단한 하루",
                choice: "선택 회피 필요",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 24,
        name: "Three Of Wands",
        image: "24_mW_3_ThreeOfWands.png",
        meanings: {
            upright: {
                romance: "관계 확장 기대",
                wealth: "수익 성장 예감",
                career: "성과의 첫걸음",
                education: "학습 전진 기회",
                daily: "발전의 하루",
                choice: "미래 지향 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "확장 의지 공백",
                wealth: "수익 부진 실망",
                career: "진전 없는 업무",
                education: "학습 정체감",
                daily: "답답한 하루",
                choice: "진전 없는 결정",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 25,
        name: "Four Of Wands",
        image: "25_mW_4_FourOfWands.png",
        meanings: {
            upright: {
                romance: "안정과 축하의 시간",
                wealth: "재정적 안정감",
                career: "협업 성공 축하",
                education: "학업 성취 축하",
                daily: "즐거운 하루",
                choice: "축하할 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "축하 무색한 갈등",
                wealth: "안정 깨질 조짐",
                career: "협업 문제 발생",
                education: "성취감 부족",
                daily: "어색한 하루",
                choice: "다시 검토 필요",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 26,
        name: "Five Of Wands",
        image: "26_mW_5_FiveOfWands.png",
        meanings: {
            upright: {
                romance: "사소한 갈등 잦음",
                wealth: "경쟁적 투자 조심",
                career: "경쟁 속 업무 분쟁",
                education: "학습 경쟁 치열",
                daily: "분주한 하루",
                choice: "충돌 회피 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "갈등 해결 완화",
                wealth: "경쟁 과열 피하기",
                career: "분쟁 해소 기회",
                education: "학습 갈등 해소",
                daily: "평온 되찾음",
                choice: "조정된 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 27,
        name: "Six Of Wands",
        image: "27_mW_6_SixOfWands.png",
        meanings: {
            upright: {
                romance: "관계에서 인정받음",
                wealth: "투자 성과 인정",
                career: "업적 칭찬 받음",
                education: "학업 성취 인정",
                daily: "보람찬 하루",
                choice: "성공적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "칭찬 사라진 관계",
                wealth: "성과 과장 경계",
                career: "공로 무시됨",
                education: "성취감 결여",
                daily: "허탈한 하루",
                choice: "과장된 결정",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 28,
        name: "Seven Of Wands",
        image: "28_mW_7_SevenOfWands.png",
        meanings: {
            upright: {
                romance: "관계 방어 필요",
                wealth: "재정 지키기 집중",
                career: "경쟁에서 버티기",
                education: "학습 지키기 노력",
                daily: "도전적 하루",
                choice: "방어적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "방어 과잉 소통 단절",
                wealth: "안전만 추구함",
                career: "방어적 태도 문제",
                education: "학습 부담 증가",
                daily: "긴장된 하루",
                choice: "소극적 결정",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 29,
        name: "Eight Of Wands",
        image: "29_mW_8_EightOfWands.png",
        meanings: {
            upright: {
                romance: "빠른 진전 기대",
                wealth: "투자 결과 속히",
                career: "프로젝트 속도감",
                education: "학습 진도 빠름",
                daily: "스피디한 하루",
                choice: "즉각적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "지연된 진전 답답",
                wealth: "성과 지연 주의",
                career: "지체된 업무",
                education: "학습 지연 실망",
                daily: "느린 하루",
                choice: "미루는 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 30,
        name: "Nine Of Wands",
        image: "30_mW_9_NineOfWands.png",
        meanings: {
            upright: {
                romance: "인내하며 관계 지킴",
                wealth: "재정 방어 태세",
                career: "난관을 넘는 의지",
                education: "학습 끈기 요구",
                daily: "끈기 있는 하루",
                choice: "인내 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "지친 관계 포기",
                wealth: "방어 태세 붕괴",
                career: "의욕 상실 위험",
                education: "학습 피로심",
                daily: "피곤한 하루",
                choice: "포기 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 31,
        name: "Ten Of Wands",
        image: "31_mW_10_TenOfWands.png",
        meanings: {
            upright: {
                romance: "책임감이 무거움",
                wealth: "재정 부담 과중",
                career: "업무 과다 스트레스",
                education: "학습 부담 심함",
                daily: "무거운 하루",
                choice: "책임감 있는 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "부담 벗어나기",
                wealth: "부담 해소 기회",
                career: "과중 업무 해소",
                education: "부담 덜어냄",
                daily: "한결 가벼운 하루",
                choice: "부담 줄인 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 32,
        name: "Page Of Wands",
        image: "32_mW_11_PageOfWands.png",
        meanings: {
            upright: {
                romance: "호기심으로 다가감",
                wealth: "새 기회 살펴봄",
                career: "창의적 아이디어 시작",
                education: "새 학습 열정",
                daily: "호기심 가득 하루",
                choice: "탐색적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "호기심만 앞섬",
                wealth: "체계 부족 경계",
                career: "아이디어 미성숙",
                education: "집중 산만함",
                daily: "어리숙한 하루",
                choice: "준비 부족 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 33,
        name: "Knight Of Wands",
        image: "33_mW_12_KnightOfWands.png",
        meanings: {
            upright: {
                romance: "열정적으로 표현",
                wealth: "행동력 있는 투자",
                career: "과감한 프로젝트 추진",
                education: "열정적 학습 태도",
                daily: "활기찬 하루",
                choice: "대담한 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "성급한 표현 주의",
                wealth: "충동적 투자 위험",
                career: "성급 추진 실수",
                education: "급하게 학습",
                daily: "급박한 하루",
                choice: "성급한 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 34,
        name: "Queen Of Wands",
        image: "34_mW_13_QueenOfWands.png",
        meanings: {
            upright: {
                romance: "자신감 있는 매력",
                wealth: "현명한 재정 관리",
                career: "리더십 발휘",
                education: "자기주도 학습",
                daily: "긍정적 에너지",
                choice: "자신 있는 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "과한 자신감 경계",
                wealth: "고집된 지출",
                career: "독단적 태도 문제",
                education: "자기만족 학습",
                daily: "고집 센 하루",
                choice: "불통 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 35,
        name: "King Of Wands",
        image: "35_mW_14_KingOfWands.png",
        meanings: {
            upright: {
                romance: "열정적 리더십",
                wealth: "전략적 재정 운영",
                career: "포부 높은 프로젝트",
                education: "명확한 학습 계획",
                daily: "통솔력 있는 하루",
                choice: "리더 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "지배적 태도 갈등",
                wealth: "권위적 투자 위험",
                career: "독선적 추진 경고",
                education: "엄격 과한 학습",
                daily: "통제적 하루",
                choice: "강압 선택",
                YesNo: "아니오"
            }
        }
    },
    // Cups (컵)
    {
        id: 36,
        name: "Ace Of Cups",
        image: "36_mC_1_AceOfCups.png",
        meanings: {
            upright: {
                romance: "감성적 교감 시작",
                wealth: "정서적 만족감",
                career: "새로운 협업 기회",
                education: "감정으로 배우기",
                daily: "따뜻한 하루",
                choice: "감성적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "감정 기복 주의",
                wealth: "감정적 지출 조심",
                career: "관계 오해 위험",
                education: "감정 산만 학습",
                daily: "우울한 하루",
                choice: "냉정한 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 37,
        name: "Two Of Cups",
        image: "37_mC_2_TwoOfCups.png",
        meanings: {
            upright: {
                romance: "상호 이해 증진",
                wealth: "협력 투자 성공",
                career: "파트너십 강화",
                education: "함께 배우기 유리",
                daily: "화합의 하루",
                choice: "협력적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "불균형 관계 경계",
                wealth: "협력 실패 위험",
                career: "파트너 충돌",
                education: "소통 부족 학습",
                daily: "갈등의 하루",
                choice: "단독 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 38,
        name: "Three Of Cups",
        image: "38_mC_3_ThreeOfCups.png",
        meanings: {
            upright: {
                romance: "함께 즐기는 시간",
                wealth: "공동 기쁨 공유",
                career: "팀워크 축하",
                education: "학습 파티 분위기",
                daily: "즐거운 하루",
                choice: "함께하는 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "과음 주의",
                wealth: "과잉 소비 경계",
                career: "팀 과열 위험",
                education: "집중 분산됨",
                daily: "산만한 하루",
                choice: "절제된 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 39,
        name: "Four Of Cups",
        image: "39_mC_4_FourOfCups.png",
        meanings: {
            upright: {
                romance: "현실에 안주하는 마음",
                wealth: "기회 무시해선 안 돼",
                career: "제안 앞에서 망설임",
                education: "새로운 정보 거부",
                daily: "권태감 느끼는 하루",
                choice: "잠시 휴식이 필요",
                YesNo: "아니오"
            },
            reversed: {
                romance: "새 기회 받아들임",
                wealth: "숨은 기회 발견",
                career: "변화에 열린 자세",
                education: "관점 전환 학습",
                daily: "새로운 시도 하루",
                choice: "적극적 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 40,
        name: "Five Of Cups",
        image: "40_mC_5_FiveOfCups.png",
        meanings: {
            upright: {
                romance: "실망감과 후회",
                wealth: "손실 아쉬움 남음",
                career: "기회 놓친 느낌",
                education: "시험 결과 실망",
                daily: "아쉬움 가득 하루",
                choice: "뒤돌아보지 말자",
                YesNo: "아니오"
            },
            reversed: {
                romance: "회복의 시작",
                wealth: "손실 딛고 재기",
                career: "새 기회 모색",
                education: "실수에서 배움",
                daily: "희망 찾는 하루",
                choice: "전진 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 41,
        name: "Six Of Cups",
        image: "41_mC_6_SixOfCups.png",
        meanings: {
            upright: {
                romance: "추억 속 달콤함",
                wealth: "소박한 만족감",
                career: "옛 동료와 협력",
                education: "기초 복습 유리",
                daily: "향수 어린 하루",
                choice: "과거로 돌아가기",
                YesNo: "예"
            },
            reversed: {
                romance: "과거에 머무름",
                wealth: "회상만으론 부족",
                career: "발전 없는 일상",
                education: "새 정보 거부",
                daily: "정체된 하루",
                choice: "앞으로 나아가기",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 42,
        name: "Seven Of Cups",
        image: "42_mC_7_SevenOfCups.png",
        meanings: {
            upright: {
                romance: "상상 속 환상",
                wealth: "투자 옵션 산만",
                career: "아이디어 과다",
                education: "정보 과부하 주의",
                daily: "몽환적 하루",
                choice: "현실적인 선택",
                YesNo: "아니오"
            },
            reversed: {
                romance: "환상 깨짐 경고",
                wealth: "집중된 투자 필요",
                career: "우선순위 정리",
                education: "핵심만 학습",
                daily: "명확해진 하루",
                choice: "단일 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 43,
        name: "Eight Of Cups",
        image: "43_mC_8_EightOfCups.png",
        meanings: {
            upright: {
                romance: "이별과 떠남의 시간",
                wealth: "습관 바꿀 필요",
                career: "안정 벗어나기",
                education: "새 분야 도전",
                daily: "떠나는 하루",
                choice: "미련 없이 놓기",
                YesNo: "아니오"
            },
            reversed: {
                romance: "돌아갈 생각 경계",
                wealth: "현실 회피 주의",
                career: "책임 회피 위험",
                education: "중단 없이 계속",
                daily: "머뭇거리는 하루",
                choice: "한 걸음 내딛기",
                YesNo: "예"
            }
        }
    },
    {
        id: 44,
        name: "Nine Of Cups",
        image: "44_mC_9_NineOfCups.png",
        meanings: {
            upright: {
                romance: "소원 성취 기쁨",
                wealth: "목표 달성 축하",
                career: "성과 만족감",
                education: "학습 성취감",
                daily: "행복한 하루",
                choice: "바람직한 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "만족감 과신 주의",
                wealth: "욕심 주의 필요",
                career: "안주함 경계",
                education: "자만 경계 학습",
                daily: "방심하는 하루",
                choice: "신중한 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 45,
        name: "Ten Of Cups",
        image: "45_mC_10_TenOfCups.png",
        meanings: {
            upright: {
                romance: "완전한 조화의 사랑",
                wealth: "풍요로운 만족감",
                career: "협력의 성공",
                education: "공유 학습 즐거움",
                daily: "행복한 가정 분위기",
                choice: "화목한 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "외부 요인 방해",
                wealth: "과도한 기대 경계",
                career: "팀 불화 조심",
                education: "집단 갈등 주의",
                daily: "어수선한 하루",
                choice: "재정비 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 46,
        name: "Page Of Cups",
        image: "46_mC_11_PageOfCups.png",
        meanings: {
            upright: {
                romance: "순수한 감정 수용",
                wealth: "작은 선물 예상",
                career: "창의적 제안 수용",
                education: "호기심 있는 학습",
                daily: "몽상적 하루",
                choice: "감성적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "감정 기복 주의",
                wealth: "공허한 기대 경계",
                career: "제안 무시 경계",
                education: "분산된 관심",
                daily: "산만한 하루",
                choice: "냉정한 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 47,
        name: "Knight Of Cups",
        image: "47_mC_12_KnightOfCups.png",
        meanings: {
            upright: {
                romance: "로맨틱한 고백",
                wealth: "감성적 기부 예상",
                career: "협력적 제안",
                education: "감성 기반 학습",
                daily: "낭만적 하루",
                choice: "감정 이끄는 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "이상과 현실 괴리",
                wealth: "감정적 소비 경계",
                career: "약속 불이행 우려",
                education: "감정 산만 주의",
                daily: "혼란스러운 하루",
                choice: "실용적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 48,
        name: "Queen Of Cups",
        image: "48_mC_13_QueenOfCups.png",
        meanings: {
            upright: {
                romance: "이해심 깊은 사랑",
                wealth: "직관적 재정 판단",
                career: "감성적 리더십",
                education: "공감적 학습 환경",
                daily: "상냥한 하루",
                choice: "배려 있는 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "과잉 보호 경계",
                wealth: "감정 소모 경계",
                career: "감정 과잉 우려",
                education: "집중 흐트러짐",
                daily: "우울한 하루",
                choice: "논리적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 49,
        name: "King Of Cups",
        image: "49_mC_14_KingOfCups.png",
        meanings: {
            upright: {
                romance: "감정적 안정감",
                wealth: "균형 잡힌 소비",
                career: "성숙한 리더십",
                education: "차분한 학습 태도",
                daily: "평온한 하루",
                choice: "균형 잡힌 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "감정 기복 심함",
                wealth: "감정적 지출 주의",
                career: "냉정함 결여 우려",
                education: "산만해진 학습",
                daily: "불안한 하루",
                choice: "신중한 선택",
                YesNo: "아니오"
            }
        }
    },

    // Swords (소드) 1–14
    {
        id: 50,
        name: "Ace Of Swords",
        image: "50_mS_1_AceOfSwords.png",
        meanings: {
            upright: {
                romance: "진실된 소통 시작",
                wealth: "명확한 판단 도움",
                career: "새로운 아이디어",
                education: "이해의 순간",
                daily: "집중의 하루",
                choice: "논리적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "의사소통 단절 주의",
                wealth: "혼란스런 재정 판단",
                career: "잘못된 결단 우려",
                education: "오해 생기기 쉽",
                daily: "혼란스러운 하루",
                choice: "재고 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 51,
        name: "Two Of Swords",
        image: "51_mS_2_TwoOfSwords.png",
        meanings: {
            upright: {
                romance: "갈등 중재 필요",
                wealth: "균형 잡힌 예산",
                career: "결정의 기로",
                education: "두 갈래 학습 고민",
                daily: "우유부단한 하루",
                choice: "침묵의 선택",
                YesNo: "아니오"
            },
            reversed: {
                romance: "감정 표출 필요",
                wealth: "불균형 예산 경고",
                career: "결정 회피 위험",
                education: "집중력 회복 필요",
                daily: "혼란스러운 하루",
                choice: "결단력 있는 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 52,
        name: "Three Of Swords",
        image: "52_mS_3_ThreeOfSwords.png",
        meanings: {
            upright: {
                romance: "상처받은 마음",
                wealth: "실망스런 거래",
                career: "실패의 아픔",
                education: "좌절 겪는 학습",
                daily: "우울한 하루",
                choice: "치유 위한 선택",
                YesNo: "아니오"
            },
            reversed: {
                romance: "치유와 용서의 시간",
                wealth: "손실 복구 기회",
                career: "회복의 시기",
                education: "재도전 학습",
                daily: "회복하는 하루",
                choice: "회복적 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 53,
        name: "Four Of Swords",
        image: "53_mS_4_FourOfSwords.png",
        meanings: {
            upright: {
                romance: "휴식이 필요한 때",
                wealth: "전략 재정 점검",
                career: "업무에서 잠시 휴식",
                education: "복습의 시간",
                daily: "조용한 하루",
                choice: "쉼을 선택",
                YesNo: "아니오"
            },
            reversed: {
                romance: "과도한 침묵 위험",
                wealth: "활동 부족 주의",
                career: "과로로 지침",
                education: "휴식 과다 경계",
                daily: "권태로운 하루",
                choice: "활동적 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 54,
        name: "Five Of Swords",
        image: "54_mS_5_FiveOfSwords.png",
        meanings: {
            upright: {
                romance: "승패가 엇갈림",
                wealth: "이익을 위한 경쟁",
                career: "이기적 승리 주의",
                education: "경쟁 과열 경계",
                daily: "긴장된 하루",
                choice: "승리 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "화해와 용서 시도",
                wealth: "경쟁 멈추기",
                career: "협력 회복 기회",
                education: "공동 학습 권장",
                daily: "평화로운 하루",
                choice: "협력 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 55,
        name: "Six Of Swords",
        image: "55_mS_6_SixOfSwords.png",
        meanings: {
            upright: {
                romance: "감정적 이별 후 치유",
                wealth: "안정으로의 이동",
                career: "새 프로젝트 이동",
                education: "다른 분야 탐색",
                daily: "이동의 하루",
                choice: "변화 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "회피로 인한 혼란",
                wealth: "불안정 지속 경고",
                career: "이동 불가 상황",
                education: "변화 거부 우려",
                daily: "막힌 하루",
                choice: "안정 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 56,
        name: "Seven Of Swords",
        image: "56_mS_7_SevenOfSwords.png",
        meanings: {
            upright: {
                romance: "비밀스런 행동 주의",
                wealth: "불투명 거래 경계",
                career: "은밀한 조력 필요",
                education: "정보 은닉 위험",
                daily: "조심스러운 하루",
                choice: "신중한 선택",
                YesNo: "아니오"
            },
            reversed: {
                romance: "진실의 시간 도래",
                wealth: "투명성 회복",
                career: "공개적 협력 유리",
                education: "정보 공유 학습",
                daily: "솔직한 하루",
                choice: "진솔한 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 57,
        name: "Eight Of Swords",
        image: "57_mS_8_EightOfSwords.png",
        meanings: {
            upright: {
                romance: "스스로 가둔 마음",
                wealth: "제약된 재정 감시",
                career: "제약 속 업무 어려움",
                education: "한계 느끼는 학습",
                daily: "답답한 하루",
                choice: "제약을 벗어나기",
                YesNo: "아니오"
            },
            reversed: {
                romance: "자유를 되찾음",
                wealth: "제약 탈피 기회",
                career: "해방된 업무 흐름",
                education: "장애 극복 학습",
                daily: "트인 하루",
                choice: "자유 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 58,
        name: "Nine Of Swords",
        image: "58_mS_9_NineOfSwords.png",
        meanings: {
            upright: {
                romance: "불안과 걱정 가득",
                wealth: "재정 고민 심화",
                career: "스트레스 많은 업무",
                education: "불안 속 학습",
                daily: "걱정스러운 하루",
                choice: "안정 선택",
                YesNo: "아니오"
            },
            reversed: {
                romance: "불안 완화 기회",
                wealth: "문제 해결 징후",
                career: "스트레스 해소",
                education: "안정된 학습",
                daily: "평온한 하루",
                choice: "용기 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 59,
        name: "Ten Of Swords",
        image: "59_mS_10_TenOfSwords.png",
        meanings: {
            upright: {
                romance: "끝과 배신의 순간",
                wealth: "손실의 종결",
                career: "최악의 상황 도달",
                education: "학습 중단 위기",
                daily: "고통스러운 하루",
                choice: "마지막 선택",
                YesNo: "아니오"
            },
            reversed: {
                romance: "회복의 시작",
                wealth: "새 출발 기회",
                career: "재기 위한 발판",
                education: "새 학습 의지",
                daily: "회복의 하루",
                choice: "새 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 60,
        name: "Page Of Swords",
        image: "60_mS_11_PageOfSwords.png",
        meanings: {
            upright: {
                romance: "호기심 섞인 질문",
                wealth: "정보 수집 유리",
                career: "새 기법 탐색",
                education: "분석적 학습",
                daily: "호기심 가득 하루",
                choice: "탐구적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "호기심만 앞서감",
                wealth: "과분석 경계",
                career: "정보 과부하 위험",
                education: "집중 분산",
                daily: "산만한 하루",
                choice: "단순 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 61,
        name: "Knight Of Swords",
        image: "61_mS_12_KnightOfSwords.png",
        meanings: {
            upright: {
                romance: "직설적 커뮤니케이션",
                wealth: "신속한 거래 추진",
                career: "과감한 결단력",
                education: "빠른 학습 진행",
                daily: "역동적 하루",
                choice: "급진적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "거친 표현 경계",
                wealth: "무모한 거래 위험",
                career: "성급한 추진 실수",
                education: "서둘러 학습",
                daily: "급박한 하루",
                choice: "신중한 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 62,
        name: "Queen Of Swords",
        image: "62_mS_13_QueenOfSwords.png",
        meanings: {
            upright: {
                romance: "이성적 소통 강조",
                wealth: "합리적 판단 우위",
                career: "명확한 의사결정",
                education: "분석적 학습",
                daily: "성찰의 하루",
                choice: "논리적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "차가운 태도 경계",
                wealth: "과도한 비판 위험",
                career: "단호함 과잉 주의",
                education: "융통성 부족 학습",
                daily: "냉정한 하루",
                choice: "따뜻한 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 63,
        name: "King Of Swords",
        image: "63_mS_14_KingOfSwords.png",
        meanings: {
            upright: {
                romance: "정직한 소통의 리더",
                wealth: "전략적 판단력",
                career: "엄정한 리더십",
                education: "체계적 분석 학습",
                daily: "이성적인 하루",
                choice: "합리적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "권위적 태도 주의",
                wealth: "냉정한 손실 위험",
                career: "독재적 리더십 경계",
                education: "융통성 결여 학습",
                daily: "엄격한 하루",
                choice: "배려 선택",
                YesNo: "아니오"
            }
        }
    },

    // Pentacles (펜타클) 1–14
    {
        id: 64,
        name: "Ace Of Pentacles",
        image: "64_mP_1_AceOfPentacles.png",
        meanings: {
            upright: {
                romance: "안정적 사랑 기반",
                wealth: "새로운 재정 기회",
                career: "물질적 성과 시작",
                education: "실용적 학습 유리",
                daily: "안정된 하루",
                choice: "실질적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "안정 결여 경고",
                wealth: "기회 놓칠 수 있음",
                career: "실적 부진 우려",
                education: "비효율적 학습",
                daily: "불안한 하루",
                choice: "신중한 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 65,
        name: "Two Of Pentacles",
        image: "65_mP_2_TwoOfPentacles.png",
        meanings: {
            upright: {
                romance: "균형 있는 배려",
                wealth: "돈 관리 조율",
                career: "업무 조율 능력",
                education: "시간 관리 학습",
                daily: "균형 잡힌 하루",
                choice: "양립 가능한 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "불균형 관계 경계",
                wealth: "과도한 지출 우려",
                career: "업무 과부하 위기",
                education: "시간 낭비 주의",
                daily: "혼란스러운 하루",
                choice: "우선순위 재조정",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 66,
        name: "Three Of Pentacles",
        image: "66_mP_3_ThreeOfPentacles.png",
        meanings: {
            upright: {
                romance: "협력적 관계 구축",
                wealth: "전문가 도움 이득",
                career: "팀워크 성과 가시화",
                education: "협업 학습 효과",
                daily: "함께하는 하루",
                choice: "협력 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "협력 부재 갈등",
                wealth: "자문 무시 경고",
                career: "협업 문제 발생",
                education: "고립된 학습",
                daily: "외로운 하루",
                choice: "단독 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 67,
        name: "Four Of Pentacles",
        image: "67_mP_4_FourOfPentacles.png",
        meanings: {
            upright: {
                romance: "안정 유지 욕구",
                wealth: "재정 보수적 태도",
                career: "안정적 성과 유지",
                education: "기초 다지기 유리",
                daily: "보수적인 하루",
                choice: "안전 선택",
                YesNo: "아니오"
            },
            reversed: {
                romance: "소유욕 경계 필요",
                wealth: "지나친 절약 주의",
                career: "변화 거부 위험",
                education: "새 시도 회피",
                daily: "폐쇄적 하루",
                choice: "개방적 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 68,
        name: "Five Of Pentacles",
        image: "68_mP_5_FiveOfPentacles.png",
        meanings: {
            upright: {
                romance: "외로움과 소외감",
                wealth: "재정적 어려움",
                career: "지원 부족 고립",
                education: "자원 부족 학습",
                daily: "쓸쓸한 하루",
                choice: "도움 요청 선택",
                YesNo: "아니오"
            },
            reversed: {
                romance: "지원과 회복 시작",
                wealth: "도움 받을 기회",
                career: "지원 네트워크 확장",
                education: "자원 찾기 유리",
                daily: "따뜻한 하루",
                choice: "협력 선택",
                YesNo: "예"
            }
        }
    },
    {
        id: 69,
        name: "Six Of Pentacles",
        image: "69_mP_6_SixOfPentacles.png",
        meanings: {
            upright: {
                romance: "기부와 베풂의 사랑",
                wealth: "나눔의 기쁨 경험",
                career: "멘토링 기회",
                education: "지식 나눔 학습",
                daily: "나눔의 하루",
                choice: "베풀기 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "베풂 피곤함 경계",
                wealth: "부당한 요구 주의",
                career: "지원 착취 위험",
                education: "일방적 학습",
                daily: "힘든 하루",
                choice: "균형 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 70,
        name: "Seven Of Pentacles",
        image: "70_mP_7_SevenOfPentacles.png",
        meanings: {
            upright: {
                romance: "관계 성과 기다림",
                wealth: "재정 수확 기대",
                career: "투자 수확 대기",
                education: "노력 결실 기대",
                daily: "기대되는 하루",
                choice: "인내 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "인내 한계 경계",
                wealth: "조기 수확 서둘러",
                career: "성과 늦어져 답답",
                education: "결과 급하게 기대",
                daily: "불안한 하루",
                choice: "조정된 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 71,
        name: "Eight Of Pentacles",
        image: "71_mP_8_EightOfPentacles.png",
        meanings: {
            upright: {
                romance: "노력으로 신뢰 쌓기",
                wealth: "기술 투자 유리",
                career: "장인 정신 발휘",
                education: "집중적 학습 태도",
                daily: "성실한 하루",
                choice: "노력 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "노력 대비 회의감",
                wealth: "기술 과신 경계",
                career: "집착 문제 발생",
                education: "단조로운 학습",
                daily: "지루한 하루",
                choice: "휴식 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 72,
        name: "Nine Of Pentacles",
        image: "72_mP_9_NineOfPentacles.png",
        meanings: {
            upright: {
                romance: "독립적인 만족감",
                wealth: "재정적 자립 성취",
                career: "개인 역량 빛남",
                education: "자기주도 학습",
                daily: "풍요로운 하루",
                choice: "자립 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "외로움 주의",
                wealth: "과시적 소비 경계",
                career: "고립된 업무 경향",
                education: "고립 학습 위험",
                daily: "쓸쓸한 하루",
                choice: "협력 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 73,
        name: "Ten Of Pentacles",
        image: "73_mP_10_TenOfPentacles.png",
        meanings: {
            upright: {
                romance: "안정된 가정애",
                wealth: "대물림 부의 축적",
                career: "가업 계승 성공",
                education: "전통 지식 습득",
                daily: "풍요로운 하루",
                choice: "가족 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "가정 문제 경고",
                wealth: "부의 불균형 주의",
                career: "가업 부담 우려",
                education: "진부한 학습 경향",
                daily: "답답한 하루",
                choice: "조정된 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 74,
        name: "Page Of Pentacles",
        image: "74_mP_11_PageOfPentacles.png",
        meanings: {
            upright: {
                romance: "실리적 접근 마음",
                wealth: "작은 투자 시작",
                career: "실무 학습 적합",
                education: "실습 중심 학습",
                daily: "성실한 하루",
                choice: "실질적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "과도한 계산 경계",
                wealth: "투자 과소 평가",
                career: "경험 부족 위험",
                education: "이론만 학습",
                daily: "단조로운 하루",
                choice: "모험적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 75,
        name: "Knight Of Pentacles",
        image: "75_mP_12_KnightOfPentacles.png",
        meanings: {
            upright: {
                romance: "성실함으로 신뢰",
                wealth: "꾸준한 재정 관리",
                career: "꾸준한 업무 처리",
                education: "계획적 학습 태도",
                daily: "꾸준한 하루",
                choice: "안정 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "지루함 경계",
                wealth: "보수적 지나침",
                career: "진전 느림 우려",
                education: "반복 학습 지루",
                daily: "단조로운 하루",
                choice: "변화 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 76,
        name: "Queen Of Pentacles",
        image: "76_mP_13_QueenOfPentacles.png",
        meanings: {
            upright: {
                romance: "포근한 보살핌",
                wealth: "현실적 재정 조언",
                career: "안정적 리더십",
                education: "실용적 학습 지도",
                daily: "포근한 하루",
                choice: "돌봄 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "과보호 경계",
                wealth: "물질 집착 우려",
                career: "안정만 고집",
                education: "관습적 학습 피로",
                daily: "무거운 하루",
                choice: "창의적 선택",
                YesNo: "아니오"
            }
        }
    },
    {
        id: 77,
        name: "King Of Pentacles",
        image: "77_mP_14_KingOfPentacles.png",
        meanings: {
            upright: {
                romance: "안정적 든든함",
                wealth: "부의 성공 상징",
                career: "실력 있는 경영",
                education: "전문성 깊은 학습",
                daily: "안정된 하루",
                choice: "현실적 선택",
                YesNo: "예"
            },
            reversed: {
                romance: "권위적 태도 주의",
                wealth: "과도한 탐욕 경계",
                career: "안정만 추구 경계",
                education: "융통성 부족 학습",
                daily: "답답한 하루",
                choice: "균형 선택",
                YesNo: "아니오"
            }
        }
    }
];

export default tarotCards;