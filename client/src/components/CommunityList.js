import React from "react";
import { Image } from "react-bootstrap";

const CommunityList = () => {
  return (
    <div className="container text-center">
      <div className="text-center">
        <h2>Popular Communities</h2>
      </div>
      <a>
        <Image
          alt="failed to load"
          src="https://i.ytimg.com/vi/btztdQGX7Ko/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYScMUB1UK1hTG6Cg7zWsgeegBCg"
          height="200"
          width="330"
        />
      </a>
      <a>
        <Image
          alt="failed to load"
          src="https://i.ytimg.com/vi/kHcWZDih-Qc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfUoI4kIrhYO_DMia6dokWtDsTWw"
          height="200"
          width="330"
        />
      </a>
      <a>
        <Image
          alt="failed to load"
          src="https://ucarecdn.com/aa660d11-d244-4ed3-95c2-c701f095c314/"
          height="200"
          width="330"
        />
      </a>
    </div>
  );
}

export default CommunityList;