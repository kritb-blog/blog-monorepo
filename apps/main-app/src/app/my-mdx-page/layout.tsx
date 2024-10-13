import React from 'react'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-8">
      <section>{children}</section>
    </main>
  )
}
