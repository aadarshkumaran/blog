import { useState } from 'react'
import './App.css'
import { BlogContentPage, HomePage } from './pages'
import { Route, Routes } from 'react-router-dom'
import useFetch from './hooks/useFetch'


function App() {
  let {loading,data,error} = useFetch(`http://localhost:1337/api/blogs?populate=*`)
  if(loading) return <p>Loading....</p>
  if(error) return <p>Error..</p>
  // console.log(data);
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage blogs={data?data:""}/>}/>
      <Route path='/blog/:id' element={<BlogContentPage blogs={data?data:""}/>}/>
    </Routes>
    </>
  )
}

export default App
