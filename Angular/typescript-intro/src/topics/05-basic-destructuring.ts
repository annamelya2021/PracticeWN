interface AudioPlayer {
    AudioVolume: number;
    songDuration: number;
    song: string;
    details:Details;

}
interface Details{
    author: string;
    year: number
}

const audioPlayer: AudioPlayer ={
    AudioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed sheeran",
        year: 2022
    }
}

// const {song, songDuration:duration, details} = audioPlayer;
// const {author, year} = details;


// console.log('Song :>> ', song);
// console.log('duration :>> ', duration);
// console.log('Author :>> ', author);

// const dbz: string[]=["Goku", "Vegeta", "Trunks"];

const [ , , p3="not found"]: string[]=["Goku", "Vegeta", "Trunks"];

console.log("p3", p3)



export{}