import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept)=><CoreConcept {...coreConcept} />)}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
    );
}