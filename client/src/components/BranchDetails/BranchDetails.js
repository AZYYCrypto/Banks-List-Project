import "./BranchDetails.css";

export const BranchDetails = ({ location }) => {
  const {
    Name,
    Identification,
    Accessibility,
    Availability,
    ContactInfo,
    CustomerSegment,
    Note,
    PostalAddress,
    ServiceAndFacility,
    SortCode,
    Type,
  } = location.state.el;

  console.log(PostalAddress);
  return (
    <div className="Branch_Details">
      <div className="Name Box">
        <h3>Name</h3>
        <p>{Name}</p>
      </div>
      <div className="Id Box">
        <h3>Identification</h3>
        <p>{Identification}</p>
      </div>
      <div className="Accessibility Box">
        <h3>Accessibility</h3>
        {Accessibility.map((el, key) => {
          return <p key={key}>{el}</p>;
        })}
      </div>
      <div className="Availability Box">
        <h3>Availability</h3>
        {Availability.StandardAvailability.Day.map((x, key) => {
          return (
            <div key={key}>
              <h5>{x.Name}</h5> <p>{x.OpeningHours[0].OpeningTime}</p>{" "}
              <p>{x.OpeningHours[0].ClosingTime}</p>
            </div>
          );
        })}
      </div>
      <div className="ContactInfo Box">
        <h3>ContactInfo</h3>

        {ContactInfo.map((x, key) => {
          return (
            <div key={key}>
              <p>{`${
                x.ContactDescription !== undefined
                  ? x.ContactDescription + " - "
                  : ""
              }  ${x.ContactType}`}</p>
              <p>{x.ContactContent}</p>
            </div>
          );
        })}
      </div>

      <div className="CustomerSegment Box">
        <h3>Customer Segment</h3>
        {CustomerSegment.map((x, key) => (
          <p key={key}>{x}</p>
        ))}
      </div>
      <div className="PostalAdress Box">
        <h3>Postal Adress</h3>
        {`BuildingNumber: ${PostalAddress.BuildingNumber}`}
        <p>{`Country: ${PostalAddress.Country}`}</p>
        {/* <h5>GeoLocation</h5>
        <p>{`Latitude: ${PostalAddress.GeoLocation.GeographicCoordinates.Latitude}`}</p>
        <p>{`Longitude: ${PostalAddress.GeoLocation.GeographicCoordinates.Longitude}`}</p> */}
        <p>{`Post Code: ${PostalAddress.PostCode}`}</p>
        <p>{`Street Name: ${PostalAddress.StreetName}`}</p>
        <p>{`Town Name: ${PostalAddress.TownName}`}</p>
      </div>

      <div className="ServiceAndFacility Box">
        <h3>Service And Facility</h3>
        {ServiceAndFacility.map((x, key) => {
          return <p key={key}>{x}</p>;
        })}
      </div>
      {/* <div className="SortCod Box">
        <h3>Sort Code</h3>

        <p>{SortCode[0]}</p>
      </div> */}
      <div className="Type Box">
        <h3>Type</h3>
        <p>{Type}</p>
      </div>
    </div>
  );
};
