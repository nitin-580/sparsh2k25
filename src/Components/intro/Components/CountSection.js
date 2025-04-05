import React from "react";
import styles from "./styles";
import Counter from "./UI/counter";
import Divider from "./UI/divider";

export default function CountSection() {
  const playDuration = 3;
  return (
    <div style={styles.count_section}>
      <Counter
        start={0}
        end={3000}
        duration={playDuration}
        style={styles.counter}
        title="Participants"
      />
      <Divider />
      <Counter
        start={0}
        end={30}
        duration={playDuration}
        style={styles.counter}
        title="Sponsors"
      />
      <Divider />
      <Counter
        start={0}
        end={100}
        duration={playDuration}
        style={styles.counter}
        title="Events"
      />
    </div>
  );
}
