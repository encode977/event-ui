import React from "react";

import { events } from "../handlers/eventData";

function Events() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen my-20">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Events</h2>
          {events.map((event) => (
            <div className="flex items-center justify-between p-4 rounded-md bg-white shadow-lg">
              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center rounded-md justify-center p-3 bg-gray">
                  <h4 className="text-xl font-bold">{event.date}</h4>
                  <h2 className="text-title font-bold">{event.time}</h2>
                </div>
                <div className="w-3/5">
                  <h2 className="font-bold text-lg">{event.title}</h2>
                  <p className="text-xl">{event.desc}</p>
                </div>
              </div>
              <button className="bg-black p-3 rounded-xl text-white text-sm">
                Add to Calendar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
