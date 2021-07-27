import React from "react";
import users from "./users.json";

import CommunityEntry from "./CommunityEntry.js";

const CommunityList = () => {
  return (
    <div className="container text-center">
      <div className="text-center">
        <h2>Popular Communities</h2>
      </div>
      <div className="container">
        {
          users.map(user =>
            <CommunityEntry
              name={user.name}
              origin={user.origin}
              image={user.image}
              links={user.links}
            />
          )
        }
      </div>
    </div>
  );
}

export default CommunityList;