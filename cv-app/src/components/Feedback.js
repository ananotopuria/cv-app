import React, { forwardRef } from 'react';

const Feedback = forwardRef(({ data }, ref) => {
    return (
      <div ref={ref} className="feedback">
        {data.map((feedback, index) => (
          <div key={index} className="mb-10">
            <div className="info bg-gray-300 p-4">
              <p className="text-base text-gray-700">{feedback.feedback}</p>
            </div>
            <div className="feedback-reporter mt-4 flex items-center">
              <div className="feedback-reporter-photo mr-4 h-12 w-12 overflow-hidden rounded-full">
                <img
                  src={feedback.reporter.photoUrl}
                  alt={feedback.reporter.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center space-x-3">
                <h3 className="font-s justify-center text-sm font-medium">
                  {feedback.reporter.name}
                </h3>
                <a
                  href={feedback.reporter.citeUrl}
                  className="ml-2 text-green-500 hover:underline"
                >
                  somesite.com
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  });
  
  export default Feedback;
  