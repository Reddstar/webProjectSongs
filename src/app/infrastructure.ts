export class Infrastructure {

    songs: string[];
    songsUrl: string[];
    songsOptions: string[];

    constructor(){
        this.songs = [
            'asa-branca-facil',
            'eu-so-quero-um-xodo-facil',
            'qui-nem-jilo-facil',
            'numa-sala-de-reboco-facil'
        ]

        this.songsUrl = [
            'assets/sounds/asa-branca-facil.mp3',
            'assets/sounds/eu-so-quero-um-xodo-facil.mp3',
            'assets/sounds/qui-nem-jilo-facil.mp3',
            'assets/sounds/numa-sala-de-reboco-facil.mp3'
        ]

        this.songsOptions = [
            'Asa Branca',
            'Eu só quero um xodó',
            'Qui nem jiló',
            'Numa sala de Reboco'
        ]
        
    }
}