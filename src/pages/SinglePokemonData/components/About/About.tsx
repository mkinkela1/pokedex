import React from "react";

const About = (props: any) => {

  const { data } = props;
  console.log(data);

  return (
    <>
      <div>Weight: {data.weight/10} kg</div>
      <div>Height: {data.height/10} m</div>
      <div>Abilities: {data.abilities ? data.abilities.map((ability: any) => ability.ability.name).join(', ') : ''} m</div>
    </>
  )
}

export default About;