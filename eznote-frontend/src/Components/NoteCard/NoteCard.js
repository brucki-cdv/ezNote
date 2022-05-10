import CardBody from "../Card/CardBody";
import CardTitle from "../Card/CardTitle";
import CardDetails from "../Card/CardDetails";
import CardDescription from "../Card/CardDescription";
import CardTag from "../Card/CardTag";

export default function NoteCard({
  title,
  status,
  modifiedAt,
  tags,
  description,
  onClick
}) {
  function diffBetweenTwoDates(firstDate, secondDate) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const fDate = new Date(firstDate);
    const sDate = new Date(secondDate);

    const diffDays = Math.round(Math.abs((fDate - sDate) / oneDay));
    if (diffDays == 0) {
      return `Modified Today`;
    } else {
      return `Modified ${diffDays} days ago`;
    }
  }


  return (
    <CardBody onClick={onClick}>
      <CardTitle status={status}>{title}</CardTitle>
      <CardDetails>
        {diffBetweenTwoDates(new Date(), new Date(modifiedAt))}
        {tags
          ? tags.map((tag) => {
              return <CardTag title={tag.name} color={tag.hexColor} />;
            })
          : ""}
      </CardDetails>
      <CardDescription>huihiuhiuh</CardDescription>
    </CardBody>
  );
}
