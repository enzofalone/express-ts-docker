export const Review = {
    product: ({id: productId}: any, args: any, {products}: any) => {
        return products.find((product: any) => product.id === productId)
    }
}