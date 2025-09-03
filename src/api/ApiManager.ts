
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

function generateURL(prompt: string, params?: GenerateImageParams): string {
    const url = new URL(`${API_URL}/prompt/${encodeURIComponent(prompt)}`)

    params && Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            url.searchParams.append(key, String(value));
        }
    });

    return url.toString();
}


export async function generateImage(prompt: string, options?: GenerateImageParams): Promise<GenerateImageResponse> {

    const requetsObjet: RequestInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        const response: GenerateImageResponse = await fetch(generateURL(prompt, options), requetsObjet)
        if (!response.ok) {
            throw new Error(`Error: ${response}`);
        }
        return response
    } catch (error) {
        console.error('Error generating image:', error);
        throw error;
    }
}

export async function getModels(): Promise<string[]> {
    try {
        const response = await fetch(`${API_URL}/models`);
        if (!response.ok) {
            throw new Error(`Error: ${response}`);
        }
        return response.json();

    } catch (error) {
        console.error('Error fetching models:', error);
        throw error;
    }
}