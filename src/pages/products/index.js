// react-router의 Link와 비슷한 역할을 수행하는 Link 컴포넌트 불러오기
import Link from "next/link"

function ProductList(props) {
    return (
        <div>
            <Link href="/products/1">Product 1</Link><br />
            <Link href="/products/2">Product 2</Link>
        </div>
    )
}

export default ProductList