import React, { useState } from "react";

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
      encrypting_key: "",
      verifying_key: "",
      grant_expire: ""
    },
    revoke: {
      label: "",
      verifying_key: ""
    }
  });

  return (
    <DataContext.Provider
      value={{
        page,
        setPage,
        input,
        setInput
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
