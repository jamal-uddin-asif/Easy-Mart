import Link from "next/link";
import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <div className="border-slate-100  border shadow-sm py-4 px-5 rounded-2xl">
        <Link href={"/"}>
          <div className="font-bold space-x-0.5 flex items-center">
            <span className="bg-blue-800 text-white rounded-sm  p-1 px-2.5">
              E
            </span>
            <div>Mart</div>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Header;
