function CategorySelect({ onSelect}) {
    const options = [
        { id: 'romance', label: '연애운', cardCount: 3 },
         { id: 'wealth', label: '금전운', cardCount: 3 },
         { id: 'career', label: '직업운', cardCount: 3 },
         { id: 'education', label: '학업운', cardCount: 3 },
         { id: 'daily', label: '오늘의 운세', cardCount: 1 },
         { id: 'yesno', label: 'Yes / No', cardCount: 2 },
         { id: 'choice', label: '양자택일', cardCount: 2 },
    ];

    return (
        <div className="category-select" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>어떤 운세를 보고 싶나요?</h1>
            <div style={{display: "flex", justifyContent: "space-between",gap: "1rem"}}>
            {options.map((opt) => (
                <button key={opt.id} onClick={() => onSelect(opt.id, opt.cardCount)} style={{border: '1px solid black'}}>
                    {opt.label}
                </button>
            ))}
            </div>
        </div>
    );
}

export default CategorySelect;
