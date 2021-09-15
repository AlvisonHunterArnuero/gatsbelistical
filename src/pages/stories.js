import * as React from "react";
import Layout from "../components/layout";
import CardDetailsWrapper from "../components/cardDetailsWrapper";
import CharactersDetails from "../components/charactersDetails";

export default function Stories() {
  return (
    <Layout>
      <div class="text-yellow-400 text-3xl px-4 py-4 uppercase">
        <span className="page-title">Marvel Stories List</span>
        <div class="text-blue-200 capitalize page-subtitle text-xl">
          The hardest choices require the strongest wills.It’s not enough to be
          against something. You have to be for something better.
        </div>
      </div>
      <CardDetailsWrapper> 
        {[1, 2, 3, 4, 5,6].map((num)=><CharactersDetails key={num} />)}
      </CardDetailsWrapper>
    </Layout>
  );
}
