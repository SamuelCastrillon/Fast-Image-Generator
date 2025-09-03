const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function generateURL(prompt: string, params: GenerateImageParams): string {
    const url = new URL(`${API_URL}/prompt/${encodeURIComponent(prompt)}`)
    
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            url.searchParams.append(key, String(value));
        }
    });

    return url.toString();
}


export async function generateImage(prompt: string, options: GenerateImageParams): Promise<any> {
    
    const requetsObjet: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    }
    
    try {
        const response = await fetch(generateURL(prompt, options), requetsObjet)
        if (!response.ok) {
            throw new Error(`Error: ${response}`);
        }
        return await response
    } catch (error) {
        console.error('Error generating image:', error);
        throw error;
    }
}