ServiceConfiguration.configurations.upsert(
  { service: "evernote" },
  { $set: { sandbox: "true" } }
);
