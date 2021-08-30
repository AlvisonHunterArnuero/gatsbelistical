import React from "react"
import Navbar from "./navbar"

export default function Layout({ children }) {
  return (
    <div class="container bg-transparent h-screen mx-auto p-4">
      <Navbar />
      {children}
    </div>
  )
}