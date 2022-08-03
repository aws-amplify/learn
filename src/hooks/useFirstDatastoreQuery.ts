import { DataStore, Hub } from "aws-amplify";
import { useEffect } from "react";

export function useFirstDatastoreQuery(queryFn: any) {
  // For the first page load, check to see if DataStore is ready before querying
  useEffect(() => {
    // Create listener that will stop observing the model once the sync process is done
    const removeListener = Hub.listen("datastore", (capsule) => {
      const {
        payload: { event },
      } = capsule;

      if (event === "ready") {
        queryFn();
      }
    });

    // Start the DataStore, this kicks-off the sync process.
    DataStore.start();

    return () => {
      removeListener();
    };
  }, [queryFn]);
}
