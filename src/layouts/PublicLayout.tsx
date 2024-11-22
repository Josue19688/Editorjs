

import {  Outlet } from "react-router-dom"

export default function PublicLayout() {
 
  return (
    <>
      <main className="text-sm font-sans text-neutral-300 antialiased">
       
        <Outlet />
        
      </main>

    </>
  )
}
