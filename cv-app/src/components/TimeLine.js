import React, { forwardRef } from 'react';

const Timeline = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className="timeline h-[50vh] max-h-[80vh] overflow-y-auto">
      <ul className="timeline-list relative p-4">
        {data.map((event, index) => (
          <li className="mb-5 flex items-start" key={index}>
            <div className="flex flex-col items-center">
              <div className="timeline-year font-bold p-2 rounded-full text-center">
                {event.date}
              </div>
              <div className="timeline-stick w-1 bg-[#26c17e] my-4 h-16" />
            </div>
            <div className="timeline-event relative w-full">
              <div className="w-full bg-[#EEE] p-4">
                <h3 className="text-sm mb-2 font-semibold">{event.title}</h3>
                <p className="text-[#222935] text-sm">{event.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Timeline;

