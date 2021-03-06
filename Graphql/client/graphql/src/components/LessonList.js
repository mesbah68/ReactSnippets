import React from 'react';

import { useQuery } from "@apollo/client";
// import { graphql } from 'react-apollo';

import { getLessonsQuery } from '../queries/index';

const LessonList = () => {
    const { loading, error, data } = useQuery(getLessonsQuery);

    if (!loading) {
        const lessonsItems = data.lessons;

        return (
            <div>
                <h2>Lessons List</h2>
                <ul>
                    {lessonsItems.map(item => (
                        <li>{item.id}  {item.name} {item.group}</li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return (
            <span>loading...</span>
        )
    }
    
};

export default LessonList;
