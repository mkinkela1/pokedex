import React from "react";

const BaseStats = (props: any) => {

  const { data } = props;

  return (
    <div className="s-pokemon-details__content--data--about">
      {
        data.stats.map((stat: any, idx: number) => (
          <div className="s-pokemon-details__content--data--about___row" key={idx}>
            <div className="s-pokemon-details__content--data--about___row---key">{stat.stat.name.split('-').join(' ')}</div>
            <div className="s-pokemon-details__content--data--about___row---value">{stat.base_stat}</div>
          </div>
        ))
      }
    </div>
  )
}

export default BaseStats;