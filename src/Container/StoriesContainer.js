import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { HackerNews } from '../react-components/News';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return storyIds.map(storyId => <HackerNews key={storyId} storyId={storyId}/>);
    // return storyIds.map(storyId => <carousel key={storyId} storyId={storyId}/>);
};
