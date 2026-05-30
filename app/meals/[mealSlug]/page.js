import Link from "next/link";
import React from "react";

const MealsDetails = ({ params }) => {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>Meals - {params.mealSlug}</p>
    </main>
  );
};

export default MealsDetails;
