import Link from "next/link";
import React from "react";

const CommunityPage = () => {
  return (
    <main>
      <h1>Community</h1>;
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

export default CommunityPage;
