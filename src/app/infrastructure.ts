export class Infrastructure {

    static difficult: number;
    static score: number = 0;
    static times: number = 0;
    static indexes: number[] = [-1, -1, -1, -1];
    static mode: number = 0;
    static lives: number = 3;
    static ldefined: boolean;

    decoySongs: string[];
    songs: string[];
    songsUrl: string[];
    songsOptions: string[];

    tips: string[];

    songsEasy: string[];
    songsMedium: string[];
    songsHard: string[];

    constructor(){

        this.decoySongs = [
            'Xote das meninas',
            'Respeita Januário',
            'Paraíba',
            'Sertão Sofredor',
            'O cheiro da Carolina',
            'Moreninha, Tentação',
            'A vida do Viajante',
            'São João do Carneirinho'
        ]

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

        this.tips = [
            'Os historiadores relatam que o Baião antes era conhecido como baiano.',
            'Em 1940, o Baião se popularizou e através de artistas como Luiz Gonzaga e Humberto Teixeira o Doutor do Baião.',
            'No início toda festa com música e dança era conhecida como baião.'
        ]
        
    }

    setDifficult(n){
        Infrastructure.difficult = n;
    }

    changeDifficult() {
        if (Infrastructure.difficult == 1){
            if (!Infrastructure.ldefined){
                Infrastructure.lives = 3;
            }
            console.log("Changed difficult to 'easy'");
        } else if (Infrastructure.difficult == 2) {
            if (!Infrastructure.ldefined){
                Infrastructure.lives = 2;
            }
            console.log("Changed difficult to 'medium'");
        } else if (Infrastructure.difficult == 3) {
            if (!Infrastructure.ldefined){
                Infrastructure.lives = 1;
            }
            this.songsUrl = this.songsHard;
            console.log("Changed difficult to 'easy'");
        }
    }
}