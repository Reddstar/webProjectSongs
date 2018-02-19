export class Infrastructure {

    songs: string[];
    songsUrl: string[];
    songsOptions: string[];

    songsEasy: string[];
    songsMedium: string[];
    songsHard: string[];

    constructor(){
        this.songs = [
            'asa-branca',
            'eu-so-quero-um-xodo',
            'qui-nem-jilo',
            'numa-sala-de-reboco'
        ]

        this.songsEasy = [
            'assets/sounds/asa-branca-facil.mp3',
            'assets/sounds/eu-so-quero-um-xodo-facil.mp3',
            'assets/sounds/qui-nem-jilo-facil.mp3',
            'assets/sounds/numa-sala-de-reboco-facil.mp3'
        ]

        this.songsMedium = [
            'assets/sounds/asa-branca-medio.mp3',
            'assets/sounds/eu-so-quero-um-xodo-medio.mp3',
            'assets/sounds/qui-nem-jilo-medio.mp3',
            'assets/sounds/numa-sala-de-reboco-medio.mp3'
        ]

        this.songsHard = [
            'assets/sounds/asa-branca-dificil.mp3',
            'assets/sounds/eu-so-quero-um-xodo-dificil.mp3',
            'assets/sounds/qui-nem-jilo-dificil.mp3',
            'assets/sounds/numa-sala-de-reboco-dificil.mp3'
        ]

        this.songsUrl = this.songsEasy;

        this.songsOptions = [
            'Asa Branca',
            'Eu só quero um xodó',
            'Qui nem jiló',
            'Numa sala de Reboco'
        ]
        
    }

    changeDifficult(n) {
        if (n == 1){
            this.songsUrl = this.songsEasy;
        } else if (n == 2) {
            this.songsUrl = this.songsMedium;
        } else if (n == 3) {
            this.songsUrl = this.songsHard;
        }
    }
}