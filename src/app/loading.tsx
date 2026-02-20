import Container from "@/Components/Shared/Container";
import ItemSkeleton from "@/Components/Skaletons/ItemSkeletion";
import React from "react";

const loading = () => {
  return (
    <Container>
      <div className="mt-30 grid grid-cols-1 md:grid-cols-3 p-2 md:p-0 lg:grid-cols-4 gap-5 ">
        {[...Array(8).keys()].map((i) => (
          <ItemSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
};

export default loading;
