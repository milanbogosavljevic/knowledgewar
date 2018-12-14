class Questions {
    constructor(language){
        this.setup(language);
    }

    setup(language){
        this._language = language;
        this.setQuestionsForLevel1();
        this.setQuestionsForLevel2();
        this.setQuestionsForLevel3();
        this.setQuestionsForLevel4();
        this.setQuestionsForLevel5();
        this.setQuestionsForLevel6();
        this.setQuestionsForLevel7();
        this.setQuestionsForLevel8();
        this.setQuestionsForLevel9();

        this.checkNumOfQuestions(); // TODO DELETE IN PRODUCTION
    }

    checkNumOfQuestions(){ // JUST TO KNOW HOW MANY QUESTIONS IS INSERTED
        let total = 0;
        for(let i = 1; i < 10; i++){
            console.log(`level ${i} = ${this['level'+i].length}`);
            total += this['level'+i].length;
        }
        console.log(`total ${total}`);
    }

    getQuestion(levelNum){
        const level = "level" + levelNum;
        if(this[level].length < 1){ // there is no questions , restart array
            const setQuestionsMethod = "setQuestionsForLevel" + levelNum;
            this[setQuestionsMethod]();
        }
        const qNum = Math.floor(Math.random() * this[level].length);  // get random index
        const question = this[level][qNum];  //  get question
        this[level].splice(qNum, 1); // remove question from array
        return question;
    }

    setQuestionsForLevel1(){
        if(this._language === "srb"){
            this.level1 = [
                {
                    question:"Koji cuveni Benediktanski monah je izmislio sampanjac ?",
                    answers:[{txt:"Dom Perignon",correct:true} , {txt:"Don Vito",correct:false} , {txt:"Don Juan",correct:false} , {txt:"Don King",correct:false}],
                    airStrike:true
                },
                {
                    question:"Ko tumaci ulogu Nea u filmu Matrix ?",
                    answers:[{txt:"Keanu Reeves",correct:true} , {txt:"Tom Hanks",correct:false} , {txt:"Johnny Depp",correct:false} , {txt:"Matt Damon",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koji je glavni grad Spanije ?",
                    answers:[{txt:"Madrid",correct:true} , {txt:"Barselona",correct:false} , {txt:"Dablin",correct:false} , {txt:"Beograd",correct:false}],
                    airStrike:false
                },
                {
                    question:"Najduza zeleznicka linije na svetu, Trans-Sibirska linija, se nalazi u ?",
                    answers:[{txt:"Rusija",correct:true} , {txt:"Kina",correct:false} , {txt:"Amerika",correct:false} , {txt:"Kanada",correct:false}],
                    airStrike:false
                },
                {
                    question:"Bill Gates je osnovao koju kompaniju ?",
                    answers:[{txt:"Microsoft",correct:true} , {txt:"Apple",correct:false} , {txt:"General Motors",correct:false} , {txt:"IBM",correct:false}],
                    airStrike:false
                },
                {
                    question:"Ko je patentirao telefon ?",
                    answers:[{txt:"Bel",correct:true} , {txt:"Edison",correct:false} , {txt:"Tesla",correct:false} , {txt:"Ajnstajn",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kada se zavrsio drugi svetski rat ?",
                    answers:[{txt:"1945",correct:true} , {txt:"1944",correct:false} , {txt:"1918",correct:false} , {txt:"1946",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kada je poceo prvi svetski rat ?",
                    answers:[{txt:"1914",correct:true} , {txt:"1918",correct:false} , {txt:"1939",correct:false} , {txt:"1941",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kako se zove cuveni veliki sat u Londonu ?",
                    answers:[{txt:"Big Ben",correct:true} , {txt:"Veliki Getsbi",correct:false} , {txt:"Veliki prasak",correct:false} , {txt:"Veliki sat",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koje je boje panda ?",
                    answers:[{txt:"crna/bela",correct:true} , {txt:"braon/bela",correct:false} , {txt:"crna",correct:false} , {txt:"bela",correct:false}],
                    airStrike:false
                },
                {
                    question:"U kojoj zemlji se nalazi Prag ?",
                    answers:[{txt:"Ceska Republika",correct:true} , {txt:"Makedonija",correct:false} , {txt:"Kina",correct:false} , {txt:"Rusija",correct:false}],
                    airStrike:true
                },
                {
                    question:"Po cemu je bio poznat Antonio Stradivari ?",
                    answers:[{txt:"pravljenju violina",correct:true} , {txt:"pravljenju problema",correct:false} , {txt:"slikarstvo",correct:false} , {txt:"NBA igrac",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kentaur je mitsko bice pola covek , pola ?",
                    answers:[{txt:"Konj",correct:true} , {txt:"Lav",correct:false} , {txt:"Tigar",correct:false} , {txt:"Slon",correct:false}],
                    airStrike:false
                },
                {
                    question:"Ko je naslikao Mona Lisu ?",
                    answers:[{txt:"Da Vinci",correct:true} , {txt:"Picasso",correct:false} , {txt:"Dali",correct:false} , {txt:"Monet",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koliko igraca igra u jednom timu u kosarci ?",
                    answers:[{txt:"5",correct:true} , {txt:"4",correct:false} , {txt:"6",correct:false} , {txt:"7",correct:false}],
                    airStrike:false
                },
                {
                    question:"Merna jedinica za energiju u hrani je ?",
                    answers:[{txt:"kalorija",correct:true} , {txt:"Kelvin",correct:false} , {txt:"vat",correct:false} , {txt:"ni jedna",correct:false}],
                    airStrike:false
                },
                {
                    question:"Karavan je grupa kojih zivotinja ?",
                    answers:[{txt:"Kamile",correct:true} , {txt:"Konji",correct:false} , {txt:"Pilica",correct:false} , {txt:"Vukova",correct:false}],
                    airStrike:false
                }
            ];
        }else {
            this.level1 = [
                {
                    question:"Who was the legendary Benedictine monk who invented champagne ?",
                    answers:[{txt:"Dom Perignon",correct:true} , {txt:"Don Vito",correct:false} , {txt:"Don Juan",correct:false} , {txt:"Don King",correct:false}],
                    airStrike:true
                },
                {
                    question:"Who played Neo in The Matrix ?",
                    answers:[{txt:"Keanu Reeves",correct:true} , {txt:"Tom Hanks",correct:false} , {txt:"Johnny Depp",correct:false} , {txt:"Matt Damon",correct:false}],
                    airStrike:false
                },
                {
                    question:"What is the capital city of Spain ?",
                    answers:[{txt:"Madrid",correct:true} , {txt:"Barcelona",correct:false} , {txt:"Dublin",correct:false} , {txt:"Belgrade",correct:false}],
                    airStrike:false
                },
                {
                    question:"The longest rail line of the world, Trans-Siberian line, is in ?",
                    answers:[{txt:"Russia",correct:true} , {txt:"China",correct:false} , {txt:"USA",correct:false} , {txt:"Saudi Arabia",correct:false}],
                    airStrike:false
                },
                {
                    question:"Bill Gates founded which computer corporation ?",
                    answers:[{txt:"Microsoft",correct:true} , {txt:"Apple",correct:false} , {txt:"General Motors",correct:false} , {txt:"IBM",correct:false}],
                    airStrike:false
                },
                {
                    question:"Who invented the telephone ?",
                    answers:[{txt:"Bell",correct:true} , {txt:"Edison",correct:false} , {txt:"Tesla",correct:false} , {txt:"Einstein",correct:false}],
                    airStrike:false
                },
                {
                    question:"When did the Second World War end ?",
                    answers:[{txt:"1945",correct:true} , {txt:"1944",correct:false} , {txt:"1918",correct:false} , {txt:"1946",correct:false}],
                    airStrike:false
                },
                {
                    question:"When did the First World War start ?",
                    answers:[{txt:"1914",correct:true} , {txt:"1918",correct:false} , {txt:"1939",correct:false} , {txt:"1941",correct:false}],
                    airStrike:false
                },
                {
                    question:"What’s the name of the famous big clock in London ?",
                    answers:[{txt:"Big Ben",correct:true} , {txt:"Great Gatsby",correct:false} , {txt:"Big Bang",correct:false} , {txt:"Big Clock",correct:false}],
                    airStrike:false
                },
                {
                    question:"What colour is a panda ?",
                    answers:[{txt:"black/white",correct:true} , {txt:"brown/white",correct:false} , {txt:"black",correct:false} , {txt:"white",correct:false}],
                    airStrike:false
                },
                {
                    question:"Which country is Prague in ?",
                    answers:[{txt:"Czech Republic",correct:true} , {txt:"Macedonia",correct:false} , {txt:"China",correct:false} , {txt:"Russia",correct:false}],
                    airStrike:true
                },
                {
                    question:"At what did Antonio Stradivari achieve fame ?",
                    answers:[{txt:"Violin maker",correct:true} , {txt:"Trouble maker",correct:false} , {txt:"Painter",correct:false} , {txt:"NBA player",correct:false}],
                    airStrike:false
                },
                {
                    question:"A centaur was a mythical creature half way between a man and what ?",
                    answers:[{txt:"Horse",correct:true} , {txt:"Lion",correct:false} , {txt:"Tiger",correct:false} , {txt:"Elephant",correct:false}],
                    airStrike:false
                },
                {
                    question:"Who painted the Mona Lisa ?",
                    answers:[{txt:"Da Vinci",correct:true} , {txt:"Picasso",correct:false} , {txt:"Dali",correct:false} , {txt:"Monet",correct:false}],
                    airStrike:false
                },
                {
                    question:"How many players are there on each side in the game of Basketball ?",
                    answers:[{txt:"5",correct:true} , {txt:"4",correct:false} , {txt:"6",correct:false} , {txt:"7",correct:false}],
                    airStrike:false
                },
                {
                    question:"The energy of food is measured in ?",
                    answers:[{txt:"calories",correct:true} , {txt:"Kelvin",correct:false} , {txt:"bushel",correct:false} , {txt:"None",correct:false}],
                    airStrike:false
                },
                {
                    question:"A caravan is a group of which animals ?",
                    answers:[{txt:"Camels",correct:true} , {txt:"Horses",correct:false} , {txt:"Chickens",correct:false} , {txt:"Wolfs",correct:false}],
                    airStrike:false
                }
            ];
        }

    }

    setQuestionsForLevel2(){
        if(this._language === "srb"){
            this.level2 = [
                {
                    question:"Ko je rezirao film Gospodar prstenova ?",
                    answers:[{txt:"Peter Jackson",correct:true} , {txt:"Christopher Nolan",correct:false} , {txt:"Quentin Tarantino",correct:false} , {txt:"George Lucas",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koja glumica je pocela da glumi sa 3 godine, a proslavila se u filmovima Kontakt, Maverick i Kad jaganjci utihnu ?",
                    answers:[{txt:"Jodie Foster",correct:true} , {txt:"Meryl Streep",correct:false} , {txt:"Gwyneth Paltrow",correct:false} , {txt:"Scarlett Johansson",correct:false}],
                    airStrike:false
                },
                {
                    question:"Na koliko stepeni celzijusovih voda mrzne ?",
                    answers:[{txt:"0",correct:true} , {txt:"-10",correct:false} , {txt:"5",correct:false} , {txt:"-5",correct:false}],
                    airStrike:true
                },
                {
                    question:"Ag je simbol za koji element ?",
                    answers:[{txt:"Srebro",correct:true} , {txt:"Zlato",correct:false} , {txt:"Bakar",correct:false} , {txt:"Vodonik",correct:false}],
                    airStrike:false
                },
                {
                    question:"Moderan fudbal je nastao u ?",
                    answers:[{txt:"Engleska",correct:true} , {txt:"India",correct:false} , {txt:"Francuska",correct:false} , {txt:"Spanija",correct:false}],
                    airStrike:false
                },
                {
                    question:"Svetlosna godina se koristi za ?",
                    answers:[{txt:"daljinu",correct:true} , {txt:"energiju",correct:false} , {txt:"brzinu",correct:false} , {txt:"tezinu",correct:false}],
                    airStrike:false
                },
                {
                    question:"Tiger Woods se proslavio u kom sportu ?",
                    answers:[{txt:"Golf",correct:true} , {txt:"Fudbal",correct:false} , {txt:"Bejsbol",correct:false} , {txt:"Ragbi",correct:false}],
                    airStrike:false
                },
                {
                    question:"Najveca pustinja na svetu je ?",
                    answers:[{txt:"Sahara",correct:true} , {txt:"Sonoran",correct:false} , {txt:"Thar",correct:false} , {txt:"Kalahari",correct:false}],
                    airStrike:false
                },
                {
                    question:"Yellowstone Nacionalni park se nalazi u ?",
                    answers:[{txt:"Amerika",correct:true} , {txt:"Kina",correct:false} , {txt:"Engleska",correct:false} , {txt:"Argentina",correct:false}],
                    airStrike:true
                },
                {
                    question:"Kako se preziva Cendler u seriji prijatelji ?",
                    answers:[{txt:"Bing",correct:true} , {txt:"Bang",correct:false} , {txt:"Bong",correct:false} , {txt:"Beng",correct:false}],
                    airStrike:true
                },
                {
                    question:"Ko je odsekao Van Gogu uvo ?",
                    answers:[{txt:"on",correct:true} , {txt:"njegova zena",correct:false} , {txt:"njegov brat",correct:false} , {txt:"njegov pas",correct:false}],
                    airStrike:true
                },
                {
                    question:"Najmanja drzava na svetu je ?",
                    answers:[{txt:"Vatikan",correct:true} , {txt:"Makedonija",correct:false} , {txt:"Maldivi",correct:false} , {txt:"Srbija",correct:false}],
                    airStrike:true
                },
                {
                    question:"Filologija je nauka koja se bavi proucavanjem ?",
                    answers:[{txt:"jezika",correct:true} , {txt:"prirode",correct:false} , {txt:"vazduha",correct:false} , {txt:"raspolozenja",correct:false}],
                    airStrike:false
                },
                {
                    question:"Penicillin se najcesce koristi kao ?",
                    answers:[{txt:"antibiotik",correct:true} , {txt:"insekticid",correct:false} , {txt:"zacin",correct:false} , {txt:"antiseptik",correct:false}],
                    airStrike:false
                },
                {
                    question:"Neil Armstrong i Edwin Aldrin su prvi ?",
                    answers:[{txt:"zakoracili na Mesec",correct:true} , {txt:"obisli Mesec",correct:false} , {txt:"gej bracni par",correct:false} , {txt:"putovali u kosmos",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kako se zove sedma planeta suncevog sistema ?",
                    answers:[{txt:"Uran",correct:true} , {txt:"Jupiter",correct:false} , {txt:"Merkur",correct:false} , {txt:"Zemlja",correct:false}],
                    airStrike:true
                }
            ];
        }else {
            this.level2 = [
                {
                    question:"Name the director of the Lord of the Rings trilogy ?",
                    answers:[{txt:"Peter Jackson",correct:true} , {txt:"Christopher Nolan",correct:false} , {txt:"Quentin Tarantino",correct:false} , {txt:"George Lucas",correct:false}],
                    airStrike:false
                },
                {
                    question:"Name the actress whose career began at the age of 3, and who went on to star in films such as Contact, Maverick and The Silence of the Lambs ?",
                    answers:[{txt:"Jodie Foster",correct:true} , {txt:"Meryl Streep",correct:false} , {txt:"Gwyneth Paltrow",correct:false} , {txt:"Scarlett Johansson",correct:false}],
                    airStrike:false
                },
                {
                    question:"At what degree Celsius does water freeze ?",
                    answers:[{txt:"0",correct:true} , {txt:"-10",correct:false} , {txt:"5",correct:false} , {txt:"-5",correct:false}],
                    airStrike:true
                },
                {
                    question:"Ag is the symbol of which chemical element ?",
                    answers:[{txt:"Silver",correct:true} , {txt:"Gold",correct:false} , {txt:"Copper",correct:false} , {txt:"Carbon",correct:false}],
                    airStrike:false
                },
                {
                    question:"Modern football is said to have evolved from ?",
                    answers:[{txt:"England",correct:true} , {txt:"India",correct:false} , {txt:"France",correct:false} , {txt:"Spain",correct:false}],
                    airStrike:false
                },
                {
                    question:"Light Year is related to ?",
                    answers:[{txt:"distance",correct:true} , {txt:"energy",correct:false} , {txt:"speed",correct:false} , {txt:"intensity",correct:false}],
                    airStrike:false
                },
                {
                    question:"Tiger Woods is associated with which of the following sports ?",
                    answers:[{txt:"Golf",correct:true} , {txt:"Football",correct:false} , {txt:"Baseball",correct:false} , {txt:"Rugby",correct:false}],
                    airStrike:false
                },
                {
                    question:"The World Largest desert is ?",
                    answers:[{txt:"Sahara",correct:true} , {txt:"Sonoran",correct:false} , {txt:"Thar",correct:false} , {txt:"Kalahari",correct:false}],
                    airStrike:false
                },
                {
                    question:"The Yellowstone National Park is in ?",
                    answers:[{txt:"USA",correct:true} , {txt:"China",correct:false} , {txt:"England",correct:false} , {txt:"Argentina",correct:false}],
                    airStrike:true
                },
                {
                    question:"What is Chandler's last name in the sitcom Friends ?",
                    answers:[{txt:"Bing",correct:true} , {txt:"Bang",correct:false} , {txt:"Bong",correct:false} , {txt:"Washington",correct:false}],
                    airStrike:true
                },
                {
                    question:"Who cut Van Gogh’s ear ?",
                    answers:[{txt:"he did",correct:true} , {txt:"his wife",correct:false} , {txt:"his brother",correct:false} , {txt:"his dog",correct:false}],
                    airStrike:true
                },
                {
                    question:"The world smallest country is ?",
                    answers:[{txt:"Vatican City",correct:true} , {txt:"Australia",correct:false} , {txt:"Maldives",correct:false} , {txt:"Canada",correct:false}],
                    airStrike:true
                },
                {
                    question:"Philology is the ?",
                    answers:[{txt:"science of languages",correct:true} , {txt:"study of architecture",correct:false} , {txt:"study of muscles",correct:false} , {txt:"study of bones",correct:false}],
                    airStrike:false
                },
                {
                    question:"Penicillin is widely used as ?",
                    answers:[{txt:"an antibiotic",correct:true} , {txt:"an insecticide",correct:false} , {txt:"a disinfectant",correct:false} , {txt:"an antiseptic",correct:false}],
                    airStrike:false
                },
                {
                    question:"Neil Armstrong and Edwin Aldrin were the first to ?",
                    answers:[{txt:"step on the moon",correct:true} , {txt:"circle the moon",correct:false} , {txt:"walk in space",correct:false} , {txt:"journey into space",correct:false}],
                    airStrike:false
                },
                {
                    question:"Name the seventh planet from the sun ?",
                    answers:[{txt:"Uranus",correct:true} , {txt:"Jupiter",correct:false} , {txt:"Mercury",correct:false} , {txt:"Earth",correct:false}],
                    airStrike:true
                }
            ];
        }

    }

    setQuestionsForLevel3(){
        if(this._language === "srb"){
            this.level3 = [
                {
                    question:"Koje godine 11. septembra se dogodio teroristicki napad na svetski trgovinski centar ?",
                    answers:[{txt:"2001",correct:true} , {txt:"2000",correct:false} , {txt:"2002",correct:false} , {txt:"2003",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kako se zvao jedini sampion teske kategorije u boksu koji je zavrsio karijeru sa 49 borbi bez poraza ?",
                    answers:[{txt:"Rocky Marciano",correct:true} , {txt:"Muhammad Ali",correct:false} , {txt:"Joe Frazier",correct:false} , {txt:"Mike Tyson",correct:false}],
                    airStrike:false
                },
                {
                    question:"Malariju uzrokuju ?",
                    answers:[{txt:"Komarci",correct:true} , {txt:"Bakterije",correct:false} , {txt:"Pcele",correct:false} , {txt:"Virusi",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koja zemlja se zove zemlja izlazeceg sunca ?",
                    answers:[{txt:"Japan",correct:true} , {txt:"Holandija",correct:false} , {txt:"Korea",correct:false} , {txt:"Rusija",correct:false}],
                    airStrike:false
                },
                {
                    question:"Svetsko prvenstvo u fudbalu 2006 je bilo odrzano u ?",
                    answers:[{txt:"Nemacka",correct:true} , {txt:"Brazil",correct:false} , {txt:"Kina",correct:false} , {txt:"Francuska",correct:false}],
                    airStrike:true
                },
                {
                    question:"Lance Armstrong, slavni sportista, rodjen je u ?",
                    answers:[{txt:"USA",correct:true} , {txt:"Ukrajina",correct:false} , {txt:"Spanija",correct:false} , {txt:"Brazil",correct:false}],
                    airStrike:false
                },
                {
                    question:"Skotski bakteriolog koji je pronasao penicilin je ?",
                    answers:[{txt:"Alexander Fleming",correct:true} , {txt:"Albert Einstein",correct:false} , {txt:"Archimeder",correct:false} , {txt:"Aryabhatta",correct:false}],
                    airStrike:false
                },
                {
                    question:"Numizmatika se bavi proucavanjem ?",
                    answers:[{txt:"novcica",correct:true} , {txt:"brojeva",correct:false} , {txt:"markica",correct:false} , {txt:"jezika",correct:false}],
                    airStrike:true
                },
                {
                    question:"Koja Americka drzava se nalazi najblize Rusiji ?",
                    answers:[{txt:"Aljaska",correct:true} , {txt:"Texas",correct:false} , {txt:"Kalifornija",correct:false} , {txt:"Alabama",correct:false}],
                    airStrike:true
                },
                {
                    question:"Na kojoj temperaturi voda kljuca ?",
                    answers:[{txt:"100 C",correct:true} , {txt:"80 C",correct:false} , {txt:"70 C",correct:false} , {txt:"90 C",correct:false}],
                    airStrike:true
                },
                {
                    question:"Termin leptir se vezuje za koji sport ?",
                    answers:[{txt:"plivanje",correct:true} , {txt:"fudbal",correct:false} , {txt:"boks",correct:false} , {txt:"rvanje",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koliko se ukupno tackica nalazi na dve kockice ?",
                    answers:[{txt:"42",correct:true} , {txt:"40",correct:false} , {txt:"64",correct:false} , {txt:"38",correct:false}],
                    airStrike:false
                },
                {
                    question:"Gde se nalazi sediste Evropske Unije ?",
                    answers:[{txt:"Brisel",correct:true} , {txt:"Pariz",correct:false} , {txt:"London",correct:false} , {txt:"Rim",correct:false}],
                    airStrike:false
                },
                {
                    question:"Rihterova skala se koristi za merenje jacine ?",
                    answers:[{txt:"zemljotresa",correct:true} , {txt:"vetra",correct:false} , {txt:"talasa",correct:false} , {txt:"struje",correct:false}],
                    airStrike:true
                }
            ];
        }else {
            this.level3 = [
                {
                    question:"Hitler party which came into power in 1933 is known as ?",
                    answers:[{txt:"Nazi Party",correct:true} , {txt:"Labour Party",correct:false} , {txt:"Ku-Klux-Klan",correct:false} , {txt:"Democratic Party",correct:false}],
                    airStrike:false
                },
                {
                    question:"In which year, terrorists crash two planes into New York's World Trade Centre on September 11 in a sequence of destruction ?",
                    answers:[{txt:"2001",correct:true} , {txt:"2000",correct:false} , {txt:"2002",correct:false} , {txt:"2003",correct:false}],
                    airStrike:false
                },
                {
                    question:"Name the only heavyweight boxing champion to finish his career of 49 fights without ever having been defeated ?",
                    answers:[{txt:"Rocky Marciano",correct:true} , {txt:"Muhammad Ali",correct:false} , {txt:"Joe Frazier",correct:false} , {txt:"Mike Tyson",correct:false}],
                    airStrike:false
                },
                {
                    question:"Filaria is caused by ?",
                    answers:[{txt:"Mosquito",correct:true} , {txt:"Bacteria",correct:false} , {txt:"Protozoa",correct:false} , {txt:"Virus",correct:false}],
                    airStrike:false
                },
                {
                    question:"Country that was called as Land of Rising Sun ?",
                    answers:[{txt:"Japan",correct:true} , {txt:"Holland",correct:false} , {txt:"Korea",correct:false} , {txt:"Russia",correct:false}],
                    airStrike:false
                },
                {
                    question:"The 2006 World Cup Football Tournament held in ?",
                    answers:[{txt:"Germany",correct:true} , {txt:"Brazil",correct:false} , {txt:"China",correct:false} , {txt:"France",correct:false}],
                    airStrike:true
                },
                {
                    question:"FLance Armstrong, a sportsperson of international repute, belongs to which of the following countries ?",
                    answers:[{txt:"USA",correct:true} , {txt:"Ukraine",correct:false} , {txt:"Spain",correct:false} , {txt:"Brazil",correct:false}],
                    airStrike:false
                },
                {
                    question:"The Scottish bacteriologist who discovered penicillin was ?",
                    answers:[{txt:"Alexander Fleming",correct:true} , {txt:"Albert Einstein",correct:false} , {txt:"Archimeder",correct:false} , {txt:"Aryabhatta",correct:false}],
                    airStrike:false
                },
                {
                    question:"Numismatics is the study of ?",
                    answers:[{txt:"coins",correct:true} , {txt:"numbers",correct:false} , {txt:"stamps",correct:false} , {txt:"space",correct:false}],
                    airStrike:true
                },
                {
                    question:"Which US state is nearest to the old Soviet Union ?",
                    answers:[{txt:"Alaska",correct:true} , {txt:"Texas",correct:false} , {txt:"California",correct:false} , {txt:"Alabama",correct:false}],
                    airStrike:true
                },
                {
                    question:"What temperature does water boil at?",
                    answers:[{txt:"100 C",correct:true} , {txt:"80 C",correct:false} , {txt:"70 C",correct:false} , {txt:"90 C",correct:false}],
                    airStrike:true
                },
                {
                    question:"The term butterfly is associated with ?",
                    answers:[{txt:"swimming",correct:true} , {txt:"kabaddi",correct:false} , {txt:"boxing",correct:false} , {txt:"wrestling",correct:false}],
                    airStrike:false
                },
                {
                    question:"How many dots are there on two dice ?",
                    answers:[{txt:"42",correct:true} , {txt:"40",correct:false} , {txt:"64",correct:false} , {txt:"38",correct:false}],
                    airStrike:false
                },
                {
                    question:"Where was the headquarters of European Union located ?",
                    answers:[{txt:"Brussels",correct:true} , {txt:"Paris",correct:false} , {txt:"London",correct:false} , {txt:"Rome",correct:false}],
                    airStrike:false
                },
                {
                    question:"Richter scale is used for measuring ?",
                    answers:[{txt:"earthquakes intensity",correct:true} , {txt:"density of liquid",correct:false} , {txt:"velocity of wind",correct:false} , {txt:"humidity of air",correct:false}],
                    airStrike:true
                },
                {
                    question:"Hygrometer is used to measure ?",
                    answers:[{txt:"relative humidity",correct:true} , {txt:"purity of milk",correct:false} , {txt:"specific gravity of liquid",correct:false} , {txt:"blood preasure",correct:false}],
                    airStrike:false
                }
            ];
        }
    }

    setQuestionsForLevel4(){
        if(this._language === "srb"){
            this.level4 = [
                {
                    question:"Kada je u toku drugog svetskog rata Nemacka napala Francusku ?",
                    answers:[{txt:"1940",correct:true} , {txt:"1941",correct:false} , {txt:"1942",correct:false} , {txt:"1943",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kako se zove uredjaj koji podmornicama sluzi za gledanje povrsine vode ?",
                    answers:[{txt:"periskop",correct:true} , {txt:"kaledioskop",correct:false} , {txt:"spektroskop",correct:false} , {txt:"teleskop",correct:false}],
                    airStrike:false
                },
                {
                    question:"Za koji sport se vezuje trofej Jules Rimet ?",
                    answers:[{txt:"fudbal",correct:true} , {txt:"kosarka",correct:false} , {txt:"hokej",correct:false} , {txt:"golf",correct:false}],
                    airStrike:true
                },
                {
                    question:"Sta je progutao krokodil u crtacu Petar Pan ?",
                    answers:[{txt:"sat",correct:true} , {txt:"dete",correct:false} , {txt:"mac",correct:false} , {txt:"stolicu",correct:false}],
                    airStrike:true
                },
                {
                    question:"Najveca drzava na svetu je ?",
                    answers:[{txt:"Rusija",correct:true} , {txt:"Kina",correct:false} , {txt:"USA",correct:false} , {txt:"Australija",correct:false}],
                    airStrike:true
                },
                {
                    question:"Dzul je merna jedinica za ?",
                    answers:[{txt:"energiju",correct:true} , {txt:"temperaturu",correct:false} , {txt:"pritisak",correct:false} , {txt:"vlaznost",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kako se zove glavni grad Afghanistana ?",
                    answers:[{txt:"Kabul",correct:true} , {txt:"Panjab",correct:false} , {txt:"Mazari Sharif",correct:false} , {txt:"Herat",correct:false}],
                    airStrike:false
                },
                {
                    question:"Olimpijske igre 2012 su odrzane u ?",
                    answers:[{txt:"Londonu",correct:true} , {txt:"Seulu",correct:false} , {txt:"Sidneju",correct:false} , {txt:"Tokiju",correct:false}],
                    airStrike:false
                },
                {
                    question:"Na cijoj zastavi se nalazi Davidova zvezda ?",
                    answers:[{txt:"Izrael",correct:true} , {txt:"Nemacka",correct:false} , {txt:"Portugal",correct:false} , {txt:"Poljska",correct:false}],
                    airStrike:false
                },
                {
                    question:"Sediste Ujedinjenih Nacija se nalazi u kom gradu ?",
                    answers:[{txt:"New York",correct:true} , {txt:"Washington",correct:false} , {txt:"Paris",correct:false} , {txt:"Geneva",correct:false}],
                    airStrike:false
                },
                {
                    question:"Nauka koja se bavi proucavanjem zemljotresa je ?",
                    answers:[{txt:"seizmologija",correct:true} , {txt:"ekologija",correct:false} , {txt:"numizmatika",correct:false} , {txt:"ni jedna",correct:false}],
                    airStrike:false
                },
                {
                    question:"Yen je valuta koje drzave ?",
                    answers:[{txt:"Japan",correct:true} , {txt:"Kina",correct:false} , {txt:"Indija",correct:false} , {txt:"Juzna Koreja",correct:false}],
                    airStrike:false
                },
                {
                    question:"Grupa ljudi koja sprovodi subverzivne delatnosti protiv drzave podrzavajuci stranu opciju ili neprijatelja zove se ?",
                    answers:[{txt:"petokolonasi",correct:true} , {txt:"cetvrtokolonasi",correct:false} , {txt:"trecekolonasi",correct:false} , {txt:"drugokolonasi",correct:false}],
                    airStrike:false
                },
                {
                    question:"Ko je bio prvi crni predsednik Juzne Afrike ?",
                    answers:[{txt:"Nelson Mandela",correct:true} , {txt:"George Washington",correct:false} , {txt:"Jamo Kenyatta",correct:false} , {txt:"Martin Luther King Jr",correct:false}],
                    airStrike:false
                }
            ];
        }else {
            this.level4 = [
                {
                    question:"During World War II, when did Germany attack France ?",
                    answers:[{txt:"1940",correct:true} , {txt:"1941",correct:false} , {txt:"1942",correct:false} , {txt:"1943",correct:false}],
                    airStrike:false
                },
                {
                    question:"For seeing objects at the surface of water from a submarine under water, the instrument used is ?",
                    answers:[{txt:"periscope",correct:true} , {txt:"kaleidoscope",correct:false} , {txt:"spectroscope",correct:false} , {txt:"telescope",correct:false}],
                    airStrike:false
                },
                {
                    question:"With which sport is the Jules Rimet trophy associated ?",
                    answers:[{txt:"Football",correct:true} , {txt:"Basketball",correct:false} , {txt:"Hockey",correct:false} , {txt:"Golf",correct:false}],
                    airStrike:true
                },
                {
                    question:"What did the crocodile swallow in Peter Pan ?",
                    answers:[{txt:"alarm clock",correct:true} , {txt:"child",correct:false} , {txt:"Sword",correct:false} , {txt:"Chair",correct:false}],
                    airStrike:true
                },
                {
                    question:"The Largest country of the World by Geographical Area is ?",
                    answers:[{txt:"Russia",correct:true} , {txt:"China",correct:false} , {txt:"USA",correct:false} , {txt:"Australia",correct:false}],
                    airStrike:true
                },
                {
                    question:"Joule is the unit of ?",
                    answers:[{txt:"energy",correct:true} , {txt:"temperature",correct:false} , {txt:"pressure",correct:false} , {txt:"heat",correct:false}],
                    airStrike:false
                },
                {
                    question:"What is the capital of Afghanistan ?",
                    answers:[{txt:"Kabul",correct:true} , {txt:"Panjab",correct:false} , {txt:"Mazari Sharif",correct:false} , {txt:"Herat",correct:false}],
                    airStrike:false
                },
                {
                    question:"The 2012 Olympics Games were held in ?",
                    answers:[{txt:"London",correct:true} , {txt:"Seoul",correct:false} , {txt:"Sydney",correct:false} , {txt:"Tokyo",correct:false}],
                    airStrike:false
                },
                {
                    question:"The flag of which country has the Star of David ?",
                    answers:[{txt:"Israel",correct:true} , {txt:"Germany",correct:false} , {txt:"Portugal",correct:false} , {txt:"Poland",correct:false}],
                    airStrike:false
                },
                {
                    question:"The headquarter of the United Nations is at ?",
                    answers:[{txt:"New York",correct:true} , {txt:"Washington, D.C",correct:false} , {txt:"Paris",correct:false} , {txt:"Geneva",correct:false}],
                    airStrike:false
                },
                {
                    question:"Study of earthquakes is known as ?",
                    answers:[{txt:"seismology",correct:true} , {txt:"ecology",correct:false} , {txt:"numismatics",correct:false} , {txt:"none",correct:false}],
                    airStrike:false
                },
                {
                    question:"Yen is the currency of which country ?",
                    answers:[{txt:"Japan",correct:true} , {txt:"China",correct:false} , {txt:"India",correct:false} , {txt:"South Korea",correct:false}],
                    airStrike:false
                },
                {
                    question:"People who secretly indulge in anti-national or anti-government activities and help the enemy are called ?",
                    answers:[{txt:"Fifth column",correct:true} , {txt:"Fourth column",correct:false} , {txt:"Third column",correct:false} , {txt:"Second column",correct:false}],
                    airStrike:false
                },
                {
                    question:"Which of the following became the first black President of South Africa ?",
                    answers:[{txt:"Nelson Mandela",correct:true} , {txt:"George Washington",correct:false} , {txt:"Jamo Kenyatta",correct:false} , {txt:"Martin Luther King Jr",correct:false}],
                    airStrike:false
                },
                {
                    question:"Where would you find the Sea of Tranquility ?",
                    answers:[{txt:"The Moon",correct:true} , {txt:"Serbia",correct:false} , {txt:"USA",correct:false} , {txt:"Australia",correct:false}],
                    airStrike:true
                }
            ];
        }
    }

    setQuestionsForLevel5(){
        if(this._language === "srb"){
            this.level5 = [
                {
                    question:"Stogodisnji rat je vodjen izmedju ?",
                    answers:[{txt:"Francuske i Engleske",correct:true} , {txt:"Grcke i Persije",correct:false} , {txt:"Argentine i Brazila",correct:false} , {txt:"Rusije i Amerike",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kada je Nemacka u prvom svetskom ratu objavila rat Francuskoj i Rusiji ?",
                    answers:[{txt:"1914",correct:true} , {txt:"1915",correct:false} , {txt:"1916",correct:false} , {txt:"1917",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koji broj predstavlja rimsko slovo C ?",
                    answers:[{txt:"100",correct:true} , {txt:"50",correct:false} , {txt:"1000",correct:false} , {txt:"500",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koja pevacica se zove Stefani Joanne Angelina Germanotta ?",
                    answers:[{txt:"Lady Gaga",correct:true} , {txt:"Madonna",correct:false} , {txt:"Mariah Carey",correct:false} , {txt:"Jennifer Lopez",correct:false}],
                    airStrike:false
                },
                {
                    question:"Prvi metal koji je covek korisio je ?",
                    answers:[{txt:"bakar",correct:true} , {txt:"gvozdje",correct:false} , {txt:"aluminijum",correct:false} , {txt:"zlato",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koji je broj polja na sahovskoj tabli ?",
                    answers:[{txt:"64",correct:true} , {txt:"60",correct:false} , {txt:"32",correct:false} , {txt:"50",correct:false}],
                    airStrike:false
                },
                {
                    question:"Gde je rodjen Kristofer Kolumbo ?",
                    answers:[{txt:"Djenova",correct:true} , {txt:"Firenca",correct:false} , {txt:"Napoli",correct:false} , {txt:"Verona",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koja planeta je najbliza suncu ?",
                    answers:[{txt:"Merkur",correct:true} , {txt:"Zemlja",correct:false} , {txt:"Jupiter",correct:false} , {txt:"Neptun",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koji je oblik vladavine u Svajcarskoj ?",
                    answers:[{txt:"direktna demokratija",correct:true} , {txt:"republika",correct:false} , {txt:"autokratija",correct:false} , {txt:"diktatura",correct:false}],
                    airStrike:false
                },
                {
                    question:"Sta simbolizuje crna zastava ?",
                    answers:[{txt:"protest",correct:true} , {txt:"opasnost",correct:false} , {txt:"mir",correct:false} , {txt:"revoluciju",correct:false}],
                    airStrike:true
                },
                {
                    question:"U dzudou koji pojas se dobija posle narandzastog ?",
                    answers:[{txt:"zeleni",correct:true} , {txt:"plavi",correct:false} , {txt:"beli",correct:false} , {txt:"braon",correct:false}],
                    airStrike:true
                },
                {
                    question:"Kako se zove betmenov batler ?",
                    answers:[{txt:"Alfred",correct:true} , {txt:"Albert",correct:false} , {txt:"Alfonso",correct:false} , {txt:"Abraham",correct:false}],
                    airStrike:true
                },
                {
                    question:"John F. Kennedy, predsednik Amerike je ubijen ?",
                    answers:[{txt:"1963",correct:true} , {txt:"1964",correct:false} , {txt:"1965",correct:false} , {txt:"1966",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koje oruzje je Falkon ?",
                    answers:[{txt:"mac",correct:true} , {txt:"sekira",correct:false} , {txt:"pistolj",correct:false} , {txt:"raketa",correct:false}],
                    airStrike:false
                }
            ];
        }else {
            this.level5 = [
                {
                    question:"Federation Cup, World Cup, Allywyn International Trophy and Challenge Cup are awarded to winners of ?",
                    answers:[{txt:"Volleyball",correct:true} , {txt:"Tennis",correct:false} , {txt:"Basketball",correct:false} , {txt:"Cricket",correct:false}],
                    airStrike:false
                },
                {
                    question:"Hundred year war was fought between ?",
                    answers:[{txt:"France and England",correct:true} , {txt:"Greek and Persian forces",correct:false} , {txt:"Civil war in England",correct:false} , {txt:"Russia and USA",correct:false}],
                    airStrike:false
                },
                {
                    question:"In which year of First World War Germany declared war on Russia and France ?",
                    answers:[{txt:"1914",correct:true} , {txt:"1915",correct:false} , {txt:"1916",correct:false} , {txt:"1917",correct:false}],
                    airStrike:false
                },
                {
                    question:"What does the roman numeral C represent ?",
                    answers:[{txt:"100",correct:true} , {txt:"50",correct:false} , {txt:"1000",correct:false} , {txt:"500",correct:false}],
                    airStrike:false
                },
                {
                    question:"Which singer's real name is Stefani Joanne Angelina Germanotta ?",
                    answers:[{txt:"Lady Gaga",correct:true} , {txt:"Madonna",correct:false} , {txt:"Mariah Carey",correct:false} , {txt:"Jennifer Lopez",correct:false}],
                    airStrike:false
                },
                {
                    question:"The first metal used by the man was ?",
                    answers:[{txt:"Copper",correct:true} , {txt:"Iron",correct:false} , {txt:"Aluminium",correct:false} , {txt:"Gold",correct:false}],
                    airStrike:false
                },
                {
                    question:"What is the number of squares on a chess board ?",
                    answers:[{txt:"64",correct:true} , {txt:"60",correct:false} , {txt:"32",correct:false} , {txt:"50",correct:false}],
                    airStrike:false
                },
                {
                    question:"Where was Christopher Columbus born ?",
                    answers:[{txt:"Genoa",correct:true} , {txt:"Florence",correct:false} , {txt:"Naples",correct:false} , {txt:"Verona",correct:false}],
                    airStrike:false
                },
                {
                    question:"Which of the planets is closest to the sun ?",
                    answers:[{txt:"Mercury",correct:true} , {txt:"Earth",correct:false} , {txt:"Jupiter",correct:false} , {txt:"Neptune",correct:false}],
                    airStrike:false
                },
                {
                    question:"What is the type of Government in Swaziland ?",
                    answers:[{txt:"Monarchy",correct:true} , {txt:"Republic",correct:false} , {txt:"Autocracy",correct:false} , {txt:"Dictatorship",correct:false}],
                    airStrike:false
                },
                {
                    question:"The 'Black flag' signifies ?",
                    answers:[{txt:"protest",correct:true} , {txt:"truce",correct:false} , {txt:"peace",correct:false} , {txt:"revolution/danger",correct:false}],
                    airStrike:true
                },
                {
                    question:"In the sport of Judo, what color belt follows an orange belt ?",
                    answers:[{txt:"Green",correct:true} , {txt:"Blue",correct:false} , {txt:"White",correct:false} , {txt:"Brown",correct:false}],
                    airStrike:true
                },
                {
                    question:"What is the name of Batman's butler ?",
                    answers:[{txt:"Alfred",correct:true} , {txt:"Albert",correct:false} , {txt:"Alfonso",correct:false} , {txt:"Abraham",correct:false}],
                    airStrike:true
                },
                {
                    question:"John F. Kennedy, President of USA, died on ?",
                    answers:[{txt:"1963",correct:true} , {txt:"1964",correct:false} , {txt:"1965",correct:false} , {txt:"1966",correct:false}],
                    airStrike:false
                },
                {
                    question:"What kind of weapon is a falchion ?",
                    answers:[{txt:"Sword",correct:true} , {txt:"Axe",correct:false} , {txt:"Gun",correct:false} , {txt:"Rocket",correct:false}],
                    airStrike:false
                }
            ];
        }
    }

    setQuestionsForLevel6(){
        if(this._language === "srb"){
            this.level6 = [
                {
                    question:"Fadometar se koristi za merenje ?",
                    answers:[{txt:"dubine vode",correct:true} , {txt:"jacine zvuka",correct:false} , {txt:"nadmorske visine",correct:false} , {txt:"brzina vetra",correct:false}],
                    airStrike:false
                },
                {
                    question:"Cija frekvencija je najvisa ?",
                    answers:[{txt:"Gama zraci",correct:true} , {txt:"svetlosni talasi",correct:false} , {txt:"mikro talasi",correct:false} , {txt:"radio talasi",correct:false}],
                    airStrike:true
                },
                {
                    question:"Novinska agencija Reuters pripada kojoj zemlji ?",
                    answers:[{txt:"Velika Britanija",correct:true} , {txt:"Nemacka",correct:false} , {txt:"Palestina",correct:false} , {txt:"Island",correct:false}],
                    airStrike:false
                },
                {
                    question:"“Jedan covek, Jedna drzava, Jedan lider” bila je politika kog lidera ?",
                    answers:[{txt:"Hitler",correct:true} , {txt:"Staljin",correct:false} , {txt:"Lenjin",correct:false} , {txt:"Musolini",correct:false}],
                    airStrike:false
                },
                {
                    question:"Najtoplija planeta suncevog sitema je ?",
                    answers:[{txt:"Venera",correct:true} , {txt:"Jupiter",correct:false} , {txt:"Mars",correct:false} , {txt:"Zemlja",correct:false}],
                    airStrike:false
                },
                {
                    question:"U kojoj zemlji se nalazi Mont Everest ?",
                    answers:[{txt:"Nepal",correct:true} , {txt:"Kina",correct:false} , {txt:"Tibet",correct:false} , {txt:"Indija",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koji je drugi naziv za Vitamin C ?",
                    answers:[{txt:"askorbinska kiselina",correct:true} , {txt:"folna kiselina",correct:false} , {txt:"vitaminska kiselina",correct:false} , {txt:"penicilin",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koliko je puta Brazil osvojio svetski kup u fudbalu ?",
                    answers:[{txt:"Pet puta",correct:true} , {txt:"Jedan put",correct:false} , {txt:"Dva puta",correct:false} , {txt:"Cetiri puta",correct:false}],
                    airStrike:false
                }
            ];
        }else {
            this.level6 = [
                {
                    question:"Fathometer is used to measure ?",
                    answers:[{txt:"Ocean depth",correct:true} , {txt:"Sound intensity",correct:false} , {txt:"Rainfall",correct:false} , {txt:"Earthquakes",correct:false}],
                    airStrike:false
                },
                {
                    question:"The frequency of which of the following is the highest ?",
                    answers:[{txt:"Gamma rays",correct:true} , {txt:"Light waves",correct:false} , {txt:"Micro waves",correct:false} , {txt:"Radio waves",correct:false}],
                    airStrike:true
                },
                {
                    question:"The news agency Reuters belongs to which of the following country ?",
                    answers:[{txt:"UK",correct:true} , {txt:"Germany",correct:false} , {txt:"Palestine",correct:false} , {txt:"Island",correct:false}],
                    airStrike:false
                },
                {
                    question:"“One People, One State, One leader” was the policy of ?",
                    answers:[{txt:"Hitler",correct:true} , {txt:"Stalin",correct:false} , {txt:"Lenin",correct:false} , {txt:"Mussolin",correct:false}],
                    airStrike:false
                },
                {
                    question:"The hottest planet in the solar system ?",
                    answers:[{txt:"Venus",correct:true} , {txt:"Jupiter",correct:false} , {txt:"Mars",correct:false} , {txt:"Earth",correct:false}],
                    airStrike:false
                },
                {
                    question:"Mount Everest is located in ?",
                    answers:[{txt:"Nepal",correct:true} , {txt:"China",correct:false} , {txt:"Tibet",correct:false} , {txt:"India",correct:false}],
                    airStrike:false
                },
                {
                    question:"Another name of Vitamin C is ?",
                    answers:[{txt:"Ascorbic acid",correct:true} , {txt:"Folic acid",correct:false} , {txt:"Niacin",correct:false} , {txt:"Acetic acid",correct:false}],
                    airStrike:false
                },
                {
                    question:"How many times has Brazil won the World Cup Football Championship ?",
                    answers:[{txt:"Five times",correct:true} , {txt:"Once",correct:false} , {txt:"Twice",correct:false} , {txt:"Four times",correct:false}],
                    airStrike:false
                }
            ];
        }

    }

    setQuestionsForLevel7(){
        if(this._language === "srb"){
            this.level7 = [
                {
                    question:"Dan ljudskih prava je koji datum ?",
                    answers:[{txt:"10 Decembar",correct:true} , {txt:"24 Februar",correct:false} , {txt:"15 Maj",correct:false} , {txt:"21 Jul",correct:false}],
                    airStrike:false
                },
                {
                    question:"Karoline Mikkelsen je bila prva zena koja je stigla na ?",
                    answers:[{txt:"Juzni Pol",correct:true} , {txt:"Severni pol",correct:false} , {txt:"Mont Everest",correct:false} , {txt:"Mesec",correct:false}],
                    airStrike:true
                },
                {
                    question:"Prva Olimpijada u gradu Olimpia u Grckoj odrzana je ?",
                    answers:[{txt:"776 pre Hrista",correct:true} , {txt:"753 pre Hrista",correct:false} , {txt:"850 pre Hrista",correct:false} , {txt:"1000 pre Hrista",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koji je nacionalni cvet Irske ?",
                    answers:[{txt:"Detelina",correct:true} , {txt:"Ruza",correct:false} , {txt:"Visibaba",correct:false} , {txt:"Orhideja",correct:false}],
                    airStrike:false
                },
                {
                    question:"Pirineji razdvajaju koje dve Evropske zemlje ?",
                    answers:[{txt:"Francusku i Spaniju",correct:true} , {txt:"Francusku i Belgiju",correct:false} , {txt:"Francusku i Nemacku",correct:false} , {txt:"Francusku i Italiju",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kada je rodjen Sekspir ?",
                    answers:[{txt:"1564",correct:true} , {txt:"1618",correct:false} , {txt:"1642",correct:false} , {txt:"1776",correct:false}],
                    airStrike:false
                },
                {
                    question:"Koja zemlja je poklonila Americi kip slobode ?",
                    answers:[{txt:"Francuska",correct:true} , {txt:"Engleska",correct:false} , {txt:"Poljska",correct:false} , {txt:"Spanija",correct:false}],
                    airStrike:false
                },
                {
                    question:"Indira Gandhi je ubijena ?",
                    answers:[{txt:"1984",correct:true} , {txt:"1974",correct:false} , {txt:"1994",correct:false} , {txt:"2004",correct:false}],
                    airStrike:false
                }
            ];
        }else {
            this.level7 = [
                {
                    question:"Human Rights Day is on ?",
                    answers:[{txt:"10 December",correct:true} , {txt:"24 February",correct:false} , {txt:"15 May",correct:false} , {txt:"21 July",correct:false}],
                    airStrike:false
                },
                {
                    question:"Karoline Mikkelsen was the first woman to ?",
                    answers:[{txt:"reach South Pole",correct:true} , {txt:"reach North Pole",correct:false} , {txt:"climb Mt. Everest",correct:false} , {txt:"set foot on the moon",correct:false}],
                    airStrike:true
                },
                {
                    question:"The first Olympics in the city of Olympia in Greece took place in ?",
                    answers:[{txt:"776 BC",correct:true} , {txt:"753 BC",correct:false} , {txt:"850 BC",correct:false} , {txt:"1000 BC",correct:false}],
                    airStrike:false
                },
                {
                    question:"What is the national flower of Ireland ?",
                    answers:[{txt:"Shamrock",correct:true} , {txt:"Rose",correct:false} , {txt:"Tulip",correct:false} , {txt:"Lilie",correct:false}],
                    airStrike:false
                },
                {
                    question:"The Pyrenees mountain range separates which two European countries ?",
                    answers:[{txt:"France and Spain",correct:true} , {txt:"France and Belgium",correct:false} , {txt:"France and Germany",correct:false} , {txt:"France and Italy",correct:false}],
                    airStrike:false
                },
                {
                    question:"When was Shakespeare born ?",
                    answers:[{txt:"1564",correct:true} , {txt:"1618",correct:false} , {txt:"1642",correct:false} , {txt:"1776",correct:false}],
                    airStrike:false
                },
                {
                    question:"The Statue of Liberty was given to the US by which country ?",
                    answers:[{txt:"France",correct:true} , {txt:"England",correct:false} , {txt:"Poland",correct:false} , {txt:"Spain",correct:false}],
                    airStrike:false
                },
                {
                    question:"Indira Gandhi was assassinated in ?",
                    answers:[{txt:"1984",correct:true} , {txt:"1974",correct:false} , {txt:"1994",correct:false} , {txt:"2004",correct:false}],
                    airStrike:false
                }
            ];
        }
    }

    setQuestionsForLevel8(){
        if(this._language === "srb"){
            this.level8 = [
                {
                    question:"U normalnom ljudskom telu broj krvnih celija iznosi ?",
                    answers:[{txt:"30 triliona",correct:true} , {txt:"15 triliona",correct:false} , {txt:"20 triliona",correct:false} , {txt:"25 triliona",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kiseonik je otkrio ?",
                    answers:[{txt:"Joseph Priestley",correct:true} , {txt:"Neils Bohr",correct:false} , {txt:"William Ramsay",correct:false} , {txt:"Rutherford",correct:false}],
                    airStrike:false
                },
                {
                    question:"Prva konferencija pokreta nesvrstanih odrzana je u gradu ?",
                    answers:[{txt:"Beograd",correct:true} , {txt:"Kairo",correct:false} , {txt:"Lusaka",correct:false} , {txt:"Algeria",correct:false}],
                    airStrike:false
                },
                {
                    question:"Ornithologija je nauka o ?",
                    answers:[{txt:"pticama",correct:true} , {txt:"kostima",correct:false} , {txt:"mirisima",correct:false} , {txt:"nista od navedenog",correct:false}],
                    airStrike:false
                },
                {
                    question:"Brzinu svetlosti je prvi izmerio ?",
                    answers:[{txt:"Romer",correct:true} , {txt:"Galileo",correct:false} , {txt:"Newton",correct:false} , {txt:"Einstein",correct:false}],
                    airStrike:true
                },
                {
                    question:"Afriku od Evrope deli ?",
                    answers:[{txt:"Mediteransko more",correct:true} , {txt:"Crveno more",correct:false} , {txt:"Atlantik",correct:false} , {txt:"Persijski zaliv",correct:false}],
                    airStrike:true
                },
                {
                    question:"Poreklo modernog badmintona je ?",
                    answers:[{txt:"Britanija",correct:true} , {txt:"India",correct:false} , {txt:"Francuska",correct:false} , {txt:"Spanija",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kada je Margaret Thatcher postala prva zena premijer Britanije ?",
                    answers:[{txt:"1979",correct:true} , {txt:"1800",correct:false} , {txt:"1989",correct:false} , {txt:"1998",correct:false}],
                    airStrike:false
                },
                {
                    question:"Gde se nalazi najmanja kost u ljudskom skeletu ?",
                    answers:[{txt:"uvo",correct:true} , {txt:"saka",correct:false} , {txt:"noga",correct:false} , {txt:"rame",correct:false}],
                    airStrike:false
                }
            ];
        }else {
            this.level8 = [
                {
                    question:"In a normal human body, the total number of red blood cells is ?",
                    answers:[{txt:"30 trillion",correct:true} , {txt:"15 trillion",correct:false} , {txt:"20 trillion",correct:false} , {txt:"25 trillion",correct:false}],
                    airStrike:false
                },
                {
                    question:"Oxygen was independently discovered by ?",
                    answers:[{txt:"Joseph Priestley",correct:true} , {txt:"Neils Bohr",correct:false} , {txt:"William Ramsay",correct:false} , {txt:"Rutherford",correct:false}],
                    airStrike:false
                },
                {
                    question:"The first NAM (Non-Aligned Movement) conference was held at ?",
                    answers:[{txt:"Belgrade (Yugoslavia)",correct:true} , {txt:"Caire (Egypt)",correct:false} , {txt:"Lusaka (Zambia)",correct:false} , {txt:"Algeria (Algeria)",correct:false}],
                    airStrike:false
                },
                {
                    question:"Ornithology is the ?",
                    answers:[{txt:"study of birds",correct:true} , {txt:"study of bones",correct:false} , {txt:"study of smells",correct:false} , {txt:"None",correct:false}],
                    airStrike:false
                },
                {
                    question:"The velocity of light was first measured by ?",
                    answers:[{txt:"Romer",correct:true} , {txt:"Galileo",correct:false} , {txt:"Newton",correct:false} , {txt:"Einstein",correct:false}],
                    airStrike:true
                },
                {
                    question:"Africa is seperated from Europe by ?",
                    answers:[{txt:"Mediterranean Sea",correct:true} , {txt:"Red Sea",correct:false} , {txt:"Atlantic Ocean",correct:false} , {txt:"Persian Gulf",correct:false}],
                    airStrike:true
                },
                {
                    question:"The origin of modern badminton is attributed to ?",
                    answers:[{txt:"Britain",correct:true} , {txt:"India",correct:false} , {txt:"France",correct:false} , {txt:"Spain",correct:false}],
                    airStrike:false
                },
                {
                    question:"When did Margaret Thatcher became the first women Prime Minister of Britain ?",
                    answers:[{txt:"1979",correct:true} , {txt:"1800",correct:false} , {txt:"1989",correct:false} , {txt:"1998",correct:false}],
                    airStrike:false
                },
                {
                    question:"Where is the smallest bone in the body ?",
                    answers:[{txt:"ear",correct:true} , {txt:"hand",correct:false} , {txt:"leg",correct:false} , {txt:"arm",correct:false}],
                    airStrike:false
                },
                {
                    question:"For safety, the fuse wire used in the mains for household supply of electricity must be made of metal having ?",
                    answers:[{txt:"low melting point",correct:true} , {txt:"high resistance",correct:false} , {txt:"high melting point",correct:false} , {txt:"low specific heat",correct:false}],
                    airStrike:true
                }
            ];
        }
    }

    setQuestionsForLevel9(){
        if(this._language === "srb"){
            this.level9 = [
                {
                    question:"Prvi Kineski rat je vodjen izmedju Kine i ?",
                    answers:[{txt:"Britanije",correct:true} , {txt:"Francuske",correct:false} , {txt:"Egipta",correct:false} , {txt:"Grcke",correct:false}],
                    airStrike:true
                },
                {
                    question:"Prva zena koja se popela na Mont Everest bila je ?",
                    answers:[{txt:"Junko Taibei",correct:true} , {txt:"Karoline Mikkelson",correct:false} , {txt:"Valentina Tereshkova",correct:false} , {txt:"None",correct:false}],
                    airStrike:false
                },
                {
                    question:"Hemijsko ime Vitamina B je ?",
                    answers:[{txt:"tijamin",correct:true} , {txt:"nikotinamid",correct:false} , {txt:"akrobinska kiselina",correct:false} , {txt:"riboflavin",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kojoj zemlji pripada prvi sekretar Ujedinjenih Nacija ?",
                    answers:[{txt:"Norveska",correct:true} , {txt:"Burma",correct:false} , {txt:"Svajcarska",correct:false} , {txt:"Austrija",correct:false}],
                    airStrike:false
                },
                {
                    question:"Ko je bio americki predsednik u toku prvog svetskog rata ?",
                    answers:[{txt:"Woodrow Wilson",correct:true} , {txt:"Theodore Roosevelt",correct:false} , {txt:"Herbert Hoover",correct:false} , {txt:"William McKinley",correct:false}],
                    airStrike:false
                },
                {
                    question:"Kada je Romul osnovao Rim ?",
                    answers:[{txt:"753 pre Hrista",correct:true} , {txt:"604 pre Hrista",correct:false} , {txt:"660 pre Hrista",correct:false} , {txt:"550 pre Hrista",correct:false}],
                    airStrike:false
                },
                {
                    question:"Po Grckoj mitologiji ko je bila prva zena na Zemlji ?",
                    answers:[{txt:"Pandora",correct:true} , {txt:"Aurora",correct:false} , {txt:"Jocasta",correct:false} , {txt:"Leda",correct:false}],
                    airStrike:false
                },
                {
                    question:"Univerzitet Oxford je osnovan ?",
                    answers:[{txt:"1163",correct:true} , {txt:"1139",correct:false} , {txt:"2000",correct:false} , {txt:"1800",correct:false}],
                    airStrike:true
                },
                {
                    question:"Koje su dimenzije terena za kosarku po Olimpijskom i svetskom standardu ?",
                    answers:[{txt:"28 m x 15 m",correct:true} , {txt:"26 m x 14 m",correct:false} , {txt:"27 m x 16 m",correct:false} , {txt:"28 m x 16 m",correct:false}],
                    airStrike:false
                }
            ];
        }else {
            this.level9 = [
                {
                    question:"First China War was fought between ?",
                    answers:[{txt:"China and Britain",correct:true} , {txt:"China and France",correct:false} , {txt:"China and Egypt",correct:false} , {txt:"China and Greek",correct:false}],
                    airStrike:true
                },
                {
                    question:"The first women to climb Mt. Everest was ?",
                    answers:[{txt:"Junko Taibei",correct:true} , {txt:"Karoline Mikkelson",correct:false} , {txt:"Valentina Tereshkova",correct:false} , {txt:"None",correct:false}],
                    airStrike:false
                },
                {
                    question:"The chemical name of Vitamin B is ?",
                    answers:[{txt:"thiamine",correct:true} , {txt:"nicotinamide",correct:false} , {txt:"ascorbic acid",correct:false} , {txt:"riboflavin",correct:false}],
                    airStrike:false
                },
                {
                    question:"To which country did the first Secretary-General of the UN belong ?",
                    answers:[{txt:"Norway",correct:true} , {txt:"Burma",correct:false} , {txt:"Sweden",correct:false} , {txt:"Austria",correct:false}],
                    airStrike:false
                },
                {
                    question:"Who was US president during World War I ?",
                    answers:[{txt:"Woodrow Wilson",correct:true} , {txt:"Theodore Roosevelt",correct:false} , {txt:"Herbert Hoover",correct:false} , {txt:"William McKinley",correct:false}],
                    airStrike:false
                },
                {
                    question:"When was the city Rome found by Romulus ?",
                    answers:[{txt:"753 BC",correct:true} , {txt:"604 BC",correct:false} , {txt:"660 BC",correct:false} , {txt:"550 BC",correct:false}],
                    airStrike:false
                },
                {
                    question:"According to Greek mythology who was the first woman on earth ?",
                    answers:[{txt:"Pandora",correct:true} , {txt:"Aurora",correct:false} , {txt:"Jocasta",correct:false} , {txt:"Leda",correct:false}],
                    airStrike:false
                },
                {
                    question:"Oxford university was founded in ?",
                    answers:[{txt:"1163 AD",correct:true} , {txt:"1139 AD",correct:false} , {txt:"215 BC",correct:false} , {txt:"55 BC",correct:false}],
                    airStrike:true
                },
                {
                    question:"For the Olympics and World Tournaments, the dimensions of basketball court are ?",
                    answers:[{txt:"28 m x 15 m",correct:true} , {txt:"26 m x 14 m",correct:false} , {txt:"27 m x 16 m",correct:false} , {txt:"28 m x 16 m",correct:false}],
                    airStrike:false
                }
            ];
        }
    }
}