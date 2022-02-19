import './Clock.css';
import {useState} from "react";

const rounds = [
  {'name': 'Round 1', 'bigBlind': 25,  'smallBlind': 50,  'ante': 0,   'duration': 20},
  {'name': 'Round 2', 'bigBlind': 50,  'smallBlind': 100, 'ante': 0,   'duration': 20},
  {'name': 'Round 3', 'bigBlind': 100, 'smallBlind': 200, 'ante': 0,   'duration': 20},
  {'name': 'Break',   'bigBlind': 0,   'smallBlind': 0,   'ante': 0,   'duration': 5},
  {'name': 'Round 4', 'bigBlind': 100, 'smallBlind': 200, 'ante': 100, 'duration': 20},
  {'name': 'Round 5', 'bigBlind': 150, 'smallBlind': 300, 'ante': 150, 'duration': 20}
];

const formatTimeRemaining = (secondsRemaining) => {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  return {'minutes': minutes, 'seconds': seconds};
}

const Clock = () => {
  const round = rounds[0];
  const nextRound = rounds[1];
  const [secondsRemaining, setSecondsRemaining] = useState(round.duration * 60);
  const timeRemaining = formatTimeRemaining(secondsRemaining);
  return (
    <div className="Clock">
      <div>{round.name} {timeRemaining.minutes}:{timeRemaining.seconds} {round.bigBlind} {round.smallBlind} {round.ante}</div>
      <div>Controls</div>
      <div>{nextRound.name} {nextRound.duration} {nextRound.bigBlind} {nextRound.smallBlind} {nextRound.ante}</div>
    </div>
  )
}

export default Clock;