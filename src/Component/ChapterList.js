import React, { useState } from 'react';

const chapters = [
  {
    title: 'Chapter 1',
    duration: '02:00:00',
    difficulty: 'Medium',
    items: [
      { type: 'Video', name: 'React Part 1', time: '10:00' },
      { type: 'Video', name: 'React Part 2', time: '20:00' },
      { type: 'Video', name: 'React Part 3', time: '15:00' },
      { type: 'Video', name: 'React Part 4', time: '12:00' }
    ],
    progress: 45,
  },
  {
    title: 'Chapter 2',
    duration: '02:00:00',
    difficulty: 'Medium',
    items: [
      { type: 'Video', name: 'React Part 4', time: '10:00' },
      { type: 'Video', name: 'React Part 5', time: '20:00' },
      { type: 'Video', name: 'React Part 6', time: '15:00' },
      { type: 'Video', name: 'React Part 7', time: '12:00' }
    ],
    progress: 0,
  },
  {
    title: 'Chapter 3',
    duration: '05:00:00',
    difficulty: 'High',
    items: [
      { type: 'Video', name: 'React Part 8', time: '10:00' },
      { type: 'Video', name: 'React Part 9', time: '20:00' },
      { type: 'Video', name: 'React Part 10', time: '15:00' },
      { type: 'Video', name: 'React Part 11', time: '12:00' }
    ],
    progress: 0,
  }
  
  
];

const  ChapterList = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="chapter-list">
      {chapters.map((chapter, index) => (
        <div key={index} className="chapter">
          <div className="chapter-header" onClick={() => toggleExpand(index)}>
            <h3>{chapter.title}</h3>
            <div className="chapter-info">
              <span>{chapter.duration}</span>
              <span>{chapter.difficulty}</span>
              <span>{chapter.progress}% Completed</span>
            </div>
          </div>
          {expanded === index && (
            <div className="chapter-items">
              {chapter.items.map((item, idx) => (
                <div key={idx} className="chapter-item">
                  <span>{item.type}</span>
                  <span>{item.name}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ChapterList;