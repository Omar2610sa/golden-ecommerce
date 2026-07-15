export interface HomePageProps {
    params: Promise<{
        lang: string;
    }>;
}

export interface Slider {
    id: number
    name: string
    desc: string
    image: {
        url: string
    }
}


export interface HomeData {
    sliders: Slider[]
}