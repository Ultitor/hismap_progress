import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { X, ExternalLink } from 'lucide-react';
import { getWikipediaExtract } from '../services/wikipedia';

export function EventInfo() {
  const { selectedEvent, setSelectedEvent } = useStore();
  const [wikiExtract, setWikiExtract] = useState<string>('');

  useEffect(() => {
    if (selectedEvent?.wikipediaUrl) {
      const pageId = selectedEvent.wikipediaUrl.split('/').pop();
      if (pageId) {
        getWikipediaExtract(parseInt(pageId))
          .then(extract => setWikiExtract(extract))
          .catch(console.error);
      }
    }
  }, [selectedEvent]);

  if (!selectedEvent) return null;

  return (
    <div className="absolute top-4 right-4 w-96 bg-white rounded-lg shadow-xl p-6 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
        <button
          onClick={() => setSelectedEvent(null)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <span className="font-semibold">{selectedEvent.year}</span>
          <span>•</span>
          <span className="text-sm">
            {selectedEvent.location.lat.toFixed(2)}°N, {selectedEvent.location.lng.toFixed(2)}°E
          </span>
        </div>
        
        <p className="text-gray-800">{selectedEvent.description}</p>
        
        {wikiExtract && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">{wikiExtract}</p>
          </div>
        )}
        
        {selectedEvent.wikipediaUrl && (
          <a
            href={selectedEvent.wikipediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <span>Read more on Wikipedia</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}