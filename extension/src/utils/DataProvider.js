import React, { useState, useEffect } from "react";

import Cache from "./Cache";

const DataContext = React.createContext();

const DataProvider = props => {
  const [page, setPage] = useState("home");
  const [input, setInput] = useState({
    bob: {
      encrypting_key: "",
      verifying_key: ""
    },
    encrypt: {
      plaintext: "",
      label: "",
      encrypted: ""
    },
    decrypt: {
      encrypted: "",
      label: "",
      plaintext: ""
    },
    grant: {
      label: "",
      bob_encrypting_key: "",
      bob_verifying_key: "",
      grant_expire: ""
    },
    revoke: {
      label: "",
      bob_verifying_key: ""
    }
  });
  const [app, setApp] = useState({});

  useEffect(() => {
    const fn = async () => {
      const _app = await Cache.get();
      setApp(_app);
    };

    fn();
  }, []);

  return (
    <DataContext.Provider
      value={{
        page,
        setPage,
        input,
        setInput,
        app,
        setApp
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

const DataConsumer = DataContext.Consumer;

export { DataConsumer };
export { DataContext };
export default DataProvider;
