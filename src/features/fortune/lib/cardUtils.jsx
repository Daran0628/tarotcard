/**
 * Fisher–Yates 셔플 알고리즘으로 카드 덱을 랜덤 섞습니다.
 * @param {Array} deck 원본 카드 배열
 * @returns {Array} 셔플된 새로운 카드 배열
 */
export function shuffleDeck(deck) {
    const a = [...deck];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];  // 두 카드를 맞바꿈
    }
    return a;
}
