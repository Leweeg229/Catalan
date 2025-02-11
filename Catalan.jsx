import React, { useState, useEffect, useRef } from "react";

const verbs = [
  {
    "infinitive": "ser",
    "conjugations": {
      "indicative": { "jo": "soc", "tu": "ets", "ell/ella": "és", "nosaltres": "som", "vosaltres": "sou", "ells/elles": "són" },
      "subjunctive": { "jo": "sigui", "tu": "siguis", "ell/ella": "sigui", "nosaltres": "siguem", "vosaltres": "sigueu", "ells/elles": "siguin" }
    }
  },
  {
    "infinitive": "tenir",
    "conjugations": {
      "indicative": { "jo": "tinc", "tu": "tens", "ell/ella": "té", "nosaltres": "tenim", "vosaltres": "teniu", "ells/elles": "tenen" },
      "subjunctive": { "jo": "tingui", "tu": "tinguis", "ell/ella": "tingui", "nosaltres": "tinguem", "vosaltres": "tingueu", "ells/elles": "tinguin" }
    }
  },
  {
    "infinitive": "fer",
    "conjugations": {
      "indicative": { "jo": "faig", "tu": "fas", "ell/ella": "fa", "nosaltres": "fem", "vosaltres": "feu", "ells/elles": "fan" },
      "subjunctive": { "jo": "faci", "tu": "facis", "ell/ella": "faci", "nosaltres": "fem", "vosaltres": "feu", "ells/elles": "facin" }
    }
  },
  {
    "infinitive": "poder",
    "conjugations": {
      "indicative": { "jo": "puc", "tu": "pots", "ell/ella": "pot", "nosaltres": "podem", "vosaltres": "podeu", "ells/elles": "poden" },
      "subjunctive": { "jo": "pugui", "tu": "puguis", "ell/ella": "pugui", "nosaltres": "puguem", "vosaltres": "pugueu", "ells/elles": "puguin" }
    }
  },
  {
    "infinitive": "anar",
    "conjugations": {
      "indicative": { "jo": "vaig", "tu": "vas", "ell/ella": "va", "nosaltres": "anem", "vosaltres": "aneu", "ells/elles": "van" },
      "subjunctive": { "jo": "vagi", "tu": "vagis", "ell/ella": "vagi", "nosaltres": "anem", "vosaltres": "aneu", "ells/elles": "vagin" }
    }
  },
  {
    "infinitive": "veure",
    "conjugations": {
      "indicative": { "jo": "veig", "tu": "veus", "ell/ella": "veu", "nosaltres": "veiem", "vosaltres": "veieu", "ells/elles": "veuen" },
      "subjunctive": { "jo": "vegi", "tu": "vegis", "ell/ella": "vegi", "nosaltres": "vegem", "vosaltres": "vegeu", "ells/elles": "vegin" }
    }
  },
  {
    "infinitive": "voler",
    "conjugations": {
      "indicative": { "jo": "vull", "tu": "vols", "ell/ella": "vol", "nosaltres": "volem", "vosaltres": "voleu", "ells/elles": "volen" },
      "subjunctive": { "jo": "vulgui", "tu": "vulguis", "ell/ella": "vulgui", "nosaltres": "vulguem", "vosaltres": "vulgueu", "ells/elles": "vulguin" }
    }
  },
  {
    "infinitive": "dir",
    "conjugations": {
      "indicative": { "jo": "dic", "tu": "dius", "ell/ella": "diu", "nosaltres": "diem", "vosaltres": "dieu", "ells/elles": "diuen" },
      "subjunctive": { "jo": "digui", "tu": "diguis", "ell/ella": "digui", "nosaltres": "diguem", "vosaltres": "digueu", "ells/elles": "diguin" }
    }
  },
  {
    "infinitive": "haver",
    "conjugations": {
      "indicative": { "jo": "he", "tu": "has", "ell/ella": "ha", "nosaltres": "hem", "vosaltres": "heu", "ells/elles": "han" },
      "subjunctive": { "jo": "hagi", "tu": "hagis", "ell/ella": "hagi", "nosaltres": "hàgim", "vosaltres": "hàgiu", "ells/elles": "hagin" }
    }
  },
  {
    "infinitive": "saber",
    "conjugations": {
      "indicative": { "jo": "sé", "tu": "saps", "ell/ella": "sap", "nosaltres": "sabem", "vosaltres": "sabeu", "ells/elles": "saben" },
      "subjunctive": { "jo": "sàpiga", "tu": "sàpigues", "ell/ella": "sàpiga", "nosaltres": "sàpiguem", "vosaltres": "sàpigueu", "ells/elles": "sàpiguen" }
    }
  },
  {
    "infinitive": "prendre",
    "conjugations": {
      "indicative": { "jo": "prenc", "tu": "prens", "ell/ella": "pren", "nosaltres": "prenem", "vosaltres": "preneu", "ells/elles": "prenen" },
      "subjunctive": { "jo": "prengui", "tu": "prenguis", "ell/ella": "prengui", "nosaltres": "prenguem", "vosaltres": "prengueu", "ells/elles": "prenguin" }
    }
  },
  {
    "infinitive": "portar",
    "conjugations": {
      "indicative": { "jo": "porto", "tu": "portes", "ell/ella": "porta", "nosaltres": "portem", "vosaltres": "porteu", "ells/elles": "porten" },
      "subjunctive": { "jo": "porti", "tu": "portis", "ell/ella": "porti", "nosaltres": "portem", "vosaltres": "porteu", "ells/elles": "portin" }
    }
  },
  {
    "infinitive": "donar",
    "conjugations": {
      "indicative": { "jo": "dono", "tu": "dones", "ell/ella": "dona", "nosaltres": "donem", "vosaltres": "doneu", "ells/elles": "donen" },
      "subjunctive": { "jo": "doni", "tu": "donis", "ell/ella": "doni", "nosaltres": "donem", "vosaltres": "doneu", "ells/elles": "donin" }
    }
  },
  {
    "infinitive": "trobar",
    "conjugations": {
      "indicative": { "jo": "trobo", "tu": "trobes", "ell/ella": "troba", "nosaltres": "trobem", "vosaltres": "trobeu", "ells/elles": "troben" },
      "subjunctive": { "jo": "trobi", "tu": "trobis", "ell/ella": "trobi", "nosaltres": "trobem", "vosaltres": "trobeu", "ells/elles": "trobin" }
    }
  },
  {
    "infinitive": "arribar",
    "conjugations": {
      "indicative": { "jo": "arribo", "tu": "arribes", "ell/ella": "arriba", "nosaltres": "arribem", "vosaltres": "arribeu", "ells/elles": "arriben" },
      "subjunctive": { "jo": "arribi", "tu": "arribis", "ell/ella": "arribi", "nosaltres": "arribem", "vosaltres": "arribeu", "ells/elles": "arribin" }
    }
  },
  {
    "infinitive": "mirar",
    "conjugations": {
      "indicative": { "jo": "miro", "tu": "mires", "ell/ella": "mira", "nosaltres": "mirem", "vosaltres": "mireu", "ells/elles": "miren" },
      "subjunctive": { "jo": "miri", "tu": "miris", "ell/ella": "miri", "nosaltres": "mirem", "vosaltres": "mireu", "ells/elles": "mirin" }
    }
  },
  {
    "infinitive": "parlar",
    "conjugations": {
      "indicative": { "jo": "parlo", "tu": "parles", "ell/ella": "parla", "nosaltres": "parlem", "vosaltres": "parleu", "ells/elles": "parlen" },
      "subjunctive": { "jo": "parli", "tu": "parlis", "ell/ella": "parli", "nosaltres": "parlem", "vosaltres": "parleu", "ells/elles": "parlin" }
    }
  },
  {
    "infinitive": "menjar",
    "conjugations": {
      "indicative": { "jo": "menjo", "tu": "menges", "ell/ella": "menja", "nosaltres": "mengem", "vosaltres": "mengeu", "ells/elles": "mengen" },
      "subjunctive": { "jo": "mengui", "tu": "menguis", "ell/ella": "mengui", "nosaltres": "mengem", "vosaltres": "mengeu", "ells/elles": "menguin" }
    }
  },
  {
    "infinitive": "escriure",
    "conjugations": {
      "indicative": { "jo": "escric", "tu": "escrius", "ell/ella": "escriu", "nosaltres": "escrivim", "vosaltres": "escriviu", "ells/elles": "escriuen" },
      "subjunctive": { "jo": "escrigui", "tu": "escriguis", "ell/ella": "escrigui", "nosaltres": "escriguem", "vosaltres": "escrigueu", "ells/elles": "escriguin" }
    }
  },
  {
    "infinitive": "treballar",
    "conjugations": {
      "indicative": { "jo": "treballo", "tu": "treballes", "ell/ella": "treballa", "nosaltres": "treballem", "vosaltres": "treballeu", "ells/elles": "treballen" },
      "subjunctive": { "jo": "treballi", "tu": "treballis", "ell/ella": "treballi", "nosaltres": "treballem", "vosaltres": "treballeu", "ells/elles": "treballin" }
    }
  }
];

