import React, { useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { useRouter } from "next/router";

export default function Home() {
  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-black ">
      <h1 className="text-4xl font-semibold tracking-tight text-white lg:text-6xl">
        ✨Welcome to the{" "}
        <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text ">
          private website
        </span>{" "}
        ✨
      </h1>
      <p className="mx-20 mt-4 text-lg text-center text-gray-400 lg:text-2xl lg:mt-8 lg:mx-60">
        You've made it! Thank you for supporting our project and being part of
        it.{" "}
      </p>
      <button
        className="px-8 py-3 text-lg font-medium text-gray-100 transition duration-150 rounded-lg hover:brightness-125"
        style={{
          backgroundColor: "rgb(22, 22, 24)",
          borderColor: "#2e2e32",
          borderStyle: "solid",
          borderWidth: "0.8px",
        }}
      >
        Logout
      </button>
    </div>
  );
}
