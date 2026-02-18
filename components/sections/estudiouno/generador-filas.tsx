'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"


const GeneradorFilas = () => {
  

  const [numeroFilas, setNumeroFilas] = useState(0)
  const [listaFilas, setListaFilas] = useState<string[]>([])

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
  
  return (
    <>
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
            }}>
          </Input>
          <Button onClick={generarFilas}>
              Generar
          </Button>
          <Button variant="destructive" onClick={resetNumerFilas}>
              Resetear
          </Button>
          <div className="text-center">
          {listaFilas.map((fila, index) => (
            <div key={index} className="p-3 bg-muted border rounded-md text-sm font-medium animate-in fade-in slide-in-from-left-2">
              {fila}
            </div>
          ))}
          </div>
        </div>

      </div>
      
    </>
  )
}

export default GeneradorFilas
