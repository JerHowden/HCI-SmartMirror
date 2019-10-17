import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory} from '../services/hnApi';
import { News } from '../Components/News';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return storyIds.map(storyId => <News key={storyId} storyId={storyId} />);
};
