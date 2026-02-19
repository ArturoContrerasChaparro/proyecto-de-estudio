"use client"



interface User {
  id: number,
  name: string,
  email: string,
  phone: string,
  website: string
}

const Interface = () => {

  const getWebTest = "https://jsonplaceholder.typicode.com/users"

  return (
    <>
      <div className="p-6 border rounded-xl shadow-sm bg-card space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance text-pink-300">Interface</h1>  
        <div className="flex gap-4 items-center">

        </div>
      </ div>
    </>
  )
}

export default Interface
