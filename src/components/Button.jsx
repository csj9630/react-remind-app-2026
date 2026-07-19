function Button({ text, onClick }) {
  // 부모에게 text(버튼 글자)와 onClick(클릭 함수)을 받아오는 기본 구조
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px",
      }}
    >
      {text}
    </button>
  );
}
export default Button;
