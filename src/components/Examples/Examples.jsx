import { EXAMPLES } from "../../data";
import TabButton from "../TabButton";
import { useState } from "react";
import Section from "../Section";
import Tabs from "../Tabs";

export default function Examples() {

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

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }

    return (
        <Section title="Examples" id="examples">
          <Tabs 
            buttonsContainer="menu"
            buttons={
            <>
                <TabButton onClick={() => handleClick('components')} isSelected={selectedTopic === 'components'}>Component</TabButton>
                <TabButton onClick={() => handleClick('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onClick={() => handleClick('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onClick={() => handleClick('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
            </>
          }
          >
          {tabContent}
          </Tabs>
        </Section>
        );
}