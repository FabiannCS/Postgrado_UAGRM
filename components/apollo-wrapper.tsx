"use client";

import { ApolloProvider, ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useEffect, useState } from "react";
import setupApolloClient from "@/api/apolloclient";

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
    const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null);

    useEffect(() => {
        setupApolloClient().then(setClient);
    }, []);

    if (!client) {
        // Puedes poner un spinner o null mientras carga la persistencia
        return null;
    }

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
