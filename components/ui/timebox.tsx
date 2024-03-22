import React from 'react';



const Timebox = ({ time, title, description }: { time: string, title: string, description: string }) => {
  return (
    <div className="flex gap-x-3 max-md:w-36 md:min-w-96">
      <div className="w-32 text-end">
        <span className="text-xs text-gray-500 dark:text-gray-400">{time}</span>
      </div>
      
      <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
        <div className="relative z-10 size-7 flex justify-center items-center">
          <div className="size-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
        </div>
      </div>

      <div className="grow pt-0.5 pb-8">
        <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Timebox;