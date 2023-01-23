
export const Prods = ({ products }) => {

    return (
        <>
            <div>
                <ul>
                    {
                        products &&
                        products.data.map((product) => {
                            return (
                                <li key={product.id}>
                                    <p>product</p>
                                </li>
                            )
                        })

                    }
                </ul>
            </div>
        </>
    )
}