import * as React from "react";
import Layout from "../components/layout";
import CardDetailsWrapper from "../components/cardDetailsWrapper";
import CharactersDetails from "../components/charactersDetails";

export default function Comics() {
  return (
    <Layout>
      <div class="text-yellow-400 text-3xl px-4 py-4 uppercase">
        <span className="page-title">Marvel Comics List</span>
        <div class="text-blue-100 capitalize page-subtitle text-xl">
          I choose to run towards my problems, and not away from them. Because’s
          that–because’s that what heroes do.
        </div>
      </div>
      <CardDetailsWrapper> 
        {[1, 2, 3, 4, 5,6].map((num)=><CharactersDetails key={num} />)}
      </CardDetailsWrapper>
    </Layout>
  );
}
