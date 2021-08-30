import * as React from "react"
import Layout from "../components/layout"
import CharactersDetails from "../components/charactersDetails";

export default function Characters() {
  return (
    <Layout>
      <div class="text-yellow-400 text-3xl px-4 py-4 uppercase">
        Marvel Characters List
        <div class="text-blue-200 lowercase text-xl">
      Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!
      </div>
      </div>
     

      <div class="grid grid=cols-1 md:grid-cols-3 content-center gap-4">
        <CharactersDetails />
        <CharactersDetails />
        <CharactersDetails />
      </div>
    </Layout>
  );
}