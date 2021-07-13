import React, { useState } from "react";
import MyContext, { MyConsumer } from "../MyContext";

import React from "react";

export default function MonsterForm() {
  const [description, setdescription] = useState("");

  return (
    <MyConsumer>
      {(context) => {
        const handleChange = (event) => {
          setdescription(event.target.value);
        };

        const handleSubmit = (event) => {
          event.preventDegault();
          const monster = { description: this.state.description };
          MyContext.addMonster(monster);
        };
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    value={description}
                    // will chagne
                    onChange={handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
      }}
    </MyConsumer>
  );
}
