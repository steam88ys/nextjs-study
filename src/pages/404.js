import { useRouter } from "next/router"

function PageNotFound(props) {
    const router = useRouter();
    return (
        <div>
            <h1>해당 경로는 존재하지 않습니다.</h1>
            <button onClick={() => {
                router.push('/')
            }}>홈 화면으로</button>
        </div>
    )
}

export default PageNotFound