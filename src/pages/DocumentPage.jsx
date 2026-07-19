import { useEffect, useState } from "react";
import { fetchDocuments } from "../api/documentApi";
function DocumentPage() {
  //문서 목록을 선언, 빈 배열로 초기화.
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //axios를 사용하여 문서 목록을 로드하는 비동기 함수
  async function loadDocuments() {
    setLoading(true);
    setError(null);

    try {
      //axios를 사용하여 문서 목록을 가져오는 API 호출
      const data = await fetchDocuments();
      setDocuments(data);
    } catch (err) {
      setError("문서 목록을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  }

  //Mount될 때 한번만 useEffect로 문서 목록 받기.
  useEffect(() => {
    loadDocuments();
  }, []);

  return (
    <>
      <h1>Documents</h1>

      {loading && <p>문서 목록을 불러오는 중...</p>}
      {error && <p>{error}</p>}

      <ul>
        {documents.map((document) => (
          <li key={document.id}>{document.title}</li>
        ))}
      </ul>
    </>
  );
}

export default DocumentPage;
