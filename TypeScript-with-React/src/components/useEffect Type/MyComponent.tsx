import { useState,useEffect, use } from "react"
type Product ={
    id: number,
    title: string,
    price: number,
    description: string,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
}
const MyComponent = () => {
    const [data,setData] = useState<Product | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/product/1')
            const data = await response.json()
            setData(data)
            } catch (error) {
                console.log(error);
               
            }
        }

        fetchData()
    },[])
  return (
    <div>
      {data ? <div>
        <p>ID: {data.id}</p>
        <p>Title: {data.title}</p>
        <p>Description: {data.description}</p>
        <p>Price: {data.price}</p>
        <p>DiscountPercentage: {data.discountPercentage}</p>
        <p>Rating: {data.rating}</p>
        <p>Stock: {data.stock}</p>
        <p>Brand: {data.brand}</p>
        <p>Category: {data.category}</p>
        <p>Thumnail: {data.thumbnail}</p>
        {data.images.map((image, index) => (
          <img key={index} src={image} alt="product" style={{ width: 100 }} />
        ))}
      </div> : <p>Loading ...</p>}   
    </div>
  )
}

export default MyComponent
