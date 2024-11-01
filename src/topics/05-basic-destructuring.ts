interface AudioPlayer {
  volume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  volume: 100,
  songDuration: 130,
  song: 'Detroit Rock City',
  details: {
    author: 'Kiss',
    year: 1984
  }
}

console.log('Song: ', audioPlayer.song);
console.log('Duration: ', audioPlayer.songDuration);
console.log('Author: ', audioPlayer.details.author);

export {}