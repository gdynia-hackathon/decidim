import React from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  return (
    <div>
      {router.asPath}
      <br></br>
      {router.pathname}
      <br></br>
      {router.query}
      <br></br>
    </div>
  );
};
export default index;
