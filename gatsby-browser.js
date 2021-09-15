import './src/styles/global.css';
import React from "react"

import { StoreContextProvider } from "./src/context/HeroContext"

export const wrapRootElement = ({ element }) => (
  <StoreContextProvider>{element}</StoreContextProvider>
)