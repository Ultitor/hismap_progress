import React from 'react';
import { useStore } from '../store/useStore';
import { Clock } from 'lucide-react';

export function Timeline() {
  const { events, setSelectedEvent, selectedEvent } = useStore();
  
  const sortedEvents = [...events].sort((a, b) => a.year - b.year);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4">
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/20" />
        <div className="flex justify-between items-center relative">
          {sortedEvents.map((event) => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className={`flex flex-col items-center space-y-2 transition-all transform
                ${selectedEvent?.id === event.id ? 'scale-110' : 'hover:scale-105'}
                ${selectedEvent?.id === event.id ? 'text-blue-400' : 'text-white'}`}
            >
              <Clock className={`w-6 h-6 ${selectedEvent?.id === event.id ? 'text-blue-400' : 'text-white'}`} />
              <span className="text-sm font-bold">{event.year}</span>
              <span className="text-xs max-w-[120px] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                {event.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}