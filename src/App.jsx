import { useState } from "react"
import Navbar from "./Components/Navbar"

import NewsLayout from "./Components/NewsLayout"


function App() {
   const [category, setCategory] = useState('general')
  return (
     <div>
       <Navbar setCategory={setCategory}></Navbar>
       <NewsLayout category={category}></NewsLayout>
     </div>
  )
}

export default App