import { useEffect, useState } from 'react';

export default function useWeather(query: string) {
    const [weather, setWeather] = useState<string>('');
    const refreshWeather = () => {

    };

    useEffect(() => {
        return refreshWeather();
    }, []);

    return weather;
}
