import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout';
import Home from "./pages/allProducts";
import Add from "./pages/addProducts";
import './Mix.css'

export default function Mix(props) {
  return (
    <div className={`${props.inactive ? "inactive-mix" : ""}`}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/addProducts" element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter></div>
  )
}
