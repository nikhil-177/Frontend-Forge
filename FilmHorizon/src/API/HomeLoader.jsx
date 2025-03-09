import { FetchNowPlaying } from "./NowPlayingAPI";
import { FetchTrending } from "./trendingAPI"
import { FetchPopular } from "./PopularAPI";

export const HomeLoader = async () => {
    const trendingData = await FetchTrending();
    // console.log(trendingData.results.slice(0,10));
    
    const nowPlayingData = await FetchNowPlaying();
    const popularData = await FetchPopular();

    return {
        trending : trendingData.results.slice(0,10),
        nowPlaying : nowPlayingData.results.slice(0,10),
        popular : popularData.results.slice(0,10),
    };
    
}