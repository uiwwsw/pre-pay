export const href = (str: string, target: "_blank" | "_self" = "_self") => {
  // 앵커 태그 생성
  const anchor = document.createElement("a");
  anchor.href = str;
  anchor.target = target;
  anchor.style.display = "none"; // 화면에 보이지 않도록 설정
  // 앵커 태그를 문서에 추가
  document.body.appendChild(anchor);

  // 앵커 태그 클릭하여 이동
  anchor.click();

  // 앵커 태그 삭제
  document.body.removeChild(anchor);
};
