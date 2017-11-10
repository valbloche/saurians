import {Dinosaure} from '../dinosaure';

export enum REGIMES {
    CARNIVORE = 0,
    HERBIVORE = 1,
    PISCIVORE = 2
}

export enum EPOQUES {
    TRIAS = 0,
    CRETACE = 1,
    JURASSIQUE = 2
}

export const DINOS: Dinosaure[]= [
    {id : 100, name: 'pteranodon', regime: REGIMES.PISCIVORE, epoque: EPOQUES.TRIAS, description:"Le ptéranodon était un des plus grands ptérosaures, avec une envergure pouvant atteindre 7,5 m. Il était dépourvu de dents, avait la queue atrophiée et des os creux, très légers et souples, mais renforcés par un réseau interne de longerons.", price: 800000},
    {id : 101, name: 'carnotaure', regime: REGIMES.CARNIVORE, epoque: EPOQUES.TRIAS, description:"Carnotaurus était un théropode de taille moyenne, d'environ 7,5 m à 9,0 m de long, 3,5 m de haut2 et pesait entre 1000 et 1 600 kg", price: 1200000},
    {id : 110, name: 'stegosaure', regime: REGIMES.HERBIVORE, epoque: EPOQUES.JURASSIQUE, description:"Le stégosaure pouvait mesurer jusqu'à 9 mètres de long, 4 mètres de haut et pesait jusqu'à 3 tonnes. Ce quadrupède est facilement reconnaissable, grâce à ses deux rangées de grandes plaques osseuses sur l'épine dorsale et sa queue présentant deux paires de pointes défensives mesurant 60 centimètres de long. Bien que le stégosaure soit un gros animal.", price: 750000},
    {id : 111, name: 'brachiosaure', regime: REGIMES.HERBIVORE, epoque: EPOQUES.CRETACE, description: "Il mesurait environ 26 mètres de long, 12 mètres de haut et pesait entre 32 et 50 tonnes. Les membres de cette famille ont vécu dans ce qui était l'Amérique du Nord (États-Unis), en Europe (Portugal) et en Afrique (Algérie, Tanzanie).", price:1350000},
    {id : 1000, name: 'velociraptor', regime: REGIMES.CARNIVORE, epoque: EPOQUES.JURASSIQUE, description: "Le vélociraptor mesurait, de la tête à la queue, environ 1,5 à 2 m pour une hauteur de 75 cm. Son poids avoisinait 15 à 20 kilogrammes. es membres postérieurs sont pourvus d'une griffe rétractile, capable de se positionner presque à la verticale pour poignarder la peau de sa proie. Sa vitesse de course a été estimée à environ 60 km/h.", price:1870000},
    {id : 1001, name: 'trex', regime: REGIMES.CARNIVORE, epoque: EPOQUES.JURASSIQUE, description: "Il est le plus grand Tyrannosauridae connu et l'un des plus grands carnivores terrestres ayant existé sur la planète, avec une longueur de plus de 13,2 mètres3,4, 4 mètres à hauteur de hanches5 et un poids pouvant atteindre 8 tonnes", price:5400000},
    {id : 1011, name: 'diplodocus', regime: REGIMES.HERBIVORE, epoque: EPOQUES.CRETACE, description: "Jusqu'à 54 m de long, ce qui en faisait le plus long des dinosaures connus, une fourchette de 10 à 16 tonnes  ", price:3700000}
]