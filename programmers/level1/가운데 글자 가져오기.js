// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

const solution = (s) => {
  let center = Math.floor(s.length / 2); // 5/2 => 2
  return s.length % 2 === 0 ? s.slice(center - 1, center + 1) : s[center];
};

function solution(s) {
  const mid = Math.floor(s.length/2);
  return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}