const pronouns = ["jo", "tu", "ell/ella", "nosaltres", "vosaltres", "ells/elles"];
const accents = ["à", "è", "é", "í", "ò", "ó", "ú"];

export default function App() {
  const [tense, setTense] = useState(null);

  if (!tense) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 p-4">
  <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Selecciona un temps verbal</h1>
  <button
    className="bg-green-500 text-white px-6 py-3 m-2 rounded-lg shadow-lg transform transition duration-300 hover:bg-green-600 hover:scale-105 active:scale-95"
    onClick={() => setTense("indicative")}
  >
    Indicatiu
  </button>
  <button
    className="bg-red-500 text-white px-6 py-3 m-2 rounded-lg shadow-lg transform transition duration-300 hover:bg-red-600 hover:scale-105 active:scale-95"
    onClick={() => setTense("subjunctive")}
  >
    Subjuntiu
  </button>
</div>
    );
  }

  return <ConjugationPractice tense={tense} />;
}

function ConjugationPractice({ tense }) {
  const [currentVerb, setCurrentVerb] = useState(getRandomVerb);
  const [currentPronoun, setCurrentPronoun] = useState(getRandomPronoun);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [attempted, setAttempted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Enter" && document.activeElement === inputRef.current) {
        checkAnswer();
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [userInput]);

  function getRandomVerb() {
    return verbs[Math.floor(Math.random() * verbs.length)];
  }

  function getRandomPronoun() {
    return pronouns[Math.floor(Math.random() * pronouns.length)];
  }

  function checkAnswer() {
    const correctAnswer = currentVerb.conjugations[tense][currentPronoun];
    if (!attempted) {
      setTotalCount(totalCount + 1);
    }
    if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      if (!attempted) {
        setCorrectCount(correctCount + 1);
      }
      setFeedback("Correcte!");
      setTimeout(() => {
        setCurrentVerb(getRandomVerb());
        setCurrentPronoun(getRandomPronoun());
        setUserInput("");
        setFeedback("");
        setAttempted(false);
        setAttempts(0);
        inputRef.current.focus();
      }, 1000);
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 1) {
        setFeedback(`Incorrecte. La resposta correcta és: ${correctAnswer}`);
      } else {
        setFeedback("Incorrecte, torna-ho a provar.");
      }
      setAttempted(true);
      inputRef.current.focus();
    }
  }

  function insertAccent(accent) {
    setUserInput(userInput + accent);
    inputRef.current.focus();
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-yellow-100 min-h-screen">
      <div className="absolute top-4 right-4 text-lg font-bold">
        Puntuació: {correctCount} / {totalCount} ({totalCount > 0 ? ((correctCount / totalCount) * 100).toFixed(1) : 0}%)
      </div>
      <h1 className="text-xl font-bold">Pràctica de conjugació catalana ({tense})</h1>
      <p className="text-lg font-semibold">{currentPronoun} {currentVerb.infinitive}</p>
      <input ref={inputRef} className="border p-2 rounded w-64" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Escriu la conjugació" autoFocus />
      <div className="flex gap-2 mt-2">
        {accents.map((accent) => (
          <button key={accent} className="bg-gray-300 p-1 rounded" onClick={() => insertAccent(accent)}>{accent}</button>
        ))}
      </div>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={checkAnswer}>Comprovar</button>
      {feedback && <p className="text-lg">{feedback}</p>}
    </div>
  );
}
