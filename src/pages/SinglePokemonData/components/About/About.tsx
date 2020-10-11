import React from "react";

const About = (props: any) => {

  const { data } = props;

  return (
    <div className="s-pokemon-details__content--data--about">
      <div className="s-pokemon-details__content--data--about___row">
        <div className="s-pokemon-details__content--data--about___row---key">ID: </div>
        <div className="s-pokemon-details__content--data--about___row---value">#{String(data.id).padStart(3, '0')}</div>
      </div>
      <div className="s-pokemon-details__content--data--about___row">
        <div className="s-pokemon-details__content--data--about___row---key">Weight: </div>
        <div className="s-pokemon-details__content--data--about___row---value">{data.weight/10} kg</div>
      </div>
      <div className="s-pokemon-details__content--data--about___row">
        <div className="s-pokemon-details__content--data--about___row---key">Height: </div>
        <div className="s-pokemon-details__content--data--about___row---value">{data.height/10} m</div>
      </div>
      <div className="s-pokemon-details__content--data--about___row">
        <div className="s-pokemon-details__content--data--about___row---key">Abilities: </div>
        <div className="s-pokemon-details__content--data--about___row---value">
          {
            data.abilities ?
              data.abilities
                .map((ability: any) =>
                  ability.ability.name
                    .toLowerCase()
                    .split('-')
                    .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                )
                .join(', ')
            : ''
          }
        </div>
      </div>
      <div className="s-pokemon-details__content--data--about___row">
        <div className="s-pokemon-details__content--data--about___row---key">Game indices: </div>
        <div className="s-pokemon-details__content--data--about___row---value">
          {
            data.game_indices ?
              data.game_indices
                .map((gameIdx: any) =>
                  gameIdx.version.name
                    .toLowerCase()
                    .split('-')
                    .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                )
                .join(', ')
              : ''
          }
        </div>
      </div>
    </div>
  )
}

export default About;