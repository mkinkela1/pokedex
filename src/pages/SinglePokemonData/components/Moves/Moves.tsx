import React from "react";

const Moves = (props: any) => {

  const { data } = props;

  return (
    <div className="s-pokemon-details__content--data--moves">
      {
        data.moves ?
          data.moves
            .map((move: any, idx: number) => (
                <div
                  className={`s-pokemon-details__content--data--moves--badge u-background u-background--${move.type ? move.type.name : ''}`}
                  key={idx}>
                  {
                    !move.name ? '' :
                      move.name
                        .toLowerCase()
                        .split('-')
                        .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
                  }
                </div>
              )
            )
          : ''
      }
    </div>
  )
}

export default Moves;