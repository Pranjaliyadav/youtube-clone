export interface InitialState{
    videos : HomePageVideos[];
    currentPlaying:CurrentPlaying | null;
    searchTerm:string;
    //defining the type accepted by these arguements - typescript
    searchResults:[];
    nextPageToken:string | null;
    recommendedVideos : RecommendedVideos[];
}

export interface HomePageVideos{
    videoId:string;
    videoTitle:string;
    videoDescription:string;
    videoLink:string;
    videoDuration:string;
    videoViews:string;
    videoAge:string,
    videoThumbnail:string,
    channelInfo:{
        id:string;
        image:string;
        name:string;
    }
}//using this in parseData
export interface CurrentPlaying{}
export interface RecommendedVideos{}