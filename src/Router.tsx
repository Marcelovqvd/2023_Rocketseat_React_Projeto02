import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"

import { Home } from "./pages/Home"
import { Page2 } from "./pages/page2"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
      </Route>
    </Routes>
  )
}
