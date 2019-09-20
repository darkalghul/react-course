import { combineReducers } from "redux";

const songsReducer = () => {
   return [
      { title: "Havana", artist: "Camila Cabello", duration: "3:37" },
      { title: "Restless", artist: "Cold War Kids", duration: "4:53" },
      { title: "The Resistance", artist: "Skillet", duration: "3:52" },
      { title: "Human", artist: "Rag'n'Bone Man", duration: "3:20" }
   ];
};

const selectedSongReducer = (selectedSong = null, action) => {
   if (action.type === "SONG_SELECTED") {
      return action.payload;
   }

   return selectedSong;
};

export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer
});
