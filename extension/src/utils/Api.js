// Expose the nuBoxx apis.

const nuBoxx = {
  checkForExtension: async () => {},

  approve: async () => {},

  getBobKeys: async () => {},

  encrypt: async ({ plaintext, label }) => {},

  decrypt: async ({ encrypted, label }) => {},

  grant: async ({ label, expiration }) => {},

  revoke: async ({ label, bvk }) => {}
};

window.nuBoxx = nuBoxx;

export default nuBoxx;
