import React from "react";
import Router from "next/router";
import useVerifyUser from "@hooks/useVerifyUser";

export default function Index() {
  const verifyUser = useVerifyUser()
  
  React.useEffect(() => {
    const verify = async () => {
      await verifyUser()
    }

    verify()
  });

  return <div />;
}
