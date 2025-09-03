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
    image: string; // Base64 encoded image
}

interface GetModelsResponse {
    models: string[];
}