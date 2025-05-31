// src/pages/SelectPage/index.jsx
import { useNavigate } from 'react-router-dom';
import { useFortuneContext } from '../../features/model/FortuneContext.jsx';
import { fortuneRules } from '../../features/fortune/config/rules';

export default function SelectPage() {
    const navigate = useNavigate();
    const { setCategory, resetSelection} = useFortuneContext();

    // 카테고리 선택 시 상태 설정 + 다음 페이지로
    const handleSelect = (cat) => {
        resetSelection();           // 이전 선택 초기화
        setCategory(cat);           // 카테고리 저장
        navigate('/select');   // 카드 선택 페이지로 이동
    };

    return (
        <div style={{ textAlign:'center', padding:'2rem' }}>
            <h2>🔮 어떤 운세를 보고 싶나요?</h2>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center' }}>
                {Object.entries(fortuneRules).map(([key, { label }]) => (
                    <button
                        key={key}
                        onClick={() => handleSelect(key)}
                        style={{
                            padding:'0.75rem 1.5rem', border:'1px solid #333',
                            borderRadius:'4px', cursor:'pointer'
                        }}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}


// function Index({ onSelect}) {
//     const options = [
//         { id: 'romance', label: '연애운', cardCount: 3 },
//          { id: 'wealth', label: '금전운', cardCount: 3 },
//          { id: 'career', label: '직업운', cardCount: 3 },
//          { id: 'education', label: '학업운', cardCount: 3 },
//          { id: 'daily', label: '오늘의 운세', cardCount: 1 },
//          { id: 'yesno', label: 'Yes / No', cardCount: 2 },
//          { id: 'choice', label: '양자택일', cardCount: 2 },
//     ];
//
//     return (
//         <div className="category-select" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
//             <h1>어떤 운세를 보고 싶나요?</h1>
//             <div style={{display: "flex", justifyContent: "space-between",gap: "1rem"}}>
//             {options.map((opt) => (
//                 <button key={opt.id} onClick={() => onSelect(opt.id, opt.cardCount)} style={{border: '1px solid black'}}>
//                     {opt.label}
//                 </button>
//             ))}
//             </div>
//         </div>
//     );
// }
//
// export default Index;
