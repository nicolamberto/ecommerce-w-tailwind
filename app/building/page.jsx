"use client"

import Link from 'next/link'
import React from 'react'


export default function page() {



  return (
    <div>
      <h2>Crea tu pc</h2>
      <p>(pasos a seguir...)</p>
      <button><Link href={'/building/gabinete'}> Continuar </Link> </button>
    </div>
  )
}

