import React, { useState } from 'react';
import { Layers, Search, Plus } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Controls() {
  const [showSearch, setShowSearch] = useState(false);
  const { toggleLayerControls, setSearchQuery, events, setSelectedEvent } = useStore();
  
  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    
    const searchTerms = query.toLowerCase().split(' ');
    const matchingEvents = events.filter(event => {
      const eventText = `${event.title} ${event.description} ${event.year}`.toLowerCase();
      return searchTerms.every(term => eventText.includes(term));
    });
    
    if (matchingEvents.length > 0) {
      setSelectedEvent(matchingEvents[0]);
    }
  };

  return (
    <div className="absolute top-4 left-4 flex flex-col space-y-2">
      <button 
        onClick={toggleLayerControls}
        className="bg-white/10 backdrop-blur-md p-2 rounded-lg shadow-lg hover:bg-white/20 transition-colors"
      >
        <Layers className="w-6 h-6 text-white" />
      </button>
      
      <div className="relative">
        <button 
          onClick={() => setShowSearch(!showSearch)}
          className="bg-white/10 backdrop-blur-md p-2 rounded-lg shadow-lg hover:bg-white/20 transition-colors"
        >
          <Search className="w-6 h-6 text-white" />
        </button>
        
        {showSearch && (
          <div className="absolute left-full ml-2 bg-black/50 backdrop-blur-md rounded-lg shadow-lg p-2">
            <input
              type="text"
              placeholder="Search events..."
              className="w-64 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(e.currentTarget.value)}
            />
          </div>
        )}
      </div>
      
      <button className="bg-white/10 backdrop-blur-md p-2 rounded-lg shadow-lg hover:bg-white/20 transition-colors">
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}