import * as React from "react";
import Layout from "../components/layout";
import CharactersDetails from "../components/charactersDetails";
import CardDetailsWrapper from "../components/cardDetailsWrapper";
import { StoreContext } from "../../src/context/HeroContext";

export default function Characters() {
  const cnxtSearchInstance = React.useContext(StoreContext);
  console.log(cnxtSearchInstance);
  return (
    <Layout>
      <div class="text-yellow-400 text-3xl px-4 py-4 uppercase">
        <span className="page-title">Marvel Characters List</span>
        <div class="text-blue-200 capitalize page-subtitle my-2">
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas!
        </div>
      </div>
      <CardDetailsWrapper> 
        {[1, 2, 3, 4, 5,6].map((num)=><CharactersDetails key={num} />)}
      </CardDetailsWrapper>
    </Layout>
  );
}
