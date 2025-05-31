// 운세 타입 설정만
// 운세 종류별 설정: 카드 수(type 앞자리), 레이블(label), 결과 필드(fields)
// orientation(orientation) 은 useFortune 훅에서 처리하므로 여기선 필요 없습니다.

export const fortuneRules = {
    romance: {
        type: '3cards',          // 3장 선택
        label: '연애운',           // 화면에 보여줄 한글 제목
        fields: ['past', 'present', 'future']
    },
    wealth: {
        type: '3cards',
        label: '금전운',
        fields: ['past', 'present', 'future']
    },
    career: {
        type: '3cards',
        label: '직업운',
        fields: ['past', 'present', 'future']
    },
    education: {
        type: '3cards',
        label: '학업운',
        fields: ['past', 'present', 'future']
    },
    daily: {
        type: '1card',           // 1장 선택
        label: '하루 운세',
        fields: ['daily']
    },
    choice: {
        type: '2cards',          // 2장 선택
        label: '양자택일',
        fields: ['optionA', 'optionB']
    },
    yesno: {
        type: '2cards',
        label: 'Yes / No',
        fields: ['pros', 'cons']
    }
};
