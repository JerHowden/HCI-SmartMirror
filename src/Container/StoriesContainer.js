import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { News } from '../Components/News';
<<<<<<< HEAD
import { carousel } from '../Components/Carousel';
=======
import { Carousel } from '../Components/Carousel';
>>>>>>> 44b2158fc676aefde218e437a24a01c09a1efbf5

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return storyIds.map(storyId => <News key={storyId} storyId={storyId}/>);
    // return storyIds.map(storyId => <carousel key={storyId} storyId={storyId}/>);
};
