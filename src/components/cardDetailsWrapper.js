import React from "react";

export default function CardDetailsWrapper({children}) {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-4">
      {children}
      </div>
    )
}