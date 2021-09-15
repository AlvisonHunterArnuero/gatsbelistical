import React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h2 className="text-red-600 text-center page-title my-4">
          WELCOME TO THE WORLD OF GATSBELISTICAL
        </h2>
        <p className="text-white uppercase">
          No mistakes. No do-overs. Look out for each other. This is the fight
          of our lives.{" "}
        </p>
      </div>
    </Layout>
  );
}
