import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { News } from '../Components/News';
import { carousel } from '../Components/Carousel';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return storyIds.map(storyId => <carousel key={storyId} storyId={storyId}/>);
    // return storyIds.map(storyId => <carousel key={storyId} storyId={storyId}/>);
};
