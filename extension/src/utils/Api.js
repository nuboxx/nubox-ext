// Expose the nuBox apis.

const nuBox = {
  checkForExtension: async () => {},

  approve: async () => {},

  getBobKeys: async () => {},

  encrypt: async ({ plaintext, label }) => {},

  decrypt: async ({ encrypted, label }) => {},

  grant: async ({ label, expiration }) => {},

  revoke: async ({ label, bvk }) => {}
};

window.nuBox = nuBox;

export default nuBox;
