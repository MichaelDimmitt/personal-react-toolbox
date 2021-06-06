import React, { useState, memo } from "react" //, { useState } from "react";
import { times } from "lodash";

const BigListPureComponent = memo(({ style }) => {
  console.log(
    "BigListPureComponent Re-Render! - We don't want this to happen too often."
  );
  return (
    <div style={style}>
      <h2>BigListPureComponent</h2>
      <div>
        {times(3000).map((n) => (
          <div key={n}>Element #{n}</div>
        ))}
      </div>
    </div>
  );
});

BigListPureComponent.displayName = "BigListPureComponent";

const WhyDidYouRenderExample = () => {
  const [count, setCount] = useState(0);

  /* use the hook instead of the const to prevent
   ** "BigListPureComponent" from re-rendering wit this component */

  //const bigListStyle = useMemo(() => ({ width: "100%" }), []);
  const bigListStyle = { width: "100%" };

  return (
    <div className="Main">
      <h1>To see "why did you render in action"</h1>
      <ol>
        <li>use the following start command. <code>npm start --env="debug"</code></li>
        <li>chrome dev tools {'->'} open console</li>
        <li><strong>it fails</strong>, when using regular <code>npm start</code> command. - check for yourself!</li>
      </ol>
      <h1>Big List (Main Demo)</h1>
      <p>
        Open the console and notice how the heavy list re-renders on every click
        on "Increase!" even though it\'s props are the same.
      </p>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>
          "Increase!" Count: {count}
        </button>
      </div>
      <BigListPureComponent style={bigListStyle} />
    </div>
  );
};
export default WhyDidYouRenderExample