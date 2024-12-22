"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/docs/introduction");
  }, [router]);

  return (
    <div className="">
      <div>Redirecting to /introduction..</div>
    </div>
  );
};

export default Page;