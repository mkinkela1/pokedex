import React, {useContext, useEffect, useState} from "react";
import {KantoPokemonContext} from "../../contexts/KantoPokemonContext";

const Quiz = () => {

  const { kantoPokemonList } = useContext(KantoPokemonContext);
  const [randomPokemon, setRandomPokemon] = useState<number> (Math.floor(Math.random() * 151));
  const [possibleAnswers, setPossibleAnswers] = useState<any>([]);

  useEffect(() => {

    if(kantoPokemonList && kantoPokemonList.length === 151) {

      let answers = [{name: kantoPokemonList[randomPokemon].name, correct: true}];

      let cnt = 3;
      while(cnt) {

        const randomNumber: number = Math.floor(Math.random() * 151);

        if(randomNumber !== randomPokemon) {
          answers.push({name: kantoPokemonList[randomNumber].name, correct: false});
          --cnt;
        }
      }

      setPossibleAnswers(answers.sort(() => Math.random() - 0.5));
    }
  }, [randomPokemon, kantoPokemonList]);

  const handleAnswer = (correct: boolean) => {
    if(correct)
      alert('Correct answer!');
    else
      alert('Incorrect answer!');

    setRandomPokemon(Math.floor(Math.random() * 151));
  };

  if(kantoPokemonList && kantoPokemonList.length === 151)
    return (
      <section className="s-pokemon-quiz">
        <img className="s-pokemon-quiz__image" src={kantoPokemonList[randomPokemon].sprites?.other['official-artwork'].front_default} alt={`${kantoPokemonList[randomPokemon].name} official artwork`}/>
        <div className="s-pokemon-quiz__answers">
          <ul>
            {
              possibleAnswers.map((answer: any, idx: number) => (<li key={idx} onClick={() => handleAnswer(answer.correct)}>{answer.name}</li>))
            }
          </ul>
        </div>
      </section>
    );

  return '';
}

export default Quiz;