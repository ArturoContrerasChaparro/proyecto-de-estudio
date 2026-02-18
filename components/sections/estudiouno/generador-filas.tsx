'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"


const GeneradorFilas = () => {
  
  
  const [numeroFilas, setNumeroFilas] = useState(0)
  const [listaFilas, setListaFilas] = useState<string[]>([])

  //GENERADOR DE FILAS
  const generarFilas = () => {
    const listaTemporal: string[] = [] 
      for (let i = 1; i <= numeroFilas; i++) {
        listaTemporal.push(`Esta es la fila número: ${i}`) 
      }
      setListaFilas(listaTemporal)
  }

  const resetNumerFilas = () => {
    setNumeroFilas(0)
    setListaFilas([])
  } 


  //Multiplicar 1 al 10

  const [numeroMultiplicar, setNumeroMultiplicar] = useState(0)
  const [listaNumeros, setListaNumeros] = useState<string[]>([])

  const multiplicarPares = () => {
    const listaMultiplicaciones: string[] = []
    for (let i = 1; i <= 10; i++) {
      listaMultiplicaciones.push(`${i} * ${numeroMultiplicar} = ${i * numeroMultiplicar} ${(i * numeroMultiplicar) % 2 === 0 ? "(es par)" : ""}`)
    }
    setListaNumeros(listaMultiplicaciones)
  }
  
  const resetearMultiplicar = () => {
    setNumeroMultiplicar(0)
    setListaNumeros([])
  }
  
  
  return (
    <>
    {/*GENERADOR DE FILAS*/}
      <div className="p-6 border rounded-xl shadow-sm bg-card space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance text-pink-300">Generador de Filas</h1>  
        <div className="flex gap-4 items-center">
          <Input 
            type="number"
            placeholder="Número de filas"
            className="max-w-50"
            value={numeroFilas === 0 ? "" : numeroFilas}
            onChange={e => {
              setNumeroFilas(Number(e.target.value))
            }} />
          <Button onClick={generarFilas}>
              Generar
          </Button>
          <Button variant="destructive" onClick={resetNumerFilas}>
              Resetear
          </Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 w-full">
          {listaFilas.map((fila, index) => (
            <div key={index} className="p-3 bg-muted border rounded-md text-sm font-medium animate-in fade-in slide-in-from-left-2">
              {fila}
            </div>
          ))}
          </div>
        </div>

      </div>

      {/* multiplicar 1 al 10*/}
      <div className="p-6 border rounded-xl shadow-sm bg-card space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance text-pink-300">Multiplicar pares</h1>
        <div className="flex gap-4 items-center">
          <Input
            type="number"
            placeholder="número a multiplicar"
            className="max-w-50"
            value={numeroMultiplicar === 0 ? "" : numeroMultiplicar}
            onChange={ e => {
              setNumeroMultiplicar(Number(e.target.value))
            }}
            />
          <Button onClick={multiplicarPares}>
            Multiplicar  
          </Button>
          <Button variant="destructive" onClick={resetearMultiplicar}>
            Resetear
          </Button>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 w-full">
            {listaNumeros.map((n, i) => (
              <div key={i} className="p-3 bg-muted border rounded-md text-sm font-medium animate-in fade-in slide-in-from-left-2">
                {n}
              </div>
            ))}
          </div>    
        </div>
      </div>
      
    </>
  )
}

export default GeneradorFilas
