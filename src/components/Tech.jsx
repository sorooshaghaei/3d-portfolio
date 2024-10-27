/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

/* 
  Tech Component:
  - This component maps over the `technologies` array, which contains objects with `name` and `icon` properties.
  - For each technology, it renders a `BallCanvas` component, passing `technology.icon` as the `icon` prop.
  - `BallCanvas` then passes this `icon` prop to the `Ball` component as `imgUrl`.
  - In `Ball`, `imgUrl` is loaded as a texture using `useTexture` and applied to the ball’s surface through the `Decal` component.
  - This flow allows each technology icon to be displayed as a decal on its own floating 3D ball.
*/

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
