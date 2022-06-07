
const apiUrl = "http://127.0.0.1:5000";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function send(
    endpoint: string,
    method: HttpMethod,
    body?: any,
    customConfig?: any
): Promise<any | Error> {
    const config = {
        method: method,
        credentials: "include",
        headers: {
            ...customConfig?.headers,
        },
        ...customConfig,
    };
    if (body) {
        config.headers["Content-Type"] = "application/json";
        config.body = JSON.stringify(body);
    }
    try {
        const response = await fetch(`${apiUrl}${endpoint}`, config).catch(
            (err) => {
               /* errorToast(
                    "Web service inaccessible",
                    { autoClose: 10000 }
                );*/
                return err;
            }
        );
        if (response.ok) {
            return response.json();
        }
        return new Error("Failed to fetch, see console logs");
    } catch (err) {
        console.error(err);
        return err;
    }
}

export async function get(
    endpoint: string,
    config?: any
): Promise<any | Error> {
    return send(endpoint, "GET", null, config);
}

export async function post(
    endpoint: string,
    body: any,
    config?: any
): Promise<any | Error> {
    return send(endpoint, "POST", body, config);
}
