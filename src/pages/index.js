import * as React from "react"
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <main class="bg-black">
      <title>Home Page</title>
      <div class="flex h-screen">
        <div class="m-auto text-white">
          <h3 class="text-7xl font-semibold my-4">Welcome to Gatsbelistical</h3>
          <Link class="bg-red-800 hover:bg-red-500 p-3 my-4" to="/home">
            ENTER SITE
            </Link>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
