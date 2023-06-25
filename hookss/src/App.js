
import './App.css';
import AddFilms from './Components/AddFilms';
import { useState } from 'react';
import FilmCards from './Components/FilmCards';
import ListFilms from './Components/ListFilms';
import Search from './Components/Search';
import { Button } from "bootstrap";
import Rate from './Components/Rate';

function App() 
{const [Films, setFilms] = useState([
  {
    
    
    title: "kingdom of heaven",
    rate: 5,
    date: "2005",
    imgUrl:"https://resizing.flixster.com/Xe5VDhfnmDc_UHDYT_d_1QwIDZA=/206x305/v2/https://flxt.tmsimg.com/assets/p35756_p_v8_ap.jpg",
    description:
      "Quelque part dans le royaume de France en 1186, Balian, jeune forgeron accablé par l'existence, apprend qu'il est le fils de Godefroy d'Ibelin. Mais cette noble lignée le contraint de se rendre en Terre sainte pour défendre Jérusalem reconquise. Une fois en Palestine, il s'initie à l'art de la guerre et aux intrigues politiques, grâce à l'aide de Tiberias, le puissant conseiller militaire du roi.",
    

  },
  {
    
    title: "braveheart",
    rate: 5,
    date: "1995",
    imgUrl:
      "https://fr.web.img4.acsta.net/medias/nmedia/18/73/51/89/19209164.jpg",
    description:
      "Au XIIIe siècle, le jeune William Wallace revient en Écosse après plusieurs années d'exil. Il épouse en secret sa bien-aimée Murron, pour éviter de se plier au droit de cuissage imposé par le roi d'Angleterre, Edward 1er. Leur ruse est cependant découverte et Murron est exécutée.",
   
  },
  {
   
    title: "Pearl Harbor",
    rate: 4,
    date: "2001",
    imgUrl:
    "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/121/xp2df0rcgycm2pjssv4ebvrvhe9-849.jpg",
    description:
    "Amis depuis la plus tendre enfance, Rafe McCawley et Danny Walker sont deux brillants pilotes de l'armée de l'air américaine. La Seconde Guerre mondiale a commencé, mais les États-Unis n'ont pas encore engagé les hostilités. Rafe succombe bientôt au charme d'Evelyn Johnson, une jeune infirmière. C'est le coup de foudre, mais ce dernier part combattre aux côtés des Britanniques. Evelyn et Danny sont, quant à eux, transférés sur la base américaine de Pearl Harbor. ",
   
   
  },
  {
   
    title: "ocean's thirteen",
    rate: 4,
    date: "2007",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Oceans13Poster1.jpg",
    description:
      "Douce vengeance sous le ciel de Las Vegas. Danny Ocean et sa bande ne pouvaient avoir qu'un seul motif pour tenter leur braquage le plus audiacieux à ce jour : sauver un des leurs. Mais la chance ne suffit pas toujours lorsque l'on veut faire sauter The Bank. Le cruel propriétaire de casino Willy Bank ne s'attendait pas à une telle riposte lorsqu'il trahit en envoya l'ami et mentor de Danny, Reuben Tishkoff.",
   
   
  },
  {
   
    title: "game of thrones",
    rate: 3,
    date: "2011",
    imgUrl:
      "https://fr.web.img3.acsta.net/c_310_420/pictures/23/01/03/14/13/0717778.jpg",
    description:
      "Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.",
   
   
  },
  {
    
    title: "Vikings",
    rate: 1,
    date: "2013",
    imgUrl:
      "https://flxt.tmsimg.com/assets/p9155926_b_v10_au.jpg",
    description:
      "Scandinavie, à la fin du 8ème siècle. Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer.",
   

  },
  {
    
    title: "troy",
    rate: 5,
    date: "2004",
    imgUrl:
      "https://fr.web.img5.acsta.net/medias/nmedia/18/35/23/55/18379045.jpg",
    description:
      "Dans la Grèce antique, l'enlèvement d'Hélène, reine de Sparte, par Paris, prince de Troie, est une insulte que le roi Ménélas ne peut supporter. L'honneur familial étant en jeu, Agamemnon, frère de Ménélas et puissant roi de Mycènes, réunit toutes les armées grecques afin de faire sortir Hélène de Troie. L'issue de la guerre de Troie dépendra notamment d'un homme, Achille. Arrogant, rebelle, et réputé invicible, celui-ci n'a d'attache pour rien ni personne si ce n'est sa propre gloire.",
   

  },
]);
const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [showRate, setShowRate] = useState(false);
  const handleShowRate = () => {
    setSearchRate(0);
    setShowRate(!showRate);
  };

  //******** Search States*********/
  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(5);
  const amineadd = (Film) => {
    setFilms([...Films, Film]);
  };

  return (
    <>


      <div className="App">
        <button style={{ margin: "20px" }} onClick={handleShow}>
          {show ? "Close" : "Add New Movie"}
        </button>
        {show && <AddFilms amineadd={amineadd} />}

        <Search setSearchName={setSearchName} setSearchRate={setSearchRate} />
        <button style={{ margin: "20px" }} onClick={handleShowRate}>
          {show ? "Clear" : "Search by Rate"}
        </button>
        {showRate && (
          <Rate searchRate={searchRate} setSearchRate={setSearchRate} />
        )}
 <ListFilms
          Films={Films}
          searchName={searchName}
          searchRate={searchRate}
        />
      </div>
    </>
  );
}

export default App;
