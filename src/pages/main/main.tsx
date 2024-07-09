import React, { useState, useEffect } from 'react';
import style from './main.module.scss';

export interface Project {
    id: number;
    name: string;
    desctiption: string
}

const MainPage: React.FC = () => {
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchProjectData = async () => {
            const projectData: Project = {
                id: 1,
                name: 'ДИТ41',
                desctiption: 'Проект 1 курса'
            };
            setProject(projectData);
        };

        fetchProjectData();
    }, []);

    return (
        <>
            {project ? (
                <div className={style.mainPage}>
                    <h2>{project.name}</h2>
                    <div>
                        <p><strong>Email:</strong> {project.desctiption}</p>
                    </div>
                </div>
            ) : (
                <p>Loading project data...</p>
            )}
        </>
    );
};

export default MainPage;