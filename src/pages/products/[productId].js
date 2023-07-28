import { useRouter } from 'next/router'

function ProductDetail(props) {
    // useRouter 훅을 사용하여 얻어낸 객체에서
    const router = useRouter()
    console.log(router.query)
    // 주소를 통해 전달받은 동적 ID를 확인 가능
    const id = router.query.productId
    
    return <h1>Product Detail #{id}</h1>
}

export default ProductDetail