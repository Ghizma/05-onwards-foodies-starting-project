import Link from "next/link";
import React from "react";

const MealsDetails = ({ params }) => {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>Meals - {params.mealSlug}</p>
      <div style={{ textAlign: "center" }}>
        <p>
          <Link href={"."}>Home</Link>
        </p>
        <p>
          <Link href={"/meals"}>Meals</Link>
        </p>

        <p>
          <Link href={"/community"}>Community</Link>
        </p>
      </div>
    </main>
  );
};

export default MealsDetails;
