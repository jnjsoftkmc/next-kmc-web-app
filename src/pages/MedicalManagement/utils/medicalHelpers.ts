export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
};

// 기타 도우미 함수들...
