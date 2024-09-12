import React, { useState, useEffect } from "react";
import InfoBar from "../infoBar/InfoBar";
import { getUserFromApi } from "../../services/useApi";

const ParentComponent = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUsername = await getUserFromApi();
      setUsername(fetchedUsername);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <InfoBar username={username} />
    </div>
  );
};

export default ParentComponent;