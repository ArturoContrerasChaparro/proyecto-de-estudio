"use client"

import axios from "axios"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string
}

const Interface = () => {

  const productsWebFake = "https://fakestoreapi.com/products"
  
  const [products, setProducts] = useState<Products[]>([])
  const [buscador, setBuscador] = useState("")

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get<Products[]>(productsWebFake) 
        setProducts(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getProducts()
  },[])

  const productFilter = 
    products.filter(p =>
      p.title.toLowerCase().includes(buscador.toLowerCase()) ||
      p.category.toLowerCase().includes(buscador.toLowerCase())
    )
  

  
  return (
    <>
      <div className="p-6 border rounded-xl shadow-sm bg-card space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance text-pink-300">Interface</h1>

        <div className="flex gap-3">  
        <Input 
          className="max-w-60"
          placeholder="Buscar por nomber o categoría"
          value={buscador === "" ? "" : buscador }
          onChange={e => {
            setBuscador(e.target.value)
          }}
        />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productFilter.map(product => (
            <Card key={product.id} className="relative mx-auto w-full max-w-sm pt-0">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-64 w-full"
              />
              <CardHeader>
                <CardAction>
                  <Badge variant="secondary">{product.price}</Badge>
                </CardAction>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full">{product.category}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ div>
    </>
  )
}

export default Interface
