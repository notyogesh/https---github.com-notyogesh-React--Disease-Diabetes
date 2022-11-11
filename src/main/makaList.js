export default function makeList(props) {
  return props.map((li, i) => <li key={i}>{li} </li>);
}
