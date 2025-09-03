interface GenerateImageParams {
    model: string;
    width?: number;
    height?: number;
    seed?: number;
    enhance?: boolean;
    nologo?: boolean;
    nofeed?: boolean;
    private?: boolean;
    safe?: boolean;
}

interface GenerateImageResponse {
    url: string;
    status: number;
    ok: boolean;
    redirected: boolean;
    type: string;
    statusText: string;
    headers?: Headers; // Optional, depending on usage
}

interface GetModelsResponse {
    models: string[];
}