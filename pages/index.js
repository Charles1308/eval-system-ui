import React from "react";
import Router from "next/router";
import useVerifyUser from "@hooks/useVerifyUser";

export default function Index() {
  const verifyUser = useVerifyUser()
  
  React.useEffect(() => {
    const verify = async () => {
      try{
        await verifyUser()
        Router.push("/admin/dashboard");
      } catch (error) {
        console.error(error)
        Router.push("/auth/login");
      }
    }

    verify()
  });

  return <div />;
}
