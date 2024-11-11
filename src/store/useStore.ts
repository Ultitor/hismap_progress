import { create } from 'zustand';
import type { HistoricalEvent } from '../types/Event';
import { historicalEvents } from '../data/historicalEvents';

interface State {
  selectedEvent: HistoricalEvent | null;
  events: HistoricalEvent[];
  searchQuery: string;
  showLayerControls: boolean;
  setSelectedEvent: (event: HistoricalEvent | null) => void;
  addEvent: (event: HistoricalEvent) => void;
  setSearchQuery: (query: string) => void;
  toggleLayerControls: () => void;
}

export const useStore = create<State>((set) => ({
  selectedEvent: null,
  events: historicalEvents,
  searchQuery: '',
  showLayerControls: false,
  setSelectedEvent: (event) => set({ selectedEvent: event }),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleLayerControls: () => set((state) => ({ showLayerControls: !state.showLayerControls })),
}));