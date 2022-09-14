import React from "react";
import ListItem from "./ListItem";

const About = () => {
  const arr = [
    { title: "Name", description: "Fateen (Japanese: ビーディ Beedy)." },
    { title: "Alias", description: "Mother of Pyrite Town" },
    {
      title: "What I do",
      description: "I give you fortunes to help you through challenges.",
    },
    { title: "Speciality", description: "scrying in a crystal ball." },
    {
      title: "Bulbapedia page",
      description: (
        <a
          rel="noreferrer"
          target="_blank"
          href="https://bulbapedia.bulbagarden.net/wiki/Fateen"
        >
          click here.
        </a>
      ),
    },
  ];

  return (
    <section id="about">
      <div>
        <h2>About Me</h2>
      </div>
      <h3>Greeting</h3>
      <p>
        I am Fateen. If ever a problem clouds your brow, you shall come to me.
        Mr. Duking, this town's leader, took my fortune-telling to heart. He
        searched high and low for the wild Pokémon I had foretold. His search
        has been rewarded. He appears to have found several locations where wild
        Pokémon appear.
      </p>
      <h3>Bio</h3>
      <article>
        <ul>
          {arr.map(({ title, description }, id) => (
            <ListItem key={id} title={title} description={description}></ListItem>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default About;
