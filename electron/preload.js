// Safe bridge between renderer and Node (optional for IPC)
window.api = {
  version: () => process.versions.electron
};
