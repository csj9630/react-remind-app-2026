import { useEffect, useState } from "react";
function DocumentPage() {
    //문서 목록을 선언, 빈 배열로 초기화.
    const [documents, setDocuments] = useState([]);

    //fetch [GET 요청] 서버에서 문서 목록을 받아오는 비동기 함수
    async function fetchDocuments() {
        // fetch는 기본적으로 HTTP GET 방식으로 요청을 보냄 (별도 옵션이 없으면 GET)
        const response = await fetch("http://localhost:5173/documents");

        // 서버가 준 날것의 데이터를 자바스크립트 객체/배열 형태로 변환 (await 필수!)
        const data = await response.json();

        //받은 배열 데이터를 state에 저장-> 화면 리렌더링.
        setDocuments(data);
    } //async

    //Mount될 때 한번만 useEffect로 문서 목록 받기.
    useEffect(() => {
        fetchDocuments();
    }, []); //의존성 배열을 빈 배열로 둬야 무한 루프 안함.

    return (
        <>
            <h1>Document Upload</h1>
            {/*문서 목록 전체를 동적으로 랜더링*/}
            <ul>
                {documents.map((document) => (
                    <li key={document.id}>{document.title}</li>
                ))}
            </ul>
        </>
    );
}

export default DocumentPage;
