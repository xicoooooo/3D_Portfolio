const JourneyContent = ({ journeyContent: journeyContent }) => {
  return (
    <div className="card-border rounded-xl p-10">
      <h1 className="font-semibold text-3xl">{journeyContent.title}</h1>
      <p>{journeyContent.date}</p>
      <p className="text-white-50">Key Activities</p>
      <ul className="list-disc ms-5 text-white-50">
        {journeyContent.keyActivities.map((keyActivities, index) => (
          <li key={index}>{keyActivities}</li>
        ))}
      </ul>
    </div>
  );
};

export default JourneyContent;
