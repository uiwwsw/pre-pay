export const numberToKorean = (num?: number | string) => {
    if (!num) return ''; // 숫자가 없으면 빈 문자열 반환

    const units = ["", "십", "백", "천", "만", "십만", "백만", "천만", "억"];
    const numStr = num.toString().replace(/[^0-9]/g, ''); // 숫자만 남기기
    const len = numStr.length;
    let result = '';

    for (let i = 0; i < len; i++) {
        const digit = numStr.charAt(i); // 현재 자리수 숫자
        const reverseIndex = len - i - 1; // 반대로 뒤에서부터 인덱스

        // 자리수가 0이 아닐 때만 숫자와 단위를 넣음
        if (digit !== '0') {
            result += digit; // 숫자 추가
            result += units[reverseIndex % 4]; // 단위 추가
        } else if (reverseIndex % 4 === 0 && reverseIndex !== 0) {
            // 만, 억 단위일 때만 '0'이라도 단위를 추가 (예: 10만, 1억)
            result += units[reverseIndex];
        }

        // 만 단위마다 '만'을 넣기 위해 체크
        if (reverseIndex % 4 === 0 && reverseIndex !== 0) {
            result += units[reverseIndex];
        }
    }

    return result + "원"; // 끝에 '원' 추가
};
