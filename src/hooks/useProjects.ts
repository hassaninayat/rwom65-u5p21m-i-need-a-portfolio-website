import { useState, useEffect } from 'react';
import { Project } from '../types';
import { projects } from '../data/projects';

const useProjects = () => {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    setData(projects);
  }, []);

  return data;
};

export default useProjects;