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

  //validador de correos
  

  const validarCorreos = () => {
    const correos = [ "arturo@gmail.com", "papu_desarrollador", "contacto@web.me", "admin_sin_arroba", "klaus.mikaelson@vampire.com" ];
    for (let index = 0; index < correos.length; index++) {
      const validarEmails = correos[index];
      
      if (validarEmails.includes("@")) {
        console.log(`${validarEmails}: Es un correo real`);        
      } else {
        console.log(`${validarEmails}: Es un correo falso`);
      }
      
    }
  }
  
  validarCorreos()


  // Calculador de presupuesto

  const simuladorGasto = (presupuesto: number) => {
    let presupuestoInicial = presupuesto
    // let presupuestoMensual: string[] = []
    for (let i = 1; i <= 6; i++) {
      presupuestoInicial = presupuestoInicial - 200
      console.log(`mes ${i} presupuesto: ${presupuestoInicial}`); 
    }


  }

  simuladorGasto(2000)
  simuladorGasto(500)


  //calculador de impuestos

  const [numeroDeInvitados, setNumeroDeInvitados] = useState(0)
  const [listaDeInvitados, setListaDeInvitados] = useState<string[]>([])

  const calcularImpuestos = (iva: number) => {
    const invitadosLista: string[] = []
    for (let i = 1; i <= numeroDeInvitados; i++) {
      if (i % 10 === 0) {
        invitadosLista.push(`felicidades ${i} debe: 0 pesos}`)
      } else {
      invitadosLista.push(`El invitado ${i} debe: ${(50 * (iva / 100)) + 50} pesos`)   
      }   
    }

    setListaDeInvitados(invitadosLista)
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

      {/** Calcular impuestos */}
      <div className="p-6 border rounded-xl shadow-sm bg-card space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance text-pink-300">Calcular impuestos</h1>
        <div className="flex gap-4 items-center">
          <Input 
            type="number"
            placeholder="Número de invitados"
            value={numeroDeInvitados === 0 ? "" : numeroDeInvitados}
            className="max-w-50"
            onChange={e => (
              setNumeroDeInvitados(Number(e.target.value))
            )}
          />
          <Button
            onClick={() => calcularImpuestos(16)}>
            Caclular
          </Button>
          <Button
            variant="destructive"
            onClick={() => 
              {setListaDeInvitados([]) 
               setNumeroDeInvitados(0)
              }}>
            Resetear
          </Button>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 w-full">
            {listaDeInvitados.map((invitado, i) => (
              <div key={i} className="p-3 bg-muted border rounded-md text-sm font-medium animate-in fade-in slide-in-from-left-2">
                {invitado}
              </div>
            ))}
          </div>
        </div>
      </div>  
      
    </>
  )
}

export default GeneradorFilas
