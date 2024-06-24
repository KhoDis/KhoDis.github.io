export default function Badge(props: { skill: string }) {
  return <li className="badge badge-outline">
    {props.skill}
  </li>;
}