import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesURL = `${baseUrl}topstories.json`;
export const aCertainStoryUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
    const result = await axios
    .get(`${aCertainStoryUrl + storyId}.json`)
    .then(({ data }) => data)

    return result;
}

export const getStoryIds = async () => {
    const result = await axios.get(topStoriesURL).then(({data}) => data);
    console.log(result.slice(0,10));
    return result.slice(0,5);
};