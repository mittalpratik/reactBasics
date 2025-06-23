import { useState } from 'react';
import Header from './components/Header/Header';
import { EXAMPLES } from './data';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Pleaes select a topic!</p>

  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
